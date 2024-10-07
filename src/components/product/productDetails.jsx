import { StyledProductDetails, StyledProductReview } from "./productDetails.styles"
import { FullButton } from "../Button.styles"
import StarRating from "../shared/starRating"
import Price from "../shared/price"
import { useCartStore } from "../../stores/useCartStore"
export default function ProductDetails({product}) {
    const { addToCart } = useCartStore();
    return (
        <section>
            <StyledProductDetails>
                <div>
                    <img src={product.image.url} alt={product.image.alt} />
                </div>
                <div>
                    <h1>{product.title}</h1>
                    <StarRating rating={Math.floor(product.rating)} size="24" />
                    <Price price={product.price} discountedPrice={product.discountedPrice} />
                    <FullButton onClick={() => addToCart(product)}>Add to Cart</FullButton>
                    <p>{product.description}</p>
                </div>
            </StyledProductDetails>
            <div>
                <h2>Customer Reviews</h2>
                {product.reviews.map((review) => (
                <StyledProductReview key={review.id}>
                    <StarRating rating={Math.floor(review.rating)} />
                    <p><b>By</b> {review.username}</p>
                    <p>{review.description}</p>
                </StyledProductReview>
                ))}

            </div>
        </section>
    )
}