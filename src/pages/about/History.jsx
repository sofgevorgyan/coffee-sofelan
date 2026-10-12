import axios from "axios";
import { useEffect, useState } from "react"

export default function History() {

    const [historyData, setHistoryData] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3001/history")
            .then((res) => setHistoryData(res.data))
            .catch((err) => console.error(err));
    }, [])

    return (



        <article className="flex flex-col justify-center items-center bg-[#f9f5f0] p-15 gap-5 text-center">
            <div>
                <h1 className="font-bold text-[#3a2a18] text-[35px]">Наша история</h1>
                <p className="text-[#b85c38]">Как все начиналось и развивалось</p>

            </div>

            <div className="max-w-56rem pl-6 space-y-10 py-10">
                <div className="flex flex-col md:grid md:grid-cols-2 Ashot gap-10 relative justify-center items-center">
                    <div className="hidden md:block bg-[#b85c38] h-full w-1 absolute top-0 left-1/2 -translate-x-1/2"></div>
                    {historyData.map((items, index) => (
                        <div key={index} style={{ gridArea: `a${index + 1}` }} className="relative top-0 left-0">
                            <div className="bg-white shadow-md rounded-md p-4 max-w-md">
                                <h1 className="text-[#b85c38] font-bold text-[20px]">{items.year}</h1>
                                <p className="text-gray-700 mt-2">{items.text}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </article>
    )
}