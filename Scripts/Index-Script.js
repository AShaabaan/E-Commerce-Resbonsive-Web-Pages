
function  page_move(Move){

    location.replace(Move);

  }
  //slider Images
var sliderImg;
var sliderInterval, cartIcon;
var i = 1;
sliderInterval = setInterval(nextImg, 3000);
function nextImg() {
    sliderImg = document.getElementById("img-slider");
    if (i >= 7) {
        //convert 7 to 1
        i = 1;
        sliderImg.src = "../Project-Images/slider-imgs/" + i + ".png";
       
        i++;  //i=2
    }
    else {
        //from 2 to 6
        sliderImg.src = "../Project-Images/slider-imgs/" + i + ".png";
        i++;
    }
}
function preImg() {
    sliderImg = document.getElementById("img-slider");
    if (i <= 0) {
        //convert 0 to 6
        i = 6;
        sliderImg.src = "../Project-Images/slider-imgs/" + i + ".png";
        i--;//i=5
    }
    else {
        //from 5to 0
        sliderImg.src = "../Project-Images/slider-imgs/" + i + ".png";
        i--;
    }
}
//filters

var result, Images, Names, Ratings, Prices;
//global variables
Images  =  document.getElementsByClassName("Product-Img");
Names   =   document.getElementsByClassName("Product-Name");
Ratings = document.getElementsByClassName("Product-Rating");
Prices  =  document.getElementsByClassName("Product-Price");
//get Bags
function fetchBags() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '../ProductsListDTO/Bags.json');
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                result = JSON.parse(xhr.response);
            //    console.log(xhr.response);
            //    console.log(result);
                for (var i = 0; i < 9 ; i++) {
                    Images[i].src = result[i].imgSrc;
                    Images[i].alt = result[i].imgAlt;
                    Names[i].innerHTML = result[i].name;
                    Prices[i].innerHTML = result[i].price;
                    //rating you can use switch
                    if (result[i].rating == 1) { Ratings[i].innerHTML = " &#9733; &#9734; &#9734; &#9734; &#9734; " }
                    else if (result[i].rating == 2) { Ratings[i].innerHTML = " &#9733; &#9733; &#9734; &#9734; &#9734; " }
                    else if (result[i].rating == 3) { Ratings[i].innerHTML = " &#9733; &#9733; &#9733; &#9734; &#9734; " }
                    else if (result[i].rating == 4) { Ratings[i].innerHTML = " &#9733; &#9733; &#9733; &#9733; &#9734; " }
                    else if (result[i].rating == 5) { Ratings[i].innerHTML = " &#9733; &#9733; &#9733; &#9733; &#9733; " }
                   
                }
            }
        }
    }
}
//get Accessories
function fetchAccessories() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                result = JSON.parse(xhr.response);
                for (var i = 0; i < 9; i++) {
                    Images[i].src = result[i].imgSrc;
                    Images[i].alt = result[i].imgAlt;
                    Names[i].innerHTML = result[i].name;
                    Prices[i].innerHTML = result[i].price;
                    //rating
                    if (result[i].rating == 1) { Ratings[i].innerHTML = " &#9733; &#9734; &#9734; &#9734; &#9734; " }
                    else if (result[i].rating == 2) { Ratings[i].innerHTML = " &#9733; &#9733; &#9734; &#9734; &#9734; " }
                    else if (result[i].rating == 3) { Ratings[i].innerHTML = " &#9733; &#9733; &#9733; &#9734; &#9734; " }
                    else if (result[i].rating == 4) { Ratings[i].innerHTML = " &#9733; &#9733; &#9733; &#9733; &#9734; " }
                    else if (result[i].rating == 5) { Ratings[i].innerHTML = " &#9733; &#9733; &#9733; &#9733; &#9733; " }
                }
            }
        }
    }
    xhr.open("GET", "../ProductsListDTO/Accessories.json");
    xhr.send();
}
//get Shoes
function fetchShoes() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                result = JSON.parse(xhr.response);
                for (var i = 0; i < 9 ; i++) {
                    Images[i].src = result[i].imgSrc;
                    Images[i].alt = result[i].imgAlt;
                    Names[i].innerHTML = result[i].name;
                    Prices[i].innerHTML = result[i].price;
                    //rating
                    if (result[i].rating == 1) { Ratings[i].innerHTML = " &#9733; &#9734; &#9734; &#9734; &#9734; " }
                    else if (result[i].rating == 2) { Ratings[i].innerHTML = " &#9733; &#9733; &#9734; &#9734; &#9734; " }
                    else if (result[i].rating == 3) { Ratings[i].innerHTML = " &#9733; &#9733; &#9733; &#9734; &#9734; " }
                    else if (result[i].rating == 4) { Ratings[i].innerHTML = " &#9733; &#9733; &#9733; &#9733; &#9734; " }
                    else if (result[i].rating == 5) { Ratings[i].innerHTML = " &#9733; &#9733; &#9733; &#9733; &#9733; " }
                }
            }
        }
    }
    xhr.open("GET", "../ProductsListDTO/Shoes.json");
    xhr.send();
}
//End of Filters

var cartItems = 0;
function addToCart(event) {
    cartIcon = document.getElementById("Cart-Counter");
    event.preventDefault();
    cartItems++;
    cartIcon.innerHTML = "" + cartItems + "";
}
