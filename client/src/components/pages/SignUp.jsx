import { Card, CardTitle, CardHeader, CardContent, CardFooter} from "@/components/ui/card"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'
import API from '../../services/api'
import { Eye, EyeOff } from 'lucide-react'




export default function SignUp() {
    const [userName, setUserName ] = useState("")
    const [name, setName ] = useState("")
    const [email, setEmail ] = useState("")
    const [password, setPassword ] = useState("")
    const [loading, setLoading ] = useState(false)
    const [showPassword, setShowPassword ] = useState(false)
    const navigate = useNavigate()

    const handleSignUp = async () =>{
        if (!userName.trim() || !name.trim() || !password.trim() || !email.trim()) return alert("All fields are Required")
        setLoading(true)
        
        try {
            let payload = { userName, name, email, password }
            console.log(payload)
            const res = await API.post("/auth/register", payload)
            localStorage.setItem("token", res.data.token)
            setUserName("")
            setName("")
            setEmail("")
            setPassword("")
            navigate("/login")

        } catch (error) {
            console.log("signup error:", error)
            setError(error.response?.data?.message)
            alert(error.response?.data?.message || "Signup Failed")
        }finally{
            setLoading(false)
        }

        
    }
    

    return (
        <div className="flex flex-1 flex-col min-h-screen items-center justify-center bg-gray-100 dark:bg-zinc-100">
            
            
            <Card className="w-full max-w-md animate shadow-xl">
                <CardHeader>
                    <CardTitle className="text-center text-2xl font-bold">Registration Page</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Input
                    type="text"
                    placeholder="userName"
                    value={userName}
                    onChange={e=> setUserName(e.target.value)}
                    />
                    <Input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={e=> setName(e.target.value)}
                    />
                    <Input 
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                    <div className="relative">
                    <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="password"
                        value={password}
                        onChange={e=> setPassword(e.target.value)}
                    />
                    <Button variant="ghost" size="sm" className="absolute right-2 top-2 " onClick={()=>setShowPassword(prev => !prev)}>
                        {showPassword ? <Eye size={10}/> : <EyeOff size={10}/>}
                    </Button>
                    
                    </div>
                    
                    
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button onClick={handleSignUp} className="w-full">
                      { loading ? "Signing Up..." : "Sign Up" }
                    </Button>
                </CardFooter>
                <p className="text-sm text-center text-zinc-500 dark:text-zinc-300 mt-4 ">Aleady have an Account? 
                    <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
                </p>
            </Card>
        </div>
    )
}
