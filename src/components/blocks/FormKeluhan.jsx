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
    { id: "1", label: "Gatal" },
    { id: "2", label: "Ruam Kulit" },
    { id: "3", label: "Bentuk noda atau erupsi pada kulit" },
    { id: "4", label: "Bercak dischromic" },
    { id: "5", label: "Kulit mengelupas" },
    { id: "6", label: "Bekas luka" },
    { id: "7", label: "Bercak merah di tubuh" },
    { id: "8", label: "Jerawat bernanah" },
    { id: "9", label: "Lapisan seperti perak" },
    { id: "10", label: "Bercak merah di sekitar hidung" },
    { id: "11", label: "Keluarnya nanah dari kulit" },
    { id: "12", label: "Noda seperti debu perak" },
    { id: "13", label: "Luka melepuh" },
    { id: "14", label: "Luka bernanah" },
    { id: "15", label: "Pus filled pimples" },
    { id: "16", label: "Blackheads" },
    { id: "17", label: "Scarring" },
    { id: "18", label: "Skin peeling" },
    { id: "19", label: "Silver-like dusting" },
    { id: "20", label: "Small dents in nails" },
    { id: "21", label: "Inflammatory nails" },
    { id: "22", label: "Blister" },
    { id: "23", label: "Red sore around nose" },
    { id: "24", label: "Yellow crust ooze" },
];

const gejalaPernapasan = [
    { id: "1", label: "Batuk" },
    { id: "2", label: "Sesak napas" },
    { id: "3", label: "Nyeri dada" },
    { id: "4", label: "Dahak kental" },
    { id: "5", label: "Demam tinggi" },
    { id: "6", label: "Keluarnya dahak" },
    { id: "7", label: "Denyut jantung cepat" },
    { id: "8", label: "Riwayat keluarga" },
    { id: "9", label: "Napas berbau darah" },
    { id: "10", label: "Sputum berwarna karat" },
    { id: "11", label: "Pendarahan dari paru-paru" },
    { id: "12", label: "Hidung tersumbat" },
    { id: "13", label: "Iritasi tenggorokan" },
    { id: "14", label: "Tekanan sinus" },
    { id: "15", label: "Cough" },
    { id: "16", label: "Breathlessness" },
    { id: "17", label: "Phlegm" },
    { id: "18", label: "Throat irritation" },
    { id: "19", label: "Redness of eyes" },
    { id: "20", label: "Sinus pressure" },
    { id: "21", label: "Runny nose" },
    { id: "22", label: "Congestion" },
    { id: "23", label: "Chest pain" },
    { id: "24", label: "Weakness in limbs" },
    { id: "25", label: "Fast heart rate" },
    { id: "26", label: "Pain during bowel movements" },
    { id: "27", label: "Pain in anal region" },
    
];

const gejalaPencernaan = [
    { id: "1", label: "Sakit Perut" },
    { id: "2", label: "Asam lambung" },
    { id: "3", label: "Luka pada lidah" },
    { id: "4", label: "Muntah" },
    { id: "5", label: "Sembelit" },
    { id: "6", label: "Diare" },
    { id: "7", label: "Perut kembung" },
    { id: "8", label: "Mual" },
    { id: "9", label: "Kehilangan nafsu makan" },
    { id: "10", label: "Nyeri di belakang mata" },
    { id: "11", label: "Pendarahan lambung" },
    { id: "12", label: "Distensi abdomen" },
    { id: "13", label: "Rasa panas di perut" },
    { id: "14", label: "Pengeluaran gas berlebihan" },
    
];

const gejalaHatiKemih = [
    { id: "1", label: "Kulit kuning" },
    { id: "2", label: "Mata kuning" },
    { id: "3", label: "Urine gelap" },
    { id: "4", label: "Nyeri saat buang air kecil" },
    { id: "5", label: "Urine berbau menyengat" },
    { id: "6", label: "Frekuensi buang air kecil meningkat" },
    { id: "7", label: "Ketidaknyamanan pada kandung kemih" },
    { id: "8", label: "Urine berbusa" },
    { id: "9", label: "Nyeri perut bagian bawah" },
    { id: "10", label: "Perubahan warna urine" },
    { id: "11", label: "Yellow urine" },
    { id: "12", label: "Yellowing of eyes" },
    { id: "13", label: "Acute liver failure" },
    { id: "14", label: "Fluid overload" },
    { id: "15", label: "Swelling of stomach" },
    { id: "16", label: "Swelled lymph nodes" },
    { id: "17", label: "Malaise" },
];

