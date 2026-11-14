import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import { schema } from '../utils/schema'
import { login } from '../services/auth'

export default function LoginRhf() {
  const navigate = useNavigate()
  const [error, setError] = useState("")

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: joiResolver(schema),
    defaultValues: { email: "chef@recipes.com", password: "" },
    mode: "onTouched",
  })

  const onSubmit = (data) => {
    setError("")
    const user = login(data)
    if (user) {
      navigate("/recipes")
    } else {
      setError("אימייל או סיסמא שגויים")
    }
  }

  return (
    <div>
      <h1>התחברות: react-hook-form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="email" {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}

        <input type="password" {...register("password")} />
        {errors.password && <p>{errors.password.message}</p>}

        <button>התחבר</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  )
}
