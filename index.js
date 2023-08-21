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

/*
document.addEventListener('click', function(e){
    if(e.target.dataset.plus){
       handlePlusClick(e.target.dataset.plus) 
    }
    else if(e.target.dataset.remove){
        handleRemoveClick(e.target.dataset.remove)
    }

    function handlePlusClick(itemId){ 
        const targetItemObj = menuArray.filter(function(item){
            return item.id === itemId
        })}
       /* if (targetItemObj){

            let orderHtml = ''
            orderHtml += 
            `
            <div class="order">
                <h2>Your Order</h2>
                <div class="order-inner">
                    <p class="item">${item.name}</p>
                    <a class="remove" data-remove>remove</a>
                    <p class="price">${item.price}</p>
                    <p>Total Price</p>
                    <p class="total">${totalPrice}</p>
                    <i class="fa-solid fa-plus" data-plus="${item.id}"></i>
                </div>
            <div>
                } else if (remove button click) {
                    orderHtml = ''
                }`
                render()
                }   

                */

function getOrderHtml() {
    let menuHtml = ''
    menuArray.forEach(function(item){
    menuHtml+= `
    <div class = "menu">
        <div class="menu-inner">
                <div class="emoji-container>
                <span class="emoji">${item.emoji}</span>
                </div>
                <div class="itemInfo">
                    <p class="item">${item.name}</p>
                    <p class="ingredients">${item.ingredients}</p>
                    <p class="price">${item.price}</p>
                    </div>
                <div class="plus-container">
                    <i class="fa-solid fa-plus" data-plus="${item.id}"></i>
                </div>

                <div>
            </div>
        </div>
    </div>
    `

    })
    return menuHtml
   

    
}

console.log(getOrderHtml())


function render(){
    document.getElementById('menu').innerHTML = getOrderHtml()
}

render()