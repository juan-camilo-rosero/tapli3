const d = document,
$menuDiv = d.querySelector(".menu"),
$productsDiv = d.querySelector(".products-div"),
$productsDivOptions = d.querySelector(".product-options")

export function createOptions(menu) {
    const options = menu.options
    options.forEach(option => {
        // Create the option element
        const $optionDiv = d.createElement("div"),
        $optionText = d.createElement("h2")

        $optionDiv.classList.add("option")
        $optionText.textContent = option
        $optionDiv.appendChild($optionText)

        // Show option in the main
        $menuDiv.appendChild($optionDiv)
    });
}

export function showDishes(menu) {
    const $options = d.querySelectorAll(".option")
    $options.forEach((option, i) => {
        option.addEventListener("click", e => {
            let key = menu.options_names[i],
            options = menu[key].options,
            descriptions = menu[key].descriptions,
            prices = menu[key].prices

            // Hide options

            $menuDiv.classList.add("hidden")
            setTimeout(() => {
                $menuDiv.classList.add("none")
            }, 400);

            // Create products

            const $title = d.createElement("h2")
            $title.classList.add("product-title")
            $title.textContent = option.textContent

            $productsDivOptions.appendChild($title)

            options.forEach((opt, index) => {
                const $product = d.createElement("div"),
                $name = d.createElement("p"),
                $description = d.createElement("p"),
                $price = d.createElement("p")
    
                $product.classList.add("product")
                $name.classList.add("product-name")
                $description.classList.add("product-description")
                $price.classList.add("product-price")
    
                $name.textContent = opt
                $description.textContent = descriptions[index]
                $price.textContent = prices[index]
    
                $product.appendChild($name)
                $product.appendChild($description)
                $product.appendChild($price)
    
                // Show products in the main
    
                $productsDivOptions.appendChild($product)
            });
            $productsDiv.classList.remove("none")
            setTimeout(() => {
                $productsDiv.classList.remove("hidden")
            }, 400);
        })
    });
}

export function returnMenu(btn) {
    const $btn = d.querySelector(btn)

    $btn.addEventListener("click", e => {
        // $menuDiv.innerHTML = ""
        $productsDiv.classList.add("hidden")
        setTimeout(() => {
                $productsDiv.classList.add("none")
                $productsDivOptions.innerHTML = ""
                $menuDiv.classList.remove("none")
            }, 400);
            setTimeout(() => {
                $menuDiv.classList.remove("hidden")
            }, 500);
    })
}