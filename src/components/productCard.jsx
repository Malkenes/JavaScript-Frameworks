import { StyledProductCard, StyledProductCardInfo } from "./productCard.styles";
import StarRating from "./starRating";
import Price from "./price";
export default function ProductCard({data}) {
    return (
    <StyledProductCard>
        <div>
            <img src={data.image.url} alt="" />
        </div>
        <StyledProductCardInfo>
            <h3>{data.title}</h3>
            <StarRating rating={Math.floor(data.rating)} reviews={data.reviews.length} />
            <Price price={data.price} discountedPrice={data.discountedPrice} />
        </StyledProductCardInfo>
    </StyledProductCard>
    );
}