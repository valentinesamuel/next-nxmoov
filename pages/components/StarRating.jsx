import { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ numOfStar }) => {
  const [rating, setRating] = useState(numOfStar);
  const [hover, setHover] = useState(null);

  return (
    <div style={{ display: "flex" }}>
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;

        return (
          <label key={index}>
            <input
              style={{ display: "none" }}
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              style={{ cursor: "pointer", transition: "color 200ms" }}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
