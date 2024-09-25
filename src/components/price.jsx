export default function Price({price, discountedPrice}) {
    if (price === discountedPrice) {
        return (<div><big>{price}</big></div>)
    }
    else {
        return (<div><small><s>{price} kr</s></small><big>{discountedPrice} kr</big></div>)
    }
}