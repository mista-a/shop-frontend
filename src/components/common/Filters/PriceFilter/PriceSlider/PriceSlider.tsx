import { Input, Slider as MuiSlider, styled } from '@mui/material'
import React, { ChangeEvent } from 'react'
import theme from '../../../../../theme/theme'
import FlexBox from '../../../../UI/FlexBox'

const PriceInput = styled(Input)({
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  borderRadius: '10px',
  border: '1px solid #eeeeee',
  backgroundColor: '#f0f0f0',
  width: '95px',
  height: '40px',
  '& .MuiInput-focus': {
    outline: 'none',
  },
  '& .MuiInput-input': {
    outline: 'none',
    textAlign: 'center',
  },
})

const Slider = styled(MuiSlider)({
  '& .MuiSlider-track': {
    color: theme.palette.success.main,
  },
  '& .MuiSlider-rail': {
    color: 'grey',
  },
  '&.MuiSlider-root': {
    width: 'calc(100% - 28px)',
  },
  '& .MuiSlider-thumb': {
    height: 27,
    width: 27,
    backgroundColor: '#fff',
    border: '1px solid',
    borderColor: theme.palette.success.main,
    '&.Mui-active': {
      boxShadow: `0 0 0 12px rgba(239, 83, 80, 0.18)`,
    },
    '&:hover': {
      boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
    },
  },
})

const PriceSlider = ({ priceSliderValue, setPriceSliderValue }) => {
  const handleChangePriceSlider = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | Event,
    newValue: number | number[] | [string, number] | [number, string],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) return

    let [minValue, maxValue] = newValue

    if (minValue.toString() === 'NaN' || maxValue.toString() === 'NaN') return

    minValue = +minValue
    maxValue = +maxValue

    if (activeThumb === 0) {
      if (minValue > 1500) {
        setPriceSliderValue([1500, maxValue])
      } else if (minValue > maxValue) {
        setPriceSliderValue([minValue, minValue])
      } else {
        setPriceSliderValue([minValue, maxValue])
      }
    } else {
      if (maxValue > 1500) {
        setPriceSliderValue([minValue, 1500])
      } else if (minValue > maxValue) {
        setPriceSliderValue([maxValue, maxValue])
      } else {
        setPriceSliderValue([minValue, maxValue])
      }
    }
  }

  return (
    <FlexBox
      sx={{
        flexDirection: 'column',
        gap: '15px',
        justifyItems: 'center',
        alignItems: 'center',
      }}
    >
      <Slider
        value={priceSliderValue}
        min={0}
        max={1500}
        onChange={handleChangePriceSlider}
      />
      <FlexBox justifyContent='space-between' width='100%'>
        <PriceInput
          value={priceSliderValue[0]}
          onChange={(e) =>
            handleChangePriceSlider(
              e,
              [+e.target.value, priceSliderValue[1]],
              0
            )
          }
        />
        {/* <Line /> */}
        <PriceInput
          value={priceSliderValue[1]}
          onChange={(e) =>
            handleChangePriceSlider(
              e,
              [priceSliderValue[0], +e.target.value],
              1
            )
          }
        />
      </FlexBox>
    </FlexBox>
  )
}

export default PriceSlider
