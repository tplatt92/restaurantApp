import {menuArray} from "./data.js"

console.log('menuArray:', menuArray);

document.addEventListener('click', function(e) {
    if (e.target.dataset.plus) {
        const itemId = e.target.dataset.plus;
        const itemIdNumber = parseInt(itemId); 
        handlePlusClick(itemIdNumber); 
    }   else if (e.target.dataset.orderNumber) {
        const orderId = parseInt(e.target.dataset.orderNumber);
        handleRemoveClick(orderId);
    }
});


let orderList = [];
let orderHtml = '';
let totalPrice = 0;

function handlePlusClick(id) {
    orderHtml = '';
    const targetOrderObj = menuArray.filter(function(order) {
        return order.id == id;
    })[0];
    totalPrice = 0;
    orderList.push({name: targetOrderObj.name, price: targetOrderObj.price, orderid: targetOrderObj.id});
    document.querySelector(".checkout").classList.remove("hidden");
    orderList.forEach(function(order) {
        orderHtml += `<div class="order">
                        <div class="order-name">
                            <span class="order-name-name">${order.name}</span> 
                            <span class="order-name-remove" data-order-number="${order.orderid}">Remove</span>
                        </div>
                        <div class="order-price">
                            ${order.price}
                        </div>
                    </div>`
                    
    })
    render()

}

function handleRemoveClick(orderId) {
    orderHtml = ''; 
    let itemRemoved = false;
    orderList = orderList.filter(order => {
        if (!itemRemoved && order.orderid === orderId){
            itemRemoved = true;
            return false;
        }
        return true;
    });
    orderList.forEach(function(order) {
        orderHtml += `<div class="order">
                        <div class="order-name">
                            <span class="order-name-name">${order.name}</span> 
                            <span class="order-name-remove" data-order-number="${order.orderid}">Remove</span>
                        </div>
                        <div class="order-price">
                            ${order.price}
                        </div>
                    </div>`;
    })
     render();
}

function getOrderHtml() {
    let menuHtml = ''
    menuArray.forEach(function(item){
    menuHtml+= `
    <div class = "menu">
        <div class="menu-inner">
                <div class="emoji-container">
                <span class="emoji">${item.emoji}</span>
                </div>
                <div class="itemInfo">
                    <p class="item">${item.name}</p>
                    <p class="ingredients">${item.ingredients}</p>
                    <p class="price">${item.price}</p>
                    </div>
                <div class="plus-container">
                    <i class="fa-solid fa-plus" data-plus= "${item.id}"></i>
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

function render() {
    // Update the menu content
    document.getElementById('menu').innerHTML = getOrderHtml();
    document.querySelector(".orders").innerHTML = orderHtml;

}

render()