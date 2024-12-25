import './Projects.css'
import { details } from '../data'
import Cards from "./Cards";

const Projects = () => {

    return (
        <div className='Projects' id='projects'>
            <p>Portfolio</p>
            <div className="portfolio-nav">
            <h1>My Creative Works Latest <span>Projects</span> </h1>
            <button><a href="https://github.com/l-hseian1" target="_blank">View GitHub <i className="fa-solid fa-up-right-from-square"></i></a></button>            </div>
            <div className=" portfolio-container">
            <Cards card={details} />
            </div>
        </div>
    )
}

export default Projects
