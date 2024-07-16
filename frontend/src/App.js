import {
  Routes,
  Route,
  useNavigationType,
  NavigationType,
  useLocation,
  BrowserRouter as Router,
} from "react-router-dom"
import './App.css';
import HomePage from "./components/HomePage";
// import BetadayzerovercelappByHtm from "./pages/BetadayzerovercelappByHtm"; 
import DivlayOutAuthPage from "./components/DivlayOutAuthPage";
import { useEffect } from "react";
import Login from "./components/Login"
import Welcome_page from "./Mycomponents/Welcome_page"
import QnA_page from "./Mycomponents/QnA_page"
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Faq from "./pages/FAQ";
import Question1 from "./components/question1";
import DigitalMarketing from "./components/DigitalMarketing";
import TechnologyInnovation from "./components/Technology&Innovation";
import BrandingDesign from "./components/Branding&Design";
import PublicRelations from "./components/PublicRelations";
import InfluencerMarketing from "./components/InfluencerMarketing";
import ContentProduction from "./components/ContentProduction";
import Blueprint from "./Mycomponents/Blueprint";


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/" element={<BetadayzerovercelappByHtm />} /> */}
        <Route path="/signUp" element={<DivlayOutAuthPage />} />
        {/* sign up and login page to be rendered here 
      baaki landing page n all homepage wale component se render hore hai.
      */}
        <Route path="/login" element={<Login />} />
        <Route path="/welcome-page" element={<Welcome_page />} />
        <Route path="/qna-page" element={<QnA_page />} />
        <Route path="/feature" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        
        <Route path="/faq" element={<Faq />} />

        <Route path="/DigitalMarketing" element={<DigitalMarketing />} />
        <Route path="/question1" element={<Question1/>} />
        <Route path="/Technology&Innovation" element={<TechnologyInnovation/>} />
        <Route path="/Branding&Design" element={<BrandingDesign/>} />
        <Route path="/PublicRelations" element={<PublicRelations/>} />
        <Route path="/InfluencerMarketing" element={<InfluencerMarketing/>} />
        <Route path="/ContentProduction" element={<ContentProduction/>} />
        <Route path="/blueprint" element={<Blueprint/>} />
        


      </Routes>
    </Router>
  );
}

export default App;
