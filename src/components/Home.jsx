import React from 'react'
import vg from "../assets/2.webp";
import {AiFillAmazonCircle,AiFillGoogleCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"
const Home = () => {
  return (

    <>
    <div className="home" id="home">
        <main>
            <h1>Meheli's</h1>
            <p>Solution to all your problems</p>
        </main>
    </div>

    <div className="home2">

<img src={vg} alt="Graphics" />
<div>
<p>
    I'm Meheli. 
    This is my first React.js project as a 
    Web-developer. I'm very excited to explore more!! *-*
</p>

</div>
    </div>

    <div className="home3" id = "about">
      <div>
    <h1>Who we are?</h1>
    <p>
    I'm Meheli Sarkar pursuing my B.Tech degree from University of Engineering and Management, Kolkata.
    I'm currently in 1st semester, 3rd year. 
    I'm an enthusiast and love technology. I love to explore new technologies and am here to explore the world of React.js which seems very interesting as I dive down into it.
    My current strong point is developing front-end pages and am looking forward to dive my area into back-end as well.
    </p>
    
        
    
    </div>
    </div>

    <div className="home4" id="brands">
        <div>
            <h1>Brands</h1>

            <article>
                <div style={{
                    AnimationDelay:"0.3s",
                }}>
                    <AiFillGoogleCircle/>
                    <p>Google</p>
                </div>

                <div style={{
                    AnimationDelay:"0.5s",
                }}>
                    <AiFillAmazonCircle/>
                    <p>Amazon</p>
                </div>

                <div style={{
                    AnimationDelay:"0.7s",
                }}>
                    <AiFillYoutube/>
                    <p>Youtube</p>
                </div>

                <div style={{
                    AnimationDelay:"1s",
                }}>
                    <AiFillInstagram/>
                    <p>Instagram</p>
                </div>
            </article>
        </div>
    </div>
    </>
  )
}

export default Home;

   