import { MdOutlineStar } from "react-icons/md";
import { StyledStarRating } from "./starRating.styles";
export default function StarRating({ rating }) {
    return (
        <StyledStarRating $rating={rating}>
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
        </StyledStarRating>
    );
}