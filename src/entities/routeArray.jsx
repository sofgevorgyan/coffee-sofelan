import About from "../pages/about/About";
import Gallery from "../pages/gallery/Gallery";
import Home from "../pages/home/Home";
import Menu from "../pages/menu/Menu";
import Stocks from "../pages/stocks/stocks";

export const routeArray = [
    {
        path: "/",
        name: "Home",
        element: <Home />
    },
    {
        path: "/about",
        name: "About",
        element: <About />
    },
    {
        path: "/menu",
        name: "Menu",
        element: <Menu /> 
    },
    {
        path: "/gallery",
        name: "Gallery",
        element: <Gallery />
    },
    {
        path: "/stocks",
        name: "Stocks",
        element: <Stocks/>
    }
]