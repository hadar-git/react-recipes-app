import { login } from '../services/auth'
import { useNavigate } from 'react-router'
import React, { useState } from 'react'


export default function LoginUncontrolled() {
    const navigate = useNavigate()
    const [error, setError] = useState("")
const handleLogin = (formData) => {
  const email = formData.get("email")
  const password = formData.get("password")
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
        <input type="email" name="email" defaultValue="chef@recipes.com"/>
        <input type="password" name= "password" />
        <button>התחבר</button>
    </form>
    {error && <p>{error}</p>}
    
    </div>
  )
}
