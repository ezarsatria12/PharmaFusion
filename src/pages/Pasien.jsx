import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { useEffect, useState } from "react";
import FormDataMedis from "@/components/blocks/FormDataMedis";
import FormKeluhan from "@/components/blocks/FormKeluhan";
import HasilDiagnosa from "@/components/blocks/HasilDiagnosa";

const user = {
    name: "John Doe",
    imageUrl: ""
}

export default function PasienPage() {
    const [tab, setTab] = useState("1");

    const getInitial = (name) => {
        return name ? name.charAt(0).toUpperCase() : '';
    };

    return (
        <main className="w-full flex bg-app p-4 min-h-screen">
            <div className="bg-white ml-48 w-full rounded-2xl text-foreground pt-5 pb-12 px-10">
                <header className="flex justify-end items-center gap-2">
                    <p className="text-gray-600">Username</p>
                    <Avatar>
                        {user.imageUrl ?
                            (<AvatarImage src={user.imageUrl} alt={"@" + user.name} />)
                            : (<AvatarFallback>{getInitial(user.name)}</AvatarFallback>)
                        }
                    </Avatar>
                </header>
                {
                    tab == '1' && (
                        <FormDataMedis getValues={(val) => console.log(val)} onNext={(tab) => setTab(tab)} />
                    )
                }
                {
                    tab == '2' && (
                        <FormKeluhan getValues={(val) => console.log(val)} onNext={(tab) => setTab(tab)} />
                    )
                }
                {
                    tab == '3' && (
                        <HasilDiagnosa />
                    )
                }
            </div>
        </main>
    )
}