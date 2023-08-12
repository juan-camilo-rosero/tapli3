import { getData } from "./ls.js";
import {deleteProduct } from "./menu-object.js";

const d = document,
ls = localStorage

export function transitionMenu(btn) {
    const $name = d.querySelector(".name"),
    $btn = d.querySelector(btn),
    $menuSec = d.querySelector(".menu-sec"),
    $input = d.querySelector(".name input"),
    $title = d.querySelector("h1")

    $btn.addEventListener("click", e => {
        if($input.value != ""){
            const menuObj = getData("menu")
            menuObj.name = $input.value
            ls.setItem("menu", JSON.stringify(menuObj))
            $name.classList.add("hidden")
            setTimeout(() => {
                $name.classList.add("none")
            }, 500);
            $menuSec.classList.remove("none")
            setTimeout(() => {
                $menuSec.classList.remove("hidden")
            }, 500);
            $title.textContent = $input.value
        }
        else{
            alert("Debes introducir el nombre de tu restaurante")
        }
    })
}

export function returnPage() {
    const $menuSec = d.querySelector(".menu-sec"),
    $name = d.querySelector(".name"),
    $btn = d.querySelector(".return")

    $btn.addEventListener("click", e => {
        if ($menuSec.classList.contains("hidden")){
            console.log("uwu");
        }

        else{
            $menuSec.classList.add("hidden")
        setTimeout(() => {
            $menuSec.classList.add("none")
            $name.classList.remove("none")
        }, 500);
        setTimeout(() => {
            $name.classList.remove("hidden")
        }, 600);
        }
    })
}

export function closePopup(closeBtn, popup) {
    const $btn = d.querySelector(closeBtn),
    $popup = d.querySelector(popup),
    $categoryContent = d.querySelector(".category"),
    $name = d.querySelector(".product-name"),
    $price = d.querySelector(".product-price"),
    $desc = d.querySelector(".product-desc")

    $btn.addEventListener("click", e => {
        $popup.classList.add("hidden")
        setTimeout(() => {
            $popup.classList.add("none")
            $categoryContent.classList.add("none")
            $name.value = ""
            $price.value = ""
            $desc.value = ""
        }
        , 500);
    })
}

export function openCatPopup(btn, popup) {
    const $btn = d.querySelector(btn),
    $popup = d.querySelector(popup),
    $categoryContent = d.querySelector(".category")

    $btn.addEventListener("click", e => {
        $popup.classList.remove("none")
        $categoryContent.classList.remove("none")
        setTimeout(() => $popup.classList.remove("hidden")
        , 100);
    })
}

export function deleteCat(btns) {
    const $btns = d.querySelectorAll(btns),
    menu = getData("menu")

    $btns.forEach($btn => {
        const $parent = $btn.parentNode,
        $title = $btn.nextSibling,
        $grandParent = $parent.parentNode
        $btn.addEventListener("click", e => {
            let confirmVal = confirm("Quieres eliminar la categoría " + $title.textContent + "?")
            try {
                if(confirmVal){
                    let titleIndex = menu.options.indexOf($title.textContent),
                    key = menu.options_names[titleIndex]
                    menu.options.splice(titleIndex, 1)
                    menu.options_names.splice(titleIndex, 1)
                    delete menu[key]
                    ls.setItem("menu", JSON.stringify(menu))
                    $grandParent.removeChild($parent)
                }
            } catch (error) {
                console.log("El confirm me cae mal, lo debo cambiar en algún momento :3");
            }
        })
    });
}

export function deleteCatBtn(btns) {
    const $btns = d.querySelectorAll(btns),
    $lastBtn = $btns[$btns.length - 1],
    $parent = $lastBtn.parentNode,
    $title = $lastBtn.nextSibling,
    $grandParent = $parent.parentNode
    let menu = getData("menu")

    $lastBtn.addEventListener("click", e => {
        let confirmVal = confirm("Quieres eliminar la categoría " + $title.textContent + "?")
        if(confirmVal){
            menu = getData("menu")
            let titleIndex = menu.options.indexOf($title.textContent),
            key = menu.options_names[titleIndex]
            menu.options.splice(titleIndex, 1)
            menu.options_names.splice(titleIndex, 1)
            delete menu[key]
            ls.setItem("menu", JSON.stringify(menu))
            $grandParent.removeChild($parent)
            continueBtn()
            }
    })
}

