import React, { useContext, useEffect, useRef, useState } from "react";
import { context } from "../context";

function InfluencerMarketing() {

  const quest = {
    "1": "What sets your influencer marketing business apart from competitors?",
    "2": "How do you plan to establish and communicate your brand identity to resonate with your target audience?",
    "3": "What strategies will you use to build relationships with influencers in your chosen niche?",
    "4": "How will you tailor your service packages to meet the unique needs and objectives of your clients?",
    "5": "What methods will you use to reach out to brands and pitch your services effectively?",
    "6": "How do you plan to coordinate with influencers to create engaging content that aligns with brands' objectives?",
    "7": "What metrics will you use to monitor campaign performance and track ROI for your clients?",
    "8": "How will you stay updated on industry trends, platform algorithms, and best practices in influencer marketing?",
    "9": "What strategies do you have in place to adapt and evolve your business as the influencer marketing landscape changes?",
    "10": "What strategies will you implement to stay ahead of emerging trends and innovations in influencer marketing?"
  }

  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
    domain['influencer'] = {}
  }, []);

  let { domain, setDomain } = useContext(context)
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const addQuestion = (question, answer) => {
    const updateInfluencer = {
      ...domain['influencer'],
      [question]: answer
    };
    setDomain({
      ...domain,
      influencer: updateInfluencer
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
          <h1 className="title text-center mb-3">Influencer Marketing</h1>
          <form className="card w-100 max-w-lg">
            <h4 className="card-title text-center mt-4">STEP 3 OF 6</h4>
            <div>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <br></br>
                  <h5 className="card-title">Question 1</h5>
                  <p className="card-text">What sets your influencer marketing business apart from competitors?</p>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q1"
                      id="q1a1"
                      value="Unique value proposition"
                      onChange={(e) => handleAnswerChange("1", e.target.value)}
                      checked={domain['influencer'] && domain['influencer']['What sets your influencer marketing business apart from competitors?'] === "Unique value proposition"}
                    />
                    <label className="form-check-label" htmlFor="q1a1">Unique value proposition</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q1"
                      id="q1a2"
                      value="Specialized expertise"
                      onChange={(e) => handleAnswerChange("1", e.target.value)}
                      checked={domain['influencer'] && domain['influencer']['What sets your influencer marketing business apart from competitors?'] === "Specialized expertise"}
                    />
                    <label className="form-check-label" htmlFor="q1a2">Specialized expertise</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q1"
                      id="q1a3"
                      value="Innovativ`e approach"
                      onChange={(e) => handleAnswerChange("1", e.target.value)}
                      checked={domain['influencer'] && domain['influencer']['What sets your influencer marketing business apart from competitors?'] === "Innovativ`e approach"}
                    />
                    <label className="form-check-label" htmlFor="q1a3">
                      Innovativ`e approach
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q1"
                      id="q1a4"
                      value="Strong industry connections"
                      onChange={(e) => handleAnswerChange("1", e.target.value)}
                      checked={domain['influencer'] && domain['influencer']['What sets your influencer marketing business apart from competitors?'] === "Strong industry connections"}
                    />
                    <label className="form-check-label" htmlFor="q1a4">Strong industry connections</label>
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 2</h5>
                  <p className="card-text">
                    How do you plan to establish and communicate your brand identity to resonate with your target audience?
                  </p>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q2"
                      id="q2a1"
                      value="Consistent messaging"
                      onChange={(e) => handleAnswerChange("2", e.target.value)}
                      checked={domain['influencer'] && domain['influencer']['How do you plan to establish and communicate your brand identity to resonate with your target audience?'] === "Consistent messaging"}
                    />
                    <label className="form-check-label" htmlFor="q2a1">
                      Consistent messaging
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q2"
                      id="q2a2"
                      value="Engaging visual content"
                      onChange={(e) => handleAnswerChange("2", e.target.value)}
                      checked={domain['influencer'] && domain['influencer']['How do you plan to establish and communicate your brand identity to resonate with your target audience?'] === "Engaging visual content"}
                    />
                    <label className="form-check-label" htmlFor="q2a2">
                      Engaging visual content
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q2"
                      id="q2a3"
                      value="Authentic storytelling"
                      onChange={(e) => handleAnswerChange("2", e.target.value)}
                      checked={domain['influencer'] && domain['influencer']['How do you plan to establish and communicate your brand identity to resonate with your target audience?'] === "Authentic storytelling"}
                    />
                    <label className="form-check-label" htmlFor="q2a3">
                      Authentic storytelling
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 3</h5>
                  <p className="card-text">
                    What strategies will you use to build relationships with influencers in your chosen niche?
                  </p>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q3"
                      id="q3a1"
                      value="Engaging with their content"
                      onChange={(e) => handleAnswerChange("3", e.target.value)}
                      checked={domain['influencer'] && domain['influencer']['What strategies will you use to build relationships with influencers in your chosen niche?'] === "Engaging with their content"}
                    />
                    <label className="form-check-label" htmlFor="q3a1">
                      Engaging with their content
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q3"
                      id="q3a2"
                      value="Providing value"
                      onChange={(e) => handleAnswerChange("3", e.target.value)}
                      checked={domain['influencer'] && domain['influencer']['What strategies will you use to build relationships with influencers in your chosen niche?'] === "Providing value"}
                    />
                    <label className="form-check-label" htmlFor="q3a2">
                      Providing value
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q3"
                      id="q3a3"
                      value="Networking events"
                      onChange={(e) => handleAnswerChange("3", e.target.value)}
                      checked={domain['influencer'] && domain['influencer']['What strategies will you use to build relationships with influencers in your chosen niche?'] === "Networking events"}
                    />
                    <label className="form-check-label" htmlFor="q3a3">
                      Networking events
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 4</h5>
                  <p className="card-text">
                    How will you tailor your service packages to meet the unique needs and objectives of your clients?
                  </p>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q4"
                      id="q4a1"
                      value="Customization options"
                      onChange={(e) => handleAnswerChange("4", e.target.value)}
                      checked={domain['influencer'] && domain['influencer']['How will you tailor your service packages to meet the unique needs and objectives of your clients?'] === "Customization options"}
                    />
                    <label className="form-check-label" htmlFor="q4a1">
                      Customization options
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q4"
                      id="q4a2"
                      value="Flexible pricing"
                      onChange={(e) => handleAnswerChange("4", e.target.value)}
                      checked={domain['influencer'] && domain['influencer']['How will you tailor your service packages to meet the unique needs and objectives of your clients?'] === "Flexible pricing"}
                    />
                    <label className="form-check-label" htmlFor="q4a2">
                      Flexible pricing
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q4"
                      id="q4a3"
                      value="Personalized strategy sessions"
                      onChange={(e) => handleAnswerChange("4", e.target.value)}
                      checked={domain['influencer'] && domain['influencer']['How will you tailor your service packages to meet the unique needs and objectives of your clients?'] === "Personalized strategy sessions"}
                    />
                    <label className="form-check-label" htmlFor="q4a3">
                      Personalized strategy sessions
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 5</h5>
                  <p className="card-text">
                    What methods will you use to reach out to brands and pitch your services effectively?
                  </p>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q5"
                      id="q5a1"
                      value="Social media outreach"
                      onChange={(e) => handleAnswerChange("5", e.target.value)}
                      checked={domain['influencer'] && domain['influencer']['What methods will you use to reach out to brands and pitch your services effectively?'] === "Social media outreach"}
                    />
                    <label className="form-check-label" htmlFor="q5a1">
                      Social media outreach
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q5"
                      id="q5a2"
                      value="Email campaigns"
                      onChange={(e) => handleAnswerChange("5", e.target.value)}
                      checked={domain['influencer'] && domain['influencer']['What methods will you use to reach out to brands and pitch your services effectively?'] === "Email campaigns"}
                    />
                    <label className="form-check-label" htmlFor="q5a2">
                      Email campaigns
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q5"
                      id="q5a3"
                      value="Networking events"
                      onChange={(e) => handleAnswerChange("5", e.target.value)}
                      checked={domain['influencer'] && domain['influencer']['What methods will you use to reach out to brands and pitch your services effectively?'] === "Networking events"}
                    />
                    <label className="form-check-label" htmlFor="q5a3">
                      Networking events
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 6</h5>
                  <p className="card-text">
                    How do you plan to coordinate with influencers to create engaging content that aligns with brands' objectives?
                  </p>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q6"
                      id="q6a1"
                      value="Clear communication channels"
                      onChange={(e) => handleAnswerChange("6", e.target.value)}
                      checked={domain['influencer'] && domain['influencer']["How do you plan to coordinate with influencers to create engaging content that aligns with brands' objectives?"] === "Clear communication channels"}
                    />
                    <label className="form-check-label" htmlFor="q6a1">
                      Clear communication channels
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q6"
                      id="q6a2"
                      value="Content briefs and guidelines"
                      onChange={(e) => handleAnswerChange("6", e.target.value)}
                      checked={domain['influencer'] && domain['influencer']["How do you plan to coordinate with influencers to create engaging content that aligns with brands' objectives?"] === "Content briefs and guidelines"}
                    />
                    <label className="form-check-label" htmlFor="q6a2">
                      Content briefs and guidelines
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q1"
                      id="q6a3"
                      value="Regular feedback and revisions"
                      onChange={(e) => handleAnswerChange("6", e.target.value)}
                      checked={domain['influencer'] && domain['influencer']["How do you plan to coordinate with influencers to create engaging content that aligns with brands' objectives?"] === "Regular feedback and revisions"}
                    />
                    <label className="form-check-label" htmlFor="q6a3">
                      Regular feedback and revisions
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 7</h5>
                  <p className="card-text">
                    What metrics will you use to monitor campaign performance and track ROI for your clients?
                  </p>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q7"
                      id="q7a1"
                      value="Engagement metrics (likes, comments, shares)"
                      onChange={(e) => handleAnswerChange("7", e.target.value)}
                      checked={domain['influencer'] && domain['influencer']["What metrics will you use to monitor campaign performance and track ROI for your clients?"] === "Engagement metrics (likes, comments, shares)"}
                    />
                    <label className="form-check-label" htmlFor="q7a1">
                      Engagement metrics (likes, comments, shares)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q7"
                      id="q7a2"
                      value="Conversion metrics (click-through rates, conversions)"
                      onChange={(e) => handleAnswerChange("7", e.target.value)}
                      checked={domain['influencer'] && domain['influencer']["What metrics will you use to monitor campaign performance and track ROI for your clients?"] === "Conversion metrics (click-through rates, conversions)"}
                    />
                    <label className="form-check-label" htmlFor="q7a2">
                      Conversion metrics (click-through rates, conversions)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q7"
                      id="q7a3"
                      value="Brand sentiment analysis"
                      onChange={(e) => handleAnswerChange("7", e.target.value)}
                      checked={domain['influencer'] && domain['influencer']["What metrics will you use to monitor campaign performance and track ROI for your clients?"] === "Brand sentiment analysis"}
                    />
                    <label className="form-check-label" htmlFor="q7a3">
                      Brand sentiment analysis
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 8</h5>
                  <p className="card-text">
                    How will you stay updated on industry trends, platform algorithms, and best practices in influencer marketing?
                  </p>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q8"
                      id="q8a1"
                      value="Industry publications and blogs"
                      onChange={(e) => handleAnswerChange("8", e.target.value)}
                      checked={domain['influencer'] && domain['influencer']['How will you stay updated on industry trends, platform algorithms, and best practices in influencer marketing?'] === "Industry publications and blogs"}
                    />
                    <label className="form-check-label" htmlFor="q8a1">
                      Industry publications and blogs
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q8"
                      id="q8a2"
                      value="Social media monitoring"
                      onChange={(e) => handleAnswerChange("8", e.target.value)}
                      checked={domain['influencer'] && domain['influencer']['How will you stay updated on industry trends, platform algorithms, and best practices in influencer marketing?'] === "Social media monitoring"}
                    />
                    <label className="form-check-label" htmlFor="q8a2">
                      Social media monitoring
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q8"
                      id="q8a3"
                      value="Networking with industry professionals"
                      onChange={(e) => handleAnswerChange("8", e.target.value)}
                      checked={domain['influencer'] && domain['influencer']['How will you stay updated on industry trends, platform algorithms, and best practices in influencer marketing?'] === "Networking with industry professionals"}
                    />
                    <label className="form-check-label" htmlFor="q8a3">
                      Networking with industry professionals
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 9</h5>
                  <p className="card-text">
                    What strategies do you have in place to adapt and evolve your business as the influencer marketing landscape changes?
                  </p>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q9"
                      id="q9a1"
                      value="Continuous learning and education"
                      onChange={(e) => handleAnswerChange("9", e.target.value)}
                      checked={domain['influencer'] && domain['influencer']['What strategies do you have in place to adapt and evolve your business as the influencer marketing landscape changes?'] === "Continuous learning and education"}
                    />
                    <label className="form-check-label" htmlFor="q9a1">
                      Continuous learning and education
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q9"
                      id="q9a2"
                      value="Experimentation with new approaches"
                      onChange={(e) => handleAnswerChange("9", e.target.value)}
                      checked={domain['influencer'] && domain['influencer']['What strategies do you have in place to adapt and evolve your business as the influencer marketing landscape changes?'] === "Experimentation with new approaches"}
                    />
                    <label className="form-check-label" htmlFor="q9a2">
                      Experimentation with new approaches
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q9"
                      id="q9a3"
                      value="Flexible business model"
                      onChange={(e) => handleAnswerChange("9", e.target.value)}
                      checked={domain['influencer'] && domain['influencer']['What strategies do you have in place to adapt and evolve your business as the influencer marketing landscape changes?'] === "Flexible business model"}
                    />
                    <label className="form-check-label" htmlFor="q9a3">
                      Flexible business model
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 10</h5>
                  <p className="card-text">
                    What strategies will you implement to stay ahead of emerging trends and innovations in influencer marketing?
                  </p>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q10"
                      id="q10a1"
                      value="Attending industry conferences and events"
                      onChange={(e) => handleAnswerChange("10", e.target.value)}
                      checked={domain['influencer'] && domain['influencer']['What strategies will you implement to stay ahead of emerging trends and innovations in influencer marketing?'] === "Attending industry conferences and events"}
                    />
                    <label className="form-check-label" htmlFor="q10a1">
                      Attending industry conferences and events
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q10"
                      id="q10a2"
                      value="Networking with thought leaders and experts"
                      onChange={(e) => handleAnswerChange("10", e.target.value)}
                      checked={domain['influencer'] && domain['influencer']['What strategies will you implement to stay ahead of emerging trends and innovations in influencer marketing?'] === "Networking with thought leaders and experts"}
                    />
                    <label className="form-check-label" htmlFor="q10a2">
                      Networking with thought leaders and experts
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q10"
                      id="q10a3"
                      value="Subscribing to industry newsletters and publications"
                      onChange={(e) => handleAnswerChange("10", e.target.value)}
                      checked={domain['influencer'] && domain['influencer']['What strategies will you implement to stay ahead of emerging trends and innovations in influencer marketing?'] === "Subscribing to industry newsletters and publications"}
                    />
                    <label className="form-check-label" htmlFor="q10a3">
                      Subscribing to industry newsletters and publications
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

export default InfluencerMarketing;
