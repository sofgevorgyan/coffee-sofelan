import int1 from '../../assets/int1.jpg'
import int2 from '../../assets/int2.jpg'
import int3 from '../../assets/int3.jpg'
import axios from 'axios'
const photoMs = {
  int1,
  int2,
  int3
};

import { useEffect, useState } from 'react'

export default function Principi() {
    const [intData, setIntData] = useState([])
        useEffect(() => {
            axios.get("http://localhost:3001/int")
            .then((res) => setIntData(res.data))
            .catch((err) => console.error(err));
    }, [])



    return (

         <article className="bg-[#f9f5f0] flex items-center justify-center flex-col p-4 md:p-20 gap-3 text-center">
             <h1 className="font-bold text-[#3a2a18] text-[35px]">Наши дизайнерские решения</h1>

            <div className= 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 px-4 sm:px-10'>
                {intData.map((member, index) => (
                    <div key={index} className='border-red-500 flex flex-col bg-[#e9c09c]/20 justify-center items-center gap-5  rounded-xl p-5' >
                        <img src={photoMs[member.photo]} alt="" className='w-55 h-60' />
                        <h1 className="text-[#3a2a18] font-bold text-[20px]">{member.name}</h1>
                        <p className='text-black/60'>{member.text}</p>
                    </div>
                )) }
            </div>
        </article>
    )
}