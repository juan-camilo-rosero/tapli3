import { createOptions, returnMenu, showDishes } from "./menu.js"

const d = document,
menu = {"name":"Donde los Hermanos","options":["Mazorcadas","Hamburguesas","Bebidas","Ubicación y horarios"],"options_names":["mazorcada","hamburguesas","bebidas","ubicación_y_horarios"],"mazorcada":{"options":["Sencilla","Doble","Costillas BBQ"],"descriptions":["maíz tierno, pollo en salsa BBQ, chorizo a la parrilla, queso doble crema y tocineta","el doble de grande de la sencilla con un poquito más de proteína","250gr de costillas BBQ con 100 gr de papa criolla"],"prices":["$12.000","$24.000","$12.000"]},"hamburguesas":{"options":["Tradicional","Tradicional Doble","Ranchera","Ranchera Doble","Combo con papas"],"descriptions":["pan artesanal / tortilla / arepa, 125gr de carne, queso cheddar, tocineta, huevo de codorniz, papa cabello de ángel, cebolla caramelizada y tomate","pan artesanal / tortilla / arepa, 125gr de carne X2, queso cheddar X2, tocineta X2, huevo de codorniz, papa cabello de ángel, cebolla caramelizada y tomate","pan artesanal / tortilla / arepa, chorizo santarrosano, 125gr de carne, queso cheddar, jalapeños, huevo de codorniz, papa cabello de ángel y cebolla caramelizada","pan artesanal / tortilla / arepa, chorizo santarrosano X2, 125gr de carne X2, queso cheddar X2, jalapeños, huevo de codorniz, papa cabello de ángel y cebolla caramelizada",""],"prices":["$11.000","$16.000","$13.000","$18.000","$5.000 adicionales"]},"bebidas":{"options":["Coca-Cola en lata","Té","Agua"],"descriptions":["","",""],"prices":["$2.000","$2.000","$2.000"]},"ubicación_y_horarios":{"options":["Plaza Ché"],"descriptions":[""],"prices":["En las tardes :3"]}}

createOptions(menu)
showDishes(menu)
returnMenu(".return")