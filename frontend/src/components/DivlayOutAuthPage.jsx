import { Link, useNavigate } from "react-router-dom"
import "./DivlayoutAuthPage.css";
import React, { useState } from 'react';

const DivlayoutAuthPage = () => {

  function validate() {
    const mail = document.getElementById("email").value;
    const regExp = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
    regExp.test(mail) ? alert("You have entered a valid email") : alert("You have entered wrong email");
  }

  // Connecting Backend to frontend of Signup page

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "", email: "", password: ""
  });

  let name, value;
  const handleInputs = (e) => {
    // console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  }

  const PostData = async (e) => {
    e.preventDefault();
    try {
      const { name, email, password } = user;
      const res = await fetch("https://idea-engine-backend-4gyo.vercel.app/api/v1/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name, email, password
        })
      });
      // console.log(res);
      const data = await res.json(); // Error line

      if (res.status === 400 || res.status === 401 || !data) {
        window.alert("Invalid Registration");
        // console.log("Invalid Registration");
      } else {
        window.alert("Registration Successfull");
        // console.log("Registration Successfull");
        navigate('/login');
      }
    } catch (error) {
      console.log(error)
    }
  }


  // const navigate = useNavigate();

  //   const getUser = async () => {
  //     try {
  //         const response = await axios.get("http://localhost:8080/login/sucess", { withCredentials: true });

  //         console.log("response",response)
  //     } catch (error) {
  //       navigate("/")
  //     }
  // }


  // useEffect(() => {
  //   getUser()
  // }, [])


  const loginwithgoogle = () => {
    window.open("https://idea-engine-backend-4gyo.vercel.app/auth/google/callback", "_self")
  }


  return (
    <div className="divlayout-auth-page-signup">
      <div className="svg">
        <img className="vector-icon" alt="" src="/vector.svg" />
      </div>
      <div className="divpage-fg">
        <div className="section-signup">
          <div className="heading-1">
            <div className="welcome-to-dayzero">
              Welcome To Ten-IdeaEngine!
            </div>
          </div>
          <div className="ppage-tagmargin">
            <div className="blueprint-to-brilliance">
              BLUEPRINT TO BRILLIANCE
            </div>
          </div>
          <div className="heading-2margin">
            <div className="heading-2">
              <div className="a-blueprint-engine-container-signup">
                <span className="a-blueprint-engine">{`A blueprint engine that converts your ideas into execution focused plan of action within `}</span>
                <b>6 minutes</b>
                <span className="a-blueprint-engine">.</span>
              </div>
            </div>
          </div>
        </div>
        <div className="section1">
          <div className="pform-title">
            <div className="create-your-account-signup">
              Create your account
            </div>
          </div>
          <div className="pform-subtitle">
            <div className="fill-your-details">
              Fill your details to get started
            </div>
          </div>
          <div className="divor-box">
{/*             <button className="button1">
              <img className="svg-icon" alt="" src="/svg.svg" />
              <div className="span1">
                <div className="continue-with-google" onClick={loginwithgoogle}>
                  Continue With Google
                </div>
              </div>
            </button> */}
{/*             <div className="divline-signup">
              <div className="span2">
                <div className="or">OR</div>
              </div>
            </div> */}
          </div>
          <div className="form-signup">
            <input
              className="input"
              type="text"
              name="name"
              id="name"
              autoComplete="off"
              value={user.name}
              onChange={handleInputs}
              placeholder="Enter Your Name"
            ></input>

            <input
              className="input"
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              value={user.email}
              onChange={handleInputs}
              placeholder="Enter Your Email"
            ></input>

            <input
              className="input"
              type="password"
              name="password"
              id="password"
              autoComplete="off"
              value={user.password}
              onChange={handleInputs}
              placeholder="Enter Unique Password"
            ></input>

            <button
              className="button2"
              type="submit"
              name="signup"
              id="signup"
              value="Register"
              onClick={PostData}
            >
              <div className="create-an-account">Create an account</div>
            </button>
            <div className="pswitch-link">
              <div className="do-you-already-container-signup">
                <span>{`Do you already have an account? `}</span>
                <Link to="/login">
                  <span className="login">Login</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivlayoutAuthPage;
