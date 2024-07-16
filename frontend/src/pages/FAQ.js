import React, { useState } from "react";
import faqData from "./Faqs";
import "./faq.css";
import { Link } from "react-router-dom"

function Faq() {
  const [expanded, setExpanded] = useState({});

  const toggleAnswer = (index) => {
    setExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className="top-page">
      <div className="first-faq">
        <h1
          style={{
            textAlign: "center",
            marginBottom: "60px",
            fontSize: "70px",
            color: "white",
          }}
        >
          FAQs
        </h1>
        <div className="div-top">
          {faqData.map((item, index) => (
            <div className="faq-item" key={index}>
              <div className="header">
                <h3>{item.question}</h3>
                <button onClick={() => toggleAnswer(index)}>
                  {expanded[index] ? "▲" : "▼"}
                </button>
              </div>
              {expanded[index] && <p>{item.answer}</p>}
            </div>
          ))}
        </div>
      </div>

      <div className="about-section mt-5">
        <h1 className="about-title">let's turn potential into growth...</h1>
        <p className="about-description" style={{ color: "black" }}>
          Experience the awe-inspiring magic of our blueprint as your thoughts
          unfold into a structured roadmap, guiding you effortlessly towards
          extraordinary achievement.
        </p>
        <a href="/">
          <Link to="/login">
            <button className="login-btn">
              Login
            </button>
          </Link>
        </a>
      </div>
    </div>
  );
}

export default Faq;