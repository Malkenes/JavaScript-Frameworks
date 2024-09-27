export default function Price({price, discountedPrice}) {
    if (price === discountedPrice) {
        return (<div><big>{price} kr</big></div>)
    }
    else {
        return (<div><big>{discountedPrice} kr</big><small><s>{price} kr</s></small></div>)
    }
}