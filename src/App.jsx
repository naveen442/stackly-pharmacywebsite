import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


// function App() {

//   return (
//     <>
//    <PharmacyHeader/>
//    <PharmacyTagBar/>
//    <PharmacyBanner/>
//    <PharmacyFeatures/>
//    <MonthlyDeals/>
//    <HowWeWork/>
//    <PharmacyRating/>
//    <OurPartners/>
//    <AboutCompany/>
//    <AlphabetSearch/>
//    <KnowledgeBase/>
//    <HealthBlog/>
//    {/* <StillHaveQuestions/>
//    <SiteFooter/> */}
//    <Footer/>
//     </>
//   )
// }

// export default App




import { BrowserRouter, Routes, Route } from "react-router-dom";

import FirstPage from "../src/pages/Firstpage";
import SecondPage from "./pages/Secondpage";
import ThirdPage from "./pages/Thirdpage";
import FourthPage from "./pages/fourthpage";
import FifthPage from "./pages/fifthpage";
import SixthPage from "./pages/sixthpage";
import PharmacyHeader from './Components/PharmacyHeader'
import Footer from './Components/Footer'
import PharmacyTagBar from './Components/PharmacyTagBar'

function App() {
  return (
    <BrowserRouter>
    <PharmacyHeader/>
    <PharmacyTagBar/>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/second" element={<SecondPage />} />
        <Route path="/third" element={<ThirdPage />} />
        <Route path="/fourth" element={<FourthPage />} />
        <Route path="/fifth" element={<FifthPage />} />
        <Route path="/sixth" element={<SixthPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;