import { MdOutlineStar } from "react-icons/md";
import { StyledStarRating } from "./starRating.styles";
export default function StarRating({ rating, reviews }) {
    return (
        <StyledStarRating $rating={rating}>
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <small>{reviews} reviews</small>
        </StyledStarRating>
    );
}