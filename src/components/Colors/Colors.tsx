import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import Color from '../Color/Color'
import FlexBox from '../UI/FlexBox'

const Colors: React.FC = () => {
  const [colors, setColors] = useState([])
  const [colorsCount, setColorsCount] = useState(1)

  const addColor = () => {
    setColorsCount(colorsCount + 1)
    setColors([
      ...colors,
      { id: colorsCount, color: { r: 0, g: 0, b: 0, a: 1 } },
    ])
  }

  const changeColor = (id: number, newColor: object) => {
    colors.forEach((color) => {
      if (color.id === id) {
        color.color = newColor
      }
    })
    setColors([...colors])
  }

  const deleteColor = (id: number) => {
    colors.forEach((color, index) => {
      if (color.id === id) {
        colors.splice(index, 1)
      }
    })
    setColors([...colors])
  }

  return (
    <>
      <Button onClick={addColor}>Add color</Button>
      <FlexBox sx={{ columnGap: '20px', flexWrap: 'wrap' }}>
        {colors.map(({ id, color }) => {
          return (
            <Color
              key={id}
              id={id}
              color={color}
              deleteColor={deleteColor}
              changeColor={changeColor}
            />
          )
        })}
      </FlexBox>
      <Typography>Mini image</Typography>
      {/* <input type='file' /> */}
    </>
  )
}

export default Colors
