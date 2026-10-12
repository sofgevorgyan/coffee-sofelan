import axios from 'axios'

import { useEffect, useState } from 'react'

export default function Programma() {
    const [programmaData, setProgrammaData] = useState([])
        useEffect(() => {
            axios.get("http://localhost:3001/programm")
            .then((res) => setProgrammaData(res.data))
            .catch((err) => console.error(err));
    }, [])
    return (
        <article className="bg-[#e9c09c] flex items-center justify-center flex-col p-10 sm:p-20 gap-3 text-center">
            <h1 className="font-bold text-[#3a2a18] text-[35px]">Программа лояльности</h1>
            <p className='text-center text-[#b85c38]'>Присоединяйтесь к нашей программе лояльности "SOFELAN" и получайте баллы за каждую покупку. Накапливайте баллы и обменивайте их на бесплатные напитки и десерты!</p>
            <div className= 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 mt-6 px-4 sm:px-10'>
                {programmaData.map((member, index) => (
                    <div key={index} className='border-white/30 border-2 flex flex-col bg-[#b85c38]/20 justify-center items-center gap-5  rounded-xl p-5' >
                        <img src={member.image} alt="" className='w-20 h-20' />
                        <h1 className="text-[#3a2a18] font-bold text-[25px]">{member.name}</h1>
                        <p className='text-[#3a2a18]/80'>{member.text}</p>
                    </div>
                )) }
            </div>
        </article>
    )
}