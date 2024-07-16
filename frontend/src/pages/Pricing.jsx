import React from 'react'
import "./Pricing.css"

const Pricing = () => {

  return (
    <section className="pricing-section" id="pricings">
      <h2 className="pricing-heading">
        <span
          style={{ fontSize: "32px", fontWeight: "400", letterSpacing: "-2px" }}
        >
          use it like a<br />{" "}
        </span>{" "}
        pro, starts at $499
      </h2>
      <p className="pricing-description">
        Get started with Ten-IdeaEngine for free. Upgrade for unlocking
        services, expert guidance, and additional features
      </p>
      <div className="pricing-card-container">
        {/* Pricing-card 1  */}
        <div className="pricing-card">
          <h3 className="pricing-card-heading">Free</h3>
          <p class="pricing-card-description">Explore your vision.</p>
          <p class="pricing-card-price">$0</p>
          <span class="divider"></span>
          <ul className="pricing-card-feature-list">
            <li>
              <svg
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5875 13.8367L2.9375  9.18672L4.2125 7.91172L7.5875 11.2867L14.7688 4.10547L16.0438 5.38047L7.5875 13.8367Z"
                  fill="#006F0B"
                ></path>
              </svg>{" "}
              5 Free Blueprints{" "}
            </li>
            <li>
              <svg
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5875 13.8367L2.9375 9.18672L4.2125 7.91172L7.5875 11.2867L14.7688 4.10547L16.0438 5.38047L7.5875 13.8367Z"
                  fill="#006F0B"
                ></path>
              </svg>
              42 Services Access
            </li>
            <li>
              <svg
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5875 13.8367L2.9375 9.18672L4.2125 7.91172L7.5875 11.2867L14.7688 4.10547L16.0438 5.38047L7.5875 13.8367Z"
                  fill="#006F0B"
                ></path>
              </svg>
              Paid Expert Blueprints
            </li>
            <li>
              <svg
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5875 13.8367L2.9375 9.18672L4.2125 7.91172L7.5875 11.2867L14.7688 4.10547L16.0438 5.38047L7.5875 13.8367Z"
                  fill="#006F0B"
                ></path>
              </svg>
              Upgrade Delivery Time : 72hrs
            </li>
          </ul>
          <span class="divider-b"></span>
          <a href="/auth">
            <button class="pricing-card-button">Get Started for free</button>
          </a>
        </div>

        {/* Pricing-card 2 */}
        <div class="pricing-card" style={{ scale: "1.1" }}>
          <div class="pricing-tag">
            <span class="offer">
              60% off<sup>*</sup>
            </span>
            <span class="offer-text">Recommended</span>
          </div>
          <h3 class="pricing-card-heading">Pro</h3>
          <p class="pricing-card-description">Unleash your vision.</p>
          <p class="pricing-card-price">
            <span className="card2-span">
              <strike>$999</strike>
            </span>
            $499
          </p>
          <span class="divider"></span>
          <ul class="pricing-card-feature-list">
            <li>
              <svg
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5875 13.8367L2.9375 9.18672L4.2125 7.91172L7.5875 11.2867L14.7688 4.10547L16.0438 5.38047L7.5875 13.8367Z"
                  fill="#006F0B"
                ></path>
              </svg>
              10 Pro Blueprints
            </li>
            <li>
              <svg
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5875 13.8367L2.9375 9.18672L4.2125 7.91172L7.5875 11.2867L14.7688 4.10547L16.0438 5.38047L7.5875 13.8367Z"
                  fill="#006F0B"
                ></path>
              </svg>
              2 Expert Upgrades
            </li>
            <li>
              <svg
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5875 13.8367L2.9375 9.18672L4.2125 7.91172L7.5875 11.2867L14.7688 4.10547L16.0438 5.38047L7.5875 13.8367Z"
                  fill="#006F0B"
                ></path>
              </svg>
              56 Services Access
            </li>
            <li>
              <svg
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5875 13.8367L2.9375 9.18672L4.2125 7.91172L7.5875 11.2867L14.7688 4.10547L16.0438 5.38047L7.5875 13.8367Z"
                  fill="#006F0B"
                ></path>
              </svg>
              4X Increase in Quality
            </li>
            <li>
              <svg
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5875 13.8367L2.9375 9.18672L4.2125 7.91172L7.5875 11.2867L14.7688 4.10547L16.0438 5.38047L7.5875 13.8367Z"
                  fill="#006F0B"
                ></path>
              </svg>
              Delivery Time : 48 Hrs
            </li>
          </ul>
          <span class="divider-b"></span>
          <a href="/auth">
            <button
              style={{
                backgroundColor: "rgb(0, 81, 175)",
                borderColor: "rgb(46, 142, 255)",
              }}
              class="pricing-card-button"
            >
              Get started
            </button>
          </a>
        </div>

        {/* Pricing-card 3  */}
        <div class="pricing-card">
          <h3 class="pricing-card-heading">Premium</h3>
          <p class="pricing-card-description">Apply your vision.</p>
          <div class="blur-card"></div>
          <p class="pricing-card-price">
            <p class="pricing-card-price">
              <span
                style={{
                  fontSize: "18px",
                  fontWeight: "400",
                  color: "rgb(153, 153, 153)",
                  marginRight: "8px",
                }}
              >
                <strike>$9999</strike>
              </span>
              $3999
            </p>
          </p>
          <span class="divider"></span>
          <ul class="pricing-card-feature-list">
            <li>
              <svg
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5875 13.8367L2.9375 9.18672L4.2125 7.91172L7.5875 11.2867L14.7688 4.10547L16.0438 5.38047L7.5875 13.8367Z"
                  fill="#006F0B"
                ></path>
              </svg>{" "}
              50 Premium Blueprints
            </li>
            <li>
              <svg
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5875 13.8367L2.9375 9.18672L4.2125 7.91172L7.5875 11.2867L14.7688 4.10547L16.0438 5.38047L7.5875 13.8367Z"
                  fill="#006F0B"
                ></path>
              </svg>{" "}
              20 Expert Upgrades
            </li>
            <li>
              <svg
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5875 13.8367L2.9375 9.18672L4.2125 7.91172L7.5875 11.2867L14.7688 4.10547L16.0438 5.38047L7.5875 13.8367Z"
                  fill="#006F0B"
                ></path>
              </svg>{" "}
              Dedicated Expert Agent
            </li>
            <li>
              <svg
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5875 13.8367L2.9375 9.18672L4.2125 7.91172L7.5875 11.2867L14.7688 4.10547L16.0438 5.38047L7.5875 13.8367Z"
                  fill="#006F0B"
                ></path>
              </svg>{" "}
              76 Service Access
            </li>
            <li>
              <svg
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5875 13.8367L2.9375 9.18672L4.2125 7.91172L7.5875 11.2867L14.7688 4.10547L16.0438 5.38047L7.5875 13.8367Z"
                  fill="#006F0B"
                ></path>
              </svg>{" "}
              2 Feedback Rounds
            </li>
            <li>
              <svg
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5875 13.8367L2.9375 9.18672L4.2125 7.91172L7.5875 11.2867L14.7688 4.10547L16.0438 5.38047L7.5875 13.8367Z"
                  fill="#006F0B"
                ></path>
              </svg>{" "}
              Delivery Time : 36 Hrs
            </li>
          </ul>
          <span class="divider-b"></span>
          <button class="pricing-card-button">Join the waitlist</button>
        </div>
      </div>
    </section>
  );
}

export default Pricing;