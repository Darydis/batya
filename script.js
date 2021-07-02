var cart = {}; //корзина
//var goods;
var napitki;

var message = "";

let goods = {
  "1" : {
      "name" : "Шаурма",
      "taste": "Классическая",
      "description": "Курица, огурцы, помидоры, капуста, морковь по-корейски",
      "cost": "150",
      "icon": "/img/icon_1.png",
      "image": "/img/shaurma.png"
  },

  "2" : {
      "name" : "Шаурма",
      "taste": "Сырная",
      "description": "Курица, огурцы, помидоры, капуста, морковь по-корейски, сыр Чеддер",
      "cost": "160",
      "icon": "/img/icon_2.svg",
      "image": "/img/shaurma2.png"
  },

  "3" : {
      "name" : "Шаурма",
      "taste": "Острая",
      "description": "Курица, огурцы, помидоры, капуста, морковь по-корейски, 3 вида острого перца",
      "cost": "160",
      "icon": "/img/icon_3.svg",
      "image": "/img/shaurma3.png"
  },

  "4" : {
      "name" : "Шаурма",
      "taste": "Барбекю",
      "description": "Курица, огурцы, помидоры, капуста, морковь по-корейски, соус Барбекю",
      "cost": "160",
      "icon": "/img/icon_4.png",
      "image": "/img/shaurma4.png"
  },

    "10" : {
        "name" : "Напиток",
        "taste" : "Барбариска",
        "description": "Безалкогольный сильногазированный тонизирующий напиток",
        "cost": 80,
        "icon": "/img/icon_barbariska.png",
        "image": "/img/barbariska.png"
    },

    "12" : {
        "name" : "Напиток",
        "taste" : "Вишня",
        "description": "Безалкогольный сильногазированный тонизирующий напиток",
        "cost": 80,
        "icon": "/img/icon_cherry.png",
        "image": "/img/cherry.png"
    },

    "13" : {
        "name" : "Напиток",
        "taste" : "Груши",
        "description": "Безалкогольный сильногазированный тонизирующий напиток",
        "cost": 80,
        "icon": "/img/icon_dushes.png",
        "image": "/img/grushi.png"
    },

    "14" : {
        "name" : "Напиток",
        "taste" : "Дюшес",
        "description": "Безалкогольный сильногазированный тонизирующий напиток",
        "cost": 80,
        "icon": "/img/icon_dushes.png",
        "image": "/img/dushes.png"
    },

    "15" : {
        "name" : "Напиток",
        "taste" : "Лимонад",
        "description": "Безалкогольный сильногазированный тонизирующий напиток",
        "cost": 80,
        "icon": "/img/icon_limonad.png",
        "image": "/img/limonad.png"
    },

    "16" : {
        "name" : "Напиток",
        "taste" : "Трахун",
        "description": "Безалкогольный сильногазированный тонизирующий напиток",
        "cost": 80,
        "icon": "/img/icon_tarhun.png",
        "image": "/img/tarhun.png"
    },

    "17" : {
        "name" : "Вода",
        "taste" : "Серноводская",
        "description": "Минеральная вода",
        "cost": 80,
        "icon": "/img/icon_sernovod.png",
        "image": "/img/sernovod.png"
    },

    "19" : {
        "name" : "Вода",
        "taste" : "Серноводская (Йод + Фтор)",
        "description": "Минеральная вода",
        "cost": 80,
        "icon": "/img/icon_sernovod.png",
        "image": "/img/sernovod-jod.png"
    },

    "20" : {
        "name" : "Вода",
        "taste" : "Серноводская (Йод + Фтор)",
        "description": "Минеральная вода",
        "cost": 80,
        "icon": "/img/icon_sernovod.png",
        "image": "/img/sernovod-jod.png"
    },

    "21" : {
        "name" : "Вода",
        "taste" : "Серноводская (Йод + Фтор)",
        "description": "Минеральная вода",
        "cost": 80,
        "icon": "/img/icon_sernovod.png",
        "image": "/img/sernovod-jod.png"
    },

    "22" : {
        "name" : "Вода",
        "taste" : "Серноводская (Йод + Фтор)",
        "description": "Минеральная вода",
        "cost": 80,
        "icon": "/img/icon_sernovod.png",
        "image": "/img/sernovod-jod.png"
    },

    "23" : {
        "name" : "Вода",
        "taste" : "Серноводская (Йод + Фтор)",
        "description": "Минеральная вода",
        "cost": 80,
        "icon": "/img/icon_sernovod.png",
        "image": "/img/sernovod-jod.png"
    },

    "24" : {
        "name" : "Вода",
        "taste" : "Серноводская (Йод + Фтор)",
        "description": "Минеральная вода",
        "cost": 80,
        "icon": "/img/icon_sernovod.png",
        "image": "/img/sernovod-jod.png"
    },

    "25" : {
        "name" : "Вода",
        "taste" : "Серноводская (Йод + Фтор)",
        "description": "Минеральная вода",
        "cost": 80,
        "icon": "/img/icon_sernovod.png",
        "image": "/img/sernovod-jod.png"
    },

    "26" : {
        "name" : "Вода",
        "taste" : "Серноводская (Йод + Фтор)",
        "description": "Минеральная вода",
        "cost": 80,
        "icon": "/img/icon_sernovod.png",
        "image": "/img/sernovod-jod.png"
    },

    "27" : {
        "name" : "Вода",
        "taste" : "Серноводская (Йод + Фтор)",
        "description": "Минеральная вода",
        "cost": 80,
        "icon": "/img/icon_sernovod.png",
        "image": "/img/sernovod-jod.png"
    },

    "28" : {
        "name" : "Вода",
        "taste" : "Серноводская (Йод + Фтор)",
        "description": "Минеральная вода",
        "cost": 80,
        "icon": "/img/icon_sernovod.png",
        "image": "/img/sernovod-jod.png"
    },

    "29" : {
        "name" : "Вода",
        "taste" : "Серноводская (Йод + Фтор)",
        "description": "Минеральная вода",
        "cost": 80,
        "icon": "/img/icon_sernovod.png",
        "image": "/img/sernovod-jod.png"
    }
}

