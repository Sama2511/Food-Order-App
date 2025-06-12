import {menuArray} from '/data.js'


addEventListener('click', function(e){
    if(e.target.dataset.add){
        addItem(e.target.dataset.add)
    }
})

addEventListener('click', function(e){
        if(e.target.matches('[data-remove]')){
            const parent = e.target.closest('#chosen-items')
            parent.remove();
    }
})

function addItem(item){
    const existInMenu = menuArray.filter(function(menu){
        return menu.id === item
    })[0]
        addOrder(existInMenu)
    }

function addOrder(menu){
    if(document.querySelector(`#price-container [data-id="exist ${menu.id}"]`)){
        console.log('exist')
    }else{
        console.log('doesnt exist')
    }
    document.getElementById('price-container').innerHTML += `
    <div class="chosen-items" id="chosen-items" data-id =exist${menu.id} >
        <div id="right-side">
            <h3>${menu.name}</h3>
            <a href="#/" data-remove= option >remove</a>
        </div>
        <p>$${menu.price}</p>`    
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