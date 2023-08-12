import { createOptions, returnMenu, showDishes } from "./menu.js"

const d = document,
menu = {"name":"Donde los hermanos","mazorcadas":{"options":["Sencilla","Doble","Costillas BBQ"],"descriptions":["maíz tierno, pollo en salsa BBQ, chorizo a la parrilla, queso doble crema y tocineta","el doble de grande de la sencilla con un poquito más de proteína","250gr de costillas BBQ con 100 gr de papa criolla"],"prices":["$12.000","$24.000","$12.000"]},"options":["Mazorcadas","Bebidas","Hamburguesas"],"options_names":["mazorcadas","bebidas","hamburguesas"],"bebidas":{"options":["Coca-Cola en lata","Té","Agua"],"descriptions":["","",""],"prices":["$2.000","$2.000","$2.000"]},"hamburguesas":{"options":["Tradicional","Tradicional Doble","Ranchera","Combo con papas"],"descriptions":["Pan artesanal / tortilla / arepa, 125gr de carne, queso cheddar, tocineta, huevo de codorniz, papa cabello de ángel, cebolla caramelizada y tomate","Pan artesanal / tortilla / arepa, 125gr de carne X2, queso cheddar X2, tocineta X2, huevo de codorniz, papa cabello de ángel, cebolla caramelizada y tomate","Pan artesanal / tortilla / arepa, chorizo santarrosano, 125gr de carne, queso cheddar, jalapeños, huevo de codorniz, papa cabello de ángel y cebolla caramelizada",""],"prices":["$11.000","$16.000","$13.000","$5.000 adicionales"]}}

createOptions(menu)
showDishes(menu)
returnMenu(".return")