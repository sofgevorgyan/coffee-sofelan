import GalleryItem from "./GalleryItem";

export default function GalleryGrid({ items, onItemClick }) {


    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
            {items.map((item, index) => (
                <GalleryItem 
                    key={item.id || index} 
                    item={item} 
                    onClick={onItemClick}
                />
            ))}
   
        </section>
    );
}   