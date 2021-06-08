let cart = {}; //корзина

$.getJSON('goods.json', function(data){
    let goods = data;
    //console.log(goods);
})
$.getJSON('napitki.json', function(data){
    let napitki = data;
    checkCart();
    console.log(cart);
})

function ckeckCart(){
    //Проверяю наличие корзины в localStorage
    if ( localStorage.getItem('cart') != null) {
      cart = JSON.parse (localStorage.getItem('cart'));
    }
  }