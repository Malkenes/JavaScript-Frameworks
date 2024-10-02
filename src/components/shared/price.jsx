import { StyledPrice } from "./price.styles"
export default function Price({price, discountedPrice}) {
    if (price === discountedPrice) {
        return (<StyledPrice><p>{discountedPrice.toFixed(2)} kr</p></StyledPrice>)
    }
    else {
        const percentage = (100-(discountedPrice*100)/price).toFixed(0);
        return (<StyledPrice><p>{discountedPrice.toFixed(2)} kr</p><small>{percentage}%</small><s>{price.toFixed(2)} kr</s></StyledPrice>)
    }
}