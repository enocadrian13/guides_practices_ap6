const products = []
//Function 
export const addProduct = (product) => {
    if (!product || !product.productName.trim()) {
        return false;
    }


    products.push(product);
    return true;
}

export const deleteProduct = () => {
    if(!products){
        alert("Theres no product");
        return false;
    }

    products.pop();
    alert("Product is removed")
    return true;
}

export const getProducts = () => {
    return [...products];
}