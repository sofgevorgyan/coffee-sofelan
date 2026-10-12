import unnamed from '../../assets/unnamed.jpg'
import { useTranslation } from 'react-i18next';
export default function HomeTop() {

    const { t } = useTranslation();
    return (
        <article
            className="bg-[#3a2a18] flex justify-center items-center h-[calc(100vh-95px)] flex-col gap-4 px-4 text-center"
            style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${unnamed}) center / cover no-repeat`
            }}
        >
            <h1 className="font-bold text-[#f9f5f0] text-[36px] sm:text-[42px] md:text-[50px] leading-tight text-shadow-[2px_2px_4px_rgba(0, 0, 0, 0.4)]">
                {t('home.welcome')}
            </h1>
            <p className="text-[#f9f5f0] text-[16px] sm:text-[18px] max-w-[600px] text-shadow-[2px_2px_4px_rgba(0, 0, 0, 0.4)]">
                Насладитесь наивкуснейшим кофе в нашей уютной атмосфере
            </p>
            <button className="w-[200px] sm:w-[250px] h-[40px] text-[#f9f5f0] bg-[#b85c38] rounded-2xl font-semibold text-sm sm:text-base">
                Забронировать столик
            </button>
        </article>
    )
}
