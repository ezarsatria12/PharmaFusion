import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router"

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center">
      <h1 className='text-center my-10'>Home</h1>
      <Button onClick={() => navigate("/login")} className="w-fit">Login</Button>
    </div>
  )
}