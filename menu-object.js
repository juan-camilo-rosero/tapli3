import { continueBtn, createProductDiv, createProductPopup, deleteCatBtn } from "./landing-btns.js"
import { getData } from "./ls.js"

const d = document,
ls = localStorage,
resName = d.querySelector(".name input").value

export function getMenu() {
    const $nameSec = d.querySelector(".name"),
    $menuSec = d.querySelector(".menu-sec"),
    $title = d.querySelector("h1")

    let menu = getData("menu")

    // Cambiar a la pantalla del menú y cambiar el título por el nombre del restaurante

    if (Object.prototype.hasOwnProperty.call(menu, "name")){
        $nameSec.classList.add("hidden")
            setTimeout(() => {
                $nameSec.classList.add("none")
            }, 500);
            $menuSec.classList.remove("none")
            setTimeout(() => {
                $menuSec.classList.remove("hidden")
            }, 500);
            $title.textContent = menu.name
    }
    // Si no hay nada guardado, crear el objeto en el localStorage con el nombre de menu
    else{
        ls.setItem("menu", JSON.stringify({}))
    }
}

export function createCategory(btn, popup, input, createDiv) {
    const $btn = d.querySelector(btn),
    $popup = d.querySelector(popup),
    $categoryContent = d.querySelector(".category"),
    $input = d.querySelector(input)

    $btn.addEventListener("click", e => {
        let menu = getData("menu")
        if($input.vale != ""){
            let key = $input.value.toLowerCase()
            key = key.replace(/[^a-z0-9 ]/g, '')
            key = key.replace(/\s/g, '_')

            if(Object.prototype.hasOwnProperty.call(menu, key)){
                alert("Esa categoría ya existe")
            }
            else{
                menu[key] = {
                    options: [],
                    descriptions: [],
                    prices: []
                }
                if(Object.prototype.hasOwnProperty.call(menu, "options_names")){
                    menu.options.push($input.value)
                    menu.options_names.push(key)
                }
                else{
                    menu.options = [$input.value]
                    menu.options_names = [key]
                }
                ls.setItem("menu", JSON.stringify(menu))

                createDiv($input.value, $input.value)

                $input.value = ""

                $popup.classList.add("hidden")
                setTimeout(() => {
                    $popup.classList.add("none")
                    $categoryContent.classList.add("none")
                }
                , 500);
            }
        }
    })
}

export function loadCat(){
    const menu = getData("menu"),
    $categoriesDiv = d.querySelector(".categories")
    
    if(Object.prototype.hasOwnProperty.call(menu, "options")){
        const options = menu.options
        options.forEach(option => {
            const $div = d.createElement("div"),
            $title = d.createElement("h3"),
            $delete = d.createElement("img"),
            $productsDiv = d.createElement("div"),
            $btn = d.createElement("button")
    
            $div.classList.add("cat-div")

            $div.setAttribute("data-category", option.replace(" ", "_"))
    
            $delete.setAttribute("src", "assets/delete.png")
            $delete.setAttribute("alt", "Borrar categoría")
    
            $delete.classList.add("delete-cat")
            
            $title.classList.add("cat-title")
            $title.textContent = option
    
            $btn.classList.add("add-product")
    
            $productsDiv.classList.add("products")
    
            $btn.textContent = "Añadir plato"
    
            $div.appendChild($delete)
            $div.appendChild($title)
            $div.appendChild($productsDiv)
            $div.appendChild($btn)
            $categoriesDiv.appendChild($div)
    
            $btn.addEventListener("click", e => {
                createProductPopup(e.target)
            })
            deleteCatBtn(".delete-cat")
    
        });
    }
}

export function createProduct(btn) {
    const $btn = d.querySelector(btn),
    $popup = d.querySelector(".popup-div")

    $btn.addEventListener("click", e => {
        const category = $popup.getAttribute("data-category").toLowerCase(),
        passCategory = $popup.getAttribute("data-category"), // Existe porque si paso category en la otra función, da error
        $name = d.querySelector(".product-name"),
        $price = d.querySelector(".product-price"),
        $desc = d.querySelector(".product-desc"),
        menu = getData("menu"),
        index = menu.options_names.indexOf(category),
        objName = menu.options_names[index]
        console.log(menu.options_names);

        console.log(index);
        console.log(category);
        console.log(objName);

        if($name.value != "" && $price.value != ""){
            console.log(menu);
            console.log(menu[objName].options);
            menu[objName].options.push($name.value)
            menu[objName].prices.push($price.value)
            menu[objName].descriptions.push($desc.value)
    
            ls.setItem("menu", JSON.stringify(menu))
            createProductDiv($name.value, $desc.value, $price.value, passCategory)
        }
        else alert("Dejaste algún campo vacío")
    })
}

export function loadProducts() {
    const menu = getData("menu")
    if(Object.prototype.hasOwnProperty.call(menu, "options")){
        const options = menu.options_names,
        optNames = menu.options
    
        options.forEach((option, index) => {
            const cat = menu[option],
            catOptions = cat.options,
            catPrices = cat.prices,
            catDescriptions = cat.descriptions,
            $productsDiv = d.querySelector(`div[data-category=${menu.options[index].replace(" ", "_")}] .products`)
            try {
                catOptions.forEach((opt, i) => {
                    const $productDiv = d.createElement("div"),
                    $name = d.createElement("h3"),
                    $price = d.createElement("p"),
                    $desc = d.createElement("p"),
                    $deleteBtn = d.createElement("img")
        
                    $productDiv.classList.add("product-div")
                    $name.classList.add("product-div-title")
                    $desc.classList.add("product-div-desc")
                    $price.classList.add("product-div-price")
                    $deleteBtn.classList.add("delete-product")
        
                    $deleteBtn.setAttribute("src", "assets/delete.png")
                    $deleteBtn.setAttribute("alt", "Borrar plato")
        
                    $name.textContent = catOptions[i]
                    $price.textContent = catPrices[i]
                    $desc.textContent = catDescriptions[i]
        
                    $productDiv.appendChild($name)
                    $productDiv.appendChild($desc)
                    $productDiv.appendChild($price)
                    $productDiv.appendChild($deleteBtn)
        
                    $productsDiv.appendChild($productDiv)
    
                    $deleteBtn.addEventListener("click", e => deleteProduct(e))
                });
            } catch (error) {
                console.log(error);
            }
            });
        continueBtn()
    }
}

export function deleteProduct(e) {
    const $btn = e.target,
    $btnDiv = $btn.parentNode,
    $products = $btnDiv.parentNode,
    category = $btnDiv.parentNode.parentNode.getAttribute("data-category"),
    name = $btnDiv.firstChild.textContent,
    menu = getData("menu"),
    indexCat = menu.options.indexOf(category),
    obj = menu[menu.options_names[indexCat]],
    indexProduct = obj.options.indexOf(name)

    menu[menu.options_names[indexCat]].options.splice(indexProduct, 1)
    menu[menu.options_names[indexCat]].prices.splice(indexProduct, 1)
    menu[menu.options_names[indexCat]].descriptions.splice(indexProduct, 1)

    ls.setItem("menu", JSON.stringify(menu))
    $products.removeChild($btnDiv)
    continueBtn()
}