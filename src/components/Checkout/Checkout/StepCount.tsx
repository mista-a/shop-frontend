import { FC } from 'react'
import FlexBox from '../../UI/FlexBox'

interface StepCountProps {
  number: number
  active?: boolean
}

const StepCount: FC<StepCountProps> = ({ number, active = false }) => {
  return (
    <FlexBox
      sx={{
        alignItems: 'center',
        height: '35px',
        background: '#ececec',
        borderRadius: '20px',
        padding: '5px 20px',
        transition: '.4s',
        fontWeight: 500,
        color: '#adadad',
        ...(active && {
          color: 'white',
          background: '#90c9c9',
        }),
      }}
    >
      {number}
    </FlexBox>
  )
}

export default StepCount
