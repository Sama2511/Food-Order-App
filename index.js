import {menuArray} from '/data.js'

let menu = ''
menuArray.map(function(item){
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
                            <button> + </button>
                        </div>
                    </div>
            </div>`
    
})


document.getElementById("menu-wrapper").innerHTML = menu