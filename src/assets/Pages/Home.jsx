import AboutMe from "../../components/AboutMe/AboutMe";
import Contact from "../../components/Contact/Contact";
import Education from "../../components/Education/Education";
import Info from "../../components/Information/Info";
import Navbar from "../../components/NavBar/NavBar";
import Projects from "../../components/Projects/Projects";
import Rights from "../../components/Rights/Rights";


export default function Home() {
return (
    <>
        <Navbar />
        <Info />
        <AboutMe />
        <Education />
        <Projects />
        <Contact />
        <Rights />
    </>
);
}