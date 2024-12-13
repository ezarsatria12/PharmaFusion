import bg_top_left from "../assets/hero-bg-top-left.svg"
import bg_right from "../assets/hero-bg-right.svg"
import ilustrator from "../assets/hero-ilustrator.png"
import triangle from "../assets/hero-accent-triangle.svg"
import { Button } from "@/components/ui/button"
import { Icon } from "@iconify/react"

const review = [
    {
        username: "johndoe",
        Image: "https://github.com/johndoe.png",
        rating: 5,
        review: "Aplikasi yang bagus, sangat membantu!"
    },
    {
        username: "stephanie",
        Image: "https://github.com/stephanie.png",
        rating: 4,
        review: "Senang dengan fitur-fitur barunya, sangat direkomendasikan."
    },
]

export default function ReviewPage() {
    return (

        <main id="hero" className="relative overflow-hidden  min-h-svh flex px-10">
            <img className="absolute -z-50 top-0 w-[35%] left-0" src={bg_top_left} />
            <img className="absolute -z-50 top-0 -right-7 w-[59%]" src={bg_right} />
            <div className="flex-1 pt-40">
                <h1 className="font-bold text-3xl ">Review Pengguna</h1>
                <p className="mt-3">Lihat apa yang dikatakan pengguna tentang Pharmafusion</p>
                <Button className="mt-6 w-52">Tulis Ulasan</Button>
                <div className="grid grid-cols-2 gap-3 mt-8">
                    {
                        review.map((item, index) =>
                        (
                            <div key={index} className="flex gap-6">
                                <div className="bg-gray-400 w-80 p-5 bg-opacity-30 rounded-lg">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <img className="w-8 aspect-square rounded-full" src={item.Image} alt="profile" />
                                            <p>{item.username}</p>
                                        </div>
                                        <p className="flex">
                                            <Icon className="text-yellow-400" icon="ic:round-star" width="17" height="17" />
                                            <Icon className="text-yellow-400" icon="ic:round-star" width="17" height="17" />
                                            <Icon className="text-yellow-400" icon="ic:round-star" width="17" height="17" />
                                            <Icon className="text-yellow-400" icon="ic:round-star" width="17" height="17" />
                                            <Icon className="text-yellow-400" icon="ic:round-star" width="17" height="17" />
                                        </p>
                                    </div>
                                    <p className="mt-3">{item.review}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="flex-1 h-svh w-full relative">
                <img className="absolute bottom-6 right-0 w-[470px]" src={ilustrator} />
            </div>
        </main>

    )
}