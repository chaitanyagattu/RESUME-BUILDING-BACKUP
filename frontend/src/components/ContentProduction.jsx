import React, { useContext, useEffect, useRef, useState } from "react";
import { context } from "../context";

function ContentProduction() {

  const quest = {
    "1": "What kinds of stuff are we making, and why do people want it?",
    "2": "Who are we making it for, and what do they like?",
    "3": "How do we make sure our stuff is better than everyone else's?",
    "4": "What do we need to make our stuff, and who's doing what?",
    "5": "What tools are we using to make sure our stuff looks good?",
    "6": "How do we ensure the quality and consistency of our content?",
    "7": "How do we know if our stuff is doing well, and what do we do if it's not?",
    "8": "When are we starting, and what do we want to achieve?",
    "9": "How do we know if we're doing a good job, and what's the plan for the future?",
    "10": "What are the success evaluation metrics over time?"
  }

  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
    domain['content'] = {}
  }, []);

  let { domain, setDomain } = useContext(context)
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const addQuestion = (question, answer) => {
    const updateContent = {
      ...domain['content'],
      [question]: answer
    };
    setDomain({
      ...domain,
      content: updateContent
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
          <h1 className="title text-center mb-3">Content Production</h1>
          <form className="card w-100 max-w-lg">
            <h4 className="card-title text-center mt-4">STEP 4 OF 6</h4>
            <div>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <br></br>
                  <h5 className="card-title">Question 1</h5>
                  <p className="card-text">
                    What kinds of stuff are we making, and why do people want it?
                  </p>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q1"
                      id="q1a1"
                      value="Engaging blog posts offering valuable insights and information"
                      onChange={(e) => handleAnswerChange("1", e.target.value)}
                      checked={domain['content'] && domain['content']['What kinds of stuff are we making, and why do people want it?'] === "Engaging blog posts offering valuable insights and information"}
                    />
                    <label className="form-check-label" htmlFor="q1a1">
                      Engaging blog posts offering valuable insights and
                      information
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q1"
                      id="q1a2"
                      value="Interactive videos showcasing product demonstrations and tutorials"
                      onChange={(e) => handleAnswerChange("1", e.target.value)}
                      checked={domain['content'] && domain['content']['What kinds of stuff are we making, and why do people want it?'] === "Interactive videos showcasing product demonstrations and tutorials"}
                    />
                    <label className="form-check-label" htmlFor="q1a2">
                      Interactive videos showcasing product demonstrations and
                      tutorials
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q1"
                      id="q1a3"
                      value="Entertaining podcasts featuring industry experts and thought leaders"
                      onChange={(e) => handleAnswerChange("1", e.target.value)}
                      checked={domain['content'] && domain['content']['What kinds of stuff are we making, and why do people want it?'] === "Entertaining podcasts featuring industry experts and thought leaders"}
                    />
                    <label className="form-check-label" htmlFor="q1a3">
                      Entertaining podcasts featuring industry experts and thought
                      leaders
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q1"
                      id="q1a4"
                      value="Visual infographics summarizing complex information in a digestible format"
                      onChange={(e) => handleAnswerChange("1", e.target.value)}
                      checked={domain['content'] && domain['content']['What kinds of stuff are we making, and why do people want it?'] === "Visual infographics summarizing complex information in a digestible format"}
                    />
                    <label className="form-check-label" htmlFor="q1a4">
                      Visual infographics summarizing complex information in a
                      digestible format
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 2</h5>
                  <p className="card-text">
                    Who are we making it for, and what do they like?
                  </p>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q2"
                      id="q2a1"
                      value="Millennials interested in socially conscious content and trends"
                      onChange={(e) => handleAnswerChange("2", e.target.value)}
                      checked={domain['content'] && domain['content']['Who are we making it for, and what do they like?'] === "Millennials interested in socially conscious content and trends"}
                    />
                    <label className="form-check-label" htmlFor="q2a1">
                      Millennials interested in socially conscious content and
                      trends
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q2"
                      id="q2a2"
                      value="Gen Z consumers seeking authentic and relatable content experiences"
                      onChange={(e) => handleAnswerChange("2", e.target.value)}
                      checked={domain['content'] && domain['content']['Who are we making it for, and what do they like?'] === "Gen Z consumers seeking authentic and relatable content experiences"}
                    />
                    <label className="form-check-label" htmlFor="q2a2">
                      Gen Z consumers seeking authentic and relatable content
                      experiences
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q2"
                      id="q2a3"
                      value="Professionals looking for actionable insights and career advice"
                      onChange={(e) => handleAnswerChange("2", e.target.value)}
                      checked={domain['content'] && domain['content']['Who are we making it for, and what do they like?'] === "Professionals looking for actionable insights and career advice"}
                    />
                    <label className="form-check-label" htmlFor="q2a3">
                      Professionals looking for actionable insights and career
                      advice
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q2"
                      id="q2a4"
                      value="Parents seeking educational and entertaining content for their children"
                      onChange={(e) => handleAnswerChange("2", e.target.value)}
                      checked={domain['content'] && domain['content']['Who are we making it for, and what do they like?'] === "Parents seeking educational and entertaining content for their children"}
                    />
                    <label className="form-check-label" htmlFor="q2a4">
                      Parents seeking educational and entertaining content for
                      their children
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 3</h5>
                  <p className="card-text">
                    How do we make sure our stuff is better than everyone
                    else's?
                  </p>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q3"
                      id="q3a1"
                      value="Conducting in-depth research to identify content gaps and opportunities"
                      onChange={(e) => handleAnswerChange("3", e.target.value)}
                      checked={domain['content'] && domain['content']["How do we make sure our stuff is better than everyone else's?"] === "Conducting in-depth research to identify content gaps and opportunities"}
                    />
                    <label className="form-check-label" htmlFor="q3a1">
                      Conducting in-depth research to identify content gaps and
                      opportunities
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q3"
                      id="q3a2"
                      value=" Investing in high-quality production equipment and editing software"
                      onChange={(e) => handleAnswerChange("3", e.target.value)}
                      checked={domain['content'] && domain['content']["How do we make sure our stuff is better than everyone else's?"] === " Investing in high-quality production equipment and editing software"}
                    />
                    <label className="form-check-label" htmlFor="q3a2">
                      Investing in high-quality production equipment and editing
                      software
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q3"
                      id="q3a3"
                      value="Collaborating with industry influencers and experts to lend credibility"
                      onChange={(e) => handleAnswerChange("3", e.target.value)}
                      checked={domain['content'] && domain['content']["How do we make sure our stuff is better than everyone else's?"] === "Collaborating with industry influencers and experts to lend credibility"}
                    />
                    <label className="form-check-label" htmlFor="q3a3">
                      Collaborating with industry influencers and experts to
                      lend credibility
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q3"
                      id="q3a4"
                      value="Implementing SEO best practices to increase discoverability and reach"
                      onChange={(e) => handleAnswerChange("3", e.target.value)}
                      checked={domain['content'] && domain['content']["How do we make sure our stuff is better than everyone else's?"] === "Implementing SEO best practices to increase discoverability and reach"}
                    />
                    <label className="form-check-label" htmlFor="q3a4">
                      Implementing SEO best practices to increase
                      discoverability and reach
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 4</h5>
                  <p className="card-text">
                    What do we need to make our stuff, and who's doing what?
                  </p>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q4"
                      id="q4a1"
                      value="Content writers creating compelling copy and storytelling"
                      onChange={(e) => handleAnswerChange("4", e.target.value)}
                      checked={domain['content'] && domain['content']["What do we need to make our stuff, and who's doing what?"] === "Content writers creating compelling copy and storytelling"}
                    />
                    <label className="form-check-label" htmlFor="q4a1">
                      Content writers creating compelling copy and storytelling
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q4"
                      id="q4a2"
                      value="Graphic designers crafting visually appealing images and infographics"
                      onChange={(e) => handleAnswerChange("4", e.target.value)}
                      checked={domain['content'] && domain['content']["What do we need to make our stuff, and who's doing what?"] === "Graphic designers crafting visually appealing images and infographics"}
                    />
                    <label className="form-check-label" htmlFor="q4a2">
                      Graphic designers crafting visually appealing images and
                      infographics
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q4"
                      id="q4a3"
                      value="Video producers shooting and editing engaging video content"
                      onChange={(e) => handleAnswerChange("4", e.target.value)}
                      checked={domain['content'] && domain['content']["What do we need to make our stuff, and who's doing what?"] === "Video producers shooting and editing engaging video content"}
                    />
                    <label className="form-check-label" htmlFor="q4a3">
                      Video producers shooting and editing engaging video content
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q4"
                      id="q4a4"
                      value="Audio engineers recording and editing professional-grade podcasts and audio clips"
                      onChange={(e) => handleAnswerChange("4", e.target.value)}
                      checked={domain['content'] && domain['content']["What do we need to make our stuff, and who's doing what?"] === "Audio engineers recording and editing professional-grade podcasts and audio clips"}
                    />
                    <label className="form-check-label" htmlFor="q4a4">
                      Audio engineers recording and editing professional-grade
                      podcasts and audio clips
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
                    What tools are we using to make sure our stuff looks good?
                  </p>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q5"
                      id="q5a1"
                      value="Adobe Creative Suite for graphic design and video editing"
                      onChange={(e) => handleAnswerChange("5", e.target.value)}
                      checked={domain['content'] && domain['content']['What tools are we using to make sure our stuff looks good?'] === "Adobe Creative Suite for graphic design and video editing"}
                    />
                    <label className="form-check-label" htmlFor="q5a1">
                      Adobe Creative Suite for graphic design and video editing
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q5"
                      id="q5a2"
                      value="Canva for easy-to-use graphic design templates and layouts"
                      onChange={(e) => handleAnswerChange("5", e.target.value)}
                      checked={domain['content'] && domain['content']['What tools are we using to make sure our stuff looks good?'] === "Canva for easy-to-use graphic design templates and layouts"}
                    />
                    <label className="form-check-label" htmlFor="q5a2">
                      Canva for easy-to-use graphic design templates and layouts
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q5"
                      id="q5a3"
                      value="Final Cut Pro or Adobe Premiere Pro for professional video editing"
                      onChange={(e) => handleAnswerChange("5", e.target.value)}
                      checked={domain['content'] && domain['content']['What tools are we using to make sure our stuff looks good?'] === "Final Cut Pro or Adobe Premiere Pro for professional video editing"}
                    />
                    <label className="form-check-label" htmlFor="q5a3">
                      Final Cut Pro or Adobe Premiere Pro for professional video
                      editing
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q5"
                      id="q5a4"
                      value="Audacity or Adobe Audition for audio recording and editing"
                      onChange={(e) => handleAnswerChange("5", e.target.value)}
                      checked={domain['content'] && domain['content']['What tools are we using to make sure our stuff looks good?'] === "Audacity or Adobe Audition for audio recording and editing"}
                    />
                    <label className="form-check-label" htmlFor="q5a4">
                      Audacity or Adobe Audition for audio recording and editing
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
                    How do we ensure the quality and consistency of our content?
                  </p>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q6"
                      id="q6a1"
                      value="Implement a rigorous editorial review process to maintain high standards"
                      onChange={(e) => handleAnswerChange("6", e.target.value)}
                      checked={domain['content'] && domain['content']['How do we ensure the quality and consistency of our content?'] === "Implement a rigorous editorial review process to maintain high standards"}
                    />
                    <label className="form-check-label" htmlFor="q6a1">
                      Implement a rigorous editorial review process to maintain
                      high standards
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q6"
                      id="q6a2"
                      value="Utilize content calendars and scheduling tools to plan and organize content production"
                      onChange={(e) => handleAnswerChange("6", e.target.value)}
                      checked={domain['content'] && domain['content']['How do we ensure the quality and consistency of our content?'] === "Utilize content calendars and scheduling tools to plan and organize content production"}
                    />
                    <label className="form-check-label" htmlFor="q6a2">
                      Utilize content calendars and scheduling tools to plan and
                      organize content production
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q6"
                      id="q6a3"
                      value="Conduct regular content audits to identify areas for improvement and optimization"
                      onChange={(e) => handleAnswerChange("6", e.target.value)}
                      checked={domain['content'] && domain['content']['How do we ensure the quality and consistency of our content?'] === "Conduct regular content audits to identify areas for improvement and optimization"}
                    />
                    <label className="form-check-label" htmlFor="q6a3">
                      Conduct regular content audits to identify areas for
                      improvement and optimization
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q6"
                      id="q6a4"
                      value=" Collaborate closely with clients to align content with their brand voice and objectives"
                      onChange={(e) => handleAnswerChange("6", e.target.value)}
                      checked={domain['content'] && domain['content']['How do we ensure the quality and consistency of our content?'] === " Collaborate closely with clients to align content with their brand voice and objectives"}
                    />
                    <label className="form-check-label" htmlFor="q6a4">
                      Collaborate closely with clients to align content with
                      their brand voice and objectives
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
                    How do we know if our stuff is doing well, and what do we do
                    if it's not?
                  </p>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q7"
                      id="q7a1"
                      value=" Monitor key performance indicators (KPIs) such as engagement metrics and website traffic"
                      onChange={(e) => handleAnswerChange("7", e.target.value)}
                      checked={domain['content'] && domain['content']['How do we know if our stuff is doing well, and what do we do if it\'s not?'] === " Monitor key performance indicators (KPIs) such as engagement metrics and website traffic"}
                    />
                    <label className="form-check-label" htmlFor="q7a1">
                      Monitor key performance indicators (KPIs) such as
                      engagement metrics and website traffic
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q7"
                      id="q7a2"
                      value=" Conduct audience surveys and feedback forms to gather insights"
                      onChange={(e) => handleAnswerChange("7", e.target.value)}
                      checked={domain['content'] && domain['content']['How do we know if our stuff is doing well, and what do we do if it\'s not?'] === " Conduct audience surveys and feedback forms to gather insights"}
                    />
                    <label className="form-check-label" htmlFor="q7a2">
                      Conduct audience surveys and feedback forms to gather
                      insights
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q7"
                      id="q7a3"
                      value=" Analyze social media analytics and sentiment analysis to gauge audience response"
                      onChange={(e) => handleAnswerChange("7", e.target.value)}
                      checked={domain['content'] && domain['content']['How do we know if our stuff is doing well, and what do we do if it\'s not?'] === " Analyze social media analytics and sentiment analysis to gauge audience response"}
                    />
                    <label className="form-check-label" htmlFor="q7a3">
                      Analyze social media analytics and sentiment analysis to
                      gauge audience response
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q7"
                      id="q7a4"
                      value=" Iterate and optimize content based on performance data and audience feedback"
                      onChange={(e) => handleAnswerChange("7", e.target.value)}
                      checked={domain['content'] && domain['content']['How do we know if our stuff is doing well, and what do we do if it\'s not?'] === " Iterate and optimize content based on performance data and audience feedback"}
                    />
                    <label className="form-check-label" htmlFor="q7a4">
                      Iterate and optimize content based on performance data and
                      audience feedback
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
                    When are we starting, and what do we want to achieve?
                  </p>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q8"
                      id="q8a1"
                      value=" Launching content production within the next month with the goal of increasing brand visibility"
                      onChange={(e) => handleAnswerChange("8", e.target.value)}
                      checked={domain['content'] && domain['content']['When are we starting, and what do we want to achieve?'] === " Launching content production within the next month with the goal of increasing brand visibility"}
                    />
                    <label className="form-check-label" htmlFor="q8a1">
                      Launching content production within the next month with
                      the goal of increasing brand visibility
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q8"
                      id="q8a2"
                      value="Setting specific milestones and targets for content engagement and audience growth"
                      onChange={(e) => handleAnswerChange("8", e.target.value)}
                      checked={domain['content'] && domain['content']['When are we starting, and what do we want to achieve?'] === "Setting specific milestones and targets for content engagement and audience growth"}
                    />
                    <label className="form-check-label" htmlFor="q8a2">
                      Setting specific milestones and targets for content
                      engagement and audience growth
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q8"
                      id="q8a3"
                      value="Aligning content production with upcoming product launches or marketing campaigns"
                      onChange={(e) => handleAnswerChange("8", e.target.value)}
                      checked={domain['content'] && domain['content']['When are we starting, and what do we want to achieve?'] === "Aligning content production with upcoming product launches or marketing campaigns"}
                    />
                    <label className="form-check-label" htmlFor="q8a3">
                      Aligning content production with upcoming product launches
                      or marketing campaigns
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q8"
                      id="q8a4"
                      value="Establishing a content calendar with regular publishing schedules and themes"
                      onChange={(e) => handleAnswerChange("8", e.target.value)}
                      checked={domain['content'] && domain['content']['When are we starting, and what do we want to achieve?'] === "Establishing a content calendar with regular publishing schedules and themes"}
                    />
                    <label className="form-check-label" htmlFor="q8a4">
                      Establishing a content calendar with regular publishing
                      schedules and themes
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
                    How do we know if we're doing a good job, and what's the
                    plan for the future?
                  </p>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q9"
                      id="q9a1"
                      value="Celebrate key milestones and achievements with the team and stakeholders"
                      onChange={(e) => handleAnswerChange("9", e.target.value)}
                      checked={domain['content'] && domain['content']["How do we know if we're doing a good job, and what's the plan for the future?"] === "Celebrate key milestones and achievements with the team and stakeholders"}
                    />
                    <label className="form-check-label" htmlFor="q9a1">
                      Celebrate key milestones and achievements with the team
                      and stakeholders
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q9"
                      id="q9a2"
                      value="Conduct regular performance reviews and assessments to track progress"
                      onChange={(e) => handleAnswerChange("9", e.target.value)}
                      checked={domain['content'] && domain['content']["How do we know if we're doing a good job, and what's the plan for the future?"] === "Conduct regular performance reviews and assessments to track progress"}
                    />
                    <label className="form-check-label" htmlFor="q9a2">
                      Conduct regular performance reviews and assessments to
                      track progress
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q9"
                      id="q9a3"
                      value="Solicit feedback from internal and external stakeholders to identify areas for improvement"
                      onChange={(e) => handleAnswerChange("9", e.target.value)}
                      checked={domain['content'] && domain['content']["How do we know if we're doing a good job, and what's the plan for the future?"] === "Solicit feedback from internal and external stakeholders to identify areas for improvement"}
                    />
                    <label className="form-check-label" htmlFor="q9a3">
                      Solicit feedback from internal and external stakeholders
                      to identify areas for improvement
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q9"
                      id="q9a4"
                      value="Develop a long-term content strategy with evolving goals and objectives"
                      onChange={(e) => handleAnswerChange("9", e.target.value)}
                      checked={domain['content'] && domain['content']["How do we know if we're doing a good job, and what's the plan for the future?"] === "Develop a long-term content strategy with evolving goals and objectives"}
                    />
                    <label className="form-check-label" htmlFor="q9a4">
                      Develop a long-term content strategy with evolving goals
                      and objectives
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
                    What are the success evaluation metrics over time?
                  </p>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q10"
                      id="q10a1"
                      value="Increase in website traffic and organic search rankings"
                      onChange={(e) => handleAnswerChange("10", e.target.value)}
                      checked={domain['content'] && domain['content']['What are the success evaluation metrics over time?'] === "Increase in website traffic and organic search rankings"}
                    />
                    <label className="form-check-label" htmlFor="q10a1">
                      Increase in website traffic and organic search rankings
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q10"
                      id="q10a2"
                      value="Growth in social media followers and engagement rates"
                      onChange={(e) => handleAnswerChange("10", e.target.value)}
                      checked={domain['content'] && domain['content']['What are the success evaluation metrics over time?'] === "Growth in social media followers and engagement rates"}
                    />
                    <label className="form-check-label" htmlFor="q10a2">
                      Growth in social media followers and engagement rates
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q10"
                      id="q10a3"
                      value=" Higher conversion rates and lead generation from content marketing efforts"
                      onChange={(e) => handleAnswerChange("10", e.target.value)}
                      checked={domain['content'] && domain['content']['What are the success evaluation metrics over time?'] === " Higher conversion rates and lead generation from content marketing efforts"}
                    />
                    <label className="form-check-label" htmlFor="q10a3">
                      Higher conversion rates and lead generation from content
                      marketing efforts
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q10"
                      id="q10a4"
                      value=" Positive brand sentiment and increased brand awareness measured through surveys and sentiment analysis"
                      onChange={(e) => handleAnswerChange("10", e.target.value)}
                      checked={domain['content'] && domain['content']['What are the success evaluation metrics over time?'] === " Positive brand sentiment and increased brand awareness measured through surveys and sentiment analysis"}
                    />
                    <label className="form-check-label" htmlFor="q10a4">
                      Positive brand sentiment and increased brand awareness
                      measured through surveys and sentiment analysis
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
// Done.
export default ContentProduction;
