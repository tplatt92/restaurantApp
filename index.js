/* 

1) follow the design spec
    - figma 

2) render the menu options using JS
   - twimba render function 

3) Be able to add/remove items
    -twimba like buttons 

4) Have a payment model with a html form which should be required. 
    - meme picker app 

5) Optional - change theme, add a meal deal discount, user rate order experience 0-5 stars.
*/

import {menuArray} from "./data.js"


function getOrderHtml() {
    let menuHtml = ''
    menuArray.forEach(function(item){
    menuHtml+= `
    <div class = "menu">
        <div class="menu-inner">
            <img src="">
            <p class="item">${item.name}</p>
            <p class="ingredients">${item.ingredients}</p>
            <p class="price">${item.price}</p>

        </div>
    </div>
    `
    })
    return menuHtml
   /* let orderHtml = ''
    orderHtml += 
    `
    <div class="order">
        <h2>Your Order</h2>
        <div class="order-inner">
            <p class="item">${item.name}</p>
            <a class="remove">remove</a>
            <p class="price">${item.price}</p>
            <p>Total Price</p>
            <p class="total">${totalPrice}</p>
            <i class="fa-solid fa-plus" data-plus="${item.id}"></i>
        </div>
    <div>
    `
        */
    
}

console.log(getOrderHtml())


function render(){
    document.getElementById('menu').innerHTML = getOrderHtml()
}

render()