import { useState } from "react";

export default function RecipesCarousel() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  return <div>RecipesCarousel</div>;
}