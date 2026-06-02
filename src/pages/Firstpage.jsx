import React from 'react'
import PharmacyHeader from '../Components/PharmacyHeader'
import PharmacyBanner from '../Components/PharmacyBanner'
import PharmacyTagBar from '../Components/PharmacyTagBar'
import PharmacyFeatures from '../Components/PharmacyFeatures'
import MonthlyDeals from '../Components/MonthlyDeals'
import HowWeWork from '../Components/HowWework'
import PharmacyRating from '../Components/PharmacyRating'
import OurPartners from '../Components/OurPartners'
import AboutCompany from '../Components/AboutCompany'
import AlphabetSearch from '../Components/AlphabetSearch'
import KnowledgeBase from '../Components/KnowledgeBase'
import HealthBlog from '../Components/HealthBlog'
import SiteFooter from '../Components/SiteFooter'
import StillHaveQuestions from '../Components/StillHaveQuestions'
import Footer from '../Components/Footer'
const Firstpage = () => {
  return (
    <div>
   <PharmacyBanner/>
   <PharmacyFeatures/>
   <MonthlyDeals/>
  <HowWeWork/>
   <PharmacyRating/>
       <OurPartners/>
   <AboutCompany/>
   <AlphabetSearch/>
   <KnowledgeBase/>
<HealthBlog/>
    </div>
  )
}

export default Firstpage
