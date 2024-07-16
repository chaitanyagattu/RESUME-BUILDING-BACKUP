import React from 'react';
import './Features.css';
// import './Features.css';
//import 'bootstrap/dist/css/bootstrap.css'; 
// import Container from 'react-bootstrap/Container'; 
// import images from './feature-1.png';


function Features() {
    return (
        <div className="container-fluid p-5">
            <h1 className="h1-text">not a million features,<br /> but the only ones you need</h1>
            <div className="para mt-3">
                <p>Dive into the features of our AI blueprint generator and discover<br /> how it can propel your projects to new heights</p>
            </div>
            <div className="row mt-5">
                <div className="col-lg-7 col-md-6 col-12">
                    <div className="mycard mt-3">
                        <img src="feature-1.png" alt="Feature 1" className="img-fluid" />
                        <h3 className="h3-text mt-3">Blueprint Document Generation</h3>
                        <p className="card-para">Answer a few fundamentals, our intuitive AI builds executable plans tailored to your unique vision and goals.</p>
                    </div>
                </div>
                <div className="col-lg-5 col-md-6 col-12">
                    <div className="mycard mt-3">
                        <img src="feature-2.png" alt="Feature 2" className="img-fluid" />
                        <h3 className="h3-text mt-3">Analytical Scoring</h3>
                        <p className="card-para">Unique scoring system provides immediate insights into your blueprint's potential impact.</p>
                    </div>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-lg-4 col-md-6 col-12">
                    <div className="mycard mt-3">
                        <img src="feature-3.png" alt="Feature 3" className="img-fluid" />
                        <h3 className="h3-text mt-2">Multiple Perspectives</h3>
                        <p className="card-para">Explore different options for your action plan to validate your idea</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <div className="mycard mt-3">
                        <img src="feature-4.png" alt="Feature 4" className="img-fluid" />
                        <h3 className="h3-text mt-4">File Management</h3>
                        <p className="card-para">Flexibly save, copy, download, share, & edit</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <div className="mycard mt-3">
                        <img src="feature-5.png" alt="Feature 5" className="img-fluid" />
                        <h3 className="h3-text mt-2">Upgrade & Improve</h3>
                        <p className="card-para">Fine-tune your blueprints and increase the quality by 4X</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features;
