import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage, } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { Textarea } from "@/components/ui/textarea";
import { useAuth } from "@/utils/AuthProvider";

export default function UserSetting() {
    const { user: authUser } = useAuth();

    const [file, setFile] = useState(null);
    const [user, setUser] = useState(authUser);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFile(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
    }
    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setUser((prev) => ({ ...prev, [name]: value }));
    }

    return (
        <main className="w-full flex bg-app p-4 min-h-screen ">
            <div className="bg-white ml-48 w-full rounded-2xl text-foreground py-10 px-10 md:px-32 h-full">
                <h1 className="font-semibold text-2xl text-gray-600">Akun Anda</h1>
                <form onSubmit={handleSubmit} className="mt-10">
                    <div className="flex gap-5 items-center">
                        <Avatar className="w-32">
                            <AvatarImage src={file ? file : user?.image} />
                            <AvatarFallback>{user.username.charAt(0).toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <div>
                            <Label htmlFor="picture">Foto Profil</Label>
                            <div className="flex gap-2 items-center">
                                <Input
                                    onChange={handleFileChange}
                                    id="picture"
                                    type="file"
                                    accept="image/*"
                                    name="picture"
                                />
                                {file &&
                                    <Button onClick={() => setFile(null)} type="button" className="text-destructive" size="icon" variant="ghost">
                                        <Icon icon="flowbite:close-outline" />
                                    </Button>
                                }
                            </div>
                            <Button type="button" className="mt-3" size="sm" variant="destructive" onClick={() => setFile(null)}>Hapus Foto</Button>
                        </div>
                    </div>
                    <div className="mt-10">
                        <Label htmlFor="full-name">Nama Lengkap</Label>
                        <Input className="mt-1 shadow" id="full-name" type="text" name="fullName" onChange={handleOnChange} value={user?.firstName || ""} />
                    </div>
                    <div className="mt-5">
                        <Label htmlFor="username">Username</Label>
                        <Input className="mt-1 shadow" id="username" type="text" name="username" onChange={handleOnChange} value={user?.username || ""} />
                    </div>
                    <div className="mt-5">
                        <Label htmlFor="email">Email</Label>
                        <Input className="mt-1 shadow" id="email" type="email" name="email" onChange={handleOnChange} value={user?.email || ""} />
                    </div>
                    <div className="mt-5">
                        <Label htmlFor="bio">Tentang saya</Label>
                        <Textarea className="mt-1 shadow" id="bio" type="email" name="bio" onChange={handleOnChange} value={user?.bio || ""} />
                    </div>
                    <div className="mt-10 flex justify-end">
                        <Button type="submit">Simpan</Button>
                    </div>
                </form>
            </div>
        </main>
    )
}