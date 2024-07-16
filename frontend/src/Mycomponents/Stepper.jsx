import React, { useContext, useEffect, useState } from 'react';
import { Button } from "react-bootstrap";
import Cookies from "js-cookie";
import { context } from '../context';
import { Box, CircularProgress } from '@mui/material'
const { GoogleGenerativeAI } = require("@google/generative-ai");

function Stepper({ steps }) {
  const [activeStep, setActiveStep] = useState(0);
  const [step, setStep] = useState(1)
  const [loader, setLoader] = useState(false);
  const [percent, setPercent] = useState(2);

  let { questions, setQuestions, addQuestions, answers, setAnswers, addAnswers, domain, setDomain } = useContext(context)
  const messages = { questions, answers };

  useEffect(() => {
    console.log("question " + percent); // Logs the updated value whenever percent changes
  }, [percent]);

  function validations(step) {
    if (step === 1 && Object.keys(domain['technology']).length < 8) {
      return true;
    }
    if (step === 2 && Object.keys(domain['digital']).length < 10) {
      return true;
    }
    if (step === 3 && Object.keys(domain['influencer']).length < 10) {
      return true;
    }
    if (step === 4 && Object.keys(domain['content']).length < 10) {
      return true;
    }
    if (step === 5 && Object.keys(domain['publicRelation']).length < 10) {
      return true;
    }
    if (step === 6 && Object.keys(domain['branding']).length < 10) {
      return true;
    }
  }

  const generatePrompt = async (questions, answers) => {
    try {
      let buisnessName = answers[questions.indexOf('business name')]
      let buisnessStage = answers[questions.indexOf('business stage')]
      let buisnessDescription = answers[questions.indexOf('business description')]
      let numberOfEmployees = answers[questions.indexOf('Number of employees')]
      let buisnessOffers = answers[questions.indexOf('Do you offer a product or service?')]
      let customerGetMode = answers[questions.indexOf('How can customer get your product or service?')]
      let regionOfService = answers[questions.indexOf('Where do you serve your customers?')]
      let productServiceName = answers[questions.indexOf('Product or Service Name')]
      let productServiceDescription = answers[questions.indexOf('Product or Service Description')]
      let intialInvestment = answers[questions.indexOf('Total Initial Investment')]
      let firstYearRevenue = answers[questions.indexOf('Expected First Year Revenue')]
      let rateOfGrowthPerYear = answers[questions.indexOf('How much do you expect your revenue to grow each year?')]
      let yearlyBuisnessOperatingCost = answers[questions.indexOf('Yearly Business Operations Cost')]

      let prompt = `Create an end to end business plan as well as guidance plan that helps me create a business by the name of ${buisnessName}.It is in the stage of ${buisnessStage}.${buisnessName} is suppose to be ${buisnessDescription}.At this stage our comapny contains ${numberOfEmployees} number of employees. ${buisnessName} offers ${buisnessOffers}. A customer gets my ${buisnessOffers} from ${customerGetMode} mode. We Serve our customers in ${regionOfService}. Our ${buisnessOffers} name is ${productServiceName}. ${productServiceName} is suppose to be ${productServiceDescription}. Our Intial investment is ${intialInvestment}.Our expected first year revenue is ${firstYearRevenue} And i want to grow my revenue at the rate of ${rateOfGrowthPerYear} Our buisness yearly operating buisness cost is ${yearlyBuisnessOperatingCost}.`

      return prompt
    } catch (error) {
      window.alert(error)
    }
  }

  const handleNext = () => {
    let validator = validations(step)
    if (validator) {
      window.alert("Answer all the questions to proceed");
      return
    }
    setStep((step) => step + 1)
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setStep((step) => step - 1)
    setActiveStep((prevStep) => prevStep - 1);
  };

  // Handle if steps is undefined or not an array
  if (!steps || !Array.isArray(steps) || steps.length === 0) {
    return <div>No steps provided</div>;
  }

  // const answer = async (tPrompt) => {
  //   try {
  //     const cookies = Cookies.get("token");
  //     console.log(tPrompt)
  //     const response = await fetch(
  //       "https://idea-engine-backend-4gyo.vercel.app/api/v1/generateresponse",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           token: cookies,
  //         },
  //         body: JSON.stringify({ tPrompt }),
  //       }
  //     );
  //     const res = await response.json();
  //     console.log(res)
  //     return res;
  //   } catch (error) {
  //     console.error("Some error occured at generating response!!")
  //   }
  // }

  const genAI = new GoogleGenerativeAI("AIzaSyAM1T6li4pgjil1q55wbC_UvYq-cbNJs2I");
  const answer = async (tPrompt) => {
    try {
      // For text-only input, use the gemini-pro model
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      // const prompt = question
      const result = await model.generateContent(tPrompt);
      // const response = await result.response;
      const res = result.response;
      const text = res.text();
      // console.log(text);
      return text
    } catch (error) {
      window.alert(error)
    }
  }

  // console.log(percent)
  // useEffect(() => {
  //   setUploadOrDownloadCount((previousCount) => {
  //     const newCount = previousCount + percent;
  //     console.log("loader " + previousCount)
  //     console.log("loader " + percent)
  //     return newCount >= 100 ? 100 : newCount;
  //   });
  // }, [percent]);

  const handleDownloadPdf = async () => {
    try {
      setLoader(true);

      setPercent((prevPercent) => prevPercent + 5);

      let text = {};
      const questions = messages.questions
      const answers = messages.answers
      let tPrompt = await generatePrompt(questions, answers);
      let commonText = await answer(tPrompt);
      text['commonText'] = commonText
      setPercent(prevPercent => prevPercent + 8);

      let executiveText = await answer(`${tPrompt} + \nPlease explain in more detail about the Executive summary statement`);
      text['executiveText'] = executiveText
      setPercent(prevPercent => prevPercent + 2);
      let marketText = await answer(`${tPrompt} + \nPlease explain in more detail about the Market Analysis statement`);
      text['marketText'] = marketText
      setPercent(prevPercent => prevPercent + 2);

      let productText = await answer(`${tPrompt} + \nPlease explain in more detail about the Product Description statement`);
      text['productText'] = productText
      setPercent(prevPercent => prevPercent + 2);
      let buisnessText = await answer(`${tPrompt} + \nPlease explain in more detail about the Business Model statement`);
      text['buisnessText'] = buisnessText
      setPercent(prevPercent => prevPercent + 2);

      let financialText = await answer(`${tPrompt} + \nPlease explain in more detail about the Financial Plan statement`);
      text['financialText'] = financialText
      setPercent(prevPercent => prevPercent + 2);

      let marketingText = await answer(`${tPrompt} + \nPlease explain in more detail about the Marketing and Sales Strategy statement`);
      text['marketingText'] = marketingText
      setPercent(prevPercent => prevPercent + 2);
      let guidanceText = await answer(`${tPrompt} + \nPlease explain in more detail about the Guidance Plan statement`);
      text['guidanceText'] = guidanceText
      setPercent(prevPercent => prevPercent + 2);

      let missionText = await answer(`${tPrompt} + \nPlease explain in more detail about the Mission Statement statement`);
      text['missionText'] = missionText
      setPercent(prevPercent => prevPercent + 2);

      let visionText = await answer(`${tPrompt} + \nPlease explain in more detail about the Vision Statement statement`);
      text['visionText'] = visionText
      setPercent(prevPercent => prevPercent + 2);

      let { technology } = domain
      let technologyPrompt = `Our buisness offers ${technology['What awesome stuff will your business offer?']}. we have ${technology['How do you figure out what to make and how to make it?']} to figure out what to make and how to make it. We are looking for ${technology['How much do you expect to make, and how much will it cost to get started?']}. ${technology['What could go wrong with your business, and how will you handle it?']} is a threat for my buisness. We tell people about our awesome products through ${technology['How will you tell people about your awesome products?']}. Our Customers get product or service through ${technology['How can customers get your product or service?']}.  My buisness goal is ${technology['What goals are you aiming for, and how will you track your progress?']}`
      // My Plan for bringing in cash by ${ technology["What's your plan for bringing in cash ?"] }.
      let technologyText = await answer(technologyPrompt)
      text['technologyText'] = technologyText
      setPercent(prevPercent => prevPercent + 9);
      console.log("login " + percent)

      let { digital } = domain
      let digitalPrompt = `We are targeting ${digital['types of clients']} clients for our digital marketing services. We want to offer ${digital['specific services you will offer']} services in social media marketing(YouTube, Facebook, Instagram) and performance marketing (Ads), including campaign creation, optimization, and analytics. We plan to integrate social media marketing efforts ${digital['plan to integrate social media marketing efforts']} across YouTube, Facebook, and Instagram with performance marketing campaigns to create cohesive and impactful digital marketing strategies for our clients. ${digital['strategies will you employ to effectively target and engage audiences']} strategies we will employ to effectively target and engage audiences on each social media platform (YouTube, Facebook, Instagram) and through performance marketing ads, ensuring maximum reach and conversion potential. We will allocate budgets between social media marketing efforts and performance marketing ad campaigns, considering factors such as platform costs, ad bidding strategies, and client goals ${digital['How will you allocate budgets between social media marketing efforts and performance marketing ad campaigns, considering factors such as platform costs, ad bidding strategies, and client goals?']}. ${digital["What metrics and analytics will you use to measure the success of your social media marketing efforts on YouTube, Facebook, and Instagram, as well as the performance of your ad campaigns, and how will you report these insights to"]} metrics and analytics we will use to measure the success of our social media marketing efforts on YouTube, Facebook, and Instagram, as well as the performance of our ad campaigns. ${digital['How do you plan to develop compelling ad creatives and messaging that resonate with target audiences across social media platforms (YouTube, Facebook, Instagram) and performance marketing campaigns, driving engagement and conversions?']} plan to develop compelling ad creatives and messaging that resonate with target audiences across social media platforms (YouTube, Facebook, Instagram) and performance marketing campaigns, driving engagement and conversions.`
      let digitalText = await answer(digitalPrompt)
      text['digitalText'] = digitalText
      setPercent(prevPercent => prevPercent + 9);
      console.log("login " + percent)


      let { influencer } = domain
      let influencerPrompt = `${influencer['What sets your influencer marketing business apart from competitors?']} sets my influencer marketing business apart from competitors. ${influencer['How do you plan to establish and communicate your brand identity to resonate with your target audience?']} is my plan to establish and communicate my brand identity to resonate with my target audience. ${influencer['What strategies will you use to build relationships with influencers in your chosen niche?']} strategies we will use to build relationships with influencers in our chosen niche. By ${influencer['How will you tailor your service packages to meet the unique needs and objectives of your clients?']} we will tailor our service packages to meet the unique needs and objectives of our clients. ${influencer['What methods will you use to reach out to brands and pitch your services effectively?']} methods will use to reach out to brands and pitch our services effectively. ${influencer["How do you plan to coordinate with influencers to create engaging content that aligns with brands' objectives?"]} is my plan to coordinate with influencers to create engaging content that aligns with brands objectives. ${influencer['What metrics will you use to monitor campaign performance and track ROI for your clients?']} metrics will use to monitor campaign performance and track ROI for our clients. By ${influencer['How will you stay updated on industry trends, platform algorithms, and best practices in influencer marketing?']} we will stay updated on industry trends, platform algorithms, and best practices in influencer marketing. ${influencer['What strategies do you have in place to adapt and evolve your business as the influencer marketing landscape changes?']} strategies we have in place to adapt and evolve your business as the influencer marketing landscape changes. ${influencer['What strategies will you implement to stay ahead of emerging trends and innovations in influencer marketing?']} strategies we will implement to stay ahead of emerging trends and innovations in influencer marketing.`
      let influencerText = await answer(influencerPrompt)
      text['influencerText'] = influencerText
      setPercent(prevPercent => prevPercent + 9);
      console.log("login " + percent)


      let { content } = domain
      let contentPrompt = `${content['What kinds of stuff are we making, and why do people want it?']} we are making. we are making it for ${content['Who are we making it for, and what do they like?']}. By ${content["How do we make sure our stuff is better than everyone else's?"]} we are making sure our stuff is better than everyone else's. We need ${content["What do we need to make our stuff, and who's doing what?"]} to make our stuff. we are using ${content['What tools are we using to make sure our stuff looks good?']} to make sure our stuff looks good. By ${content['How do we ensure the quality and consistency of our content?']} we ensure the quality and consistency of our content. By ${content["How do we know if our stuff is doing well, and what do we do if it's not?"]} we know if our stuff is doing well, and what do we do if it's not. We are starting ${content['When are we starting, and what do we want to achieve?']}. By ${content["How do we know if we're doing a good job, and what's the plan for the future?"]} we know if we're doing a good job. ${content['What are the success evaluation metrics over time?']} are the success evaluation metrics over time.`
      let contentText = await answer(contentPrompt)
      text['contentText'] = contentText
      setPercent(prevPercent => prevPercent + 9);
      console.log("login " + percent)


      let { publicRelation } = domain
      let publicRelationPrompt = `${publicRelation['What are the big trends in PR we can take advantage of?']} is the big trends in PR we can take advantage of. ${publicRelation['Who else is in the PR game, and how are we going to be different?']} is in the PR game, and how are we going to be different. we are doing ${publicRelation['What exactly are we doing for our clients, and why does it matter?']} for our clients, and why does it matter. we are going to focus on ${publicRelation['Are we going to focus on anything specific, and why?']}. we are trying to help ${publicRelation['Who are we trying to help, and what do they need?']} and what do they need. By ${publicRelation['How do we make sure they stick with us?']} we make sure they stick with us. By ${publicRelation['How are we getting the word out about our PR agency?']} we are getting the word out about our PR agency. We are doing ${publicRelation['What do we do to turn interested people into clients']} to turn interested people into clients. ${publicRelation['What might go wrong, and how do we fix it?']} might go wrong, and how do we fix it. ${publicRelation['What are the anticipated risks, and what are our mitigation plans?']} are the anticipated risks, and how to overcome this.`
      let publicRelationText = await answer(publicRelationPrompt)
      text['publicRelationText'] = publicRelationText
      setPercent(prevPercent => prevPercent + 9);
      console.log("login " + percent)


      let { branding } = domain
      let brandingPrompt = `${branding['What tech trends can we use to our advantage?']} tech trends can we use to our advantage. By ${branding['How do we plan to adapt to changing tech needs?']} we are  planning to adapt to changing tech needs. ${branding['What cool stuff are we offering?']} cool stuff are we offering. By ${branding["How do we make sure we're different from everyone else?"]} we make sure we're different from everyone else. ${branding['Who are our main customers?']} are our main customers. By ${branding['How do we make sure our stuff fits what they want?']} we make sure our stuff fits what customers want. By ${branding['How do we ensure our branding and design solutions remain fresh and relevant over time?']} we ensure our branding and design solutions remain fresh and relevant over time. ${branding['What are the success drivers for your products or services?']} are the success drivers for our products or services. ${branding['What new things are we planning?']} new things are we planning. By ${branding["How do we make sure everyone's always thinking of cool new stuff?"]} we make sure everyone's always thinking of cool new stuff.`
      let brandingText = await answer(brandingPrompt)
      text['brandingText'] = brandingText
      setPercent(prevPercent => prevPercent + 9);
      console.log("login " + percent)


      try {
        setLoader(true);
        setPercent(prevPercent => prevPercent + 5);

        const cookies = Cookies.get("token");
        // Send a request to your backend to generate and download the PDF
        const response = await fetch(
          "https://idea-engine-backend-4gyo.vercel.app/api/v1/generatepdf",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              token: cookies,
            },
            body: JSON.stringify({ text }),
          }
        );
        // Check if the response is successful
        if (!response.ok) {
          setPercent(() => 100);
          throw new Error("Failed to generate or download PDF");
        } else {
          setPercent(prevPercent => prevPercent + 2);
          // Convert the response body to a blob
          const blob = await response.blob();
          // Create a URL for the blob
          const url = window.URL.createObjectURL(new Blob([blob]));
          // Create an anchor element to facilitate the download
          const a = document.createElement("a");
          a.href = url;
          a.download = "output.pdf";
          setPercent(prevPercent => prevPercent + 2);
          // Append the anchor element to the document body
          document.body.appendChild(a);
          // Trigger a click event on the anchor element to initiate the download
          a.click();
          // Remove the anchor element from the document body after the download is complete
          document.body.removeChild(a);
          setPercent(prevPercent => prevPercent + 4);
          console.log("login " + percent)
        }
      } catch (error) {
        console.error("Error generating or downloading PDF:", error);
      }
      setLoader(false);
    } catch (error) {
      console.error("Error generating or downloading PDF:", error);
    }
  };

  return (
    <>
      {loader ? (
        <div style={{ backgroundColor: '#000000', height: '100vh', width: '100vw', zIndex: '20', position: 'fixed', top: '0', left: '0', right: '0', }}>
          <Box position={'relative'} justifyContent={'center'} height={'100vh'} alignItems={'center'} display="flex">
            <CircularProgress variant="determinate" size={55} value={percent} />
            <Box
              bottom={0}
              right={0}
              top={0}
              justifyContent="center"
              left={0}
              display="flex"
              alignItems="center"
              position="absolute"
            >
              {`${Math.round(percent)}%`}
            </Box>
          </Box>
        </div>
      ) :
        (<div>
          <context.Provider value={{ questions, setQuestions, addQuestions, answers, setAnswers, addAnswers, domain, setDomain }}>
            {steps[activeStep]}
          </context.Provider>
          <div className='d-flex justify-content-center'>
            <Button disabled={activeStep === 0} onClick={handleBack} variant="outline-primary" className=' mx-2'>Back</Button>
            {step !== 6 && <Button disabled={activeStep === steps.length - 1} onClick={handleNext} variant="outline-primary" className=' mx-2'>Next</Button>}
            {step === 6 && <Button onClick={handleDownloadPdf} variant="outline-primary" className=' mx-2'>Generate Pdf</Button>}
          </div>
        </div>
        )}
    </>
  );
}

export default Stepper;
