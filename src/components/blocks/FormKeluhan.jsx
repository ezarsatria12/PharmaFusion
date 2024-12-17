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

const keluhan = [
    { id: "gatal", name: "Gatal" },
    { id: "ruam_kulit", name: "Ruam Kulit" },
    { id: "erupsi_kulit_bernodul", name: "Erupsi Kulit Bernodul" },
    { id: "bersin_terus_menerus", name: "Bersin Terus-Menerus" },
    { id: "menggigil", name: "Menggigil" },
    { id: "demam_dingin", name: "Demam Dingin" },
    { id: "nyeri_sendi", name: "Nyeri Sendi" },
    { id: "nyeri_perut", name: "Nyeri Perut" },
    { id: "asam_lambung", name: "Asam Lambung" },
    { id: "luka_pada_lidah", name: "Luka pada Lidah" },
    { id: "penyusutan_otot", name: "Penyusutan Otot" },
    { id: "muntah", name: "Muntah" },
    { id: "nyeri_saat_buang_air_kecil", name: "Nyeri saat Buang Air Kecil" },
    { id: "bintik_pada_air_kencing", name: "Bintik pada Air Kencing" },
    { id: "kelelahan", name: "Kelelahan" },
    { id: "penambahan_berat_badan", name: "Penambahan Berat Badan" },
    { id: "kecemasan", name: "Kecemasan" },
    { id: "tangan_dan_kaki_dingin", name: "Tangan dan Kaki Dingin" },
    { id: "perubahan_suasana_hati", name: "Perubahan Suasana Hati" },
    { id: "penurunan_berat_badan", name: "Penurunan Berat Badan" },
    { id: "gelisah", name: "Gelisah" },
    { id: "lesu", name: "Lesu" },
    { id: "bercak_di_tenggorokan", name: "Bercak di Tenggorokan" },
    { id: "gula_darah_tidak_teratur", name: "Gula Darah Tidak Teratur" },
    { id: "batuk", name: "Batuk" },
    { id: "demam_tinggi", name: "Demam Tinggi" },
    { id: "mata_cekung", name: "Mata Cekung" },
    { id: "sesak_napas", name: "Sesak Napas" },
    { id: "keringat_berlebih", name: "Keringat Berlebih" },
    { id: "dehidrasi", name: "Dehidrasi" },
    { id: "gangguan_pencernaan", name: "Gangguan Pencernaan" },
    { id: "sakit_kepala", name: "Sakit Kepala" },
    { id: "kulit_kekuningan", name: "Kulit Kekuningan" },
    { id: "urine_gelap", name: "Urine Gelap" },
    { id: "mual", name: "Mual" },
    { id: "kehilangan_nafsu_makan", name: "Kehilangan Nafsu Makan" },
    { id: "nyeri_di_belakang_mata", name: "Nyeri di Belakang Mata" },
    { id: "nyeri_punggung", name: "Nyeri Punggung" },
    { id: "sembelit", name: "Sembelit" },
    { id: "sakit_perut", name: "Sakit Perut" },
    { id: "diare", name: "Diare" },
    { id: "demam_ringan", name: "Demam Ringan" },
    { id: "urine_kuning", name: "Urine Kuning" },
    { id: "mata_kuning", name: "Mata Kuning" },
    { id: "gagal_hati_akut", name: "Gagal Hati Akut" },
    { id: "kelebihan_cairan", name: "Kelebihan Cairan" },
    { id: "pembengkakan_perut", name: "Pembengkakan Perut" },
    { id: "kelenjar_getah_bening_bengkak", name: "Kelenjar Getah Bening Bengkak" },
    { id: "rasa_tidak_enak_badan", name: "Rasa Tidak Enak Badan" },
    { id: "penglihatan_buram_dan_terdistorsi", name: "Penglihatan Buram dan Terdistorsi" },
    { id: "lendir", name: "Lendir" },
    { id: "iritasi_tenggorokan", name: "Iritasi Tenggorokan" },
    { id: "kemerahan_pada_mata", name: "Kemerahan pada Mata" },
    { id: "tekanan_sinus", name: "Tekanan Sinus" },
    { id: "pilek", name: "Pilek" },
    { id: "hidung_tersumbat", name: "Hidung Tersumbat" },
    { id: "nyeri_dada", name: "Nyeri Dada" },
    { id: "kelemahan_pada_anggota_tubuh", name: "Kelemahan pada Anggota Tubuh" },
    { id: "detak_jantung_cepat", name: "Detak Jantung Cepat" },
    { id: "nyeri_saat_buang_air_besar", name: "Nyeri saat Buang Air Besar" },
    { id: "nyeri_di_area_anus", name: "Nyeri di Area Anus" },
    { id: "tinja_berdarah", name: "Tinja Berdarah" },
    { id: "iritasi_di_anus", name: "Iritasi di Anus" },
    { id: "nyeri_leher", name: "Nyeri Leher" },
    { id: "pusing", name: "Pusing" },
    { id: "kram", name: "Kram" },
    { id: "memar", name: "Memar" },
    { id: "obesitas", name: "Obesitas" },
    { id: "kaki_bengkak", name: "Kaki Bengkak" },
    { id: "pembuluh_darah_bengkak", name: "Pembuluh Darah Bengkak" },
    { id: "wajah_dan_mata_bengkak", name: "Wajah dan Mata Bengkak" },
    { id: "pembesaran_kelenjar_tiroid", name: "Pembesaran Kelenjar Tiroid" },
    { id: "kuku_rapuh", name: "Kuku Rapuh" },
    { id: "pembengkakan_ekstremitas", name: "Pembengkakan Ekstremitas" },
    { id: "rasa_lapar_berlebihan", name: "Rasa Lapar Berlebihan" },
    { id: "kontak_di_luar_pernikahan", name: "Kontak di Luar Pernikahan" },
    { id: "bibir_kering_dan_terasa_bertingling", name: "Bibir Kering dan Terasa Bertingling" },
    { id: "bicara_cadel", name: "Bicara Cadel" },
    { id: "nyeri_lutut", name: "Nyeri Lutut" },
    { id: "nyeri_sendi_panggul", name: "Nyeri Sendi Panggul" },
    { id: "kelemahan_otot", name: "Kelemahan Otot" },
    { id: "leher_kaku", name: "Leher Kaku" },
    { id: "sendi_bengkak", name: "Sendi Bengkak" },
    { id: "kekakuan_pergerakan", name: "Kekakuan Pergerakan" },
    { id: "gerakan_memutar", name: "Gerakan Memutar" },
    { id: "kehilangan_keseimbangan", name: "Kehilangan Keseimbangan" },
    { id: "tidak_stabil", name: "Tidak Stabil" },
    { id: "kelemahan_satu_sisi_tubuh", name: "Kelemahan Satu Sisi Tubuh" },
    { id: "kehilangan_penciuman", name: "Kehilangan Penciuman" },
    { id: "ketidaknyamanan_kandung_kemih", name: "Ketidaknyamanan Kandung Kemih" },
    { id: "bau_tidak_sedap_pada_air_kencing", name: "Bau Tidak Sedap pada Air Kencing" },
    { id: "rasa_kencing_terus_menerus", name: "Rasa Kencing Terus-Menerus" },
    { id: "keluar_gas", name: "Keluar Gas" },
    { id: "gatal_dalam", name: "Gatal Dalam" },
    { id: "penampilan_toksik_(tifus)", name: "Penampilan Toksik (Tifus)" },
    { id: "depresi", name: "Depresi" },
    { id: "mudah_tersinggung", name: "Mudah Tersinggung" },
    { id: "nyeri_otot", name: "Nyeri Otot" },
    { id: "kesadaran_berubah", name: "Kesadaran Berubah" },
    { id: "bintik_merah_di_tubuh", name: "Bintik Merah di Tubuh" },
    { id: "sakit_perut_bawah", name: "Sakit Perut Bawah" },
    { id: "menstruasi_tidak_normal", name: "Menstruasi Tidak Normal" },
    { id: "bercak_tidak_warna", name: "Bercak Tidak Berwarna" },
    { id: "mata_berair", name: "Mata Berair" },
    { id: "nafsu_makan_meningkat", name: "Nafsu Makan Meningkat" },
    { id: "buang_air_kecil_berlebihan", name: "Buang Air Kecil Berlebihan" },
    { id: "riwayat_keluarga", name: "Riwayat Keluarga" },
    { id: "dahak_lendir", name: "Dahak Lendir" },
    { id: "dahak_berkarat", name: "Dahak Berkarat" },
    { id: "kurang_konsentrasi", name: "Kurang Konsentrasi" },
    { id: "gangguan_penglihatan", name: "Gangguan Penglihatan" },
    { id: "menerima_transfusi_darah", name: "Menerima Transfusi Darah" },
    { id: "menerima_injeksi_tidak_steril", name: "Menerima Injeksi Tidak Steril" },
    { id: "koma", name: "Koma" },
    { id: "pendarahan_perut", name: "Pendarahan Perut" },
    { id: "perut_kembung", name: "Perut Kembung" },
    { id: "riwayat_konsumsi_alkohol", name: "Riwayat Konsumsi Alkohol" },
    { id: "kelebihan_cairan.1", name: "Kelebihan Cairan.1" },
    { id: "darah_dalam_dahak", name: "Darah dalam Dahak" },
    { id: "pembuluh_vena_yang_menyolok_di_betis", name: "Pembuluh Vena yang Menyolok di Betis" },
    { id: "berdebar-debar", name: "Berdebar-debar" },
    { id: "nyeri_saat_berjalan", name: "Nyeri saat Berjalan" },
    { id: "jerawat_bernanah", name: "Jerawat Bernanah" },
    { id: "komedo", name: "Komedo" },
    { id: "pengelupasan", name: "Pengelupasan" },
    { id: "kulit_mengelupas", name: "Kulit Mengelupas" },
    { id: "debu_seperti_perak", name: "Debu seperti Perak" },
    { id: "lekukan_kecil_pada_kuku", name: "Lekukan Kecil pada Kuku" },
    { id: "kuku_meradang", name: "Kuku Meradang" },
    { id: "lepuhan", name: "Lepuhan" },
    { id: "luka_merah_di_sekitar_hidung", name: "Luka Merah di Sekitar Hidung" },
    { id: "kerak_kuning_keluar", name: "Kerak Kuning Keluar" }
]

