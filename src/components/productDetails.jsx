import { StyledProductDetails } from "./productDetails.styles"
import { FullButton } from "./Button.styles"
export default function ProductDetails({product}) {
    return (
        <div>
            <StyledProductDetails>
                <div>
                    <img src={product.image.url} alt="" />
                </div>
                <div>
                    <h1>{product.title}</h1>
                    stars 
                    <div>{product.price}</div>
                    <FullButton>Add to Cart</FullButton>
                </div>
            </StyledProductDetails>
            <div>reviews</div>
        </div>
    )
}