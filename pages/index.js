import React, { useEffect, useRef } from 'react'
import Head from 'next/head'
// import Custom Components
import Header from '../containers/common/header'
import BannerSection from './sections/index/banner'
import ServicesSection from './sections/index/services'
import AboutSection from './sections/index/about'
import DownloadSection from './sections/index/download'
import ScreenShotsSection from './sections/index/screenshots'
import PriceSection from './sections/index/price'
import FooterSection from './sections/index/footer'

import { Element } from 'react-scroll'

//import scrollIntoView from 'scroll-into-view-if-needed';


//href="#about"


const App1 = () => {


  useEffect(() => {
    document.body.style.setProperty('--primary', '#357fef')
    document.body.style.setProperty('--secondary', '#4e4e4e')
    document.body.style.setProperty('--light', '#13B8EA')
    document.body.style.setProperty('--dark', '#4E56F3')
  })

  return (
    <div>
      <Head>
        <title>Fernando</title>
      </Head>
      
      <Header className="app1" />
      
      <Element name="Inicio">
      <BannerSection />
      </Element>

      <Element name="skills">
      <ServicesSection />
      </Element>

      <Element name="Dmobile">
      <AboutSection />
      </Element>
      
      <Element name="Dweb">
      <DownloadSection />
      </Element>

      <Element name="proyect">
      <ScreenShotsSection />
      </Element>

      <PriceSection />

      <Element name="contact">
      <FooterSection />
      </Element>

    </div>
  )
}

export default App1