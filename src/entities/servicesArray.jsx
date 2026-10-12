import About from "../pages/about/About";
import Gallery from "../pages/gallery/Gallery";
import Home from "../pages/home/Home";
import Menu from "../pages/menu/Menu";
import Stocks from "../pages/stocks/stocks";

export const servicesArray = [
    {
        path: "/bronirovaniye-stolikov",
        name: "Бронирование столиков",
        element: <Home />
    },
    {
        path: "/dostavka",
        name: "Доставка",
        element: <About />
    },
    {
        path: "/keytering",
        name: "Кейтеринг",
        element: <Menu /> 
    },
    {
        path: "/obucheniye-barista",
        name: "Обучение бариста",
        element: <Gallery />
    },
    {
        path: "/programma-loyalnosti",
        name: "Программа лояльности",
        element: <Stocks/>
    }
]