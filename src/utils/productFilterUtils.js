export function filterOnSale(products) {
    return products.filter(product => product.price !== product.discountedPrice);
}

export function filterByTag(products, tag) {

    return products.filter(product => product.tags.includes(tag));
}

export function getRandomProduct(products) {
    const randomIndex = Math.floor(Math.random() * products.length);
    return products[randomIndex];
}