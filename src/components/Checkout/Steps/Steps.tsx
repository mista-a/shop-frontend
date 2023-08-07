import { Box, Button, styled, Typography } from '@mui/material'
import { FC, ReactNode } from 'react'
import { IStep } from '../../../types/Step'
import Grid from '../../common/Grid/Grid'
import FlexBox from '../../UI/FlexBox'
import StepCount from '../Checkout/StepCount'

interface StepsProps {
  steps: IStep[]
  stepCount: number
  setStepCount: (stepCount: number) => void
}

const Steps: FC<StepsProps> = ({ steps, stepCount, setStepCount }) => {
  const Steps = styled(FlexBox)({
    flexDirection: 'column',
    border: '2px solid #e6e4e4',
    borderRadius: '30px',
    paddingLeft: '50px',
    paddingRight: '50px',
    transition: 'height .5s',
    animation: 'show 1s',
    '@keyframes show': {
      '0%': { opacity: 0 },
      '100%': { opacity: 1 },
    },
  })

  const Step = styled(Box)({
    animation: 'addStep .8s',
    '@keyframes addStep': {
      '0%': {
        transform: 'translateY(35px)',
        opacity: 0,
      },
      '25%': {
        transform: 'translateY(35px)',
        opacity: 0,
      },
      '100%': {
        transform: 'translateY(0)',
        opacity: 1,
      },
    },
  })

  const ChangeStep = styled(Button)({
    borderWidth: '2px',
    borderRadius: '10px',
    padding: 0,
    minWidth: '55px',
    fontSize: '16px',
    marginLeft: 'auto',
    '&:hover': {
      borderWidth: '2px',
    },
  })

  let descriptionLineCount = 0
  for (let i = 0; i < stepCount - 1; i++) {
    descriptionLineCount += Math.ceil(steps[i].description.length / 23)
  }
  const padding = 80
  const mainBlockMarginBottom = 5
  const heightOfMainBlock = 30 + mainBlockMarginBottom
  const heightOAllfMainsBlocks = (stepCount - 1) * heightOfMainBlock
  const descriptionLineHeight = 24
  const descriptionHeight = descriptionLineCount * descriptionLineHeight
  const stepsGap = 20
  const distanceBetweenSteps = (stepCount - 2) * stepsGap

  const stepsHeight =
    padding + heightOAllfMainsBlocks + descriptionHeight + distanceBetweenSteps

  const transformDescription = (description: string): ReactNode => {
    let price = ''
    const dollarIndex = description.indexOf('$')

    if (dollarIndex !== -1) {
      price = description.substring(dollarIndex)
      description = description.substring(0, dollarIndex)
    }

    return (
      <>
        <Typography style={{ color: '#b6b5b5', fontSize: '19px' }}>
          {description}
        </Typography>
        {dollarIndex !== -1 && (
          <Typography
            style={{ fontSize: '18px', color: '#5e5e5e', fontWeight: 600 }}
          >
            {price}
          </Typography>
        )}
      </>
    )
  }

  return (
    <Steps
      style={{
        paddingTop: padding / 2,
        paddingBottom: padding / 2,
        gap: stepsGap,
        height: stepsHeight,
      }}
    >
      {steps.map(
        ({ id, stepName, description }) =>
          id + 1 <= stepCount && (
            <Step key={id}>
              <Grid
                gap={10}
                style={{
                  marginBottom: mainBlockMarginBottom,
                  alignItems: 'center',
                }}
              >
                <StepCount number={id} />
                <FlexBox sx={{ flexDirection: 'column' }}>
                  <Typography style={{ fontSize: '24px', fontWeight: 500 }}>
                    {stepName}
                  </Typography>
                </FlexBox>
                <ChangeStep variant='outlined' onClick={() => setStepCount(id)}>
                  EDIT
                </ChangeStep>
              </Grid>
              <Box
                style={{
                  maxWidth: '250px',
                  marginLeft: '68px',
                  wordBreak: 'break-word',
                }}
              >
                {transformDescription(description)}
              </Box>
            </Step>
          )
      )}
    </Steps>
  )
}

export default Steps
