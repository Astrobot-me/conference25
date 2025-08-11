import React from 'react'
import Navbar from '../components/navbar/navbar'
import Hero from '../components/herosection/hero'
import AboutRit from '../components/about/aboutrit'
import Speakers from '../components/speaker/speakers'
import Tracks from '../components/tracks/tracks'
import CallForPaper from '../components/callforpaper/call4Paper'
import Registration from '../components/registration/Registration'
import Preparing from '../components/preparing/preparing'
import Faculties from '../components/faculties/faculties'
import Tourist from '../components/tourist/Tourist'
import Acknowledgement from '../components/acknowledgement/acknowledgement'
import ConferenceFooter from '../components/footer/footer'
// import ScrollToHash from '../components/ScrollIntoView'

const HomePage = () => {
  return (
     <div>
      {/* <ScrollToHash/> */}
      <Navbar/>
      <Hero/>
      <AboutRit/>
      <Speakers/>
      <Tracks />
      {/* <TimelineComponent/> */}
      <CallForPaper/>
      <Registration/> 
      <Preparing/>
      <Faculties />
      <Tourist />
      <Acknowledgement style={{ 
        maxWidth:"90%"
      }}/>
      <ConferenceFooter/>
      
    </div>
  )
}

export default HomePage