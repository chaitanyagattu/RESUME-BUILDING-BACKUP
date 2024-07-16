import React from 'react'
import "./Offering.css"
const Offering = () => {
  return (
        <section className="offerings-section" style={{backgroundColor: "black", color: "white"}}>
          <h2 class="offerings-heading">create your future <br /> superfast</h2>
          <p class="offerings-description">with an incredible blueprint, which covers all the possible steps &amp; resources you need</p>
          <div className="offerings-card-container">
            <div className="offerings-card">
              <img src="img1-removebg-preview.png" alt="" />
              <p>Build roadmaps to success</p>
            </div>
            <div className="offerings-card" >
              <img src="img2-removebg-preview.png" alt="" />
              <p>Get Domain Relevant Insights</p>
            </div>
            <div className="offerings-card" >
              <img src="img3-removebg-preview.png" alt="" />
              <p>Attain a sense of clarity</p>
            </div>
            <div className="offerings-card" >
              <img src="img4-removebg-preview.png" alt="" />
              <p>Get directed by experts</p>
            </div>
            <div className="offerings-card" >
              <img src="img5-removebg-preview.png" alt="" />
              <p>Expand your Vision</p>
            </div>
            <div className="offerings-card" >
              <img src="img6-removebg-preview.png" alt="" />
              <p>Checklist of for success</p>
            </div>
          </div>
        </section>
  )
}

export default Offering;