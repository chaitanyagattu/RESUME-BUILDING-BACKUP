import React, { useContext, useEffect, useRef, useState } from "react";
import { context } from "../context";

function PublicRelations() {

  const quest = {
    "1": "What are the big trends in PR we can take advantage of?",
    "2": "Who else is in the PR game, and how are we going to be different?",
    "3": "What exactly are we doing for our clients, and why does it matter?",
    "4": "Are we going to focus on anything specific, and why?",
    "5": "Who are we trying to help, and what do they need?",
    "6": "How do we make sure they stick with us?",
    "7": "How are we getting the word out about our PR agency?",
    "8": "What do we do to turn interested people into clients",
    "9": "What might go wrong, and how do we fix it?",
    "10": "What are the anticipated risks, and what are our mitigation plans?"
  }

  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
    domain['publicRelation'] = {}
  }, []);

  let { domain, setDomain } = useContext(context)
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const addQuestion = (question, answer) => {
    const updatePublicRelation = {
      ...domain['publicRelation'],
      [question]: answer
    };
    setDomain({
      ...domain,
      publicRelation: updatePublicRelation
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
          <h1 className="title text-center mb-3">Public Relations</h1>
          <form className="card w-100 max-w-lg">
            <h4 className="card-title text-center mt-4">STEP 5 OF 6</h4>
            <div>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <br></br>
                  <h5 className="card-title">Question 1</h5>
                  <p className="card-text">What are the big trends in PR we can take advantage of?</p>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q1"
                      id="q1a1"
                      value="Influencer marketing"
                      onChange={(e) => handleAnswerChange("1", e.target.value)}
                      checked={domain['publicRelation'] && domain['publicRelation']['What are the big trends in PR we can take advantage of?'] === "Influencer marketing"}
                    />
                    <label className="form-check-label" htmlFor="q1a1">
                      Influencer marketing
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q1"
                      id="q1a2"
                      value="Crisis management"
                      onChange={(e) => handleAnswerChange("1", e.target.value)}
                      checked={domain['publicRelation'] && domain['publicRelation']['What are the big trends in PR we can take advantage of?'] === "Crisis management"}
                    />
                    <label className="form-check-label" htmlFor="q1a2">
                      Crisis management
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q1"
                      id="q1a3"
                      value="Data-driven PR strategies"
                      onChange={(e) => handleAnswerChange("1", e.target.value)}
                      checked={domain['publicRelation'] && domain['publicRelation']['What are the big trends in PR we can take advantage of?'] === "Data-driven PR strategies"}
                    />
                    <label className="form-check-label" htmlFor="q1a3">
                      Data-driven PR strategies
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q1"
                      id="q1a4"
                      value="Community engagement initiatives"
                      onChange={(e) => handleAnswerChange("1", e.target.value)}
                      checked={domain['publicRelation'] && domain['publicRelation']['What are the big trends in PR we can take advantage of?'] === "Community engagement initiatives"}
                    />
                    <label className="form-check-label" htmlFor="q1a4">
                      Community engagement initiatives
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 2</h5>
                  <p className="card-text">Who else is in the PR game, and how are we going to be different?</p>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q2"
                      id="q2a1"
                      value="Boutique PR agencies focusing on niche industries"
                      onChange={(e) => handleAnswerChange("2", e.target.value)}
                      checked={domain['publicRelation'] && domain['publicRelation']['Who else is in the PR game, and how are we going to be different?'] === "Boutique PR agencies focusing on niche industries"}
                    />
                    <label className="form-check-label" htmlFor="q2a1">
                      Boutique PR agencies focusing on niche industries
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q2"
                      id="q2a2"
                      value="Large PR firms catering to corporate clients"
                      onChange={(e) => handleAnswerChange("2", e.target.value)}
                      checked={domain['publicRelation'] && domain['publicRelation']['Who else is in the PR game, and how are we going to be different?'] === "Large PR firms catering to corporate clients"}
                    />
                    <label className="form-check-label" htmlFor="q2a2">
                      Large PR firms catering to corporate clients
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q2"
                      id="q2a3"
                      value="Freelance PR consultants offering personalized services"
                      onChange={(e) => handleAnswerChange("2", e.target.value)}
                      checked={domain['publicRelation'] && domain['publicRelation']['Who else is in the PR game, and how are we going to be different?'] === "Freelance PR consultants offering personalized services"}
                    />
                    <label className="form-check-label" htmlFor="q2a3">
                      Freelance PR consultants offering personalized services
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q2"
                      id="q2a4"
                      value="In-house PR teams within companies handling their own communications"
                      onChange={(e) => handleAnswerChange("2", e.target.value)}
                      checked={domain['publicRelation'] && domain['publicRelation']['Who else is in the PR game, and how are we going to be different?'] === "In-house PR teams within companies handling their own communications"}
                    />
                    <label className="form-check-label" htmlFor="q2a4">
                      In-house PR teams within companies handling their own communications
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 3</h5>
                  <p className="card-text">What exactly are we doing for our clients, and why does it matter?</p>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q3"
                      id="q3a1"
                      value="Media relations and press release distribution"
                      onChange={(e) => handleAnswerChange("3", e.target.value)}
                      checked={domain['publicRelation'] && domain['publicRelation']['What exactly are we doing for our clients, and why does it matter?'] === "Media relations and press release distribution"}
                    />
                    <label className="form-check-label" htmlFor="q3a1">
                      Media relations and press release distribution
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q3"
                      id="q3a2"
                      value="Reputation management and brand positioning"
                      onChange={(e) => handleAnswerChange("3", e.target.value)}
                      checked={domain['publicRelation'] && domain['publicRelation']['What exactly are we doing for our clients, and why does it matter?'] === "Reputation management and brand positioning"}
                    />
                    <label className="form-check-label" htmlFor="q3a2">
                      Reputation management and brand positioning
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q3"
                      id="q3a3"
                      value="Event planning and execution"
                      onChange={(e) => handleAnswerChange("3", e.target.value)}
                      checked={domain['publicRelation'] && domain['publicRelation']['What exactly are we doing for our clients, and why does it matter?'] === "Event planning and execution"}
                    />
                    <label className="form-check-label" htmlFor="q3a3">
                      Event planning and execution
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q3"
                      id="q3a4"
                      value="Crisis communication and issue management"
                      onChange={(e) => handleAnswerChange("3", e.target.value)}
                      checked={domain['publicRelation'] && domain['publicRelation']['What exactly are we doing for our clients, and why does it matter?'] === "Crisis communication and issue management"}
                    />
                    <label className="form-check-label" htmlFor="q3a4">
                      Crisis communication and issue management
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 4</h5>
                  <p className="card-text">Are we going to focus on anything specific, and why?</p>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q4"
                      id="q4a1"
                      value="Specialize in tech industry PR due to our team's expertise"
                      onChange={(e) => handleAnswerChange("4", e.target.value)}
                      checked={domain['publicRelation'] && domain['publicRelation']['Are we going to focus on anything specific, and why?'] === "Specialize in tech industry PR due to our team's expertise"}
                    />
                    <label className="form-check-label" htmlFor="q4a1">
                      Specialize in tech industry PR due to our team's expertise
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q4"
                      id="q4a2"
                      value="Target hospitality sector for its growing need for PR services"
                      onChange={(e) => handleAnswerChange("4", e.target.value)}
                      checked={domain['publicRelation'] && domain['publicRelation']['Are we going to focus on anything specific, and why?'] === "Target hospitality sector for its growing need for PR services"}
                    />
                    <label className="form-check-label" htmlFor="q4a2">
                      Target hospitality sector for its growing need for PR services
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q4"
                      id="q4a3"
                      value="Offer crisis management as a core service due to rising demand"
                      onChange={(e) => handleAnswerChange("4", e.target.value)}
                      checked={domain['publicRelation'] && domain['publicRelation']['Are we going to focus on anything specific, and why?'] === "Offer crisis management as a core service due to rising demand"}
                    />
                    <label className="form-check-label" htmlFor="q4a3">
                      Offer crisis management as a core service due to rising demand
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q4"
                      id="q4a4"
                      value="Concentrate on local businesses to establish strong community ties"
                      onChange={(e) => handleAnswerChange("4", e.target.value)}
                      checked={domain['publicRelation'] && domain['publicRelation']['Are we going to focus on anything specific, and why?'] === "Concentrate on local businesses to establish strong community ties"}
                    />
                    <label className="form-check-label" htmlFor="q4a4">
                      Concentrate on local businesses to establish strong community ties
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 5</h5>
                  <p className="card-text">Who are we trying to help, and what do they need?</p>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q5"
                      id="q5a1"
                      value="Startups seeking to build brand awareness"
                      onChange={(e) => handleAnswerChange("5", e.target.value)}
                      checked={domain['publicRelation'] && domain['publicRelation']['Who are we trying to help, and what do they need?'] === "Startups seeking to build brand awareness"}
                    />
                    <label className="form-check-label" htmlFor="q5a1">
                      Startups seeking to build brand awareness
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q5"
                      id="q5a2"
                      value="Established companies aiming to repair damaged reputations"
                      onChange={(e) => handleAnswerChange("5", e.target.value)}
                      checked={domain['publicRelation'] && domain['publicRelation']['Who are we trying to help, and what do they need?'] === "Established companies aiming to repair damaged reputations"}
                    />
                    <label className="form-check-label" htmlFor="q5a2">
                      Established companies aiming to repair damaged reputations
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q5"
                      id="q5a3"
                      value="Non-profit organizations requiring public support for their causes"
                      onChange={(e) => handleAnswerChange("5", e.target.value)}
                      checked={domain['publicRelation'] && domain['publicRelation']['Who are we trying to help, and what do they need?'] === "Non-profit organizations requiring public support for their causes"}
                    />
                    <label className="form-check-label" htmlFor="q5a3">
                      Non-profit organizations requiring public support for their causes
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q5"
                      id="q5a4"
                      value="Celebrities and influencers needing PR representation"
                      onChange={(e) => handleAnswerChange("5", e.target.value)}
                      checked={domain['publicRelation'] && domain['publicRelation']['Who are we trying to help, and what do they need?'] === "Celebrities and influencers needing PR representation"}
                    />
                    <label className="form-check-label" htmlFor="q5a4">
                      Celebrities and influencers needing PR representation
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 6</h5>
                  <p className="card-text">How do we make sure they stick with us?</p>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q6"
                      id="q6a1"
                      value=" Provide personalized PR strategies tailored to their goals"
                      onChange={(e) => handleAnswerChange("6", e.target.value)}
                      checked={domain['publicRelation'] && domain['publicRelation']['How do we make sure they stick with us?'] === " Provide personalized PR strategies tailored to their goals"}
                    />
                    <label className="form-check-label" htmlFor="q6a1">
                      Provide personalized PR strategies tailored to their goals
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q6"
                      id="q6a2"
                      value="Offer ongoing monitoring and analysis of media coverage"
                      onChange={(e) => handleAnswerChange("6", e.target.value)}
                      checked={domain['publicRelation'] && domain['publicRelation']['How do we make sure they stick with us?'] === "Offer ongoing monitoring and analysis of media coverage"}
                    />
                    <label className="form-check-label" htmlFor="q6a2">
                      Offer ongoing monitoring and analysis of media coverage
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q6"
                      id="q6a3"
                      value="Deliver timely and transparent communication"
                      onChange={(e) => handleAnswerChange("6", e.target.value)}
                      checked={domain['publicRelation'] && domain['publicRelation']['How do we make sure they stick with us?'] === "Deliver timely and transparent communication"}
                    />
                    <label className="form-check-label" htmlFor="q6a3">
                      Deliver timely and transparent communication
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q6"
                      id="q6a4"
                      value="Regularly review and adjust PR tactics based on client feedback"
                      onChange={(e) => handleAnswerChange("6", e.target.value)}
                      checked={domain['publicRelation'] && domain['publicRelation']['How do we make sure they stick with us?'] === "Regularly review and adjust PR tactics based on client feedback"}
                    />
                    <label className="form-check-label" htmlFor="q6a4">
                      Regularly review and adjust PR tactics based on client feedback
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 7</h5>
                  <p className="card-text">How are we getting the word out about our PR agency?</p>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q7"
                      id="q7a1"
                      value="Social media marketing campaigns highlighting successful case studies"
                      onChange={(e) => handleAnswerChange("7", e.target.value)}
                      checked={domain['publicRelation'] && domain['publicRelation']['How are we getting the word out about our PR agency?'] === "Social media marketing campaigns highlighting successful case studies"}
                    />
                    <label className="form-check-label" htmlFor="q7a1">
                      Social media marketing campaigns highlighting successful case studies
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q7"
                      id="q7a2"
                      value="Networking events and industry conferences to showcase our expertise"
                      onChange={(e) => handleAnswerChange("7", e.target.value)}
                      checked={domain['publicRelation'] && domain['publicRelation']['How are we getting the word out about our PR agency?'] === "Networking events and industry conferences to showcase our expertise"}
                    />
                    <label className="form-check-label" htmlFor="q7a2">
                      Networking events and industry conferences to showcase our expertise
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q7"
                      id="q7a3"
                      value="Collaborating with media outlets to secure featured articles and interviews"
                      onChange={(e) => handleAnswerChange("7", e.target.value)}
                      checked={domain['publicRelation'] && domain['publicRelation']['How are we getting the word out about our PR agency?'] === "Collaborating with media outlets to secure featured articles and interviews"}
                    />
                    <label className="form-check-label" htmlFor="q7a3">
                      Collaborating with media outlets to secure featured articles and interviews
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q7"
                      id="q7a4"
                      value="Partnering with complementary service providers for cross-promotion opportunities"
                      onChange={(e) => handleAnswerChange("7", e.target.value)}
                      checked={domain['publicRelation'] && domain['publicRelation']['How are we getting the word out about our PR agency?'] === "Partnering with complementary service providers for cross-promotion opportunities"}
                    />
                    <label className="form-check-label" htmlFor="q7a4">
                      Partnering with complementary service providers for cross-promotion opportunities
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 8</h5>
                  <p className="card-text">What do we do to turn interested people into clients</p>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q8"
                      id="q8a1"
                      value="Offer free PR consultations to assess their needs"
                      onChange={(e) => handleAnswerChange("8", e.target.value)}
                      checked={domain['publicRelation'] && domain['publicRelation']['What do we do to turn interested people into clients'] === "Offer free PR consultations to assess their needs"}
                    />
                    <label className="form-check-label" htmlFor="q8a1">
                      Offer free PR consultations to assess their needs
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q8"
                      id="q8a2"
                      value="Provide customizable PR packages with transparent pricing"
                      onChange={(e) => handleAnswerChange("8", e.target.value)}
                      checked={domain['publicRelation'] && domain['publicRelation']['What do we do to turn interested people into clients'] === "Provide customizable PR packages with transparent pricing"}
                    />
                    <label className="form-check-label" htmlFor="q8a2">
                      Provide customizable PR packages with transparent pricing
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q8"
                      id="q8a3"
                      value="Showcase our team's experience and track record in the industry"
                      onChange={(e) => handleAnswerChange("8", e.target.value)}
                      checked={domain['publicRelation'] && domain['publicRelation']['What do we do to turn interested people into clients'] === "Showcase our team's experience and track record in the industry"}
                    />
                    <label className="form-check-label" htmlFor="q8a3">
                      Showcase our team's experience and track record in the industry
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q8"
                      id="q8a4"
                      value=" Offer a satisfaction guarantee or trial period for new clients"
                      onChange={(e) => handleAnswerChange("8", e.target.value)}
                      checked={domain['publicRelation'] && domain['publicRelation']['What do we do to turn interested people into clients'] === " Offer a satisfaction guarantee or trial period for new clients"}
                    />
                    <label className="form-check-label" htmlFor="q8a4">
                      Offer a satisfaction guarantee or trial period for new clients
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 9</h5>
                  <p className="card-text">What might go wrong, and how do we fix it?</p>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q9"
                      id="q9a1"
                      value="Miscommunication leading to client dissatisfaction"
                      onChange={(e) => handleAnswerChange("9", e.target.value)}
                      checked={domain['publicRelation'] && domain['publicRelation']['What might go wrong, and how do we fix it?'] === "Miscommunication leading to client dissatisfaction"}
                    />
                    <label className="form-check-label" htmlFor="q9a1">
                      Miscommunication leading to client dissatisfaction
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q9"
                      id="q9a2"
                      value="Negative media coverage affecting client reputations"
                      onChange={(e) => handleAnswerChange("9", e.target.value)}
                      checked={domain['publicRelation'] && domain['publicRelation']['What might go wrong, and how do we fix it?'] === "Negative media coverage affecting client reputations"}
                    />
                    <label className="form-check-label" htmlFor="q9a2">
                      Negative media coverage affecting client reputations
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q9"
                      id="q9a3"
                      value="Lack of resources to handle sudden spikes in PR crises"
                      onChange={(e) => handleAnswerChange("9", e.target.value)}
                      checked={domain['publicRelation'] && domain['publicRelation']['What might go wrong, and how do we fix it?'] === "Lack of resources to handle sudden spikes in PR crises"}
                    />
                    <label className="form-check-label" htmlFor="q9a3">
                      Lack of resources to handle sudden spikes in PR crises
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q9"
                      id="q9a4"
                      value="Competition from larger PR firms undercutting our pricing"
                      onChange={(e) => handleAnswerChange("9", e.target.value)}
                      checked={domain['publicRelation'] && domain['publicRelation']['What might go wrong, and how do we fix it?'] === "Competition from larger PR firms undercutting our pricing"}
                    />
                    <label className="form-check-label" htmlFor="q9a4">
                      Competition from larger PR firms undercutting our pricing
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 10</h5>
                  <p className="card-text">What are the anticipated risks, and what are our mitigation plans?</p>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q10"
                      id="q10a1"
                      value=" Establishing clear communication channels with clients to address concerns promptly"
                      onChange={(e) => handleAnswerChange("10", e.target.value)}
                      checked={domain['publicRelation'] && domain['publicRelation']['What are the anticipated risks, and what are our mitigation plans?'] === " Establishing clear communication channels with clients to address concerns promptly"}
                    />
                    <label className="form-check-label" htmlFor="q10a1">
                      Establishing clear communication channels with clients to address concerns promptly
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q10"
                      id="q10a2"
                      value="Building strong relationships with journalists and media contacts to manage negative publicity"
                      onChange={(e) => handleAnswerChange("10", e.target.value)}
                      checked={domain['publicRelation'] && domain['publicRelation']['What are the anticipated risks, and what are our mitigation plans?'] === "Building strong relationships with journalists and media contacts to manage negative publicity"}
                    />
                    <label className="form-check-label" htmlFor="q10a2">
                      Building strong relationships with journalists and media contacts to manage negative publicity
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q10"
                      id="q10a3"
                      value=" Developing a crisis management protocol and training team members to handle PR emergencies"
                      onChange={(e) => handleAnswerChange("10", e.target.value)}
                      checked={domain['publicRelation'] && domain['publicRelation']['What are the anticipated risks, and what are our mitigation plans?'] === " Developing a crisis management protocol and training team members to handle PR emergencies"}
                    />
                    <label className="form-check-label" htmlFor="q10a3">
                      Developing a crisis management protocol and training team members to handle PR emergencies
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q10"
                      id="q10a4"
                      value="Diversifying our client portfolio and revenue streams to mitigate the impact of losing a major client"
                      onChange={(e) => handleAnswerChange("10", e.target.value)}
                      checked={domain['publicRelation'] && domain['publicRelation']['What are the anticipated risks, and what are our mitigation plans?'] === "Diversifying our client portfolio and revenue streams to mitigate the impact of losing a major client"}
                    />
                    <label className="form-check-label" htmlFor="q10a4">
                      Diversifying our client portfolio and revenue streams to mitigate the impact of losing a major client
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
export default PublicRelations;
