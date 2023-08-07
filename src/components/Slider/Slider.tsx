import React, { useEffect, useState } from 'react'
import {
  StyledSlide,
  StyledMiniSlideButton,
  StyledMiniSlides,
  StyledSlider,
} from './SliderStyled'
import Img from '../Img/Img'

interface SliderProps {
  slides: string[]
}

const Slider = ({ slides }: SliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(slides[0])

  useEffect(() => {
    setCurrentSlide(slides[0])
  }, [slides])

  const chooseSlide = (slide: string) => {
    setCurrentSlide(slide)
  }

  return (
    <StyledSlider>
      <StyledMiniSlides>
        {slides.map((slide, index) => (
          <StyledMiniSlideButton
            key={index}
            variant='text'
            size='small'
            active={currentSlide === slide}
            onClick={() => chooseSlide(slide)}
          >
            <Img src={slide} alt='mini-slide' />
          </StyledMiniSlideButton>
        ))}
      </StyledMiniSlides>
      <StyledSlide>
        <Img src={currentSlide} />
      </StyledSlide>
    </StyledSlider>
  )
}

export default React.memo(Slider)
