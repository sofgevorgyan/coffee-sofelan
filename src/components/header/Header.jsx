import { Link, useSearchParams } from "react-router-dom";
import { routeArray } from "../../entities/routeArray";
import { GiForkKnifeSpoon, GiKnifeFork } from "react-icons/gi";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const { t, i18n } = useTranslation();
    const [searchParams, setSearchParams] = useSearchParams();

    const lngs = {
        am: { label: "Հայերեն", code: "am", flag: '/images/flags/Armenia-flag.webp' },
        ru: { label: "Русский", code: "ru", flag: '/images/flags/Russia-flag.webp' },
    };

    useEffect(() => {
        const currentLang = searchParams.get('lng');
        console.log('Current language from URL:', currentLang);
        if (currentLang && lngs[currentLang]) {
            console.log('Setting language to:', currentLang);
            i18n.changeLanguage(currentLang);
        }
    }, [searchParams, i18n]);
    
    const changeLanguage = (language) => {
        console.log('Changing language to:', language);
        i18n.changeLanguage(language);
        const newParams = new URLSearchParams(searchParams);
        newParams.set('lng', language);
        setSearchParams(newParams);
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    console.log(searchParams);

    return (
        <header className="flex justify-between items-center bg-[#3a2a18] py-4 px-8">
            <div className="flex items-center text-[#f9f5f0] justify-center gap-2">
                <img className="w-16 h-16" src="img1.png" alt="" />
                <h1 className="text-[30px] font-bold font-font-sans">SOFELAN</h1>
            </div>
            <nav className="hidden md:flex">
                <ul className="h-full flex text-[#f9f5f0] items-center gap-12">
                    {routeArray.map((route) => (
                        <li key={route.path}>
                            <Link className="font-sans text-[18px] font-medium" to={route.path}>{t(`header.${route.name}`)}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="md:hidden relative">
                {isOpen ? <GiKnifeFork className="w-[30px] h-[30px] text-white transition-all duration-300" onClick={toggleMenu} /> :
                    <GiForkKnifeSpoon className="w-[30px] h-[30px] text-white transition-all duration-300 rotate-90" onClick={toggleMenu} />}
                {isOpen &&
                    <div className="absolute top-12 -right-8  bg-[#3a2a18]/50 p-4">
                        <ul className="flex flex-col gap-4">
                            {routeArray.map((route) => (
                                <li key={route.path}>
                                    <Link onClick={toggleMenu} className="font-sans text-[18px] font-medium text-white" to={route.path}>{t(`header.${route.name}`)}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                }
            </div>
            <div className="flex items-center gap-2">
                {Object.keys(lngs).map((lng) => (
                    <button key={lng} onClick={() => changeLanguage(lng)}>
                        <img className="w-6 h-3" src={lngs[lng].flag} alt={lngs[lng].label} />
                    </button>
                ))}
            </div>
        </header>
    );
}