import { StyledProductDetails, StyledProductReview } from "./productDetails.styles"
import { FullButton } from "./Button.styles"
import StarRating from "./starRating"
import Price from "./price"
import { useCartStore } from "../stores/useCartStore"
export default function ProductDetails({product}) {
    const { cart, addToCart, increaseQuantity, decreaseQuantity, removeFromCart, totalItems } = useCartStore();
    console.log(cart);
    console.log(product);
    return (
        <div>
            <StyledProductDetails>
                <div>
                    <img src={product.image.url} alt={product.image.alt} />
                </div>
                <div>
                    <h1>{product.title}</h1>
                    <StarRating rating={Math.floor(product.rating)} />
                    <Price price={product.price} discountedPrice={product.discountedPrice} />
                    <FullButton onClick={() => addToCart(product)}>Add to Cart</FullButton>
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
        </div>
    )
}