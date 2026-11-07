import { useState } from "react";
import RecipesCarousel from "./RecipesCarousel";

export default function RecipesCarouselPage() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow((prev) => !prev)}>
        {show ? "הסתר" : "הצג"}
      </button>
      {show && <RecipesCarousel />}
    </div>
  );
}