const gejalaSaraf = [
    { id: "1", label: "Kelelahan" },
    { id: "2", label: "Pusing" },
    { id: "3", label: "Sakit kepala" },
    { id: "4", label: "Kebingungan atau perubahan kesadaran" },
    { id: "5", label: "Kehilangan berat badan" },
    { id: "6", label: "Gejolak atau cemas" },
    { id: "7", label: "Lelah mental" },
    { id: "8", label: "Tingkat gula darah tidak teratur" },
    { id: "9", label: "Kehilangan keseimbangan" },
    { id: "10", label: "Depresi" },
    { id: "11", label: "Iritabilitas" },
    { id: "12", label: "Kehilangan bau" },
    { id: "13", label: "Kehilangan konsentrasi" },
    { id: "14", label: "Gerakan tidak stabil" },
    { id: "15", label: "Perasaan berputar" },
    { id: "16", label: "Depression" },
    { id: "17", label: "Irritability" },
];

const gejalaMata = [
    { id: "1", label: "Mata merah" },
    { id: "2", label: "Penglihatan Kabur" },
    { id: "3", label: "Mata Cekung" },
    { id: "4", label: "Gangguan visual" },
    { id: "5", label: "Pandangan kabur dan terdistorsi" },
    { id: "6", label: "Blurred and distorted vision" },
    { id: "7", label: "Visual disturbances" },
];

const gejalaUmum = [
    { id: "1", label: "Demam Tinggi" },
    { id: "2", label: "Keringat Dingin" },
    { id: "3", label: "Kelemahan umum atau malaise" },
    { id: "4", label: "Nyeri tubuh" },
    { id: "5", label: "Nyeri sendi" },
    { id: "6", label: "Pembengkakan pada sendi" },
    { id: "7", label: "Pembengkakan ekstremitas" },
    { id: "8", label: "Kuku rapuh" },
    { id: "9", label: "Nafsu makan meningkat" },
    { id: "10", label: "Rasa lemas" },
    { id: "11", label: "Weakness in limbs" },
    { id: "12", label: "Swollen legs" },
    { id: "13", label: "Swollen blood vessels" },
    { id: "14", label: "Puffy face and eyes" },
    { id: "15", label: "Enlarged thyroid" },
    { id: "16", label: "Brittle nails" },
    
];

const gejalaLain = [
    { id: "1", label: "Nyeri sendi" },
    { id: "2", label: "Pembengkakan pada sendi" },
    { id: "3", label: "Perubahan suasana hati" },
    { id: "4", label: "Pembengkakan perut" },
    { id: "5", label: "Gusi berdarah" },
    { id: "6", label: "Peningkatan rasa lapar" },
    { id: "7", label: "Cairan di rongga tubuh" },
    { id: "8", label: "Nyeri lutut" },
    { id: "9", label: "Nyeri sendi pinggul" },
    { id: "10", label: "Kaku leher" },
    { id: "11", label: "Nyeri berjalan" },
   
];


const FormSchema = z.object({
    gejalaKulit: z.string().array().optional(),
    gejalaPernapasan: z.string().array().optional(),
    gejalaPencernaan: z.string().array().optional(),
    gejalaHatiKemih: z.string().array().optional(),
    gejalaSaraf: z.string().array().optional(),
    gejalaMata: z.string().array().optional(),
    gejalaUmum: z.string().array().optional(),
    gejalaLain: z.string().array().optional(),
});

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
            gejalaLain: [],
        },
    });

    // Fungsi untuk mengonversi checkbox yang dipilih menjadi 1 dan 0
    function mapToBinarySelection(gejala, selectedGejala) {
        return gejala.map((item) => selectedGejala.includes(item.id) ? 1 : 0);
    }

    function onSubmit(data) {
        // Ubah data gejala menjadi array 1D dengan nilai 1 dan 0
        const transformedData = [
            ...mapToBinarySelection(gejalaKulit, data.gejalaKulit),
            ...mapToBinarySelection(gejalaPernapasan, data.gejalaPernapasan),
            ...mapToBinarySelection(gejalaPencernaan, data.gejalaPencernaan),
            ...mapToBinarySelection(gejalaHatiKemih, data.gejalaHatiKemih),
            ...mapToBinarySelection(gejalaSaraf, data.gejalaSaraf),
            ...mapToBinarySelection(gejalaMata, data.gejalaMata),
            ...mapToBinarySelection(gejalaUmum, data.gejalaUmum),
            ...mapToBinarySelection(gejalaLain, data.gejalaLain),
        ];

        onNext(transformedData);  // Kirim data dalam bentuk array 1D
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