$('document').ready(function(){
  $('div.cart-title__wrp').on('click', function(){$( "div.cart__wrp" ).toggleClass( "add-or-remove" )});
  
  

  if (window.screen.width <=414) { //мобильное меню
    $( "div.cart__wrp" ).addClass("hidden");
    $( "div.cart-title__wrp" ).addClass("hidden");

    

    $('li#menu1').on('click', function(){ //клик на Шаурму - скрываем корзину и модалку
      $( "div.cart__wrp" ).removeClass("shown");
      $( "div.sections" ).removeClass("hidden");
      $( "div.modal-container" ).addClass("hidden");
      $( "div.cart-title__wrp" ).addClass("hidden");
    });

    $('li#menu2').on('click', function(){ //клик на Напитки - скрываем корзину и модалку
      $( "div.cart__wrp" ).removeClass("shown");
      $( "div.sections" ).removeClass("hidden");
      $( "div.modal-container" ).addClass("hidden");
      $( "div.cart-title__wrp" ).addClass("hidden");
    });

    $('li#menu4').on('click', function(){ //клик на Корзину - скрываем контент и модалку
      $( "div.cart__wrp" ).toggleClass("shown");
      $( "div.sections" ).toggleClass("hidden");
      $( "div.modal-container" ).addClass("hidden");
      $( "div.cart-title__wrp" ).toggleClass("hidden");

    });
    
    $('li#menu3').on('click', function(){ //клик на Доставку - скрываем корзину и модалку
      $( "div.cart__wrp" ).addClass("hidden");
      $( "div.cart__wrp" ).removeClass("shown");
      $( "div.sections" ).removeClass("hidden");
      $( "div.modal-container" ).addClass("hidden");
      $( "div.cart-title__wrp" ).addClass("hidden");
    });
  }

  
  loadGoods(goods);
  checkCart();
  showCart();

  $("div.cart-submit").on("click", function () {
    
    
    $("div.modal-container").addClass("shown");
    
        jQuery(function($){
          $(document).mouseup(function (e){ // событие клика по веб-документу
            var div2 = $("#modal"); // тут указываем ID элемента
            if (!div2.is(e.target) // если клик был не по нашему блоку
                && div2.has(e.target).length === 0) { // и не по его дочерним элементам
              $("div.modal-container").removeClass("shown"); // скрываем его
            }
          });
        });
  

  });


  $("button#submit-modal").click(function () {
    
    sendmessage(localStorage.getItem("message"));
  });
});

