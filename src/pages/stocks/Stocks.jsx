import Price from "./Price";
import Programma from "./Programma";
import StocsUs from "./StocsUs";

export default function Stocks() {
    return (
        <article>
            <StocsUs/>
            <Price/>
            <Programma/>
        </article>
    )
}