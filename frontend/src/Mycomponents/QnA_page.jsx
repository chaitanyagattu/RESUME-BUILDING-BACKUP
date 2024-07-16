import React, { useEffect, useState, useRef } from "react";
import "./QnA_page.css";
import { TypeAnimation } from "react-type-animation";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Loader from "../components/Loader";

function QnA_page() {
  const answersEndRef = useRef(null);

  const [state, setState] = useState({
    selectedType: "",
    questions: [],
    userResponses: [],
    loader: false,
    currentQuestionIndex: 0,
  });

  const { selectedType, questions, userResponses, loader, currentQuestionIndex } = state;

  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      navigate("/login");
    }

    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = '';
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [navigate]);

  useEffect(() => {
    answersEndRef.current?.scrollIntoView();
  }, [userResponses]);

  const handleResponseSubmit = (response) => {
    if (response.trim() === "") {
      window.alert("Response cannot be empty!");
      return;
    }

    setState(prevState => ({
      ...prevState,
      userResponses: [...prevState.userResponses, response],
      currentQuestionIndex: prevState.currentQuestionIndex + 1,
    }));
  };

  const handleResumeTypeSelection = (resumeType) => {
    setState(prevState => ({
      ...prevState,
      selectedType: resumeType,
      currentQuestionIndex: 0,
      questions: getQuestionsForType(resumeType),
      userResponses: [],
    }));
  };

  const getQuestionsForType = (resumeType) => {
    switch (resumeType) {
      case "Fresher":
        return fresherQuestions;
      case "Experience":
        return experienceQuestions;
      case "Senior":
        return seniorQuestions;
      default:
        return [];
    }
  };

  const fresherQuestions = [
    { question: "What is your full name?", placeholder: "Enter your full name" },
    { question: "What is your email address?", placeholder: "Enter your email address" },
    { question: "What is your phone number?", placeholder: "Enter your phone number" },
    { question: "What is your highest education qualification?", placeholder: "Enter your education qualification" },
    { question: "List your technical skills.", placeholder: "Enter your technical skills" },
    { question: "List your soft skills.", placeholder: "Enter your soft skills" },
    { question: "Mention any internships or projects.", placeholder: "Enter internships or projects" },
    { question: "List your extracurricular activities.", placeholder: "Enter extracurricular activities" },
    { question: "Do you have any certifications?", placeholder: "Enter certifications" },
  ];

  const experienceQuestions = [
    { question: "What is your full name?", placeholder: "Enter your full name" },
    { question: "What is your email address?", placeholder: "Enter your email address" },
    { question: "What is your phone number?", placeholder: "Enter your phone number" },
    { question: "What is your current job title?", placeholder: "Enter your current job title" },
    { question: "Describe your responsibilities.", placeholder: "Enter your responsibilities" },
    { question: "List your key achievements.", placeholder: "Enter your key achievements" },
    { question: "What are your technical skills?", placeholder: "Enter your technical skills" },
    { question: "What are your soft skills?", placeholder: "Enter your soft skills" },
    { question: "List your previous job experiences.", placeholder: "Enter your previous job experiences" },
    { question: "Do you have any certifications?", placeholder: "Enter certifications" },
  ];

  const seniorQuestions = [
    { question: "What is your full name?", placeholder: "Enter your full name" },
    { question: "What is your email address?", placeholder: "Enter your email address" },
    { question: "What is your phone number?", placeholder: "Enter your phone number" },
    { question: "What is your current job title?", placeholder: "Enter your current job title" },
    { question: "Describe your leadership experiences.", placeholder: "Enter your leadership experiences" },
    { question: "List your key achievements.", placeholder: "Enter your key achievements" },
    { question: "What are your technical skills?", placeholder: "Enter your technical skills" },
    { question: "Do you have any certifications?", placeholder: "Enter certifications" },
  ];

  const renderQuestions = () => {
    return (
      <>
        {questions.map((question, index) => (
          <div key={index} className="row">
            <div className="bussiness">
              <span>
                <TypeAnimation
                  sequence={[question.question, 1000]}
                  wrapper="span"
                  cursor={false}
                  speed={70}
                  style={{
                    fontSize: "1.3rem",
                    color: "#ececf1",
                    flex: "1",
                    textAlign: "center",
                    gap: "10px",
                  }}
                />
              </span>
            </div>
            <div className="row" id="inputRow">
              <input
                type="text"
                className="input-field p-2"
                placeholder={question.placeholder}
                onKeyPress={(event) => {
                  if (event.key === "Enter") {
                    handleResponseSubmit(event.target.value);
                    event.target.value = ""; // Clear input field
                    event.target.style.display = "none"; // Hide input field
                  }
                }}
              />
            </div>
          </div>
        ))}
      </>
    );
  };

  const resumeTypes = [
    { type: "Fresher", imageSrc: "https://nghialagi.org/wp-content/uploads/2020/03/fresher-la-gi.jpg" },
    { type: "Experience", imageSrc: "https://thumbs.dreamstime.com/z/experience-wisdom-skill-knowledge-quality-learn-concept-85685161.jpg" },
    { type: "Senior", imageSrc: "https://d30ufu6vr9yoyg.cloudfront.net/wp-content/uploads/2021/01/SYELogo-1024x572.jpeg" },
  ];

  const renderResumeTypeOptions = () => {
    return resumeTypes.map((resume, index) => (
      <div
        key={index}
        className="col-lg-4 col-md-6 col-12"
        onClick={() => handleResumeTypeSelection(resume.type)}
      >
        <div
          className="qna-border"
          style={{ border: selectedType === resume.type ? "1px solid #0060d0" : "none" }}
        >
          <img src={resume.imageSrc} alt="" />
          <div className="mydivider mt-4"></div>
          <p className="qna-text">{resume.type}</p>
        </div>
      </div>
    ));
  };

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <div className="container">
          <div className="row mt-2">
            <div className="col-lg-9 col-md-8 col-12">
              <div className="blue">
                <section className="logo1">
                  <img src="https://thumbs.dreamstime.com/z/word-resume-spelled-dice-spelling-using-white-background-123025453.jpg?ct=jpeg" alt="logo" />
                  <p>Ten-IdeaEngine</p>
                </section>
              </div>
              <div className="mydivider mt-5"></div>
              <div className="bussiness" style={{ padding: "32px 10px" }}>
                <span>
                  <TypeAnimation
                    sequence={[
                      "Select the type of resume you want to create",
                      1000,
                    ]}
                    wrapper="span"
                    cursor={false}
                    speed={70}
                    style={{
                      fontSize: "1.3rem",
                      color: "#ececf1",
                      flex: "1",
                      textAlign: "center",
                      gap: "10px",
                    }}
                  />
                </span>
              </div>
            </div>
            <div className="row qna-box">{renderResumeTypeOptions()}</div>
            <div ref={answersEndRef} />
          </div>
          {/* Render Questions based on selected resume type */}
          {selectedType && renderQuestions()}
          <footer className="container mt-5">
            <div className="bottom-position">
              <p className="bottom-text">
                **A PDF will be generated once all the questions have been
                completed.
              </p>
            </div>
          </footer>
        </div>
      )}
    </>
  );
}

export default QnA_page;
