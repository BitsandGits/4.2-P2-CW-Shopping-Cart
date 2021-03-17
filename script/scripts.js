let userName = prompt("What is your name?");

let item1 = prompt("Your first item please: ");
let price1 
do {
    price1 = prompt("What is the price of that item? Numbers only");
    if (isNaN(price1)) {
        alert("Price is not valid, please try again");
    } 
} while (isNaN(price1) || price1 === "")

let item2 = prompt("Your second item please: ");
let price2 
do {
    price2 = prompt("What is the price of that item? Numbers only");
    if (isNaN(price2)) {
        alert("Price is not valid, please try again");
    } 
} while (isNaN(price2) || price2 === "")

let item3 = prompt("Your third item please: ");
let price3 
do {
    price3 = prompt("What is the price of that item? Numbers only");
    if (isNaN(price3)) {
        alert("Price is not valid, please try again");
    } 
} while (isNaN(price3) || price3 === "")

let subtotal = Number(price1) + Number(price2) + Number(price3);
let grandtotal = subtotal * 1.0625;

document.getElementById("grandtotal").innerHTML = `${userName}, your grand total is: ${grandtotal}`;


let url1 = prompt("What is the url to image of the first item?");
let url2 = prompt("What is the url to image of the second item?");
let url3 = prompt("What is the url to image of the third item?");

document.getElementById("item1").innerHTML = `${item1}`;
document.getElementById("pic1").src = `${url1}`;
document.getElementById("item2").innerHTML = `${item2}`;
document.getElementById("pic2").src = `${url2}`;
document.getElementById("item3").innerHTML = `${item3}`;
document.getElementById("pic3").src = `${url3}`;

// apple image link 
// https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_400,h_400/https://demarestfarms.com/store/wp-content/uploads/2020/04/gala-apple.jpg 
// banana image link 
// https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG-1200-80.jpg 
// grapes image link
// https://staticg.sportskeeda.com/wp-content/uploads/2014/02/untitled-2113410.png 