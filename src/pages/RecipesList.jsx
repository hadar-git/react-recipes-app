import React from 'react'
import { useEffect, useState , useRef } from 'react'
import {Link, useSearchParams } from 'react-router';
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
    } )
    
    .catch((err) => setError(err.message))
    .finally(() => setLoading(false));
}, []);

const [searchParams, setSearchParams] = useSearchParams();
const search = searchParams.get("q") || "";   

const handleSearch = (e) => {
  const value = e.target.value
setSearchParams(value ? { q: value } : {}, { replace: true })  

}

const filtered = recipes.filter((recipe) =>
  recipe.name.toLowerCase().includes(search.toLowerCase()))

const  searchRef = useRef(null)
useEffect(() => {
  searchRef.current.focus()
}, [])


  return (
    <div>
        <h1>מתכונים</h1>
      {loading && <p>טוען...</p>}
      {error && <p>{error}</p>}
<input type="text" placeholder="חיפוש מתכון (באנגלית)" value={search} onChange={handleSearch}  ref={searchRef}/>
  {!loading && !error && filtered.length === 0 && <p>לא נמצאו מתכונים</p>}
    <ul>
        {filtered.map((recipe) => (
          <li key={recipe.id}> <Link to= {`/recipes/${recipe.id}`}>{recipe.name}</Link></li>))}
    </ul>
    </div>
  )
}
