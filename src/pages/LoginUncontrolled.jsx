import { login } from '../services/auth'
import { useNavigate } from 'react-router'
import React, { useState } from 'react'

// בטופס לא מבוקר אי אפשר לבדוק תקינות בזמן הקלדה, כי הערכים לא נשמרים ב־state
// ו־React לא יודע מה מוקלד. הבדיקה מתבצעת רק בשליחת הטופס, בפונקציה שב־action.


export default function LoginUncontrolled() {
    const navigate = useNavigate()
    const [fieldErrors, setFieldErrors] = useState({})
    const [error, setError] = useState("")
    const [values, setValues] = useState({ email: "chef@recipes.com", password: "" })
const handleLogin = (formData) => {
  const email = formData.get("email")
  const password = formData.get("password")
  setValues({ email, password })
  setFieldErrors({})
  setError("")
  if (password.length < 6) {
  setFieldErrors({ password: "הסיסמא חייבת להכיל לפחות 6 תווים" })
  return
}
if (!email){
    setFieldErrors({email: "אימייל הוא שדה חובה"})
    return
}
 const user = login({ email, password })
    if(user)
    {

        console.log(user)
        navigate("/recipes")
    }
    else{
        setError("אימייל או סיסמא שגויים")
    }
}

  return (
    <div><h1>התחברות: טופס לא מבוקר</h1>
    <form action={handleLogin}>
        <input type="email" name="email" defaultValue={values.email} />
        {fieldErrors.email && <p>{fieldErrors.email}</p>}
        <input type="password" name="password" defaultValue={values.password} />
        {fieldErrors.password && <p>{fieldErrors.password}</p>}
        <button>התחבר</button>
    </form>
    {error && <p>{error}</p>}
    
    </div>
  )
}
