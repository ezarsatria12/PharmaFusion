import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export default function ResetPasswordPage() {
    const [tab, setTab] = useState("");
    const [searchParams] = useSearchParams();
    const tParams = searchParams.get("t");
    useEffect(() => {
        setTab(tParams);
    }, [tParams]);


    return (
        <main className="wfull relative h-screen flex justify-center items-center bg-app px-5">
            <img
                className="absolute top-8 left-8"
                src="/logo.png"
                alt="logo"
                width={150}
            />
            <svg
                className="absolute opacity-70 max-w-md w-full top-0 right-0 rotate-180 transform scale-y-[-1]"
                viewBox="0 0 559 214"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M389.542 116.505C464 91.5315 513 46.5 549 -12H-15V208C19.2903 207.184 41.8024 207.25 75.6413 193.918C89.1441 186.655 126.273 169.234 164.967 153C202.527 137.242 269.877 130.472 298.658 129.79C338.773 128.368 359.89 126.45 389.542 116.505Z"
                    stroke="#D2D2D2"
                    strokeWidth="11"
                />
                <path
                    d="M379.437 105.813C443.173 84.3469 494.751 42.6613 525.5 -4H-4V196C28.1624 195.303 49.261 187.393 81 176C93.6648 169.794 128.506 150.872 164.799 137C200.028 123.534 263.198 117.748 290.193 117.166C328.07 114.81 351.679 114.07 379.437 105.813Z"
                    fill="#ffffff"
                />
            </svg>
            <svg
                className="absolute opacity-70  max-w-md w-full bottom-0 left-0 transform scale-y-[-1]"
                viewBox="0 0 559 214"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M389.542 116.505C464 91.5315 513 46.5 549 -12H-15V208C19.2903 207.184 41.8024 207.25 75.6413 193.918C89.1441 186.655 126.273 169.234 164.967 153C202.527 137.242 269.877 130.472 298.658 129.79C338.773 128.368 359.89 126.45 389.542 116.505Z"
                    stroke="#D2D2D2"
                    strokeWidth="11"
                />
                <path
                    d="M379.437 105.813C443.173 84.3469 494.751 42.6613 525.5 -4H-4V196C28.1624 195.303 49.261 187.393 81 176C93.6648 169.794 128.506 150.872 164.799 137C200.028 123.534 263.198 117.748 290.193 117.166C328.07 114.81 351.679 114.07 379.437 105.813Z"
                    fill="#ffffff"
                />
            </svg>
            {!tab && <InputEmail />}
            {tab == "1" && <CheckEmail />}
            {tab == "2" && <SetPassword />}
        </main>
    );
}
function InputEmail() {
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        const { email } = e.target.elements;
        console.log(email.value);
        navigate(`/reset-password?t=1`);
    };
    return (
        <div className="max-w-lg w-full z-50 shadow-lg border bg-white py-12 px-8 md:px-14 rounded-xl flex flex-col gap-2 items-center">
            <div className="flex w-fit p-2 text-white rounded-full bg-app">
                <Icon icon="mingcute:lock-fill" width="24" height="24" />
            </div>
            <h1 className="mt-2 font-bold text-2xl text-app">
                Lupa Password.
            </h1>
            <p className="text-app">
                Masukkan email Anda untuk mengatur ulang!
            </p>
            <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-6 mt-8"
            >
                <div className="relative">
                    <Icon
                        className="absolute text-app left-3 top-1/2 -translate-y-1/2 "
                        icon="mdi:email-outline"
                        width="23"
                        height="23"
                    />
                    <Input
                        required
                        type="email"
                        name="email"
                        className="pl-11 pr-10 bg-gray-200 shadow-md rounded-lg w-full"
                        placeholder="Masukan email anda"
                    />
                </div>
                <Button
                    type="submit"
                    className="bg-app hover:bg-app hover:bg-opacity-95"
                >
                    Reset Password
                </Button>
                <Button
                    variant="ghost"
                    type="button"
                    className="text-app hover:text-app"
                    onClick={() => navigate("/login")}
                >
                    <Icon
                        icon="akar-icons:arrow-left"
                        width="20"
                        height="20"
                    />
                    Back to Sign In
                </Button>
            </form>
        </div>
    )
}

