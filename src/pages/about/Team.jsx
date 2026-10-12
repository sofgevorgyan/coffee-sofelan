import axios from 'axios'
import user1 from '../../assets/user1.jpg'
import user2 from '../../assets/user2.jpg'
import user3 from '../../assets/user3.jpg'
import user4 from '../../assets/user4.jpg'

const photoMap = {
  user1,
  user2,
  user3,
  user4
};

import { useEffect, useState } from 'react'

export default function Team() {
    const [teamData, setTeamData] = useState([])
        useEffect(() => {
            axios.get("http://localhost:3001/team")
            .then((res) => setTeamData(res.data))
            .catch((err) => console.error(err));
    }, [])
    return (
        <article className="bg-[#e9c09c] flex items-center justify-center flex-col sm:px-15 py-10 gap-3 text-center">
            <h1 className="font-bold text-[#3a2a18] text-[35px]">Наша команда</h1>
            <p className="text-[#b85c38] text-[18px]">Люди, влюбленные в свое дело</p>
            <div className= 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-6 px-4 sm:px-10'>
                {teamData.map((member, index) => (
                    <div key={index} className='border-gray-500 flex flex-col bg-white justify-center items-center  rounded-xl p-5' >
                        <img src={photoMap[member.photo]} alt="" className='w-40 h-50' />
                        <h1 className="text-[#3a2a18] font-bold text-[20px]">{member.name}</h1>
                        <p className='text-[#b85c38]'>{member.activity}</p>
                        <p className='text-black/60'>{member.text}</p>
                    </div>
                )) }
            </div>
        </article>
    )
}