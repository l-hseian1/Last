import { Link } from 'react-router-dom';
const Cards = ({ card }) => {
    return (
        <>
            {card.map((element, index) => {
                return (
                    <div className="portfolio-item" key={index}>
                        <div className="portfolio-image">
                            <img src={element.img} alt="" />
                        </div>
                        <div className="item-cont">
                            <div className="item-title">
                                <h3>{element.title}</h3>
                                <p> {element.tools.join(", ")}</p>
                            </div>
                            <Link to={`/Projects/${element.id}`} className="btn"><img src="/images/Icon.png" alt="" /></Link>
                        </div>
                        <div className="portfolio-cta">
                            <a href={element.screen} className='btn-sec'><img src="/images/Full_alt.png"/></a>
                            <a href={element.demo} className="btn-sec"><img src="/images/white.png" /></a>   
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default Cards; 