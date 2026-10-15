import { addProduct, deleteProduct, getProducts } from "./products.js";

export const initializeEvents = () => {
    const button = document.getElementById("add-product-btn");
    const productName = document.getElementById("productname");
    const quantity = document.getElementById("quantity");
    const price = document.getElementById("price");
    const deleteBtn = document.getElementById("delete-product-btn");

    const list = document.getElementById("product-list");

    button.addEventListener("click", function () {
        const product = {
            productName: productName.value.trim(),
            quantity: quantity.value,
            price: price.value
        };

        if(!addProduct(product)){
            alert("Enter Product");
            return;
        }

        list.replaceChildren();

        getProducts().forEach(function (product) {
            const item = document.createElement('li');
            item.textContent = `${product.productName} - Quantity: ${product.quantity} - Price: ${product.price}`;
            list.appendChild(item);
        });
    });

    deleteBtn.addEventListener("click", function() {
        deleteProduct();

        
        list.replaceChildren();

        getProducts().forEach(function (product) {
            const item = document.createElement('li');
            item.textContent = `${product.productName} - Quantity: ${product.quantity} - Price: ${product.price}`;
            list.appendChild(item);
        });
    })
}