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

import FirstPage from "./pages/Firstpage";
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
        <Route path="/vitamins" element={<SecondPage />} />
        <Route path="/Beauty" element={<ThirdPage />} />
        <Route path="/Hygiene" element={<FourthPage />} />
        <Route path="/Lenses" element={<FifthPage />} />
        <Route path="/Mother-&-Child" element={<SixthPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;