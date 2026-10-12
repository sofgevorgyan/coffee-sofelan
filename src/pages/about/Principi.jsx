import axios from 'axios'
import dos1 from '../../assets/doc1.png'
import dos2 from '../../assets/oc2.png'
import dos3 from '../../assets/doc3.png'
import dos4 from '../../assets/doc4.png'

const photoM = {
  dos1,
  dos2,
  dos3,
  dos4
};

import { useEffect, useState } from 'react'

export default function Principi() {
    const [principiData, setPrincipiData] = useState([])
        useEffect(() => {
            axios.get("http://localhost:3001/principi")
            .then((res) => setPrincipiData(res.data))
            .catch((err) => console.error(err));
    }, [])
    return (
        <article className="bg-[#3a2a18] flex items-center justify-center flex-col p-10 sm:p-20 gap-3 text-center">
            <h1 className="font-bold text-[#b85c38] text-[25px]">Принципы, которыми мы руководствуемся</h1>
            <div className= 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-6 px-4 sm:px-10'>
                {principiData.map((member, index) => (
                    <div key={index} className='border-gray-500 flex flex-col bg-white/15 justify-center items-center gap-5  rounded-xl p-5' >
                        <img src={photoM[member.photo]} alt="" className='w-20 h-20' />
                        <h1 className="text-white font-bold text-[20px]">{member.name}</h1>
                        <p className='text-white/80'>{member.text}</p>
                    </div>
                )) }
            </div>
        </article>
    )
}