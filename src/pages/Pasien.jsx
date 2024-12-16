import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { useEffect, useState } from "react";
import FormDataMedis from "@/components/blocks/FormDataMedis";
import FormKeluhan from "@/components/blocks/FormKeluhan";
import HasilDiagnosa from "@/components/blocks/HasilDiagnosa";
import { useAuth } from "@/utils/AuthProvider";
import axios from 'axios';

const user = {
    name: "John Doe",
    imageUrl: ""
};

export default function PasienPage() {
    const [tab, setTab] = useState("2");
    const { user } = useAuth();

    const [predictedResult, setPredictedResult] = useState(null); // State untuk menyimpan hasil prediksi


    const getInitial = (name) => {
        return name ? name.charAt(0).toUpperCase() : '';
    };

    const handlePrediction = async (symptoms) => {
    // Fungsi untuk mengirim data ke API prediksi
    try {
        // Menggunakan axios untuk mengirim permintaan POST
        const response = await axios.post("http://127.0.0.1:5000/api/predict", {
            features : symptoms
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        });

        // Menyimpan hasil prediksi
        setPredictedResult(response.data); // response.data berisi data hasil dari API
        setTab("3"); // Pindah ke tab hasil diagnosa
    } catch (error) {
        console.error("Prediction failed:", error);
    }
};

    return (
        <main className="w-full flex bg-app p-4 min-h-screen">
            <div className="bg-white ml-48 w-full rounded-2xl text-foreground pt-5 pb-12 px-10">
                <header className="flex justify-end items-center gap-2">
                    <p className="text-gray-600">{user?.username}</p>
                    <Avatar>
                        {user?.image ?
                            (<AvatarImage src={user?.image} alt={"@" + user?.username} />)
                            : (<AvatarFallback className="font-medium">{getInitial(user?.username)}</AvatarFallback>)
                        }
                    </Avatar>
                </header>

                {/* Tab Navigasi */}
                {tab === '1' && (
                    <FormDataMedis
                        getValues={(val) => console.log(val)}
                        onNext={(nextTab) => setTab(nextTab)}
                    />
                )}
                {tab === '2' && (
                    <FormKeluhan
                        getValues={(val) => console.log(val)}
                        onNext={(symptoms) => handlePrediction(symptoms)} // Kirim ke API dan pindah tab
                    />
                )}
                {tab === '3' && (
                    <HasilDiagnosa result={predictedResult} />
                )}
            </div>
        </main>
    );
}