function loadGoods(data) {
   
    //console.log(data);
    let out = '';
    let out2 = '';
    for (let key in data){
      if (data[key]['name'] == "Шаурма") {
        
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
      out += '<div class="price_wrp" data-art="'+key+'">';
      out += '<p class="price" >'+data[key]['cost']+' ₽ </p>';
      out += '<button class="add-to-cart" data-art="'+key+'">Купить</button>';
      out += '</div>';
      out += '</div>';
      
    }
    
    else if (data[key]['name'] != "Шаурма"){
      out2 += '<div class="card">';
      out2 += '<div class="img_wrp">';
      out2 += '<img class="shaurmicon" src="'+data[key].icon+'">';
      out2 += '<img class="photo" src="'+data[key].image+'">';
      out2 += '</div>';
      out2 += '<div class="card_info">';
      out2 += '<div class="card_title">';
      out2 += '<h4>'+data[key]['name']+'</h4>';
      out2 += '<p>'+data[key]['taste']+'</p>';
      out2 += '</div>';
      out2 += '<div class="description">';
      out2 += '<p>'+data[key]['description']+'</p>';
      out2 += '</div>';
      out2 += '</div>';
      out2 += '<div class="price_wrp">';
      out2 += '<p class="price">'+data[key]['cost']+' ₽</p>';
      out2 += '<button class="add-to-cart" data-art="'+key+'">Купить</button>';
      out2 += '</div>';
      out2 += '</div>';
      
     }
  $('#goods').html(out);
  $('#napitki').html(out2);
  $('button.add-to-cart').on('click', addToCart);
    }
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
  localStorage.setItem("message", 0);
  
  
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

  
function showCart() {
  var total = 0;
  var cart_inner = '';  
  var out = '';
  
      for (let key in cart) { //вывожу содержимое корзины
    
        out += '<li class="cart-product cursorHover">';
        out += '<div class="cart-product__row">';
        out += '<div class="cart-product__name">'+goods[key].name+' '+goods[key].taste+'</div>';
        out += '<div class="cart-product__quantity-container">';
        out += '<div class="product-quantity-controls__container cart-product__quantity-slider">';
        out += '<button type="button" class="product-quantity-controls__minus" data-art="'+key+'"><svg width="24" height="24"><line x1="5" y1="11" x2="22" y2="11" stroke-width="2" stroke="#3c663b" /></svg></button>';
        out += '<span class="product-quantity-controls__value">'+cart[key]+'</span>';
        
        out += '<button type="button" class="product-quantity-controls__plus" data-art="'+key+'"><svg width="24" height="24"><line x1="0" y1="11" x2="18" y2="11" stroke-width="2" stroke="#3c663b" /><line x1="9" y1="2" x2="9" y2="20" stroke-width="2" stroke="#3c663b" /></svg></button>';
        out += '</div>';
        out += '</div>';
        out += '</div>';
        out += '<div class="cart-product__price-wrp">';
        out += '<div class="cart-product__price">'+cart[key]*goods[key].cost+' ₽</div>';
        out += '</div>';
        out += '</li>';
      
        
        total += cart[key] * goods[key].cost; //считаю общую сумму заказа
        cart_inner +=
          goods[key].name +
          " " +
          goods[key].taste +
          ", " +
          cart[key] +
          " " +
          "шт." +
          "%0A";
        console.log(cart);
        console.log(key);
        localStorage.setItem("cart", JSON.stringify(cart));
        localStorage.setItem("total", total);
      }
      message = cart_inner;
      localStorage.setItem("message", message);
      
      if(!Object.keys(cart).length == 0) { //проверяю, есть ли товары в корзине
        
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
            message += "Итого: " + newTotal + " " +"руб.";
            console.log("new message = ", message);
            localStorage.setItem("message", message);
            
          }
          else if ((localStorage.getItem('total') >= 600)){
            out += '<div class="cart-delivery">';
            out += '<div class="cart-delivery__content">';
            out += '<span class="cart-delivery__title">Доставка</span>';
            out += '<span class="cart-delivery__cost"> 0 ₽</span>';
            out += '</div>';
            out += '</div>';
            message += "Итого: " + total;
            localStorage.setItem("message", message);
        }
        
      }
      
     
  $('#my-cart').html(out);
  $('#my-cart-modal').html(out);
  $('.product-quantity-controls__plus').on('click', plusTovary);
  $('.product-quantity-controls__minus').on('click', minusTovary);
  totalToHead();
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
  return message;
}

//console.log("cart_inner = ",cart_inner);

function sendmessage(message){
  getForm(person);
  message += person;
  console.log("message 6 = ", message);
  let chat_id = "-565521784";
  let token = '1828130744:AAGpp484ON0NOQZk00WslmFZLRi044MyYCA';
  $.get("https://api.telegram.org/bot"+token+"/sendMessage?text="+message+" + &chat_id="+chat_id);
  localStorage.clear();
  return false;
}