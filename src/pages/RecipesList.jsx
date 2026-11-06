import React from 'react'
import { useEffect, useState } from 'react'
export default function RecipesList() {
const [recipes, setRecipes] = useState([])
const [loading, setLoading] = useState(true)
const [error, setError] = useState('')

useEffect(() => {
  fetch('https://dummyjson.com/recipes')
    .then((res) => {
      if (!res.ok) throw new Error("שגיאה בטעינת המתכונים");
      return res.json();
    })
    .then((data) =>{
        setRecipes(data.recipes)
        console.log(data)
    } )
    
    .catch((err) => setError(err.message))
    .finally(() => setLoading(false));
}, []);


  return (
    <div>
        <h1>מתכונים</h1>
    </div>
  )
}
