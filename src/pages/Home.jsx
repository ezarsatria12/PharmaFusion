import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router"
import bg_top_left from "../assets/hero-bg-top-left.svg"
import bg_right from "../assets/hero-bg-right.svg"
import ilustrator from "../assets/hero-ilustrator.png"
import triangle from "../assets/hero-accent-triangle.svg"
import introIcon from "../assets/introduction-additional-icon.svg"
import { Input } from "@/components/ui/input"
import { Icon } from "@iconify/react";

export default function HomePage() {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const { email, question } = e.target.elements
  }

  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden h-svh flex items-center px-10">
        <img className="absolute -z-50 top-0 w-[35%] left-0" src={bg_top_left} />
        <img className="absolute -z-50 top-0 -right-7 w-[59%]" src={bg_right} />
        <img className="absolute bottom-20 left-96" width={45} src={triangle} />
        <img className="absolute top-36 left-44 rotate-90" width={38} src={triangle} />
        <div className="flex-1">
          <h1 className="text-app font-bold text-5xl px-20 leading-tight">Kesehatan Anda adalah Prioritas Kami.</h1>
        </div>
        <div className="flex-1 h-svh w-full relative">
          <img className="absolute bottom-6 right-0 w-[470px]" src={ilustrator} />
        </div>
      </section>
      {/* Introduction Section */}
      <section className="my-10 px-[120px]">
        <div className="flex justify-between gap-40 h-32 items-center">
          <h2 className="font-bold text-3xl text-[#455A64] w-[50%]">
            <span className="text-[#FB773C]">PharmaFusion</span> - Comprehensive AI Medication Recommendation System Designed for You
          </h2>
          <img className="h-full" src={introIcon} />
        </div>
        <div className="flex gap-8 mt-12">
          <img className="w-[45%] aspect-[4/3] object-cover rounded" src="https://www.thebestvancouver.com/wp-content/uploads/2021/08/Best-Pharmacies-in-Vancouver-1.jpg.webp" alt="Grafis" />
          <div className="mt-8">
            <h2 className="font-bold text-2xl">Selamat Datang di PharmaFusion</h2>
            <p className="mt-4 text-justify">
              PharmaFusion — Platform terpercaya yang menyediakan rekomendasi obat terbaik untuk kebutuhan kesehatan Anda. Di sini, Anda dapat menemukan informasi tentang berbagai jenis obat, serta panduan penggunaan yang aman dan efektif. Temukan solusi pengobatan yang tepat dan nyaman, semua dalam genggaman tangan Anda.
            </p>
          </div>
        </div>
      </section>
      {/* Get In Touch Section */}
      <section className="px-[120px] bg-app text-white py-10 flex gap-12">
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-2xl">Butuh Konsultasi? <br />
            Silahkan Hubungi Kami, Kami Siap Membantu</h2>
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold">Kontak</h3>
            <p className="flex">
              Jl. Pelajar Pejuang 124 Majalengka Bandung Indonesia
            </p>
            <a href="tel:082223458790" className="text-white underline">0822-2345-8790</a>
            <a href="mailto:pharmafusion@gmail.com">pharmafusion@gmail.com</a>
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold">Social Media</h3>
            <div className="flex items-center gap-2">
              <a href=""><Icon icon="mdi:twitter" width="24" height="24" /></a>
              <a href=""><Icon icon="ic:baseline-facebook" width="24" height="24" /></a>
              <a href=""><Icon icon="mdi:github" width="24" height="24" /></a>
              <a href=""><Icon icon="ri:instagram-fill" width="24" height="24" /></a>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className=" bg-white rounded-xl text-foreground p-8 box-border w-1/2 flex flex-col gap-4">
          <h1 className="font-semibold text-2xl text-center text-app mb-2">Hubungi Kami</h1>
          <Input name="email" type="email" placeholder="Masukan email Anda" required />
          <Input name="question" type="text" placeholder="Pertanyaan Anda" required />
          <Button type="submit">Kirim</Button>
        </form>
      </section>
    </>
  )
}