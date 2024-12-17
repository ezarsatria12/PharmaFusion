import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Calendar as CalendarIcon } from "lucide-react"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

const FormSchema = z.object({
    fullName: z.string({
        required_error: "Mohon masukkan nama lengkap.",
    }).min(1, {
        message: "Mohon masukkan nama lengkap.",
    }),
    age: z.coerce.number({
        required_error: "Mohon Masukan umur pasien.",
        invalid_type_error: "Age must be a number",
    }).positive({
        message: "Masukan umur yang valid.",
    }),
    gender: z.string({
        message: "Mohon pilih jenis kelamin.",
    }),
    dateOfBirth: z.date(),
    address: z.string({
        required_error: "Mohon masukkan alamat pasien.",
    }).min(1, {
        message: "Mohon masukkan alamat pasien.",
    }),
    phone: z.string({
        required_error: "Mohon masukkan nomor telepon pasien.",
    }).min(1, {
        message: "Mohon masukkan nomor telepon pasien.",
    }),
    email: z.string({
        required_error: "Mohon masukkan email pasien.",
    }).email({
        message: "Mohon masukkan email yang valid.",
    }),
    medicalHistory: z.string({
        required_error: "Mohon masukkan riwayat medis pasien.",
    }).min(1, {
        message: "Mohon masukkan riwayat medis pasien.",
    }),
    allergy: z.string({
        required_error: "Mohon masukkan alergi pasien.",
    }).min(1, {
        message: "Mohon masukkan alergi pasien.",
    }),
    surgeryHistory: z.string({
        required_error: "Mohon masukkan riwayat operasi pasien.",
    }).min(1, {
        message: "Mohon masukkan riwayat operasi pasien.",
    }),
    bodyWeight: z.coerce.number({
        required_error: "Mohon masukkan berat badan pasien.",
        invalid_type_error: "Berat badan harus berupa angka.",
    }).positive({
        message: "Masukan berat badan yang valid.",
    }),
    bodyHeight: z.coerce.number({
        required_error: "Mohon masukkan tinggi badan pasien.",
        invalid_type_error: "Tinggi badan harus berupa angka.",
    }).positive({
        message: "Masukan tinggi badan yang valid.",
    }),
    bloodPreasure: z.coerce.number({
        required_error: "Mohon masukkan tekanan darah pasien.",
        invalid_type_error: "Tekanan darah harus berupa angka.",
    }).positive({
        message: "Masukan tekanan darah yang valid.",
    }),
})

export default function FormDataMedis({ getValues, onNext }) {
    const form = useForm({
        resolver: zodResolver(FormSchema),
    })


    function handleSubmit(values) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        // console.log(values)
        getValues(values);
        onNext("2");
    }

    return (
        <>
            <div className="flex justify-between items-center mt-10">
                <h1 className="font-semibold text-2xl text-gray-600">Data Medis Pasien</h1>
                <Button className="bg-app shadow-lg">Data Lab</Button>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="mt-8 space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                        <FormField
                            control={form.control}
                            name="fullName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nama Lengkap</FormLabel>
                                    <FormControl>
                                        <Input className="border-gray-300 shadow-md" placeholder="Nama lengkap pasien" {...field} />
                                    </FormControl>
                                    <FormMessage className="text-xs" />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="age"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Umur</FormLabel>
                                    <FormControl>
                                        <Input type="number" className="border-gray-300 shadow-md" placeholder="Umur pasien sekarang" {...field} min={1} />
                                    </FormControl>
                                    <FormMessage className="text-xs" />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="gender"
                            render={({ field }) => (
                                <FormItem >
                                    <FormLabel>Jenis Kelamin</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger className="border-gray-300 shadow-md">
                                                <SelectValue placeholder="Pilih jenis kelamin" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent >
                                            <SelectItem value="Laki-Laki">Laki Laki</SelectItem>
                                            <SelectItem value="Perempuan">Perempuan</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage className="text-xs" />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="dateOfBirth"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Tanggal Lahir</FormLabel>
                                    <Popover>
                                        <PopoverTrigger className=" border-gray-300 shadow-md" asChild>
                                            <FormControl>
                                                <Button
                                                    variant={"outline"}
                                                    className={cn(
                                                        "w-full pl-3 text-left font-normal",
                                                        !field.value && "text-muted-foreground"
                                                    )}
                                                >
                                                    {field.value ? (
                                                        format(field.value, "dd MMMM yyyy")
                                                    ) : (
                                                        <span>Pilih Tanggal</span>
                                                    )}
                                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0" align="start">
                                            <Calendar
                                                mode="single"
                                                selected={field.value}
                                                onSelect={field.onChange}
                                                disabled={(date) =>
                                                    date > new Date() || date < new Date("1900-01-01")
                                                }
                                                initialFocus
                                                captionLayout="dropdown"
                                                fromYear={new Date().getFullYear() - 100}
                                                toDate={new Date(Date.now())}
                                            />
                                        </PopoverContent>
                                    </Popover>

                                    <FormMessage className="text-xs" />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="address"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Alamat</FormLabel>
                                    <FormControl>
                                        <Input className="border-gray-300 shadow-md" placeholder="Alamat pasien" {...field} />
                                    </FormControl>
                                    <FormMessage className="text-xs" />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nomor Telepon</FormLabel>
                                    <FormControl>
                                        <Input type="tel" pattern="[0-9]*" className="border-gray-300 shadow-md" placeholder="Nomor telepon pasien" {...field}
                                        />
                                    </FormControl>
                                    <FormMessage className="text-xs" />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input type="email" className="border-gray-300 shadow-md" placeholder="Email pasien" {...field} />
                                    </FormControl>
                                    <FormMessage className="text-xs" />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="medicalHistory"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Riwayat Medis</FormLabel>
                                    <FormControl>
                                        <Input className="border-gray-300 shadow-md" placeholder="Riwayat medis pasien" {...field} />
                                    </FormControl>
                                    <FormMessage className="text-xs" />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="allergy"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Alergi</FormLabel>
                                    <FormControl>
                                        <Input className="border-gray-300 shadow-md" placeholder="Alergi pasien" {...field} />
                                    </FormControl>
                                    <FormMessage className="text-xs" />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="surgeryHistory"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Riwayat Operasi</FormLabel>
                                    <FormControl>
                                        <Input className="border-gray-300 shadow-md" placeholder="Riwayat operasi pasien" {...field} />
                                    </FormControl>
                                    <FormMessage className="text-xs" />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="bodyWeight"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Berat Badan</FormLabel>
                                    <FormControl>
                                        <Input type="number" className="border-gray-300 shadow-md" placeholder="Berat badan pasien" {...field} min={1} />
                                    </FormControl>
                                    <FormMessage className="text-xs" />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="bodyHeight"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Tinggi Badan</FormLabel>
                                    <FormControl>
                                        <Input type="number" className="border-gray-300 shadow-md" placeholder="Tinggi badan pasien" {...field} min={1} />
                                    </FormControl>
                                    <FormMessage className="text-xs" />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="bloodPreasure"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Tekanan Darah</FormLabel>
                                    <FormControl>
                                        <Input type="number" className="border-gray-300 shadow-md" placeholder="Tekanan darah pasien" {...field} min={1} />
                                    </FormControl>
                                    <FormMessage className="text-xs" />
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