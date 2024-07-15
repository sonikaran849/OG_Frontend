import React from 'react'
import { MainCarouselData } from './MainCarouselData'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';
const MainCarousel = () => {

    let items = MainCarouselData.map((item) => <img className ='cursor-pointer' role='presentation' src={item.image}/>)
  return (
    <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={3000}
        infinite
        disableDotsControls
    />
  )
}

export default MainCarousel
