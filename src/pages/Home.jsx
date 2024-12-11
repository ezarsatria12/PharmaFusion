import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router"
import bg_top_left from "../assets/hero-bg-top-left.svg"
import bg_right from "../assets/hero-bg-right.svg"
import ilustrator from "../assets/hero-ilustrator.png"
import triangle from "../assets/hero-accent-triangle.svg"

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <>
      <section className="relative overflow-hidden h-svh flex items-center px-10">
        <img className="absolute -z-50 top-0 w-[35%] left-0" src={bg_top_left} />
        <img className="absolute -z-50 top-0 -right-7 w-[58%]" src={bg_right} />
        <img className="absolute bottom-20 left-96" width={45} src={triangle} />
        <img className="absolute top-36 left-44 rotate-90" width={38} src={triangle} />
        <div className="flex-1">
          <h1 className="text-app font-bold text-5xl px-20 leading-tight">Kesehatan Anda adalah prioritas kami</h1>
        </div>
        <div className="flex-1 h-svh w-full relative">
          <img className="absolute bottom-6 right-0 w-[470px]" src={ilustrator} />
        </div>

      </section>
    </>
  )
}