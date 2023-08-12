import { createOptions, returnMenu, showDishes } from "./menu.js"

const d = document,
menu = {
    options:["Entradas", "Platos fuertes", "Bebidas", "Postres"],
    options_names: ["entradas", "platos_fuertes", "bebidas", "postres"],
    entradas: {
        options: ["Empanaditas de coctel", "Arepa de Choclo", "Ensalada de frutas", "Chorizo con arepa"],
        descriptions: ["de pollo o de carne", "con queso derretido", "con helado", "la receta tradicional"],
        prices: ["$9.000", "$12.000", "$10.000", "$8.000"]
    },
    platos_fuertes: {
        options: ["Punta de anca", "Milanesa", "Lomo salteado", "Pollo a la parrilla"],
        descriptions: ["jugosa y tierna", "empanizada y dorada", "salteado con vegetales", "sazonado a la perfección"],
        prices: ["$36.000", "$28.000", "$30.000", "$26.000"]
    },
    bebidas: {
        options: ["Refresco de limón", "Jugo de naranja", "Agua mineral", "Cerveza artesanal"],
        descriptions: ["natural y refrescante", "recién exprimido", "con gas", "elaborada localmente"],
        prices: ["$3.000", "$4.000", "$2.000", "$6.000"]
    },
    postres: {
        options: ["Tarta de manzana", "Helado de vainilla", "Flan de caramelo", "Brownie con helado"],
        descriptions: ["con crujiente masa", "cremoso y suave", "hecho en casa", "caliente y frío a la vez"],
        prices: ["$5.000", "$6.000", "$4.000", "$7.000"]
    }        
}

createOptions(menu)
showDishes(menu)
returnMenu(".return")