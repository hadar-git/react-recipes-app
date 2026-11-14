import { Routes, Route } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
// ↓ כאן כל אחת מוסיפה את ה־import שלה ↓
import About from "./pages/About";
import RecipesList from "./pages/RecipesList";
import RecipeDetails from "./pages/RecipeDetails";
import LoginRhf from "./pages/LoginRhf";
import LoginUncontrolled from "./pages/LoginUncontrolled";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* ↓ כאן כל אחת מוסיפה את ה־Route שלה ↓ */}
        <Route path="about" element={<About />} />
        <Route path="recipes" element={<RecipesList />} />
        <Route path="recipes/:id" element={<RecipeDetails />} />
        <Route path="login/uncontrolled" element={<LoginUncontrolled/>}/>
        <Route path="login/rhf" element={<LoginRhf/>}/>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