export function createCatDiv(name, catName) {
    const $div = d.createElement("div"),
    $title = d.createElement("h3"),
    $delete = d.createElement("img"),
    $categoriesDiv = d.querySelector(".categories"),
    $productsDiv = d.createElement("div"),
    $btn = d.createElement("button")
    
    $div.classList.add("cat-div")

    $div.setAttribute("data-category", catName.replace(" ", "_"))

    $delete.setAttribute("src", "assets/delete.png")
    $delete.setAttribute("alt", "Borrar categoría")

    $delete.classList.add("delete-cat")
    
    $title.classList.add("cat-title")
    $title.textContent = name

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
    continueBtn()
}

export function createProductPopup(btn) {

    const $btn = btn,
    $parent = $btn.parentNode,
    $deleteBtn = $parent.firstChild,
    title = $deleteBtn.nextSibling.textContent,
    $popup = d.querySelector(".popup-div"),
    $productContent = d.querySelector(".product")

    $popup.classList.remove("none")
    $productContent.classList.remove("none")
    setTimeout(() => $popup.classList.remove("hidden")
    , 100);

    $popup.setAttribute("data-category", title.replace(" ", "_"))
}

export function createProductBtn(btn) {
    const $btn = d.querySelector(btn),
    $popup = d.querySelector(".popup-div"),
    $productContent = d.querySelector(".product"),
    $name = d.querySelector(".product-name"),
    $price = d.querySelector(".product-price"),
    $desc = d.querySelector(".product-desc")

    $btn.addEventListener("click", e => {
        if($name.value != "" && $price.value != ""){
            $popup.classList.add("hidden")
            setTimeout(() => {
            $popup.classList.add("none")
            $productContent.classList.add("none")
            }, 500)

            $name.value = ""
            $price.value = ""
            $desc.value = ""
            continueBtn()
        }
    })
}

export function createProductDiv(name, desc, price, category) {
    const $div = d.createElement("div"),
    $name = d.createElement("h3"),
    $price = d.createElement("p"),
    $desc = d.createElement("p"),
    $deleteBtn = d.createElement("img"),
    $productDiv = d.querySelector(`div[data-category=${category}] .products`)

    $div.classList.add("product-div")
    $name.classList.add("product-div-title")
    $desc.classList.add("product-div-desc")
    $price.classList.add("product-div-price")
    $deleteBtn.classList.add("delete-product")

    $deleteBtn.setAttribute("src", "assets/delete.png")
    $deleteBtn.setAttribute("alt", "Borrar plato")

    $name.textContent = name
    $price.textContent = price
    $desc.textContent = desc

    $div.appendChild($name)
    $div.appendChild($desc)
    $div.appendChild($price)
    $div.appendChild($deleteBtn)

    $productDiv.appendChild($div)

    $deleteBtn.addEventListener("click", e => {
        deleteProduct(e)
        continueBtn()
    })
}

export function transitionMail(btn) {
    const $btn = d.querySelector(btn),
    $menuSec = d.querySelector(".menu-sec"),
    $mailSec = d.querySelector(".mail")

    $btn.addEventListener("click", e => {
        if($btn.classList.contains("active")){
            $menuSec.classList.add("hidden")
            setTimeout(() => {
                $menuSec.classList.add("none")
            }, 500);
            $mailSec.classList.remove("none")
            setTimeout(() => {
                $mailSec.classList.remove("hidden")
            }, 500);
        }
        else alert("No has creado ninguna sección o hay alguna sección vacía")
    })
}

export function returnToMenu() {
    const $mailSec = d.querySelector(".mail"),
    $menuSec = d.querySelector(".menu-sec"),
    $btn = d.querySelector(".return-menu")

    $btn.addEventListener("click", e => {
        $mailSec.classList.add("hidden")
        setTimeout(() => {
            $mailSec.classList.add("none")
            $menuSec.classList.remove("none")
        }, 500);
        setTimeout(() => {
            $menuSec.classList.remove("hidden")
        }, 600);
    })
}

export function continueBtn() {
    const menu = getData("menu"),
    keys = menu.options_names,
    $btn = d.querySelector(".create-menu"),
    $menuInput = d.querySelector(".menu-input")

    let isEmpty = false

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i],
        len = menu[key].options.length
        if(len == 0) {
        isEmpty = true
        break
        }
    }

    if(isEmpty) $btn.classList.remove("active")
    else {
        $btn.classList.add("active")
        const menu = getData("menu")
        $menuInput.value = JSON.stringify(menu)
    }

    if(menu.options_names.length == 0) $btn.classList.remove("active")
}