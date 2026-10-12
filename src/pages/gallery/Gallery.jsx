import { useState, useMemo, useEffect } from 'react';
import UsGallery from './UsGallery';
import ButtonsFilter from './ButtonsFilter';
import GalleryGrid from './GalleryGrid';
import axios from 'axios';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Gallery() {
    const [activeFilter, setActiveFilter] = useState('all');
    const [galleryArray, setGalleryArray] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [initialSlide, setInitialSlide] = useState(0);

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        speed: 500,
        initialSlide: initialSlide,
    };

    const handleItemClick = (item) => {
        const index = filteredItems.findIndex(i => i.id === item.id);
        setInitialSlide(index);
        setSelectedItem(item);
    };

    useEffect(() => {
        axios.get('http://localhost:3001/galleryArray')
            .then(res => setGalleryArray(res.data))
            .catch(err => console.error(err))
    }, []);

    const filteredItems = useMemo(() => {
        if (activeFilter.toLowerCase() === 'all') {
            return galleryArray;
        }
        
        const filtered = galleryArray.filter(item => item.category === activeFilter);
        return filtered;
    }, [activeFilter, galleryArray]);

    return (
        <main>
            <UsGallery />
            <ButtonsFilter 
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
            />
            <GalleryGrid 
                items={filteredItems}
                onItemClick={handleItemClick}
            />
            {selectedItem && (
                <div
                    className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
                    onClick={() => setSelectedItem(null)}
                >
                    <div className="w-full max-w-4xl mx-4" onClick={e => e.stopPropagation()}>
                        <Slider {...settings}>
                            {filteredItems.map(item => (
                                <div key={item.id} className="outline-none">
                                    <div className="relative px-4">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-[60vh] object-contain rounded-lg"
                                        />
                                        <button
                                            className="absolute top-4 right-4  text-white text-2xl bg-black bg-opacity-50 w-10 h-10 rounded-full "
                                            onClick={() => setSelectedItem(null)}
                                        >
                                            X
                                        </button>
                                        <div className="bg-white p-4 mt-4 rounded-lg">
                                            <h3 className="text-xl font-semibold">{item.title}</h3>
                                            <p className="text-gray-600 mt-2">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            )}
        </main>
    );
}
