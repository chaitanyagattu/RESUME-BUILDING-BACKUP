import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer p-3">
        <div className="row mt-5 mb-5">
          <div className="col-lg-5 col-12">
            <div class="logoo d-flex g-3">
              <svg
                width="46"
                height="46"
                fill="none"
                viewBox="0 0 46 46"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M36.4038 13.6038L39.2895 22.3463L38.3949 29.4993L32.0453 37.068L22.1086 39.3891L16.2053 38.211L12.4906 35.3905L9.31851 32.247L6.79594 26.814L6.42313 23.6804L7.33049 16.337L13.5054 8.75958L23.6286 6.29441L29.5244 7.49443L36.3821 13.5983L36.4038 13.6038Z"
                  fill="url(#paint0_linear_924_29279)"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M23.9841 12.4467L28.1966 11.5557L20.696 7.44598L19.2587 13.5412L23.9841 12.4467ZM18.9316 13.5937L20.3659 7.5108L13.2035 11.3574L18.9316 13.5937ZM18.6687 13.82L12.8798 11.56L10.7547 19.1439L18.6687 13.82ZM10.4179 19.2103L12.4586 11.9277L8.18319 15.7756L7.64511 16.4359L8.93401 17.7311L8.93445 17.7316L10.4179 19.2103ZM7.33049 16.337L13.5054 8.75958L23.6286 6.29441L29.5244 7.49443L36.3821 13.5983L36.4038 13.6038L39.2895 22.3463L38.3949 29.4993L32.0453 37.068L22.1086 39.3891L16.2053 38.211L12.4906 35.3905L9.31851 32.247L6.79594 26.814L6.42313 23.6804L7.33049 16.337ZM6.85204 22.7079L6.73178 23.6811L6.78119 24.0964L6.85204 22.7079ZM6.99591 25.9012L7.37464 18.4784L7.58126 16.8062L8.71726 17.9477L8.7177 17.9482L10.308 19.5334L7.01307 26.0455L6.99591 25.9012ZM8.34692 29.4268L9.57326 32.0681L11.1154 33.5963L8.34692 29.4268ZM12.1908 34.6621L7.49168 27.5849L7.30484 27.1825L11.8014 28.9803L12.2837 34.7541L12.1908 34.6621ZM14.0935 36.2229L16.3345 37.9243L19.8956 38.635L14.0935 36.2229ZM21.4307 38.9414L13.1275 35.4894L13.0467 35.428L19.6694 34.0085L21.7828 39.0117L21.4307 38.9414ZM23.3419 38.7864L31.3122 36.9246L28.2825 35.6446L23.3419 38.7864ZM28.5746 35.4354L31.8192 36.8062L31.8762 36.7929L32.2133 36.3911L35.1346 30.563L28.5746 35.4354ZM35.6633 30.1921L37.7592 29.7803L33.0648 35.3761L35.6633 30.1921ZM38.102 29.3716L38.0728 29.4064L35.8315 29.8468L38.8137 23.6818L38.102 29.3716ZM38.976 22.3842L38.9324 22.7327L35.6466 29.5254L34.5015 20.5661L38.976 22.3842ZM33.9994 20.1203L28.6776 11.9689L26.3524 18.9124L33.9994 20.1203ZM26.0485 19.2843L27.9281 27.6512L18.8587 23.9748L26.0485 19.2843ZM18.6978 23.7139L25.8821 19.0271L19.1914 14.0403L18.6978 23.7139ZM18.8844 14.0442L10.787 19.4915L18.3891 23.7523L18.8844 14.0442ZM18.2478 24.0244L10.6945 19.7908L12.0588 28.5994L18.2478 24.0244ZM12.1245 29.1678L19.3629 33.7609L12.7248 35.1836L12.692 35.1587L12.6189 35.0863L12.1245 29.1678ZM20.014 34.0369L27.8607 35.5497L22.4394 38.9972L22.139 39.0674L20.014 34.0369ZM28.4163 35.1713L28.2983 28.1081L35.2208 30.1173L28.4163 35.1713ZM35.3784 29.844L34.2096 20.699L28.4066 27.8205L35.3784 29.844ZM28.2221 27.5619L34.0292 20.4352L26.3486 19.222L28.2221 27.5619ZM27.9934 28.1957L20.143 33.7498L28.1118 35.286L27.9934 28.1957ZM19.8814 33.5595L27.8245 27.9398L18.714 24.2468L19.8814 33.5595ZM19.5688 33.5286L18.4101 24.2855L12.2169 28.8636L19.5688 33.5286ZM11.7536 28.6313L10.4164 19.9977L7.07845 26.595L7.09442 26.7293L7.1167 26.7773L11.7536 28.6313ZM19.4096 13.8208L26.0716 18.7862L28.4025 11.8254L24.0504 12.7459L19.4096 13.8208ZM28.9763 11.8658L34.2665 19.9691L36.1647 13.857L36.145 13.7974L35.985 13.655L28.9763 11.8658ZM28.8138 11.5081L35.4869 13.2116L29.5815 7.95546L28.8138 11.5081ZM29.3095 7.76338L28.5264 11.3871L21.2279 7.38804L28.5989 7.61874L29.3095 7.76338ZM26.8191 7.25648L23.6346 6.60831L21.6387 7.09434L26.8191 7.25648ZM19.5439 7.60445L13.004 11.1168L13.5408 9.20124L13.6779 9.03293L19.5439 7.60445ZM13.0558 9.79635L9.44343 14.2292L12.613 11.3765L13.0558 9.79635ZM36.33 14.3579L34.5043 20.2365L38.8539 22.0039L36.33 14.3579Z"
                  fill="white"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M38.8632 5.526C38.8632 6.41889 39.587 7.14271 40.4799 7.14271C41.3727 7.14271 42.0966 6.41889 42.0966 5.526C42.0966 4.63312 41.3727 3.90929 40.4799 3.90929C39.587 3.90929 38.8632 4.63312 38.8632 5.526ZM40.4799 3.59839C39.4153 3.59839 38.5522 4.46141 38.5522 5.526C38.5522 6.5906 39.4153 7.45362 40.4799 7.45362C41.5445 7.45362 42.4075 6.5906 42.4075 5.526C42.4075 4.46141 41.5445 3.59839 40.4799 3.59839Z"
                  fill="white"
                ></path>
                <defs>
                  <linearGradient
                    id="paint0_linear_924_29279"
                    x1="32.5286"
                    y1="9.68952"
                    x2="13.2607"
                    y2="36.0594"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop></stop>
                    <stop offset="0.451432" stop-opacity="0.548568"></stop>
                    <stop offset="1" stop-opacity="0"></stop>
                  </linearGradient>
                </defs>
              </svg>
              <h2 style={{ color: "white" }}>Ten-IdeaEngine</h2>
            </div>
            <p class="tagline mt-2">
              <h4 style={{ fontSize: "14px", color: "grey" }}>
                Turning Your Vision into an Actionable Blueprint to Brilliance.
              </h4>
            </p>
          </div>
          <div className=" col-lg-3 col-md-6 col-12">
            <h3>Platform</h3>
            <ul style={{ fontSize: "1.1rem", marginTop: "10px" }}>
              <li>
                <Link to={"/login"}>Login</Link>
              </li>
              <li>
                <Link to={"/signup"}>Signup</Link>
              </li>
              <li>
                <Link to={"/faq"}>FAQ</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 col-12">
            <h3>Follow Us</h3>
            <ul
              style={{
                fontSize: "1.5rem",
                display: "flex",
                listStyle: "none",
                padding: 0,
                marginTop: "10px",
              }}
            >
              <li style={{ marginRight: "10px" }}>
                <Link
                  to={
                    "https://www.linkedin.com/company/the-entrepreneurship-network/"
                  }
                >
                  <FaLinkedin />
                </Link>
              </li>
              <li style={{ marginRight: "10px" }}>
                <FaYoutube />
              </li>
              <li style={{ marginRight: "10px" }}>
                <FaTwitterSquare />
              </li>
              <li>
                <Link
                  to={
                    "https://www.instagram.com/theentrepreneurshipnetwork?igsh=Nm44M21saGR1am4w"
                  }
                >
                  <FaInstagram />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <section className="footer-section">
          <div className="cardss cardss-2">
            <div class="logoo g-2" >
            <div className='row'>
             
                

                 <div className='col-lg-2 col-md-6 col-12 cardss'>
                    <h4>Platform</h4>
                   <ul >
                     // <li>Feature</li>
                     // <li>Pricing</li>
                     <li>Login</li>
                     <li>Signup</li>
                   </ul>
                 </div>

                 
                 <div className=' col-lg-2 col-md-6 col-12 cardss'>
                    <h4>Company</h4>
                   <ul className='list-unstyled'>
                     // <li>About</li>
                     <li>Career</li>
                     // <li>Blog</li>
                     // <li>Contact us</li>
                   </ul>
                 </div>

                 
                 <div className='col-lg-2 col-md-6 col-12 cardss'>
                    <h4>Legal</h4>
                   <ul>
                     <li>Refund policy</li>
                     <li>Privacy policy</li>
                     <li>FAQ</li>
                     <li>Terms and conditions</li>
                   </ul>
                 </div>
          <div className=' col-lg-2 col-md-6 col-12 cardss'>
                     <h4>Follow US</h4>
                    <ul>
                     <li><FaLinkedin /></li>
                     <li><FaYoutube /></li>
                     <li><FaTwitterSquare /></li>
                     <li><FaInstagram /></li>
                    </ul>
                    </div> </div></div></div>
        </section> */}
    </>
  );
};

export default Footer;
