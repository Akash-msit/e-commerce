import React from 'react'
import MainCarousel from '../../Components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../Components/HomeSectionCarousel/HomeSectionCarousel'
import { Saree } from '../../../Data/Saree/Saree'
import { Dress1} from '../../../Data/Dress/Dress1'
import { lengha_page1 } from '../../../Data/Dress/lengha_page1'


function HomePage() {
  return (<>
  
    <div>
      <MainCarousel/>
    <div className='space-y-10 flex flex-col justify-center py-20 px-5 lg:px-10'>
      <HomeSectionCarousel data={Saree} sectionName={"Saree"}/>
      <HomeSectionCarousel data={Dress1} sectionName={"Dress"}/>
    </div>
    </div>
    </>
  )
}

export default HomePage
