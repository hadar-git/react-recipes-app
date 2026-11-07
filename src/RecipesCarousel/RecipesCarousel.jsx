import { useEffect, useState } from "react";

const URL = "https://dummyjson.com/recipes?limit=6&select=name,image";

export default function RecipesCarousel() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadImages() {
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error("שגיאה בטעינה: " + response.status);
        }
        const data = await response.json();
        const urls = data.recipes.map((recipe) => recipe.image);
        setImages(urls);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }
    loadImages();
  }, []);

  if (loading) {
    return <div className="message-carousel">טוען...</div>;
  }

  if (error) {
    return <div className="error message-carousel">{error}</div>;
  }

  return <div>{images.length} תמונות נטענו</div>;
}