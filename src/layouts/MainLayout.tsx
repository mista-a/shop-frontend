import React from 'react'
import Footer from '../components/common/Footer/Footer'
import Header from '../components/Header/Header'
import Navigation from '../components/Navigation/Navigation'
import FlexBox from '../components/UI/FlexBox'
import { StyledContainer } from './StyledMaynLayout'

const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <FlexBox sx={{ minHeight: '100%', flexDirection: 'column' }}>
      <Header />
      <StyledContainer maxWidth='lg'>{children}</StyledContainer>
      {/* <Footer /> */}
    </FlexBox>
  )
}

export default MainLayout
