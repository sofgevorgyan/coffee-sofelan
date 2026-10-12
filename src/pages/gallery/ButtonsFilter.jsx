import axios from "axios"
import { useEffect, useState } from "react"

export default function ButtonsFilter({ activeFilter, setActiveFilter }) {
    const [filterArray, setFilterArray] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3001/GalleryCategory")
            .then((res) => setFilterArray(res.data))
            .catch((err) => console.error(err))
    }, [])
    return (
        <section className="flex flex-wrap justify-center gap-4 p-6">
            {filterArray.map((btn) => (
                <button 
                    key={btn.category}
                    onClick={() => setActiveFilter(btn.category)}
                    className={`px-4 py-2 rounded-full font-medium border transition-all duration-300 ${
                        activeFilter === btn.category
                            ? "bg-[#5c3d2e] text-white border-[#5c3d2e]"
                            : "text-[#5c3d2e] border-[#5c3d2e] hover:bg-[#5c3d2e] hover:text-white"
                    }`}
                >
                    {btn.label}
                </button>
            ))}
        </section>
    );
}
