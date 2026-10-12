import { FaSearch } from "react-icons/fa";

const GalleryItem = ({ item, onClick }) => (
    <div
        className="relative rounded-xl overflow-hidden shadow-md cursor-pointer transition-transform hover:scale-105"
        onClick={() => onClick(item)}
    >
        <div className="absolute top-2 right-2 bg-[#5c3d2e] text-white text-xs px-3 py-1 rounded-full z-10">
            {item.label}
        </div>
        <div className="w-full h-64">
            <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
            />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
            <div className="text-white text-lg font-semibold flex flex-col items-center gap-1">
                <span className="text-3xl text-[#5c3d2e]"><FaSearch /></span>
                <p className="text-[#5c3d2e] text-4xl">Посмотреть</p>
            </div>
        </div>
        <div className="bg-white px-4 py-3 text-[#3a2a18]">
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-sm opacity-80">{item.description}</p>
        </div>
    </div>
);
export default GalleryItem;