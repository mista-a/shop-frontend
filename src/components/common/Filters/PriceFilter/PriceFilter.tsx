import React, { forwardRef } from 'react'
import Line from '../../../UI/Line'
import { useState } from 'react'
import { Button, ClickAwayListener, Fade, Grow, Slider } from '@mui/material'
import styles from './PriceFilter.module.sass'
import Grid from '../../Grid/Grid'
import PriceSlider from './PriceSlider/PriceSlider'
import { useRouter } from 'next/router'
import filter from '../../../../utils/filter'

const PriceFilter = ({ setOpen }) => {
  const router = useRouter()

  const queruMinPrice = router.query.min ? +router.query.min : 0
  const queruMaxPrice = router.query.max ? +router.query.max : 1500

  const [priceSliderValue, setPriceSliderValue] = useState([
    queruMinPrice,
    queruMaxPrice,
  ])

  const handleSubmit = () => {
    filter({ router, min: priceSliderValue[0], max: priceSliderValue[1] })
    setOpen(false)
  }

  return (
    <>
      <Grid gap={5}>
        <b>Price</b>
        <span>Range</span>
      </Grid>
      <div className={styles.Price}>
        <span>
          ${priceSliderValue[0]} - ${priceSliderValue[1]}
        </span>
        <span className={styles.priceDescription}></span>
      </div>
      <PriceSlider
        priceSliderValue={priceSliderValue}
        setPriceSliderValue={setPriceSliderValue}
      />
      <Button color='success' type='submit' onClick={handleSubmit}>
        Apply
      </Button>
    </>
  )
}

export default PriceFilter
