import React, { useContext, useEffect, useRef, useState } from "react";
import { context } from "../context";

function TechnologyInnovation() {

  const quest = {
    "1": "What awesome stuff will your business offer?",
    "2": "How do you figure out what to make and how to make it?",
    "3": "How much do you expect to make, and how much will it cost to get started?",
    "4": "What could go wrong with your business, and how will you handle it?",
    "5": "Do you have any special rights to your cool ideas?",
    "6": "How will you tell people about your awesome products?",
    "7": "How can customers get your product or service?",
    "8": "What's your plan for bringing in cash?",
    "9": "How will you tell people about your awesome products?",
    "10": "What goals are you aiming for, and how will you track your progress?"
  }

  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
    domain['technology'] = {}
  }, []);

  let { domain, setDomain } = useContext(context)
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const addQuestion = (question, answer) => {
    const updatedTechnology = {
      ...domain['technology'],
      [question]: answer
    };
    setDomain({
      ...domain,
      technology: updatedTechnology
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
          <h1 className="title text-center mb-3">Technology & Innovation</h1>
          <form className="card w-100 max-w-lg">
            <h4 className="card-title text-center mt-4">STEP 1 OF 6</h4>
            <div>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <br></br>
                  <h5 className="card-title">Question 1</h5>
                  <p className="card-text">
                    What awesome stuff will your business offer?
                  </p>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q1"
                      id="q1a1"
                      value="Innovative software solutions"
                      onChange={(e) => handleAnswerChange("1", e.target.value)}
                      checked={domain['technology'] && domain['technology']['What awesome stuff will your business offer?'] === "Innovative software solutions"}
                    />
                    <label className="form-check-label" htmlFor="q1a1">
                      Innovative software solutions
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q1"
                      id="q1a2"
                      value="Advanced hardware devices"
                      onChange={(e) => handleAnswerChange("1", e.target.value)}
                      checked={domain['technology'] && domain['technology']['What awesome stuff will your business offer?'] === "Advanced hardware devices"}
                    />
                    <label className="form-check-label" htmlFor="q1a2">
                      Advanced hardware devices
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q1"
                      id="q1a3"
                      value="Integrated technology platforms"
                      onChange={(e) => handleAnswerChange("1", e.target.value)}
                      checked={domain['technology'] && domain['technology']['What awesome stuff will your business offer?'] === "Integrated technology platforms"}
                    />
                    <label className="form-check-label" htmlFor="q1a3">
                      Integrated technology platforms
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 2</h5>
                  <p className="card-text">
                    How do you figure out what to make and how to make it?
                  </p>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q2"
                      id="q2a1"
                      value="Partnerships with universities"
                      onChange={(e) => handleAnswerChange("2", e.target.value)}
                      checked={domain['technology'] && domain['technology']['How do you figure out what to make and how to make it?'] === "Partnerships with universities"}
                    />
                    <label className="form-check-label" htmlFor="q2a1">
                      Partnerships with universities
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q2"
                      id="q2a2"
                      value="Research consortiums"
                      onChange={(e) => handleAnswerChange("2", e.target.value)}
                      checked={domain['technology'] && domain['technology']['How do you figure out what to make and how to make it?'] === "Research consortiums"}
                    />
                    <label className="form-check-label" htmlFor="q2a2">
                      Research consortiums
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q2"
                      id="q2a3"
                      value="In-house R&D department"
                      onChange={(e) => handleAnswerChange("2", e.target.value)}
                      checked={domain['technology'] && domain['technology']['How do you figure out what to make and how to make it?'] === "In-house R&D department"}
                    />
                    <label className="form-check-label" htmlFor="q2a3">
                      In-house R&D department
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 3</h5>
                  <p className="card-text">
                    How much do you expect to make, and how much will it cost to
                    get started?
                  </p>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q3"
                      id="q3a1"
                      value="Aggressive growth targets"
                      onChange={(e) => handleAnswerChange("3", e.target.value)}
                      checked={domain['technology'] && domain['technology']['How much do you expect to make, and how much will it cost to get started?'] === "Aggressive growth targets"}
                    />
                    <label className="form-check-label" htmlFor="q3a1">
                      Aggressive growth targets
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q3"
                      id="q3a2"
                      value="Bootstrapping initially"
                      onChange={(e) => handleAnswerChange("3", e.target.value)}
                      checked={domain['technology'] && domain['technology']['How much do you expect to make, and how much will it cost to get started?'] === "Bootstrapping initially"}
                    />
                    <label className="form-check-label" htmlFor="q3a2">
                      Bootstrapping initially
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q3"
                      id="q3a3"
                      value="Seeking venture capital"
                      onChange={(e) => handleAnswerChange("3", e.target.value)}
                      checked={domain['technology'] && domain['technology']['How much do you expect to make, and how much will it cost to get started?'] === "Seeking venture capital"}
                    />
                    <label className="form-check-label" htmlFor="q3a3">
                      Seeking venture capital
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 4</h5>
                  <p className="card-text">
                    What could go wrong with your business, and how will you
                    handle it?
                  </p>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q4"
                      id="q4a1"
                      value="Technological obsolescence"
                      onChange={(e) => handleAnswerChange("4", e.target.value)}
                      checked={domain['technology'] && domain['technology']['What could go wrong with your business, and how will you handle it?'] === "Technological obsolescence"}
                    />
                    <label className="form-check-label" htmlFor="q4a1">
                      Technological obsolescence
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q4"
                      id="q4a2"
                      value="Cybersecurity threats"
                      onChange={(e) => handleAnswerChange("4", e.target.value)}
                      checked={domain['technology'] && domain['technology']['What could go wrong with your business, and how will you handle it?'] === "Cybersecurity threats"}
                    />
                    <label className="form-check-label" htmlFor="q4a2">
                      Cybersecurity threats
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q4"
                      id="q4a3"
                      value="Economic downturns"
                      onChange={(e) => handleAnswerChange("4", e.target.value)}
                      checked={domain['technology'] && domain['technology']['What could go wrong with your business, and how will you handle it?'] === "Economic downturns"}
                    />
                    <label className="form-check-label" htmlFor="q4a3">
                      Economic downturns
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>
              {/* <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 5</h5>
                  <p className="card-text">
                    Do you have any special rights to your cool ideas?
                  </p>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q5"
                      id="q5a1"
                      value="Patent applications"
                      onChange={(e) => handleAnswerChange("5", e.target.value)}
                      checked={domain['technology'] && domain['technology']['Do you have any special rights to your cool ideas?'] === "Patent applications"}
                    />
                    <label className="form-check-label" htmlFor="q5a1">
                      Patent applications
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q5"
                      id="q5a2"
                      value="Trademark registrations"
                      onChange={(e) => handleAnswerChange("5", e.target.value)}
                      checked={domain['technology'] && domain['technology']['Do you have any special rights to your cool ideas?'] === "Trademark registrations"}
                    />
                    <label className="form-check-label" htmlFor="q5a2">
                      Trademark registrations
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q5"
                      id="q5a3"
                      value="Strict confidentiality measures"
                      onChange={(e) => handleAnswerChange("5", e.target.value)}
                      checked={domain['technology'] && domain['technology']['Do you have any special rights to your cool ideas?'] === "Strict confidentiality measures"}
                    />
                    <label className="form-check-label" htmlFor="q5a3">
                      Strict confidentiality measures
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <br></br> */}
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 5</h5>
                  <p className="card-text">
                    How will you tell people about your awesome products?
                  </p>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q6"
                      id="q6a1"
                      value="Digital marketing campaigns"
                      onChange={(e) => handleAnswerChange("6", e.target.value)}
                      checked={domain['technology'] && domain['technology']['How will you tell people about your awesome products?'] === "Digital marketing campaigns"}
                    />
                    <label className="form-check-label" htmlFor="q6a1">
                      Digital marketing campaigns
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q6"
                      id="q6a2"
                      value="Salesforce automation"
                      onChange={(e) => handleAnswerChange("6", e.target.value)}
                      checked={domain['technology'] && domain['technology']['How will you tell people about your awesome products?'] === "Salesforce automation"}
                    />
                    <label className="form-check-label" htmlFor="q6a2">
                      Salesforce automation
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q6"
                      id="q6a3"
                      value="Personalized customer interactions"
                      onChange={(e) => handleAnswerChange("6", e.target.value)}
                      checked={domain['technology'] && domain['technology']['How will you tell people about your awesome products?'] === "Personalized customer interactions"}
                    />
                    <label className="form-check-label" htmlFor="q6a3">
                      Personalized customer interactions
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
                    How can customers get your product or service?
                  </p>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q7"
                      id="q7a1"
                      value="Online store or website"
                      onChange={(e) => handleAnswerChange("7", e.target.value)}
                      checked={domain['technology'] && domain['technology']['How can customers get your product or service?'] === "Online store or website"}
                    />
                    <label className="form-check-label" htmlFor="q7a1">
                      Online store or website
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q7"
                      id="q7a2"
                      value="Physical retail locations"
                      onChange={(e) => handleAnswerChange("7", e.target.value)}
                      checked={domain['technology'] && domain['technology']['How can customers get your product or service?'] === "Physical retail locations"}
                    />
                    <label className="form-check-label" htmlFor="q7a2">
                      Physical retail locations
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q7"
                      id="q7a3"
                      value="Mobile app/Phone or email orders"
                      onChange={(e) => handleAnswerChange("7", e.target.value)}
                      checked={domain['technology'] && domain['technology']['How can customers get your product or service?'] === "Mobile app/Phone or email orders"}
                    />
                    <label className="form-check-label" htmlFor="q7a3">
                      Mobile app/Phone or email orders
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q7"
                      id="q7a4"
                      value="Subscription service/Through authorized distributors or resellers"
                      onChange={(e) => handleAnswerChange("7", e.target.value)}
                      checked={domain['technology'] && domain['technology']['How can customers get your product or service?'] === "Subscription service/Through authorized distributors or resellers"}
                    />
                    <label className="form-check-label" htmlFor="q7a4">
                      Subscription service/Through authorized distributors or
                      resellers
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
                    What's your plan for bringing in cash?
                  </p>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q8"
                      id="q8a1"
                      value="Product sales"
                      onChange={(e) => handleAnswerChange("8", e.target.value)}
                      checked={domain['technology'] && domain['technology']["What's your plan for bringing in cash?"] === "Product sales"}
                    />
                    <label className="form-check-label" htmlFor="q8a1">
                      Product sales
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q8"
                      id="q8a2"
                      value="Subscription services"
                      onChange={(e) => handleAnswerChange("8", e.target.value)}
                      checked={domain['technology'] && domain['technology']["What's your plan for bringing in cash?"] === "Subscription services"}
                    />
                    <label className="form-check-label" htmlFor="q8a2">
                      Subscription services
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q8"
                      id="q8a3"
                      value="Licensing agreements"
                      onChange={(e) => handleAnswerChange("8", e.target.value)}
                      checked={domain['technology'] && domain['technology']["What's your plan for bringing in cash?"] === "Licensing agreements"}
                    />
                    <label className="form-check-label" htmlFor="q8a3">
                      Licensing agreements
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>
              {/* <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 9</h5>
                  <p className="card-text">
                    How will you tell people about your awesome products?
                  </p>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q9"
                      id="q9a1"
                      value="Digital marketing campaigns"
                      onChange={(e) => handleAnswerChange("9", e.target.value)}
                      checked={domain['technology'] && domain['technology'][' How will you tell people about your awesome products?'] === "Digital marketing campaigns"}
                    />
                    <label className="form-check-label" htmlFor="q9a1">
                      Digital marketing campaigns
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q9"
                      id="q9a2"
                      value="Salesforce automation"
                      onChange={(e) => handleAnswerChange("9", e.target.value)}
                      checked={domain['technology'] && domain['technology'][' How will you tell people about your awesome products?'] === "Salesforce automation"}
                    />
                    <label className="form-check-label" htmlFor="q9a2">
                      Salesforce automation
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q9"
                      id="q9a3"
                      value="Personalized customer interactions"
                      onChange={(e) => handleAnswerChange("9", e.target.value)}
                      checked={domain['technology'] && domain['technology'][' How will you tell people about your awesome products?'] === "Personalized customer interactions"}
                    />
                    <label className="form-check-label" htmlFor="q9a3">
                      Personalized customer interactions
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <br></br> */}
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 8</h5>
                  <p className="card-text">
                    What goals are you aiming for, and how will you track your
                    progress?
                  </p>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q10"
                      id="q10a1"
                      value="Adoption rate"
                      onChange={(e) => handleAnswerChange("10", e.target.value)}
                      checked={domain['technology'] && domain['technology']['What goals are you aiming for, and how will you track your progress?'] === "Adoption rate"}
                    />
                    <label className="form-check-label" htmlFor="q10a1">
                      Adoption rate
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q10"
                      id="q10a2"
                      value="Customer satisfaction"
                      onChange={(e) => handleAnswerChange("10", e.target.value)}
                      checked={domain['technology'] && domain['technology']['What goals are you aiming for, and how will you track your progress?'] === "Customer satisfaction"}
                    />
                    <label className="form-check-label" htmlFor="q10a2">
                      Customer satisfaction
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q10"
                      id="q10a3"
                      value="Revenue growth"
                      onChange={(e) => handleAnswerChange("10", e.target.value)}
                      checked={domain['technology'] && domain['technology']['What goals are you aiming for, and how will you track your progress?'] === "Revenue growth"}
                    />
                    <label className="form-check-label" htmlFor="q10a3">
                      Revenue growth
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

export default TechnologyInnovation;
