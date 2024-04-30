import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from '../Homepage/Home.jsx';
import About from '../Aboutpage/About.jsx';
import Projects from '../Projectspage/Projects.jsx';
import * as S from './RoutesStyle.jsx';

export default function Router() {
    return (
        <BrowserRouter>
            <S.NavBar>
                <ul>
                    <li><Link className="backgroundNavBar" to='/'>Home</Link></li>
                    <li><Link className="backgroundNavBar" to='/About'>About</Link></li>
                    <li><Link className="backgroundNavBar" to='/Projects'>Projects</Link></li>
                </ul>
            </S.NavBar>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Projects" element={<Projects />} />
            </Routes>
        </BrowserRouter>
    )
}