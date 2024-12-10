import { MdOutlineStar } from "react-icons/md";
import { StyledStarRating } from "./starRating.styles";

export default function StarRating({ rating, size = "16" }) {
  return (
    <StyledStarRating>
      {Array.from({ length: 5 }, (_, index) => (
        <MdOutlineStar
          data-testid="star-icon"
          key={index}
          size={size}
          fill={Math.floor(rating) > index ? "#FACC15" : "gray"}
        />
      ))}
      <small>({rating})</small>
    </StyledStarRating>
  );
}
