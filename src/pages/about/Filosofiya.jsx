import coffee from '../../assets/coffee.jpg'

export default function Filosofiya() {
    return (
        <article className="flex flex-col md:flex-row justify-center items-center gap-10 bg-[#f9f5f0]  p-10 sm:p-15">
            <img className='w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] box-shadow-[0_5px_15px_rgba(0, 0, 0, 0.1)] rounded-xl' src={coffee} alt="" />
            <div className='flex flex-col gap-5'>
                <h1 className="font-bold text-[#3a2a18] text-[35px]">Наша миссия и филоSofia</h1>
                <p className='text-[15px]'>В SOFELAN мы стремимся создавать не просто кофе, а впечатления <br /> и эмоции. Наша миссия — сделать день каждого гостя лучше с <br /> помощью безупречного кофе и уютной атмосферы.</p>
                <p className='text-[15px]'>Мы верим в прямую торговлю с фермерами, устойчивое развитие и <br /> этичное потребление. Каждая чашка нашего кофе — это история, <br /> которая начинается на кофейных плантациях и заканчивается в руках <br /> наших гостей.</p>
                <p className='text-[15px]'>Мы стремимся быть не просто коммерческим проектом, а <br /> сообществом единомышленников, объединенных любовью к кофе и <br /> стремлением к качеству во всем.</p>
            </div>
        </article>
    )
}