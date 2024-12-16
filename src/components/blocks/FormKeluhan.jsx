import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useEffect } from "react";

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

const gejalaKulit = [
    {
        id: "1",
        label: "Gatal",
    },
    {
        id: "2",
        label: "Ruam Kulit",
    },
    {
        id: "3",
        label: "Bentuk noda atau erupsi pada kulit",
    },
    {
        id: "4",
        label: "Bercak dischromic",
    },
    {
        id: "5",
        label: "Kulit mengelupas",
    },
    {
        id: "6",
        label: "Bekas luka",
    },
    {
        id: "7",
        label: "Bercak merah di tubuh",
    },
    {
        id: "8",
        label: "Jerawat bernanah",
    },
    {
        id: "9",
        label: " Lapisan seperti perak",
    },
];
const gejalaPernapasan = [
    {
        id: "1",
        label: "Batuk",
    },
    {
        id: "2",
        label: "Sesak napas",
    },
    {
        id: "3",
        label: "Nyeri dada",
    },
    {
        id: "4",
        label: "Dahak kental",
    },
    {
        id: "5",
        label: "Demam tinggi",
    },
    {
        id: "6",
        label: "Keluarnya dahak",
    },
    {
        id: "7",
        label: "Denyut jantung cepat",
    },
    {
        id: "8",
        label: "Riwayat keluarga",
    },
    {
        id: "9",
        label: "Napas berbau darah",
    },
    {
        id: "10",
        label: "Sputum berwarna karat",
    }
]
const gejalaPencernaan = [
    {
        id: "1",
        label: "Sakit Perut"
    },
    {
        id: "2",
        label: "Asam lambung"
    },
    {
        id: "3",
        label: "Luka pada lidah"
    },
    {
        id: "4",
        label: "Muntah"
    },
    {
        id: "5",
        label: "Sembelit"
    },
    {
        id: "6",
        label: "Diare"
    },
    {
        id: "7",
        label: "Perut kembung"
    },
    {
        id: "8",
        label: "Mual"
    },
    {
        id: "9",
        label: "Kehilangan nafsu makan"
    }
];
const gejalaHatiKemih = [
    {
        id: "1",
        label: "Kulit kuning"
    },
    {
        id: "2",
        label: "Mata kuning"
    },
    {
        id: "3",
        label: "Urine gelap"
    },
    {
        id: "4",
        label: "Nyeri saat buang air kecil"
    },
    {
        id: "5",
        label: "Mata yang terlihat anti-gigi"
    },
    {
        id: "6",
        label: "Keluarnya dahak"
    },
    {
        id: "7",
        label: "Denyut jantung cepat"
    }
];
const gejalaSaraf = [
    {
        id: "1",
        label: "Kelelahan"
    },
    {
        id: "2",
        label: "Pusing"
    },
    {
        id: "3",
        label: "Sakit kepala"
    },
    {
        id: "4",
        label: "Kebingungan atau perubahan kesadaran"
    },
    {
        id: "5",
        label: "Kehilangan berat badan"
    },
    {
        id: "6",
        label: "Gejolak atau cemas"
    },
    {
        id: "7",
        label: "Lelah mental"
    },
    {
        id: "8",
        label: "Tingkat gula darah tidak teratur"
    },
    {
        id: "9",
        label: "Kehilangan keseimbangan"
    },
    {
        id: "10",
        label: "Depresi"
    },
    {
        id: "11",
        label: "Iritabilitas"
    }
];
const gejalaMata = [
    {
        id: "1",
        label: "Mata merah"
    },
    {
        id: "2",
        label: "Penglihatan Kabur"
    },
    {
        id: "3",
        label: "Mata Cekung"
    }
]
const gejalaUmum = [
    {
        id: "1",
        label: "Demam Tinggi"
    },
    {
        id: "2",
        label: "Keringat Dingin"
    },
    {
        id: "3",
        label: "Kelemahan umum atau malaise"
    }
]
const gejalaLain = [
    {
        id: "1",
        label: "Nyeri sendi"
    },
    {
        id: "2",
        label: "Pembengkakan pada sendi"
    },
    {
        id: "3",
        label: "Perubahan suasana hati"
    }
]

