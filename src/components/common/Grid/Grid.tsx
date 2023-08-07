import { SxProps } from '@mui/material'
import { FC, HTMLAttributes } from 'react'
import FlexBox from '../../UI/FlexBox'

interface GridProps extends HTMLAttributes<HTMLDivElement> {
  gap: number
  sx?: SxProps
  className?: string
  children?: React.ReactNode
}

const Grid: FC<GridProps> = ({ gap, children, className, ...props }) => {
  return (
    <FlexBox gap={`${gap}px`} {...props}>
      {children}
    </FlexBox>
  )
}

export default Grid
