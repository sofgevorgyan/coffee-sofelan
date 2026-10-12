import AboutUs from "./aboutUs";
import Filosofiya from "./Filosofiya";
import History from "./History";
import Int from "./Int";
import Principi from "./Principi";
import Team from "./Team";

export default function About() {
    return (
       <div>
            <AboutUs/>
            <History/>
            <Team/>
            <Filosofiya/>
            <Principi/>
            <Int/>
       </div>
    )
}