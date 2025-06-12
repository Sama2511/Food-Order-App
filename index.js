import {menuArray} from '/data.js'

let total = document.getElementById("total-price").textContent
total = Number(total)
let numbOforders = 0

addEventListener('click', function(e){
    if(e.target.dataset.add){
        document.getElementById("payment-container").style.display = 'flex'
        document.getElementById("order-btn").style.display= 'flex'
        addItem(e.target.dataset.add)
    }
})
addEventListener('click', function(e){
        if(e.target.matches('[data-remove]')){
            const parent = e.target.closest('#chosen-items')
            if(parent.querySelector('h3').textContent === 'Pizza'){
                if(parent.querySelector(".price").textContent > 14){

                    parent.querySelector(".price").textContent -= 14
                    total -= 14
                    document.getElementById("total-price").textContent = total.toFixed(2)
                }else{
                    total -= 14
                    document.getElementById("total-price").textContent = total.toFixed(2)
                    parent.remove()
                }
            }else if(parent.querySelector('h3').textContent === 'Hamburger'){
                if(parent.querySelector(".price").textContent > 12){
                    parent.querySelector(".price").textContent -= 12
                    total -= 12
                    document.getElementById("total-price").textContent = total.toFixed(2)
                }else{
                    total -= 12
                    document.getElementById("total-price").textContent = total.toFixed(2)
                    parent.remove()
                }
            }else{
                if(parent.querySelector(".price").textContent > 3.49){
                    parent.querySelector(".price").textContent -= 3.49
                    total -= 3.49
                    document.getElementById("total-price").textContent = total.toFixed(2)
                }else{
                    total -= 3.49
                    document.getElementById("total-price").textContent = total.toFixed(2)
                    parent.remove()
                }
            }
            numbOforders -= 1
            if(numbOforders ===0){
                document.getElementById("payment-container").style.display = 'none'
                document.getElementById("order-btn").style.display= 'none'
            }
    }
})


function addItem(item){
    const existInMenu = menuArray.filter(function(menu){
        return menu.id === item
    })[0]
        if(!document.querySelector(`#price-container [data-id ="exist${existInMenu.id}"]`)){
        document.getElementById('price-container').innerHTML += `
        <div class="chosen-items" id="chosen-items" data-id =exist${existInMenu.id} >
            <div id="right-side">
                <h3>${existInMenu.name}</h3>
                <a href="#/" data-remove= option >remove</a>
            </div>
            <p class= 'price' id='current-price${existInMenu.priceID}'>${existInMenu.price}</p>`

            total += existInMenu.price
            document.getElementById("total-price").textContent = "$ "+ total.toFixed(2)
            numbOforders += 1
            
        }else if(document.querySelector(`#price-container [data-id ="exist${existInMenu.id}"]`)){
            let currentPrice = document.querySelector(`#current-price${existInMenu.priceID}`).textContent
            currentPrice = Number(currentPrice)
            let newprice = 0
            newprice = currentPrice + existInMenu.price
            document.querySelector(`#current-price${existInMenu.priceID}`).textContent = newprice.toFixed(2)

            total += existInMenu.price
            document.getElementById("total-price").textContent =  "$ " +total.toFixed(2)
            numbOforders += 1 
        }
    }



function buildmenu(){
    let menu = ''
    menuArray.forEach(function(item){
        menu +=`   
                <div class="food-container">
                        <span>${item.emoji}</span>
                        <div class="food-description">
                            <div class="food">
                                <h1>${item.name}</h1>
                                <h2>${item.ingredients}</h2>
                                <p>$${item.price}</p>
                            </div>
                            <div class="btn">
                                <button class="add-btn" data-add =${item.id}> + </button>
                            </div>
                        </div>
                </div>` 
})
return menu
}

function render(){
    document.getElementById("menu-wrapper").innerHTML = buildmenu()
}

render()

