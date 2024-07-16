import React, { useContext, useEffect, useRef, useState } from "react";
import { context } from "../context";

function BrandingDesign() {

  const quest = {
    "1": "What tech trends can we use to our advantage?",
    "2": "How do we plan to adapt to changing tech needs?",
    "3": "What cool stuff are we offering?",
    "4": "How do we make sure we're different from everyone else?",
    "5": "Who are our main customers?",
    "6": "How do we make sure our stuff fits what they want?",
    "7": "How do we ensure our branding and design solutions remain fresh and relevant over time?",
    "8": "What are the success drivers for your products or services?",
    "9": "What new things are we planning?",
    "10": "How do we make sure everyone's always thinking of cool new stuff?"
  }

  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
    domain['branding'] = {}
  }, []);

  let { domain, setDomain } = useContext(context)
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const addQuestion = (question, answer) => {
    const updateBranding = {
      ...domain['branding'],
      [question]: answer
    };
    setDomain({
      ...domain,
      branding: updateBranding
    });
  };

  const handleAnswerChange = (questionId, answer) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: answer
    });
    addQuestion(quest[questionId], answer)
  };

  return (
    <div ref={ref} className="container-fluid">
      <div className="row">
        <div className="col-12">
          <h1 className="title text-center mb-3">Branding & Design</h1>
          <form className="card w-100 max-w-lg">
            <h4 className="card-title text-center mt-4">STEP 6 OF 6</h4>
            <div>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <br></br>
                  <h5 className="card-title">Question 1</h5>
                  <p className="card-text">What tech trends can we use to our advantage?</p>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q1"
                      id="q1a1"
                      value="Virtual and Augmented Reality"
                      onChange={(e) => handleAnswerChange("1", e.target.value)}
                      checked={domain['branding'] && domain['branding']['What tech trends can we use to our advantage?'] === "Virtual and Augmented Reality"}
                    />
                    <label className="form-check-label" htmlFor="q1a1">
                      Virtual and Augmented Reality
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q1"
                      id="q1a2"
                      value="Artificial Intelligence"
                      onChange={(e) => handleAnswerChange("1", e.target.value)}
                      checked={domain['branding'] && domain['branding']['What tech trends can we use to our advantage?'] === "Artificial Intelligence"}

                    />
                    <label className="form-check-label" htmlFor="q1a2">
                      Artificial Intelligence
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q1"
                      id="q1a3"
                      value="Voice and visual search optimization"
                      onChange={(e) => handleAnswerChange("1", e.target.value)}
                      checked={domain['branding'] && domain['branding']['What tech trends can we use to our advantage?'] === "Voice and visual search optimization"}
                    />
                    <label className="form-check-label" htmlFor="q1a3">
                      Voice and visual search optimization
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q1"
                      id="q1a4"
                      value="Blockchain"
                      onChange={(e) => handleAnswerChange("1", e.target.value)}
                      checked={domain['branding'] && domain['branding']['What tech trends can we use to our advantage?'] === "Blockchain"}
                    />
                    <label className="form-check-label" htmlFor="q1a4">
                      Blockchain
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 2</h5>
                  <p className="card-text"> How do we plan to adapt to changing tech needs?</p>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q2"
                      id="q2a1"
                      value="Establish a dedicated R&D team"
                      onChange={(e) => handleAnswerChange("2", e.target.value)}
                      checked={domain['branding'] && domain['branding']['How do we plan to adapt to changing tech needs?'] === "Establish a dedicated R&D team"}
                    />
                    <label className="form-check-label" htmlFor="q2a1">
                      Establish a dedicated R&D team
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q2"
                      id="q2a2"
                      value="Partner with tech startups"
                      onChange={(e) => handleAnswerChange("2", e.target.value)}
                      checked={domain['branding'] && domain['branding']['How do we plan to adapt to changing tech needs?'] === "Partner with tech startups"}
                    />
                    <label className="form-check-label" htmlFor="q2a2">
                      Partner with tech startups
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q2"
                      id="q2a3"
                      value="Continuous employee training programs"
                      onChange={(e) => handleAnswerChange("2", e.target.value)}
                      checked={domain['branding'] && domain['branding']['How do we plan to adapt to changing tech needs?'] === "Continuous employee training programs"}
                    />
                    <label className="form-check-label" htmlFor="q2a3">
                      Continuous employee training programs
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q2"
                      id="q2a4"
                      value="Agile project management methodologies"
                      onChange={(e) => handleAnswerChange("2", e.target.value)}
                      checked={domain['branding'] && domain['branding']['How do we plan to adapt to changing tech needs?'] === "Agile project management methodologies"}
                    />
                    <label className="form-check-label" htmlFor="q2a4">
                      Agile project management methodologies
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 3</h5>
                  <p className="card-text">What cool stuff are we offering?</p>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q3"
                      id="q3a1"
                      value=" Interactive brand storytelling experiences"
                      onChange={(e) => handleAnswerChange("3", e.target.value)}
                      checked={domain['branding'] && domain['branding']['What cool stuff are we offering?'] === " Interactive brand storytelling experiences"}
                    />
                    <label className="form-check-label" htmlFor="q3a1">
                      Interactive brand storytelling experiences
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q3"
                      id="q3a2"
                      value="Customized AR filters and lenses"
                      onChange={(e) => handleAnswerChange("3", e.target.value)}
                      checked={domain['branding'] && domain['branding']['What cool stuff are we offering?'] === "Customized AR filters and lenses"}
                    />
                    <label className="form-check-label" htmlFor="q3a2">
                      Customized AR filters and lenses
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q3"
                      id="q3a3"
                      value="Data-driven design optimization"
                      onChange={(e) => handleAnswerChange("3", e.target.value)}
                      checked={domain['branding'] && domain['branding']['What cool stuff are we offering?'] === "Data-driven design optimization"}
                    />
                    <label className="form-check-label" htmlFor="q3a3">
                      Data-driven design optimization
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q3"
                      id="q3a4"
                      value=" Collaborative design workshops"
                      onChange={(e) => handleAnswerChange("3", e.target.value)}
                      checked={domain['branding'] && domain['branding']['What cool stuff are we offering?'] === " Collaborative design workshops"}
                    />
                    <label className="form-check-label" htmlFor="q3a4">
                      Collaborative design workshops
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 4</h5>
                  <p className="card-text">How do we make sure we're different from everyone else?</p>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q4"
                      id="q4a1"
                      value="Emphasize human-centric approach"
                      onChange={(e) => handleAnswerChange("4", e.target.value)}
                      checked={domain['branding'] && domain['branding']["How do we make sure we're different from everyone else?"] === "Emphasize human-centric approach"}
                    />
                    <label className="form-check-label" htmlFor="q4a1">
                      Emphasize human-centric approach
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q4"
                      id="q4a2"
                      value="Blend creativity and data-driven insights"
                      onChange={(e) => handleAnswerChange("4", e.target.value)}
                      checked={domain['branding'] && domain['branding']["How do we make sure we're different from everyone else?"] === "Blend creativity and data-driven insights"}
                    />
                    <label className="form-check-label" htmlFor="q4a2">
                      Blend creativity and data-driven insights
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q4"
                      id="q4a3"
                      value="Provide end-to-end branding solutions"
                      onChange={(e) => handleAnswerChange("4", e.target.value)}
                      checked={domain['branding'] && domain['branding']["How do we make sure we're different from everyone else?"] === "Provide end-to-end branding solutions"}
                    />
                    <label className="form-check-label" htmlFor="q4a3">
                      Provide end-to-end branding solutions
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q4"
                      id="q4a4"
                      value="Focus on sustainability and ethical design"
                      onChange={(e) => handleAnswerChange("4", e.target.value)}
                      checked={domain['branding'] && domain['branding']["How do we make sure we're different from everyone else?"] === "Focus on sustainability and ethical design"}
                    />
                    <label className="form-check-label" htmlFor="q4a4">
                      Focus on sustainability and ethical design
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 5</h5>
                  <p className="card-text">Who are our main customers?</p>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q5"
                      id="q5a1"
                      value="Tech startups"
                      onChange={(e) => handleAnswerChange("5", e.target.value)}
                      checked={domain['branding'] && domain['branding']['Who are our main customers?'] === "Tech startups"}
                    />
                    <label className="form-check-label" htmlFor="q5a1">
                      Tech startups
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q5"
                      id="q5a2"
                      value="E-commerce businesses"
                      onChange={(e) => handleAnswerChange("5", e.target.value)}
                      checked={domain['branding'] && domain['branding']['Who are our main customers?'] === "E-commerce businesses"}
                    />
                    <label className="form-check-label" htmlFor="q5a2">
                      E-commerce businesses
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q5"
                      id="q5a3"
                      value="Consumer brands targeting Gen Z and Millennial demographics"
                      onChange={(e) => handleAnswerChange("5", e.target.value)}
                      checked={domain['branding'] && domain['branding']['Who are our main customers?'] === "Consumer brands targeting Gen Z and Millennial demographics"}
                    />
                    <label className="form-check-label" htmlFor="q5a3">
                      Consumer brands targeting Gen Z and Millennial demographics
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q5"
                      id="q5a4"
                      value="B2B companies"
                      onChange={(e) => handleAnswerChange("5", e.target.value)}
                      checked={domain['branding'] && domain['branding']['Who are our main customers?'] === "B2B companies"}
                    />
                    <label className="form-check-label" htmlFor="q5a4">
                      B2B companies
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 6</h5>
                  <p className="card-text">How do we make sure our stuff fits what they want?</p>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q6"
                      id="q6a1"
                      value="Conduct thorough market research and customer surveys"
                      onChange={(e) => handleAnswerChange("6", e.target.value)}
                      checked={domain['branding'] && domain['branding']['How do we make sure our stuff fits what they want?'] === "Conduct thorough market research and customer surveys"}
                    />
                    <label className="form-check-label" htmlFor="q6a1">
                      Conduct thorough market research and customer surveys
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q6"
                      id="q6a2"
                      value="Offer customizable design packages"
                      onChange={(e) => handleAnswerChange("6", e.target.value)}
                      checked={domain['branding'] && domain['branding']['How do we make sure our stuff fits what they want?'] === "Offer customizable design packages"}
                    />
                    <label className="form-check-label" htmlFor="q6a2">
                      Offer customizable design packages
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q6"
                      id="q6a3"
                      value="Provide case studies and testimonials"
                      onChange={(e) => handleAnswerChange("6", e.target.value)}
                      checked={domain['branding'] && domain['branding']['How do we make sure our stuff fits what they want?'] === "Provide case studies and testimonials"}
                    />
                    <label className="form-check-label" htmlFor="q6a3">
                      Provide case studies and testimonials
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q6"
                      id="q6a4"
                      value="Regularly solicit feedback and iterate on design solutions"
                      onChange={(e) => handleAnswerChange("6", e.target.value)}
                      checked={domain['branding'] && domain['branding']['How do we make sure our stuff fits what they want?'] === "Regularly solicit feedback and iterate on design solutions"}
                    />
                    <label className="form-check-label" htmlFor="q6a4">
                      Regularly solicit feedback and iterate on design solutions
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 7</h5>
                  <p className="card-text">How do we ensure our branding and design solutions remain fresh and relevant over time?</p>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q7"
                      id="q7a1"
                      value="Regularly conduct design audits and trend analyses to stay ahead of evolving aesthetics"
                      onChange={(e) => handleAnswerChange("7", e.target.value)}
                      checked={domain['branding'] && domain['branding']['How do we ensure our branding and design solutions remain fresh and relevant over time?'] === "Regularly conduct design audits and trend analyses to stay ahead of evolving aesthetics"}
                    />
                    <label className="form-check-label" htmlFor="q7a1">
                      Regularly conduct design audits and trend analyses to stay ahead of evolving aesthetics
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q7"
                      id="q7a2"
                      value="Foster a culture of creativity and experimentation within our design team"
                      onChange={(e) => handleAnswerChange("7", e.target.value)}
                      checked={domain['branding'] && domain['branding']['How do we ensure our branding and design solutions remain fresh and relevant over time?'] === "Foster a culture of creativity and experimentation within our design team"}
                    />
                    <label className="form-check-label" htmlFor="q7a2">
                      Foster a culture of creativity and experimentation within our design team
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q7"
                      id="q7a3"
                      value="Establish partnerships with trendsetting brands or influencers to gain insights into emerging styles"
                      onChange={(e) => handleAnswerChange("7", e.target.value)}
                      checked={domain['branding'] && domain['branding']['How do we ensure our branding and design solutions remain fresh and relevant over time?'] === "Establish partnerships with trendsetting brands or influencers to gain insights into emerging styles"}
                    />
                    <label className="form-check-label" htmlFor="q7a3">
                      Establish partnerships with trendsetting brands or influencers to gain insights into emerging styles
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q7"
                      id="q7a4"
                      value="Implement a system for collecting and integrating client feedback into our design processes"
                      onChange={(e) => handleAnswerChange("7", e.target.value)}
                      checked={domain['branding'] && domain['branding']['How do we ensure our branding and design solutions remain fresh and relevant over time?'] === "Implement a system for collecting and integrating client feedback into our design processes"}
                    />
                    <label className="form-check-label" htmlFor="q7a4">
                      Implement a system for collecting and integrating client feedback into our design processes
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 8</h5>
                  <p className="card-text"> What are the success drivers for your products or services? </p>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q8"
                      id="q8a1"
                      value="Highlight our unique blend of creativity and technological expertise"
                      onChange={(e) => handleAnswerChange("8", e.target.value)}
                      checked={domain['branding'] && domain['branding']['What are the success drivers for your products or services?'] === "Highlight our unique blend of creativity and technological expertise"}
                    />
                    <label className="form-check-label" htmlFor="q8a1">
                      Highlight our unique blend of creativity and technological expertise
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q8"
                      id="q8a2"
                      value="Showcase case studies of successful projects"
                      onChange={(e) => handleAnswerChange("8", e.target.value)}
                      checked={domain['branding'] && domain['branding']['What are the success drivers for your products or services?'] === "Showcase case studies of successful projects"}
                    />
                    <label className="form-check-label" htmlFor="q8a2">
                      Showcase case studies of successful projects
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q8"
                      id="q8a3"
                      value="Offer competitive pricing and flexible service packages"
                      onChange={(e) => handleAnswerChange("8", e.target.value)}
                      checked={domain['branding'] && domain['branding']['What are the success drivers for your products or services?'] === "Offer competitive pricing and flexible service packages"}
                    />
                    <label className="form-check-label" htmlFor="q8a3">
                      Offer competitive pricing and flexible service packages
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q8"
                      id="q8a4"
                      value="Invest in ongoing innovation to stay ahead"
                      onChange={(e) => handleAnswerChange("8", e.target.value)}
                      checked={domain['branding'] && domain['branding']['What are the success drivers for your products or services?'] === "Invest in ongoing innovation to stay ahead"}
                    />
                    <label className="form-check-label" htmlFor="q8a4">
                      Invest in ongoing innovation to stay ahead
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 9</h5>
                  <p className="card-text">What new things are we planning?</p>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q9"
                      id="q9a1"
                      value="Collaborate with emerging tech companies"
                      onChange={(e) => handleAnswerChange("9", e.target.value)}
                      checked={domain['branding'] && domain['branding']['What new things are we planning?'] === "Collaborate with emerging tech companies"}
                    />
                    <label className="form-check-label" htmlFor="q9a1">
                      Collaborate with emerging tech companies
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q9"
                      id="q9a2"
                      value="Develop proprietary design tools"
                      onChange={(e) => handleAnswerChange("9", e.target.value)}
                      checked={domain['branding'] && domain['branding']['What new things are we planning?'] === "Develop proprietary design tools"}
                    />
                    <label className="form-check-label" htmlFor="q9a2">
                      Develop proprietary design tools
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q9"
                      id="q9a3"
                      value="Offer subscription-based design services"
                      onChange={(e) => handleAnswerChange("9", e.target.value)}
                      checked={domain['branding'] && domain['branding']['What new things are we planning?'] === "Offer subscription-based design services"}
                    />
                    <label className="form-check-label" htmlFor="q9a3">
                      Offer subscription-based design services
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q9"
                      id="q9a4"
                      value="Launch a design-focused podcast or webinar series"
                      onChange={(e) => handleAnswerChange("9", e.target.value)}
                      checked={domain['branding'] && domain['branding']['What new things are we planning?'] === "Launch a design-focused podcast or webinar series"}
                    />
                    <label className="form-check-label" htmlFor="q9a4">
                      Launch a design-focused podcast or webinar series
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 10</h5>
                  <p className="card-text">How do we make sure everyone's always thinking of cool new stuff?</p>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q10"
                      id="q10a1"
                      value="Encourage cross-disciplinary brainstorming sessions"
                      onChange={(e) => handleAnswerChange("10", e.target.value)}
                      checked={domain['branding'] && domain['branding']["How do we make sure everyone's always thinking of cool new stuff?"] === "Encourage cross-disciplinary brainstorming sessions"}
                    />
                    <label className="form-check-label" htmlFor="q10a1">
                      Encourage cross-disciplinary brainstorming sessions
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q10"
                      id="q10a2"
                      value="Establish an innovation incentive program"
                      onChange={(e) => handleAnswerChange("10", e.target.value)}
                      checked={domain['branding'] && domain['branding']["How do we make sure everyone's always thinking of cool new stuff?"] === "Establish an innovation incentive program"}
                    />
                    <label className="form-check-label" htmlFor="q10a2">
                      Establish an innovation incentive program
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q10"
                      id="q10a3"
                      value="Attend design and tech conferences regularly"
                      onChange={(e) => handleAnswerChange("10", e.target.value)}
                      checked={domain['branding'] && domain['branding']["How do we make sure everyone's always thinking of cool new stuff?"] === "Attend design and tech conferences regularly"}
                    />
                    <label className="form-check-label" htmlFor="q10a3">
                      Attend design and tech conferences regularly
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q10"
                      id="q10a4"
                      value="Foster a culture of experimentation and risk-taking"
                      onChange={(e) => handleAnswerChange("10", e.target.value)}
                      checked={domain['branding'] && domain['branding']["How do we make sure everyone's always thinking of cool new stuff?"] === "Foster a culture of experimentation and risk-taking"}
                    />
                    <label className="form-check-label" htmlFor="q10a4">
                      Foster a culture of experimentation and risk-taking
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>
            </div>
          </form>
          <br></br>
        </div>
      </div>
    </div>
  );
}
export default BrandingDesign;
