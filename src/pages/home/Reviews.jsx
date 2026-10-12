import { useEffect, useState } from "react"
import axios from "axios"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Reviews() {
    const [reviews, setReviews] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [slidesToShow, setSlidesToShow] = useState(3)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/reviews')
                setReviews(response.data)
            } catch (error){
                console.error('Error fetching reviews:', error);
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    useEffect(() => {
        const updateSlidesToShow = () => {
            if (window.innerWidth < 997) {
                setSlidesToShow(1)
            } else {
                setSlidesToShow(3)
            }
        }

        updateSlidesToShow() 
        window.addEventListener("resize", updateSlidesToShow)
        return () => window.removeEventListener("resize", updateSlidesToShow)
    }, [])

    const settings = {
        infinite: true,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 1,
        dots: false,
        arrows: false,
        pauseOnHover: true
    }

    if(loading) {
        return (
            <div className="text-6x1 font-bold text-[#5c3d2e] text-shadow-2xs fixed top-1/2 left-1/2 -translate-x-1/2 bg-black/50 w-full h-full">
                <div className="flex justify-center items-center h-screen">
                    <div className="w-16 h-16 border-t-4 border-b-4 border-gray-900 rounded-full animate-spin"></div>
                </div>
            </div>
        )
    }

    return (
        <article className="flex flex-col bg-[#3a2a18] p-4 sm:p-8 md:p-10 lg:p-16 xl:p-20 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            <div>
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[30px] flex font-bold text-[#fff] justify-center items-center">Отзывы наших гостей</h1>
            </div>
            <div className="slider-container">
                <Slider {...settings}>
                    {
                        reviews.map(review => (
                            <div key={review.id} className="px-2 sm:px-4 md:px-8 lg:px-12 xl:px-20">
                                <div className="h-[250px] sm:h-[270px] md:h-[290px] lg:h-[300px] lg:w-[350px] text-[#fff] bg-[#fff]/10 rounded-xl border-black flex justify-center items-center flex-col">
                                    <p className="p-4 sm:p-6 md:p-8 lg:p-10 italic text-sm sm:text-base">{review.text}</p>
                                    <div className="flex items-center justify-center flex-col">
                                        <h2 className="font-bold">{review.name}</h2>
                                        <p className="text-white/50">{review.profession}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider> 
            </div>
        </article>
    )
}
