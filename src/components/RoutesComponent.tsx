import { Route, Routes } from "react-router-dom"
import About from "./About"
import Hero from "./Hero"
import Projects from "../Screens/Projects"

const RoutesComponent = () => {
    return (
        <Routes>
            <Route path="/" element={<Hero/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/projects" element={<Projects />} />
        </Routes>
    )
}

export default RoutesComponent