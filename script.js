var cart = {}; //корзина
var goods;
var napitki;





$('document').ready(function(){
  $('div.cart-title__wrp').on('click', function(){$( "div.cart__wrp" ).toggleClass( "add-or-remove" )});
  $('div.cart-title__wrp').on('click', function(){$( "div.gallery" ).toggleClass( "fr4" )});
  loadGoods();
  loadNapitki();
  //showMiniCart();
  checkCart();
  showCart();
  $('div.cart-submit').on('click', function(){$( "div.modal-container" ).addClass( "hidden" )});
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
    
    
  });
}


function loadNapitki() {
  $.getJSON('napitki.json', function(data) {
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
  
}

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
  //console.log(localStorage.getItem("cart"));
  if (!localStorage.getItem("cart")){
    
    localStorage.setItem('total', 0 );
    totalToHead();
  }
  else if (localStorage.getItem("cart")) {
    
    cart = JSON.parse (localStorage.getItem('cart'));
  }
  
}

function totalToHead() { //выводим сумму заказа в хедер и в кнопку
  var summary;
  if (!Object.keys(cart).length == 0) {
    if (localStorage.getItem('total') < 600) {
      summary = JSON.parse(localStorage.getItem('total')) + 99;
    }
    else if (localStorage.getItem('total') >= 600) summary = localStorage.getItem('total');
    let out = '<span>'+summary+' ₽</span>';
  $('#head-total').html(out);
  $('#head-total-modal').html(out);
  $('#submit').html(out);
  }
  else { //если в корзине ничего нет, то ничего не выводим
  out = '';
  $('#head-total').html(out);
  $('#head-total-modal').html(out);
  $('#submit').html(out);
  }
}
let person = '';
function getForm() {
  
  let name = $("#name").val();
  let phonenumber = $("#phonenumber").val();
  let street = $("#street").val();
  let entrance = $("#entrance").val();
  let intercom = $("#intercom").val();
  let floor = $("#floor").val();
  let flat = $("#flat").val();
  let comment = $("#comment").html();
  person = "%0A" + "Имя:" + " " + name + "%0A" + "Номер:" + " " + phonenumber + "%0A" + "Адрес:" + " " + street + "%0A" + "Подъезд:" + " " + entrance + "%0A" + "Домофон:" + " " + intercom + "%0A" + "Этаж:" + " " + floor + "%0A" + "Квартира:" + " " + flat + "%0A"  + "Комментарий:" + " " + comment;
  
  
  
  
}

function sendmessage(message){
  getForm(person);
  //message = cart_inner;
  let chat_id = "-565521784";
  let token = '1828130744:AAGpp484ON0NOQZk00WslmFZLRi044MyYCA';
  $.get("https://api.telegram.org/bot"+token+"/sendMessage?text="+message+" + &chat_id="+chat_id);
  localStorage.clear();
  
  }

  
function showCart() {
  var total = 0;
  var message = '';
  var cart_inner = '';
  
  $.when($.getJSON("goods.json"), $.getJSON("napitki.json")).done(function (data1,data2) {
  
  var tovary = Object.assign(data1[0], data2[0]);
  var out = '';
  
  
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
        cart_inner += tovary[key].name +' ' + tovary[key].taste +", " + cart[key] + " " + "шт." +"%0A";

  
      localStorage.setItem('cart', cart); 
       localStorage.setItem('total', total); 
      
      }
      message = cart_inner;
      
      console.log(message);
      
      /*if(!Object.keys(cart).length == 0) { //проверяю, есть ли товары в корзине
        
          if (localStorage.getItem('total') < 600) {
           //вывожу стоимость доставки, если сумма заказа меньше 600
    
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
            let newTotal = total + 99;
            cart_inner += "Итого: " + newTotal + " " +"руб.";
          }
          else if ((localStorage.getItem('total') >= 600)){
            out += '<div class="cart-delivery">';
            out += '<div class="cart-delivery__content">';
            out += '<span class="cart-delivery__title">Доставка</span>';
            out += '<span class="cart-delivery__cost"> 0 ₽</span>';
            out += '</div>';
            out += '</div>';
            cart_inner += "Итого: " + total;
        }
      }
  */
  $('#my-cart').html(out);
  $('#my-cart-modal').html(out);
  $('.product-quantity-controls__plus').on('click', plusTovary);
  $('.product-quantity-controls__minus').on('click', minusTovary);
  totalToHead();
  //$('button.submit').on('click', getForm());
  $('button#submit-modal').on('click', function () {sendmessage(message)});
  //$('button#submit-modal').on('click', function () {console.log(message)});
  
  
  

});
//document.querySelector('.submit').onclick = sendmessage(message);


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
  totalToHead()
  checkCart();
  showCart();
  
}
}

