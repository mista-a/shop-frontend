import { Button, Typography } from '@mui/material'
import React, { FC, useState } from 'react'

interface color {
  r: number
  g: number
  b: number
  a: number
}

interface ColorProps {
  deleteColor: (id: number) => void
  changeColor: (id: number, color: object) => void
  color: color
  id: number
}

const Color: FC<ColorProps> = ({ deleteColor, changeColor, color, id }) => {
  const handleChange = (newColor) => {
    changeColor(id, newColor.rgb)
  }

  return (
    <div>
      {/* <Button onClick={() => deleteColor(id)}>x</Button>
      <ChromePicker color={color} onChange={handleChange} />
      <Typography>
        {color.r}, {color.g}, {color.b}
      </Typography> */}
    </div>
  )
}

export default Color
