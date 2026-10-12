import logo from '../../assets/img2.jpg'

export default function Info() {
  return (
    <article className='flex flex-col md:flex-row justify-center items-center gap-12 p-6 md:p-20 bg-[#f9f5f0]'>
      
      <div className='flex justify-center items-center w-full md:w-[400px]'>
        <img
          className='rounded-xl shadow-lg object-cover transition-all duration-300 
                     w-[250px] sm:w-[300px] md:w-[350px] lg:w-[350px] h-auto'
          src={logo}
          alt="Кофейня"
        />
      </div>

      <div className='flex flex-col gap-4 max-w-xl text-center md:text-left mt-6 md:mt-0'>
        <h1 className='font-bold text-[#3a2a18] text-3xl md:text-[35px]'>О нашей кофейне</h1>
        <p>
          SOFELAN — это не просто кофейня, это место, где создаются воспоминания. Мы открыли свои двери в 2026 году с одной простой целью: создать уютное пространство, где каждый может насладиться прекрасным кофе.
        </p>
        <p>
          Мы тщательно отбираем лучшие кофейные зерна со всего мира и обжариваем их до совершенства. Наши бариста — настоящие художники, создающие не просто напитки, а произведения искусства.
        </p>
        <p>
          Приходите к нам, чтобы насладиться чашечкой великолепного кофе, вкусной выпечкой и теплой атмосферой.
        </p>
      </div>

    </article>
  )
}
