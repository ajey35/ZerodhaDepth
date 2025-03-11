"use client"

import { useState } from "react"
import Input from "../components/input"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"

interface UserInput {
  email?: string
  password?: string
}

function SignUp() {
  const [userCred, setUserCred] = useState<UserInput>({})
  const navigate = useNavigate()

  async function handleSubmit() {
    try {
      const resp = await axios.post("https://marketdepth.duckdns.org/user/signup/", {
        email: userCred.email,
        password: userCred.password,
      })
      const data = resp.data
      localStorage.setItem("id", data.id)
      navigate("/depth")
    } catch (error) {
       alert("Invalid Credentials!")
      console.error("Authentication error:", error)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Welcome Back</CardTitle>
          <CardDescription className="text-center">Login to access your trading dashboard</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Input label="Email" placeholder="Enter your email" setUserCred={setUserCred} type="email" mode="email" />
            <Input
              label="Password"
              placeholder="Enter your password"
              setUserCred={setUserCred}
              type="password"
              mode="password"
            />
            <Button className="w-full" onClick={handleSubmit}>
              Login
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default SignUp

