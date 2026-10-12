import HomeContact from "./HomeContact";
import HomeTop from "./homeTop";
import Info from "./Info";
import Reviews from "./Reviews";

export default function Home() {
    return (
        <div>
            <HomeTop/>
            <Info/>
            <Reviews/>
            <HomeContact/>
        </div>
    )
}