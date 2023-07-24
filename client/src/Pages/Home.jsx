import { Brands } from "../Components/Brands"
import { Easy } from "../Components/Easy"
import { FAQ } from "../Components/FAQ"
import { Hero } from "../Components/Hero"
import { PickCamera } from "../Components/PickCamera"
import { Reviews } from "../Components/Reviews"
import { Save } from "../Components/Save"

export const Home = () => {
    return (
        <div className="overflow-hidden">
            <Hero />
            <Easy />
            <Save />
            <PickCamera />
            <Brands />
            <Reviews />
            <FAQ />
        </div>    
    )
}