import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Icon } from "@iconify/react";

const team = [
    {
        name: "Tria Novitri",
        role: "Writer",
        instagram: "tria",
        image: "https://github.com/tria.png"
    },
    {
        name: "Puji Rachmawati",
        role: "Data Engineer",
        instagram: "puji",
        image: "https://github.com/puji.png"
    },
    {
        name: "Ezar Satria Permana",
        role: "Machine Learning",
        instagram: "Ezar",
        image: "https://github.com/ezar.png"
    },
    {
        name: "Kurnia Anggie Oktriana",
        role: "UI/UX Designer",
        instagram: "kurnia",
        image: "https://github.com/kurnia.png"
    },
    {
        name: "Nadia Nur Ismalia",
        role: "Frontend Developer",
        instagram: "nadia",
        image: "https://github.com/nadianurismalia.png"
    },
    {
        name: "Iqra Manaqibal Atqiya",
        role: "Backend Developer",
        instagram: "iqra",
        image: "https://github.com/iqra.png"
    },
]

export default function Team() {
    return (
        <main className="pt-20 pb-10 min-h-screen bg-app text-white px-20">
            <h1 className="mt-8 font-bold text-2xl text-center">Meet Our Team</h1>
            <p className="text-center mt-2">Developers, research and designers who built this system to help and recommend your medication.</p>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full mx-auto mt-8"
            >
                <CarouselContent>
                    {team.map((person, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <div className="bg-white rounded-lg text-app">
                                    <div className="flex flex-col gap-2 w-fit p-6">
                                        <img
                                            src={person.image}
                                            alt="team"
                                            className="rounded-md w-full aspect-square object-cover"
                                        />
                                        <h1 className="font-semibold mt-2 text-lg text-center">{person.name}</h1>
                                        <p className="text-center">{person.role}</p>
                                        <a className="flex items-center gap-1 mx-auto" href={`https://instagram.com/${person.instagram}`}><Icon icon="ri:instagram-fill" width="20" height="20" />{person.instagram}</a>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="text-gray-800" />
                <CarouselNext className="text-gray-800" />
            </Carousel>
        </main>
    );
}