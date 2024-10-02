import { MdOutlineStar } from "react-icons/md";
import { StyledStarRating } from "./starRating.styles";
export default function StarRating({ rating, size= "16" }) {
    return (
        <StyledStarRating $rating={rating}>
            {Array.from({length: 5}, (_,index) => (
                <MdOutlineStar key={index} size={size} /> 
            ))}
        </StyledStarRating>
    );
}