const FormSchema = z.object({
    gejalaKulit: z.string().array().optional(),
    gejalaPernapasan: z.string().array().optional(),
    gejalaPencernaan: z.string().array().optional(),
    gejalaHatiKemih: z.string().array().optional(),
    gejalaSaraf: z.string().array().optional(),
    gejalaMata: z.string().array().optional(),
    gejalaUmum: z.string().array().optional(),
    gejalaLain: z.string().array().optional(),
    // gejalaKulit: z.array(z.string()).refine((value) => value.some((item) => item), {
    // gejalaPernapasan: z.array(z.string()).refine((value) => value.some((item) => item), {
    //     message: "pilih salah satu item",
    // }),
    // gejalaPencernaan: z.array(z.string()).refine((value) => value.some((item) => item), {
    //     message: "pilih salah satu item",
    // }),
    // gejalaHatiKemih: z.array(z.string()).refine((value) => value.some((item) => item), {
    //     message: "pilih salah satu item",
    // }),
    // gejalaSaraf: z.array(z.string()).refine((value) => value.some((item) => item), {
    //     message: "pilih salah satu item",
    // }),
    // gejalaMata: z.array(z.string()).refine((value) => value.some((item) => item), {
    //     message: "pilih salah satu item",
    // }),
    // gejalaUmum: z.array(z.string()).refine((value) => value.some((item) => item), {
    //     message: "pilih salah satu item",
    // }),
    // gejalaLain: z.array(z.string()).refine((value) => value.some((item) => item), {
    //     message: "pilih salah satu item",
    // }),
})