const FormSchema = z.object({
    keluhan: z.string().array().optional()
})

export default function FormKeluhan({ getValues, onNext }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            keluhan: []
        }
    })

    function mapToBinarySelection(gejala, selectedGejala) {
        return gejala.map((item) => selectedGejala.includes(item.id) ? 1 : 0);
    }
    function onSubmit(data) {
        const transformedData = [
            ...mapToBinarySelection(keluhan, data.keluhan),
        ];
        onNext(transformedData);
    }

    return (
        <>
            <div className="flex justify-between items-center mt-10">
                <h1 className="font-semibold text-2xl text-gray-600">Keluhan Yang Dialami</h1>
            </div>
            <Form {...form}>
                <form className="mt-8 mx-12 space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="gap-4">
                        <FormField
                            control={form.control}
                            name="keluhan"
                            render={() => (
                                <FormItem>
                                    <div className="mb-4">
                                        <FormDescription>
                                            Pilih keluhhan yang dialami Pasien
                                        </FormDescription>
                                    </div>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                        {keluhan.map((item) => (
                                            <FormField
                                                key={item.id}
                                                control={form.control}
                                                name="keluhan"
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
                                                                {item.name}
                                                            </FormLabel>
                                                        </FormItem>
                                                    )
                                                }}
                                            />
                                        ))}
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="flex justify-end">
                        <Button className="w-24" type="submit">Lanjut</Button>
                    </div>
                </form>
            </Form>
        </>
    )
}