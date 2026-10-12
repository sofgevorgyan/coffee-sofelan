import { Link } from "react-router-dom";
import { routeArray } from "../../entities/routeArray";
import { servicesArray } from "../../entities/servicesArray";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaVk } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="bg-[#3a2a18]">
            <div className="grid grid-cols-[max-content] sm:grid-cols-[max-content_max-content] xl:grid-cols-4 sm:gap-20 gap-6 py-20 items-start justify-center xl:justify-between max-w-[1200px] mx-auto">
                <div className="flex justify-center items-start flex-col gap-4">
                        <div className="flex justify-center items-center">
                            <img className="w-[50px] h-[50px]" src="img1.png" alt="" />
                            <h1 className="text-[20px] text-white font-bold font-font-sans">SOFELAN</h1>
                        </div>
                        <p className="text-[15px] text-white/80">Мы создаем не просто кофе, а <br /> впечатления. Наша миссия — <br /> сделать ваш день лучше с каждой <br /> чашкой.</p>
                        <div className="flex gap-4">
                            <FaInstagramSquare className="w-[40px] h-[30px] text-pink-100" />
                            <FaFacebookSquare className="w-[40px] h-[30px] text-pink-100"/>
                            <FaTelegram className="w-[40px] h-[30px] text-pink-100"/>
                            <FaVk className="w-[40px] h-[30px] text-pink-100"/>
                        </div>
                </div>
            
                <div className="flex flex-col gap-4">
                    <h1 className="text-[20px] text-white font-bold  font-sans after:content-[''] after:w-1/3 after:h-[2px] after:bg-[#b85c38] after:block after:mt-2">Быстрые ссылки</h1>
                    <nav >
                
                        <ul className="h-full   flex-col flex text-[#f9f5f0] items-start gap-3">
                            {routeArray.map((route) => (
                                <li key={route.path}>
                                    <Link className="font-sans text-white/80  " to={route.path}>{route.name}</Link>
                                </li>
                            ))}
                        </ul>
                   </nav>
                </div>

                <div className="flex flex-col gap-4">
                    <h1 className="text-[20px] text-white font-bold  font-sans after:content-[''] after:w-1/3 after:h-[2px] after:bg-[#b85c38] after:block after:mt-2">Услуги</h1>
                    <nav >
                
                        <ul className="h-full   flex-col flex text-[#f9f5f0] items-start gap-3">
                            {servicesArray.map((route) => (
                                <li key={route.path}>
                                    <Link className="font-sans text-white/80  " to={route.path}>{route.name}</Link>
                                </li>
                            ))}
                        </ul>
                   </nav>
                </div>

                <div className="flex flex-col gap-4">
                    <h1 className="text-[20px] text-white font-bold  font-sans after:content-[''] after:w-1/3 after:h-[2px] after:bg-[#b85c38] after:block after:mt-2">Подписаться на новости</h1>
                    <p className="text-[15px] text-white/80">Будьте в курсе наших специальных <br /> предложений и новостей</p>
                    <input type="text" placeholder="Ваш email" className="bg-white border-1 rounded  w-[250px] h-[40px] border-gray-300"/>
                    <button className="bg-[#B85C38] rounded-3xl w-[200px] h-[50px] text-white font-normal">Подписаться</button>
                </div>
            </div>
            <div className="flex flex-col gap-4 py-5">
                <hr className="w-full max-w-[1200px] mx-auto text-white/30"/>
                <div className="flex justify-center items-center gap-4">
                    <p className="text-[15px] text-white/80">© 2025 SOFELAN. Все права защищены.</p>
            
                </div>
            </div>
            

        </footer>
    )
}