import axios from 'axios'

import { useEffect, useState } from 'react'

export default function Price() {
    const [stocsData, setStocsData] = useState([])
        useEffect(() => {
            axios.get("http://localhost:3001/stocs")
            .then((res) => setStocsData(res.data))
            .catch((err) => console.error(err));
    }, [])
    return (
        <article className="bg-[#f9f5f0] flex items-center justify-center flex-col p-10 sm:p-20 gap-3 text-center">
    
            <div className= 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 mt-6 px-4 sm:px-10'>
                {stocsData.map((member, index) => (
                    <div key={index} className='border-gray-500 flex flex-col bg-[#e9c09c]/20 justify-center items-center gap-5  rounded-xl p-5' >
                        <h1 className="text-[#5D3A2E] font-bold text-[30px]">{member.name}</h1>
                        <p className='text-[#5D3A2E]/80'>{member.text}</p>
                        <p className='mt-2 font-bold text-[#b85c38] text-[30px]'>{member.price}</p>
                        <p className='text-[#888888] text-[14px]'>{member.time}</p>
                        <button className='className="w-[150px] sm:w-[200px] h-[30px] text-[#f9f5f0] bg-[#b85c38] rounded-2xl font-semibold text-sm sm:text-base">'>{member.button}</button>
                    </div>
                )) }
            </div>
        </article>
    )
}