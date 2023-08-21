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

console.log('menuArray:', menuArray);



function handlePlusClick(itemId) {
    const targetItemObj = menuArray.filter(function(item) {
        return item.id === itemId;
    })[0];
    console.log(targetItemObj)

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

    // Add event listeners after updating the content
    document.querySelectorAll('.fa-plus').forEach(element => {
        document.addEventListener('click', function(e) {
            if (e.target.dataset.plus) {
                const itemId = e.target.dataset.plus;
                // Convert to number if needed
                const itemIdNumber = parseInt(itemId); // Use parseFloat if you expect decimal numbers
                handlePlusClick(itemIdNumber); // Pass the converted value to the function
            }
        });
        
    });
}

render()