import './OtherProjects.css';
import { details } from '../data';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const OtherProjects = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const projectsPerPage = 3;

    const totalProjects = details.length;
    const totalPages = Math.ceil(totalProjects / projectsPerPage);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
    };

    const startIndex = currentIndex * projectsPerPage;
    const currentProjects = details.slice(startIndex, startIndex + projectsPerPage);

    return (
        <div className='OtherProjects space' id='Projects'>
            <div className="other-cont">
                <div className="other_title">
                    <h5>Portfolio</h5>
                    <h2>The Best <span>Projects</span></h2>
                </div>
                <div className="other_btn">
                    <img onClick={prevSlide} src="/images/prev.png" alt="Previous" />
                    <img onClick={nextSlide} src="/images/next.png" alt="Next" />
                </div>
            </div>
            <div className="container portfolio-container">
                {currentProjects.map((element, index) => (
                    <div className='circle' key={index}>
                        <Link to={`/Projects/${element.id}`}>
                            <img src={element.img} alt={element.title} />
                        </Link>
                    </div>
                ))}
            </div>
            <div className="slider-indicators">
                {Array.from( (_, index) => (
                    <button 
                        key={index} 
                        className={index === currentIndex ? 'active' : ''} 
                        onClick={() => setCurrentIndex(index)}
                    ></button>
                ))}
            </div>
        </div>
    );
};















export default OtherProjects;