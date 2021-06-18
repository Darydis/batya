var cart = {}; //корзина
var goods;
var napitki;

$('document').ready(function(){
 
  loadGoods();
  loadNapitki();
  //showMiniCart();
  checkCart();
  showCart();
});



function loadGoods() {
  $.getJSON('goods.json', function(data) {
    //console.log(data);
    let out = '';
    for (let key in data){
      
      out += '<div class="card">';
      out += '<div class="img_wrp">';
      out += '<img class="shaurmicon" src="'+data[key].icon+'">';
      out += '<img class="photo" src="'+data[key].image+'">';
      out += '</div>';
      out += '<div class="card_info">';
      out += '<div class="card_title">';
      out += '<h4>'+data[key]['name']+'</h4>';
      out += '<p>'+data[key]['taste']+'</p>';
      out += '</div>';
      out += '<div class="description">';
      out += '<p>'+data[key]['description']+'</p>';
      out += '</div>';
      out += '</div>';
      out += '<div class="price_wrp">';
      out += '<p class="price">'+data[key]['cost']+' ₽</p>';
      out += '<button class="add-to-cart" data-art="'+key+'">Купить</button>';
      out += '</div>';
      out += '</div>';

    }
    $('#goods').html(out);
    //$('button.add-to-cart').on('click', addToCart);
    
  });
}
//console.log(goods);

function loadNapitki() {
  $.getJSON('napitki.json', function(data) {
    //console.log(data);
    let out = '';
    for (let key in data){
      
      out += '<div class="card">';
      out += '<div class="img_wrp">';
      out += '<div class="drinks" style="background-image: url('+data[key].image+');">';
      out += '<img src="'+data[key].icon+'">';
     // out += '<img class="shaurmicon" src="'+data[key].icon+'">';
      //out += '<img class="photo" src="'+data[key].image+'">';
      out += '</div>';
      out += '</div>';
      out += '<div class="card_info">';
      out += '<div class="card_title">';
      out += '<h4>'+data[key]['name']+'</h4>';
      out += '<p>'+data[key]['taste']+'</p>';
      out += '</div>';
      out += '<div class="description">';
      out += '<p>'+data[key]['description']+'</p>';
      out += '</div>';
      out += '</div>';
      out += '<div class="price_wrp">';
      out += '<p class="price">'+data[key]['cost']+' ₽</p>';
      out += '<button class="add-to-cart" data-art="'+key+'">Купить</button>';
      out += '</div>';
      out += '</div>';

    }
    $('#napitki').html(out);
    $('button.add-to-cart').on('click', addToCart);
    
   
   

  })
  //return(napitki);
}
//console.log(napitki);

function addToCart() {
  //добавляем товар в корзину

  let article = $(this).attr('data-art');
  if (cart[article] != undefined) {
    cart[article]++;
  }
  else {
    cart[article] = 1;
  }
  localStorage.setItem('cart', JSON.stringify(cart) );
  
  showCart();
  //totalToHead();
  
}

function checkCart(){
  //Проверяю наличие корзины в localStorage
  if ( localStorage.getItem('cart') != null) {
    
    cart = JSON.parse (localStorage.getItem('cart'));
  }
  else {
    console.log('yrrrr');
    localStorage.setItem('total', 0 );
  }
}




function totalToHead() {
  let out = '<span>'+localStorage.getItem('total')+' ₽</span>';
  $('#head-total').html(out);
  $('#submit').html(out);
}

function showCart() {
  var total = 0;
if (!localStorage.getItem('total')){
localStorage.setItem('total', 0);
}

  
  $.when($.getJSON("goods.json"), $.getJSON("napitki.json")).done(function (data1,data2) {
  
  var tovary = Object.assign(data1[0], data2[0]);
  //console.log(data1);
  var out = '';
  
  
    /*=out += '<div class="cart-title__wrp">'; //вывожу шапку корзины
    out += '<div class="cart-icon">';
    out += '<a href="#"><img src="img/icon_cart.svg"></a>';
    out += '</div>';
    out += '<div class="summa_zakaza">';
    //out += '<span>'+localStorage.getItem('total')+'</span>';
    out += '</div>';
    out += '</div>';*/
    
           // total = JSON.parse (localStorage.getItem('total'));
           // console.log(total);
      for (let key in cart) { //вывожу содержимое корзины
    
        out += '<li class="cart-product cursorHover">';
        out += '<div class="cart-product__row">';
        out += '<div class="cart-product__name">'+tovary[key].name+' '+tovary[key].taste+'</div>';
        out += '<div class="cart-product__quantity-container">';
        out += '<div class="product-quantity-controls__container cart-product__quantity-slider">';
        out += '<button type="button" class="product-quantity-controls__minus" data-art="'+key+'"><svg width="24" height="24"><line x1="5" y1="11" x2="22" y2="11" stroke-width="2" stroke="#3c663b" /></svg></button>';
        out += '<span class="product-quantity-controls__value">'+cart[key]+'</span>';
        out += '<button type="button" class="product-quantity-controls__plus" data-art="'+key+'"><svg width="24" height="24"><line x1="0" y1="11" x2="18" y2="11" stroke-width="2" stroke="#3c663b" /><line x1="9" y1="2" x2="9" y2="20" stroke-width="2" stroke="#3c663b" /></svg></button>';
        out += '</div>';
        out += '</div>';
        out += '</div>';
        out += '<div class="cart-product__price-wrp">';
        out += '<div class="cart-product__price">'+cart[key]*tovary[key].cost+' ₽</div>';
        out += '</div>';
        out += '</li>';
        
    
  total += cart[key]*tovary[key].cost; //считаю общую сумму заказа
  localStorage.setItem('total', total); 
  console.log('total');
      
      }
       if(localStorage.getItem('cart') != null) { //проверяю, есть ли товары в корзине
    
          if (localStorage.getItem('total') < 600) {//вывожу стоимость доставки, если сумма заказа меньше 600
            let dostavka = 600 - localStorage.getItem('total');
            out += '<div class="cart-delivery">';
            out += '<div class="cart-delivery__content">';
            out += '<span class="cart-delivery__title">Доставка</span>';
            out += '<span class="cart-delivery__cost"> 99 ₽</span>';
            out += '</div>';
            out += '</div>';
            out += '<div class="cart-alert">'; //вывожу остаток суммы, необходимой для бесплатной доставки
            out += '<span class="cart-alert__text">Закажите еще на '+dostavka+' ₽ для бесплатной доставки</span>';
            out += '</div>';
          }
        else if ((localStorage.getItem('total') >= 600)){
          out += '<div class="cart-delivery">';
          out += '<div class="cart-delivery__content">';
          out += '<span class="cart-delivery__title">Доставка</span>';
          out += '<span class="cart-delivery__cost"> 0 ₽</span>';
          out += '</div>';
          out += '</div>';
        }
      }
  $('#my-cart').html(out);
  totalToHead();
  $('.product-quantity-controls__plus').on('click', plusTovary);
  $('.product-quantity-controls__minus').on('click', minusTovary);
  
  function plusTovary(){ //увеличиваем кол-во товара
    var article = $(this).attr('data-art');
    cart[article]++;
    localStorage.setItem('cart', JSON.stringify(cart));
    showCart();
  }

  function minusTovary(){ //уменьшаем кол-во товаров
    var article = $(this).attr('data-art');
    if (cart[article]>1) {
      cart[article]--;
    }
    else {
      delete cart[article];
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    checkCart();
    showCart();
    
  }

});

}

//showCart();


/*
function getTotal(total){
  return(total);
};
getTotal(total);
*/