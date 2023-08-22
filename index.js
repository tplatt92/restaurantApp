import {menuArray} from "./data.js"

const completeOrder = document.getElementById('complete-order')
const paymentModalInner = document.getElementById('payment-modal-inner')
const paymentModal = document.getElementById('payment-modal')
const paymentModalCloseBtn = document.getElementById('payment-modal-close-btn')
const payBtn = document.getElementById('payBtn')



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

completeOrder.addEventListener('click', renderModal);

paymentModalCloseBtn.addEventListener('click', closeModal)

function closeModal(){
    paymentModal.style.display = 'none'
    render()
}

let orderList = [];
let orderHtml = '';
let totalPrice = 0;



function handlePlusClick(id) {
    orderHtml = '';
    const targetOrderObj = menuArray.filter(function(order) {
        return order.id == id;
    })[0];
    orderList.push({name: targetOrderObj.name, price: targetOrderObj.price, orderid: targetOrderObj.id});
    document.querySelector(".checkout").classList.remove("hidden");
    orderList.forEach(function(order) {
        orderHtml += `<div class="order">
                        <div class="order-name">
                            <span class="order-name-name">${order.name}</span> 
                            <span class="order-name-remove" data-order-number="${order.orderid}">Remove</span>
                        </div>
                        <div class="order-price">
                            £${order.price}
                        </div>
                    </div>`
                    
    })
    totalPrice += targetOrderObj.price;
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
    const removedOrder = orderList.find(order => order.orderid === orderId);
    if (removedOrder) {
        totalPrice -= removedOrder.price;
    }
    orderList.forEach(function(order) {
        orderHtml += `<div class="order">
                        <div class="order-name">
                            <span class="order-name-name">${order.name}</span> 
                            <span class="order-name-remove" data-order-number="${order.orderid}">Remove</span>
                        </div>
                        <div class="order-price">
                            £${order.price}
                        </div>
                    </div>`;
    })
     render();
}


function getOrderHtml() {
    let menuHtml = ''
    menuArray.forEach(function(item){
    menuHtml+= `
    <div class="menu">
    <div class="menu-content">
        <div class="emoji-container">
            <span class="emoji">${item.emoji}</span>
        </div>
        <div class="itemInfo">
            <p class="item">${item.name}</p>
            <p class="ingredients">${item.ingredients}</p>
            <p class="price">£${item.price}</p>
        </div>
    </div>
    <div class="plus-container">
        <i class="fa-solid fa-plus" data-plus="${item.id}"></i>
    </div>
</div>
    `

    })
    return menuHtml


    
}

function renderModal(){
    paymentModalInner.innerHTML =  `
        <h2>Enter Card Details</h2>
        <form>
            <input type="text" placeholder="Enter your full name" class='input'></input>
            <input type="number" placeholder="Enter your card number" class='input'></input>
            <input type="number" placeholder="CVV" class='input'></input>
        </form>
        <button class="complete-order" id="payBtn">Pay</button>`
    paymentModal.style.display = 'flex'
    paymentModal.style.flexDirection = 'column'
    paymentModal.style.padding = '20px'
    
}

/* Render function */

console.log(getOrderHtml())

function render() {
    document.getElementById('menu').innerHTML = getOrderHtml();
    document.querySelector(".orders").innerHTML = orderHtml;
    const totalPriceElement = document.querySelector('.total-price');
    if (totalPriceElement) {
        totalPriceElement.textContent = 'Total Price: £' + totalPrice; // You can format this as needed
    }

}


render()