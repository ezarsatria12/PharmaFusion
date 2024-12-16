import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Icon } from "@iconify/react"
import { useState, useEffect } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"
import bg_accent from "../assets/hero-bg-accent.svg"
import bg_button from "../assets/bg-button-accent.svg"
import ilustrator from "../assets/hero-ilustrator.png"
import { useAuth } from "@/utils/AuthProvider"
import { Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const formSchema = z.object({
  username: z.string().min(3, {
    message: "Masukan username atau email minimal 3 karakter.",
  }),
  password:
    z.string()
})
export default function LoginPage() {
  const [pwdType, setPwdType] = useState('password');
  const [eyeIcon, setEyeIcon] = useState("mdi:eye-off-outline");
  const { login } = useAuth()
  const [loading, setLoading] = useState(false)

  const { toast } = useToast()
  const navigate = useNavigate()

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  })
  async function onSubmit(values) {
    try {
      setLoading(true)
      // Dummy Login, ganti dedngan api login yang sudah dibuat dan sesuaikan untuk response dan requestnya
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      })
      if (response.ok) {
        const data = await response.json()
        console.log(data);
        login(data.accessToken)
      } else if (response.status === 400) {
        toast({
          variant: "destructive",
          title: "Login Gagal",
          description: "Username atau Password salah.",
        })
      } else {
        toast({
          variant: "destructive",
          title: "Login Gagal",
          description: "Terjadi kesalahan, silahkan coba lagi.",
        })
      }
    } catch (error) {
      console.error(error)
      toast({
        variant: "destructive",
        title: "Login Gagal",
        description: "Terjadi kesalahan, silahkan coba lagi.",
      })
    } finally {
      setLoading(false)
    }
  }

  const handlePwdToggle = () => {
    if (pwdType === 'password') {
      setEyeIcon("mdi:eye-outline");
      setPwdType('text')
    } else {
      setEyeIcon("mdi:eye-off-outline")
      setPwdType('password')
    }
  }

  const { isAuthenticated } = useAuth()

  if (isAuthenticated) {
    return <Navigate to="/pasien" replace />
  }

  return (
    <main className="flex">
      <div className="text-white p-5 hidden flex-col items-center w-full justify-center min-h-screen bg-app lg:flex">
        <img className="object-contain h-fit" src="/logo.png" alt="Logo" width={120} />
        <h1 className="text-center mt-4 space text-4xl font-bold">Halo! Selamat datang di <br /> PharmaFusion</h1>
        <p className="text-lg font-medium mt-2">Belum memiliki akun?</p>
        <button onClick={() => navigate("/register", { replace: true })} className="relative mt-2 w-[160px]">
          <img className="mx-auto" src={bg_button} width={150} />
          <span className="absolute left-1/2 -translate-x-1/2 top-5 -translate-y-1/2 font-bold text-xl">Sign Up</span>
        </button>
        <img src={ilustrator} width={300} />
      </div>

      <div className="relative flex flex-col w-full min-h-screen p-5 gap-4 bg-[#E7DED8] justify-center">
        <img className="absolute bottom-0 left-0" src={bg_accent} width={360} />
        <img className="absolute top-0 right-0 rotate-180" src={bg_accent} width={360} />
        <img className="absolute top-5" src="/logo.png" alt="Logo" width={120} />
        <h1 className="z-10 text-3xl font-bold text-app text-center">Sign In</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="z-10 mx-auto w-full max-w-96 flex flex-col gap-4 text-app">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Icon className="absolute left-3 top-1/2 -translate-y-1/2 " icon="ic:round-person" width="24" height="24" />
                      <Input type="text" className="pl-11 bg-gray-200 shadow-md" placeholder="Email atau username" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Icon className="absolute left-3 top-1/2 -translate-y-1/2 " icon="material-symbols:lock" width="23" height="23" />
                      <Input type={pwdType} className="pl-11 pr-10 bg-gray-200 shadow-md" placeholder="Password" {...field} />
                      <Icon onClick={() => handlePwdToggle()} className="absolute right-3 top-1/2 -translate-y-1/2  cursor-pointer hover:bg-gray-300 rounded" icon={eyeIcon} width="20" height="20" />
                    </div>
                  </FormControl>
                  <FormDescription className="flex justify-end">
                    <Link to={"/reset-password"} className="">Lupa Password?</Link>
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={loading}>
              {
                loading && <Loader2 className="animate-spin" />
              }
              Sign In
            </Button>
            <p className="text-sm text-center text-gray-600">Belum Punya? <Link className="text-app" to="/register" replace>Sign Up</Link></p>
          </form>
        </Form>

      </div>
    </main>
  )
}