export default function FormKeluhan({ getValues, onNext }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            gejalaKulit: [],
            gejalaPernapasan: [],
            gejalaPencernaan: [],
            gejalaHatiKemih: [],
            gejalaSaraf: [],
            gejalaMata: [],
            gejalaUmum: [],
            gejalaLain: []
        }
    })

    function onSubmit(data) {
        getValues(data);
        onNext("3");
    }

    return (
        <>
            <div className="flex justify-between items-center mt-10">
                <h1 className="font-semibold text-2xl text-gray-600">Kaluhan Yang Dialami</h1>
            </div>
            <Form {...form}>
                <form className="mt-8 mx-12 space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="h-fit grid gap-10">
                            <FormField
                                control={form.control}
                                name="gejalaKulit"
                                render={() => (
                                    <FormItem>
                                        <div className="mb-4">
                                            <FormLabel className="text-base">Gejala Kulit</FormLabel>
                                            <FormDescription>
                                                Pilih gejala kulit yang dialami
                                            </FormDescription>
                                        </div>
                                        {gejalaKulit.map((item) => (
                                            <FormField
                                                key={item.id}
                                                control={form.control}
                                                name="gejalaKulit"
                                                render={({ field }) => {
                                                    return (
                                                        <FormItem
                                                            key={item.id}
                                                            className="flex flex-row items-start space-x-3 space-y-0"
                                                        >
                                                            <FormControl>
                                                                <Checkbox
                                                                    checked={field.value?.includes(item.id)}
                                                                    onCheckedChange={(checked) => {
                                                                        return checked
                                                                            ? field.onChange([...field.value, item.id])
                                                                            : field.onChange(
                                                                                field.value?.filter(
                                                                                    (value) => value !== item.id
                                                                                )
                                                                            )
                                                                    }}
                                                                />
                                                            </FormControl>
                                                            <FormLabel className="font-normal">
                                                                {item.label}
                                                            </FormLabel>
                                                        </FormItem>
                                                    )
                                                }}
                                            />
                                        ))}
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="gejalaPernapasan"
                                render={() => (
                                    <FormItem>
                                        <div className="mb-4">
                                            <FormLabel className="text-base">Gejala Pernapasan</FormLabel>
                                            <FormDescription>
                                                Pilih gejala pernapasan yang dialami
                                            </FormDescription>
                                        </div>
                                        {gejalaPernapasan.map((item) => (
                                            <FormField
                                                key={item.id}
                                                control={form.control}
                                                name="gejalaPernapasan"
                                                render={({ field }) => {
                                                    return (
                                                        <FormItem
                                                            key={item.id}
                                                            className="flex flex-row items-start space-x-3 space-y-0"
                                                        >
                                                            <FormControl>
                                                                <Checkbox
                                                                    checked={field.value?.includes(item.id)}
                                                                    onCheckedChange={(checked) => {
                                                                        return checked
                                                                            ? field.onChange([...field.value, item.id])
                                                                            : field.onChange(
                                                                                field.value?.filter(
                                                                                    (value) => value !== item.id
                                                                                )
                                                                            )
                                                                    }}
                                                                />
                                                            </FormControl>
                                                            <FormLabel className="font-normal">
                                                                {item.label}
                                                            </FormLabel>
                                                        </FormItem>
                                                    )
                                                }}
                                            />
                                        ))}
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="gejalaPencernaan"
                                render={() => (
                                    <FormItem>
                                        <div className="mb-4">
                                            <FormLabel className="text-base">Gejala Pencernaan</FormLabel>
                                            <FormDescription>
                                                Pilih gejala pencernaan yang dialami
                                            </FormDescription>
                                        </div>
                                        {gejalaPencernaan.map((item) => (
                                            <FormField
                                                key={item.id}
                                                control={form.control}
                                                name="gejalaPencernaan"
                                                render={({ field }) => {
                                                    return (
                                                        <FormItem
                                                            key={item.id}
                                                            className="flex flex-row items-start space-x-3 space-y-0"
                                                        >
                                                            <FormControl>
                                                                <Checkbox
                                                                    checked={field.value?.includes(item.id)}
                                                                    onCheckedChange={(checked) => {
                                                                        return checked
                                                                            ? field.onChange([...field.value, item.id])
                                                                            : field.onChange(
                                                                                field.value?.filter(
                                                                                    (value) => value !== item.id
                                                                                )
                                                                            )
                                                                    }}
                                                                />
                                                            </FormControl>
                                                            <FormLabel className="font-normal">
                                                                {item.label}
                                                            </FormLabel>
                                                        </FormItem>
                                                    )
                                                }}
                                            />
                                        ))}
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="gejalaHatiKemih"
                                render={() => (
                                    <FormItem>
                                        <div className="mb-4">
                                            <FormLabel className="text-base">Gejala Hati dan Saluran Kemih</FormLabel>
                                            <FormDescription>
                                                Pilih gejala hati dan saluran kemih yang dialami
                                            </FormDescription>
                                        </div>
                                        {gejalaHatiKemih.map((item) => (
                                            <FormField
                                                key={item.id}
                                                control={form.control}
                                                name="gejalaHatiKemih"
                                                render={({ field }) => {
                                                    return (
                                                        <FormItem
                                                            key={item.id}
                                                            className="flex flex-row items-start space-x-3 space-y-0"
                                                        >
                                                            <FormControl>
                                                                <Checkbox
                                                                    checked={field.value?.includes(item.id)}
                                                                    onCheckedChange={(checked) => {
                                                                        return checked
                                                                            ? field.onChange([...field.value, item.id])
                                                                            : field.onChange(
                                                                                field.value?.filter(
                                                                                    (value) => value !== item.id
                                                                                )
                                                                            )
                                                                    }}
                                                                />
                                                            </FormControl>
                                                            <FormLabel className="font-normal">
                                                                {item.label}
                                                            </FormLabel>
                                                        </FormItem>
                                                    )
                                                }}
                                            />
                                        ))}
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="h-fit grid gap-10">
                            <FormField
                                control={form.control}
                                name="gejalaSaraf"
                                render={() => (
                                    <FormItem className="h-fit">
                                        <div className="mb-4">
                                            <FormLabel className="text-base">Gejala sistem saraf</FormLabel>
                                            <FormDescription>
                                                Pilih gejala saraf yang dialami
                                            </FormDescription>
                                        </div>
                                        {gejalaSaraf.map((item) => (
                                            <FormField
                                                key={item.id}
                                                control={form.control}
                                                name="gejalaSaraf"
                                                render={({ field }) => {
                                                    return (
                                                        <FormItem
                                                            key={item.id}
                                                            className="flex flex-row items-start space-x-3 space-y-0"
                                                        >
                                                            <FormControl>
                                                                <Checkbox
                                                                    checked={field.value?.includes(item.id)}
                                                                    onCheckedChange={(checked) => {
                                                                        return checked
                                                                            ? field.onChange([...field.value, item.id])
                                                                            : field.onChange(
                                                                                field.value?.filter(
                                                                                    (value) => value !== item.id
                                                                                )
                                                                            )
                                                                    }}
                                                                />
                                                            </FormControl>
                                                            <FormLabel className="font-normal">
                                                                {item.label}
                                                            </FormLabel>
                                                        </FormItem>
                                                    )
                                                }}
                                            />
                                        ))}
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="gejalaMata"
                                render={() => (
                                    <FormItem>
                                        <div className="mb-4">
                                            <FormLabel className="text-base">Gejala Mata dan Penglihatan</FormLabel>
                                            <FormDescription>
                                                Pilih gejala mata yang dialami
                                            </FormDescription>
                                        </div>
                                        {gejalaMata.map((item) => (
                                            <FormField
                                                key={item.id}
                                                control={form.control}
                                                name="gejalaMata"
                                                render={({ field }) => {
                                                    return (
                                                        <FormItem
                                                            key={item.id}
                                                            className="flex flex-row items-start space-x-3 space-y-0"
                                                        >
                                                            <FormControl>
                                                                <Checkbox
                                                                    checked={field.value?.includes(item.id)}
                                                                    onCheckedChange={(checked) => {
                                                                        return checked
                                                                            ? field.onChange([...field.value, item.id])
                                                                            : field.onChange(
                                                                                field.value?.filter(
                                                                                    (value) => value !== item.id
                                                                                )
                                                                            )
                                                                    }}
                                                                />
                                                            </FormControl>
                                                            <FormLabel className="font-normal">
                                                                {item.label}
                                                            </FormLabel>
                                                        </FormItem>
                                                    )
                                                }}
                                            />
                                        ))}
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="gejalaUmum"
                                render={() => (
                                    <FormItem>
                                        <div className="mb-4">
                                            <FormLabel className="text-base">Gejala Umum</FormLabel>
                                            <FormDescription>
                                                Pilih gejala umum yang dialami
                                            </FormDescription>
                                        </div>
                                        {gejalaUmum.map((item) => (
                                            <FormField
                                                key={item.id}
                                                control={form.control}
                                                name="gejalaUmum"
                                                render={({ field }) => {
                                                    return (
                                                        <FormItem
                                                            key={item.id}
                                                            className="flex flex-row items-start space-x-3 space-y-0"
                                                        >
                                                            <FormControl>
                                                                <Checkbox
                                                                    checked={field.value?.includes(item.id)}
                                                                    onCheckedChange={(checked) => {
                                                                        return checked
                                                                            ? field.onChange([...field.value, item.id])
                                                                            : field.onChange(
                                                                                field.value?.filter(
                                                                                    (value) => value !== item.id
                                                                                )
                                                                            )
                                                                    }}
                                                                />
                                                            </FormControl>
                                                            <FormLabel className="font-normal">
                                                                {item.label}
                                                            </FormLabel>
                                                        </FormItem>
                                                    )
                                                }}
                                            />
                                        ))}
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="gejalaLain"
                                render={() => (
                                    <FormItem>
                                        <div className="mb-4">
                                            <FormLabel className="text-base">Gejala Lain</FormLabel>
                                            <FormDescription>
                                                Pilih gejala lain yang dialami
                                            </FormDescription>
                                        </div>
                                        {gejalaLain.map((item) => (
                                            <FormField
                                                key={item.id}
                                                control={form.control}
                                                name="gejalaLain"
                                                render={({ field }) => {
                                                    return (
                                                        <FormItem
                                                            key={item.id}
                                                            className="flex flex-row items-start space-x-3 space-y-0"
                                                        >
                                                            <FormControl>
                                                                <Checkbox
                                                                    checked={field.value?.includes(item.id)}
                                                                    onCheckedChange={(checked) => {
                                                                        return checked
                                                                            ? field.onChange([...field.value, item.id])
                                                                            : field.onChange(
                                                                                field.value?.filter(
                                                                                    (value) => value !== item.id
                                                                                )
                                                                            )
                                                                    }}
                                                                />
                                                            </FormControl>
                                                            <FormLabel className="font-normal">
                                                                {item.label}
                                                            </FormLabel>
                                                        </FormItem>
                                                    )
                                                }}
                                            />
                                        ))}
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <Button className="w-24" type="submit">Lanjut</Button>
                    </div>
                </form>
            </Form>
        </>
    )
}