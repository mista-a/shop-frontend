import styled from '@emotion/styled'
import { FC } from 'react'

interface RadioIconProps {
  active?: boolean
}

const RadioIcon: FC<RadioIconProps> = ({ active = false }) => {
  const RadioIcon = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 24,
    height: 24,
    backgroundColor: '#F5F4F4',
    border: '2px solid #F3F3F3',
    borderRadius: 10,
    marginRight: 10,
  })

  const ActiveRadioIcon = styled('div')({
    width: 14,
    height: 14,
    backgroundColor: '#63C395',
    borderRadius: 6,
  })

  return <RadioIcon>{active && <ActiveRadioIcon />}</RadioIcon>
}

export default RadioIcon