function CheckEmail() {
    const navigate = useNavigate()
    const handleClick = () => {
        window.open("https://gmail.com");
        navigate(`/reset-password?t=2`);
    }

    return (
        <div className="max-w-lg w-full z-50 shadow-lg border bg-white py-12 px-8 md:px-14 rounded-xl flex flex-col gap-2 items-center">
            <div className="flex w-fit p-2 text-white rounded-full bg-app">
                <Icon icon="mdi:email-outline" width="24" height="24" />
            </div>
            <h1 className="mt-2 font-bold text-2xl text-app">
                Cek Email Anda
            </h1>
            <p className="text-app text-center">
                Kami telah mengirimkan pemulihan kata sandi ke email Anda
            </p>
            <Button
                className="bg-app w-full mt-8 hover:bg-app hover:bg-opacity-95"
                onClick={() => handleClick()}
            >
                Buka Aplikasi Email
            </Button>
            <p className="text-center text-app mt-4 text-sm"> Tidak menerima email? Periksa filter spam Anda,
                atau coba alamat email lain </p>
            <Button
                variant="ghost"
                type="button"
                className="text-app hover:text-app mt-4"
                onClick={() => navigate("/login")}
            >
                <Icon
                    icon="akar-icons:arrow-left"
                    width="20"
                    height="20"
                />
                Back to Sign In
            </Button>
        </div>
    )
}

function SetPassword() {
    const [open, setOpen] = useState(false);

    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        const { password1, password2 } = e.target.elements;
        console.log(password1.value, password2.value);
        setOpen(true);
    };
    return (
        <div className="max-w-lg w-full z-50 shadow-lg border bg-white py-12 px-8 md:px-14 rounded-xl flex flex-col gap-2 items-center">
            <div className="flex w-fit p-2 text-white rounded-full bg-app">
                <Icon icon="mingcute:lock-fill" width="24" height="24" />
            </div>
            <h1 className="mt-2 font-bold text-2xl text-app">
                Atur Kata Sandi Baru
            </h1>
            <p className="text-app text-center text-sm">
                Kata sandi baru Anda harus berbeda dengan kata sandi yang digunakan sebelumnya
            </p>
            <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-6 mt-8"
            >
                <div className="">
                    <Label htmlFor="password1">Password Baru</Label>
                    <Input
                        required
                        type="password"
                        name="password1"
                        id="password1"
                        className=" bg-gray-200 shadow-md mt-2 rounded-lg w-full"
                        placeholder="Masukan password baru"
                    />
                    <p className="text-xs mt-2 mb-4 text-app ml-2">Minimal harus terdiri dari 8 karakter</p>
                    <Label htmlFor="password2">Konfirmasi Password</Label>
                    <Input
                        required
                        type="password"
                        name="password2"
                        id="password2"
                        className=" bg-gray-200 shadow-md mt-2 rounded-lg w-full"
                        placeholder="Konfirmasi password baru"
                    />
                </div>
                <Button
                    type="submit"
                    className="bg-app hover:bg-app hover:bg-opacity-95"
                >
                    Reset Password
                </Button>
                <Button
                    variant="ghost"
                    type="button"
                    className="text-app hover:text-app"
                    onClick={() => navigate("/login")}
                >
                    <Icon
                        icon="akar-icons:arrow-left"
                        width="20"
                        height="20"
                    />
                    Back to Sign In
                </Button>
            </form>
            <AlertDialog open={open}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Reset Kata Sandi Berhasil!</AlertDialogTitle>
                        <AlertDialogDescription>
                            Kata sandi Anda telah berhasil diatur ulang.
                            Selanjutnya masuk ke akun anda menggunakan password baru Anda.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogAction onClick={() => navigate("/login")}>Lanjut</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}
