import { closePopup, createCatDiv, createProductBtn, openCatPopup, returnPage, returnToMenu, transitionMail, transitionMenu } from "./landing-btns.js"
import { createCategory, getMenu, loadCat, createProduct, loadProducts} from "./menu-object.js"

const d = document

getMenu()
transitionMenu(".name-continue")
loadCat()
loadProducts()
returnPage()
closePopup(".popup-close", ".popup-div")
openCatPopup(".add-cat", ".popup-div")
createCategory(".create-cat", ".popup-div", ".category-input", createCatDiv)
createProduct(".create-product")
createProductBtn(".create-product")
transitionMail(".create-menu")
returnToMenu()