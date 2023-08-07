import React from 'react'
import Carousel from '../../../components/common/Carousel/Carousel'
import CarouselItem from '../../../components/common/Carousel/CarouselItem/CarouselItem'
import { Typography } from '@mui/material'
import {
  StyledCarouselContainer,
  StyledCarouselImg,
  StyledCarouselText,
} from './HomeCarouselStyles'

const HomeCarousel = () => {
  const carouselData = [
    {
      carouselImg:
        'https://lp2.hm.com/hmgoepprod?set=width[1280],quality[80],options[limit]&source=url[https://www2.hm.com/content/dam/ladies_s06/june_2022/1016a/1016A-a-new-fall-rhythm-3x2.jpg]&scale=width[global.width],height[15000],options[global.options]&sink=format[jpg],quality[global.quality]',
      header: 'Sprint into spring1',
      text: 'Set yourself up for wholesome goals with fresh workout gear',
    },
    {
      carouselImg:
        'https://lp2.hm.com/hmgoepprod?set=width[1280],quality[80],options[limit]&source=url[https://www2.hm.com/content/dam/ladies_s06/june_2022/1016a/1016A-a-new-fall-rhythm-3x2.jpg]&scale=width[global.width],height[15000],options[global.options]&sink=format[jpg],quality[global.quality]',
      header: 'Sprint into spring2',
      text: 'Set yourself up for wholesome goals with fresh workout gear',
    },
    {
      carouselImg:
        'https://lp2.hm.com/hmgoepprod?set=width[1280],quality[80],options[limit]&source=url[https://www2.hm.com/content/dam/ladies_s06/june_2022/1016a/1016A-a-new-fall-rhythm-3x2.jpg]&scale=width[global.width],height[15000],options[global.options]&sink=format[jpg],quality[global.quality]',
      header: 'Sprint into spring3',
      text: 'Set yourself up for wholesome goals with fresh workout gear',
    },
  ]

  return (
    <Carousel>
      {carouselData.map((carouselItem, index) => {
        return (
          <CarouselItem key={index}>
            <StyledCarouselContainer>
              <div>
                <StyledCarouselImg
                  draggable='false'
                  src={carouselItem.carouselImg}
                />
              </div>
              <StyledCarouselText>
                <Typography variant='h4'>{carouselItem.header}</Typography>
                <Typography>{carouselItem.text}</Typography>
              </StyledCarouselText>
            </StyledCarouselContainer>
          </CarouselItem>
        )
      })}
    </Carousel>
  )
}

export default HomeCarousel
