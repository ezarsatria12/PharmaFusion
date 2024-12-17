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
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Icon } from "@iconify/react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useEffect } from "react"

const formSchema = z.object({
    username: z.string().min(3, {
        message: "Masukan username atau email minimal 3 karakter.",
    }),
    email: z.string().email({
        message: "Masukan email yang valid.",
    }),
    message: z.string().min(10, {
        message: "Masukan pesan minimal 10 karakter.",
    }),
})

export default function HasilDiagnosa({ result }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            password: "",
        },
    })

    function onSubmit(values) {
        console.log(values)
    }

    if (!result) {
        return <p>Memuat data hasil diagnosa...</p>;
    }

    return (
        <>
            <div className="flex justify-between items-center mt-10">
                <h1 className="font-semibold text-2xl text-gray-600">Hasil Diagnosa</h1>
            </div>
            <div className="mt-5">
                <p>
                    Dari hasil diagnosa, Anda teridentifikasi mengalami penyakit <b>{result.penyakit}</b>, yang merupakan kondisi kulit yang umum terjadi yang disebabkan oleh jamur. Berdasarkan analisis, kemungkinan Anda mengalami kondisi ini adalah sebesar <b>{result.probabilitas.toFixed(2)}%</b>.
                </p>
                <br />
                <p>
                    Berikut rekomendasi obat, gejala yang sering dialami, dan cara pencegahannya:
                </p>
                <br />
                <p>
                    <b>Obat:</b>
                    <ul>
                        {result.medicines.map((medicine, index) => (
                            <li key={index}>
                                <b>{medicine.name}</b>: {medicine.description}
                            </li>
                        ))}
                    </ul>
                </p>
                <br />
                <p><b>Gejala yang sering dialami:</b></p>
                <ul className="list-disc ml-4">
                    {result.symptoms ? (
                        result.symptoms.map((symptom, index) => (
                            <li key={index}>{symptom}</li>
                        ))
                    ) : (
                        <li>Data gejala tidak tersedia</li>
                    )}
                </ul>
                <br />
                <p><b>Cara pencegahan:</b></p>
                <ol className="list-decimal ml-4">
                    {result.precautions.map((precaution, index) => (
                        <li key={index}>{precaution}</li>
                    ))}
                </ol>
            </div>
            <hr className="mt-5" />
            <div className="bg-[#F5EBE7] w-full py-10 px-20 rounded-2xl mx-auto mt-10">
                <h1 className="text-app text-center text-xl font-bold">Umpan Balik</h1>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="mt-5 mx-auto w-full flex flex-col gap-4 text-app">
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <div className="relative">
                                            <Icon className="absolute left-3 top-1/2 -translate-y-1/2 " icon="ic:round-person" width="24" height="24" />
                                            <Input type="text" className="pl-11 bg-gray-200 shadow-md" placeholder="Username" {...field} />
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <div className="relative">
                                            <Icon className="absolute left-3 top-1/2 -translate-y-1/2 " icon="mdi:email-outline" width="23" height="23" />
                                            <Input type="email" className="pl-11 pr-10 bg-gray-200 shadow-md" placeholder="Masukan email anda" {...field} />
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Tuliskan masukan Anda"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit">Kirim</Button>
                    </form>
                </Form>
            </div>
        </>
    )
}
