import "./Education.css";

export default function Education() {
    const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
      };
      const handleArrowClick = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };
  return (
    <>
        <div className="Education" id="education">
            <img src="./images/edu1.png" className="edu_img_one"/>
            <img src="./images/edu2.png" className="edu_img_two"/>
            <p className="title">Education and Experience</p>
            <h1>Education & Experience </h1>
            <div className="full_edu">
            <div className="Edu_left">
                <img src="./images/edu.png" alt="" />
                <div className="full_left">
                <div className="Exp_left_one">
                    <h3>Diploma in Computer Engineering</h3>
                    <p>Damascus university</p>
                    <p> Diploma Degree: Good</p>
                </div>
                <div className="Exp_left_two">
                    <h3>Bachelor in Information Technology</h3>
                    <p>Syrian Virtual University | Damascus - Syria</p>
                    <p> Bachelor Degree: Very Good</p>
                </div>
                </div>
            </div>
            <div className="Edu_left">
                <img src="./images/edu.png" alt="" />
                <div className="full_left">
                <div className="Exp_left_one">
                    <h3>Course: Frontend Developer</h3>
                    <p>Syrian Computer Society | Damascus - Syria</p>
                    <p> Fully frontend web development training, HTML,CSS,JS including frontend libraries and frameworks</p>
                </div>
                <div className="Exp_left_two">
                    <h3>Course: Frontend Developer</h3>
                    <p>Vica Web Solutions | Online</p>
                    <p>Fully frontend web development training, HTML,CSS,JS,React including frontend libraries and frameworks.</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="arrow-container">
            <button className="arrow" onClick={handleArrowClick}>
                <img src="./images/Arrow_Up_MD.png" alt="" />
            </button>
        </div>
        <div className="try">
            <div className="try_me"></div>
            <div className="try_desc">
                <div>
                    <h2>Try me out, risk free!</h2>
                    <p>If you're not happy with the design afternthe first draft,</p>
                    <p>I'll refund your deposit,<span>no question asked.</span></p>
                </div>
                <button onClick={handleContactClick}>Contact <img src="./images/Vector (1).png" alt="" /></button>
            </div>
        </div>
    </>
  );
}