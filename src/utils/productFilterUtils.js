export function filterOnSale(products) {
    return products.filter(product => product.price !== product.discountedPrice);
}

export function filterByTag(products, tag, exclude = []) {

    return products.filter(product => product.tags.includes(tag) && product.id !== exclude.id);
}

export function getRandomProduct(products) {
    const randomIndex = Math.floor(Math.random() * products.length);
    return products[randomIndex];
}

export function getProductById(products, id) {
    const productById = products.find((product) => product.id === id);
    return productById;
}