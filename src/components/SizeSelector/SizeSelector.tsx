import React, { useEffect } from 'react'
import { ISize } from '../../types/Size'
import { Typography } from '@mui/material'
import { StyledSize, StyledSizes } from './SizeSelectorStyled'

interface SizeSelectorProps {
  sizes: ISize[]
  selectSize: (id: number) => void
  selectedSizeId: number | null
}

const SizeSelector = ({
  sizes,
  selectSize,
  selectedSizeId,
}: SizeSelectorProps) => {
  useEffect(() => {
    let hasPreviewsSize = false

    for (const size of sizes) {
      if (size.id === selectedSizeId) {
        hasPreviewsSize = true
        break
      }
    }

    if (!hasPreviewsSize) selectSize(null)
  }, [sizes])

  return (
    <>
      <Typography>Select size</Typography>
      <StyledSizes>
        {sizes.map(({ id, name }) => (
          <StyledSize
            key={id}
            onClick={() => selectSize(id)}
            active={selectedSizeId === id}
          >
            <Typography>{name}</Typography>
          </StyledSize>
        ))}
      </StyledSizes>
    </>
  )
}

export default SizeSelector
