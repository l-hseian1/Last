import "./Info.css"

export default function Info() {
  return (
    <div className="information" id="#home">
        <div className="left">
            <h3>Welcome</h3>
            <h1 className="Hey">HEY! I’m Lama,</h1>
            <h1 className="desc">Frontend Developer</h1>
            <p>I creat professional web application for business, companies,
                 skilled in leadership, seeking to leverage solid development skills with focus on collaboration,
                  communication and passion.</p>
            <button>
              <a download href="src/assets/Lama_hseian.pdf">
                Download Cv
              </a>
            </button>
        </div>
        <div className="right">
          <img src="./images/image1.png" className="image_one" />
          <img src="./images/image2.png" className="image_two" />
          <img src="./images/image1.png" className="image_three" />
          <img src="./images/image2.png" className="image_four" />
          <img src="./images/image1.png" className="image_five" />
          <div className="image_back">
            <img src="./images/personalImage-removebg-preview.png" alt="" />
          </div>
        </div>
        <div className="social">
          <p>Follow me on:</p>
          <img src="./images/Line 21.png" className="line" />
          <a href="https://www.facebook.com/Lama.Hseian"><img src="./images/facebook-4 1.png" alt="" /></a>
          <a href="https://www.instagram.com/lama_hseian/profilecard/?igsh=MTRyZ2xyYmdoczNzNA=="><img src="./images/instagram-5 1.png" alt="" /></a>
          <a href=":https://www.linkedin.com/in/lama-mh-6369a620a"><img src="./images/linkedin-icon-2 1.png" alt="" /></a>
        </div>
    </div>
  );
}
