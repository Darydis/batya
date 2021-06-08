let cart = {}; //корзина
var goods;
var napitki;

$("document").ready(function () {
  addd();
  loadGoods();
  loadNapitki();
  showMiniCart();
});

var request = new XMLHttpRequest();
request.open("GET", "goods.json", false);
request.send(null);
var my_JSON_object = JSON.parse(request.responseText);
console.log(my_JSON_object);

// var test = {};
// function loadGoods() {
//   $.getJSON("goods.json", function (data) {
//     test = data;
//   });
// }
$.getJSON("goods.json", actionWithGoods);
$.getJSON("napitki.json", actionWithNapitki);

function actionWithGoods(data) {
  // тут в data хранится все из файла goods.json
  console.log(data);
}

function actionWithNapitki(data) {
  // тут в data хранится все из файла napitki.json
  console.log(data);
}

$.when($.getJSON("goods.json"), $.getJSON("napitki.json")).done(function (
  data1,
  data2
) {
  console.log(data1[0]);
  console.log(data2[0]);
});

function loadGoods() {
  $.getJSON("goods.json", function (data) {
    //console.log(data);
    let out = "";
    goods = data;
    for (let key in data) {
      out += '<div class="card">';
      out += '<div class="img_wrp">';
      out += '<img class="shaurmicon" src="' + data[key].icon + '">';
      out += '<img class="photo" src="' + data[key].image + '">';
      out += "</div>";
      out += '<div class="card_info">';
      out += '<div class="card_title">';
      out += "<h4>" + data[key]["name"] + "</h4>";
      out += "<p>" + data[key]["taste"] + "</p>";
      out += "</div>";
      out += '<div class="description">';
      out += "<p>" + data[key]["description"] + "</p>";
      out += "</div>";
      out += "</div>";
      out += '<div class="price_wrp">';
      out += '<p class="price">' + data[key]["cost"] + "</p>";
      out +=
        '<button class="add-to-cart" data-art="' + key + '">Купить</button>';
      out += "</div>";
      out += "</div>";
    }
    $("#goods").html(out);
    $("button.add-to-cart").on("click", addToCart);
    return goods;
  });
}

// console.log(goods);

function loadNapitki() {
  $.getJSON("napitki.json", function (data) {
    //console.log(data);
    let out = "";
    napitki = data;
    for (let key in data) {
      out += '<div class="card">';
      out += '<div class="img_wrp">';
      out += '<img class="shaurmicon" src="' + data[key].icon + '">';
      out += '<img class="photo" src="' + data[key].image + '">';
      out += "</div>";
      out += '<div class="card_info">';
      out += '<div class="card_title">';
      out += "<h4>" + data[key]["name"] + "</h4>";
      out += "</div>";
      out += '<div class="description">';
      out += "<p>" + data[key]["description"] + "</p>";
      out += "</div>";
      out += "</div>";
      out += '<div class="price_wrp">';
      out += '<p class="price">' + data[key]["cost"] + "</p>";
      out +=
        '<button class="add-to-cart" data-art="' + key + '">Купить</button>';
      out += "</div>";
      out += "</div>";
    }
    $("#napitki").html(out);
    $("button.add-to-cart").on("click", addToCart);

    return napitki;
  });
}
// console.log(napitki);

function addToCart() {
  //добавляем товар в корзину

  let article = $(this).attr("data-art");
  if (cart[article] != undefined) {
    cart[article]++;
  } else {
    cart[article] = 1;
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  console.log(cart);
  showMiniCart();
}

function ckeckCart() {
  //Проверяю наличие корзины в localStorage
  if (localStorage.getItem("cart") != null) {
    cart = JSON.parse(localStorage.getItem("cart"));
  }
}

function showMiniCart() {
  //показываю содержимое корзины
  let out = "";
  for (let i in cart) {
    out += i + "--- " + cart[i] + "<br>";
  }
  $("#mini-cart").html(out);
}
