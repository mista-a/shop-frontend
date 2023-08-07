import {
  Button,
  Container,
  Grid,
  styled,
  Typography,
  useMediaQuery,
} from '@mui/material'
import React from 'react'
import styles from './Footer.module.sass'
import GitHubIcon from '@mui/icons-material/GitHub'
import Link from '../../UI/Link/Link'
import Input from '../../UI/Input'
import theme from '../../../theme/theme'

const Footer = () => {
  const WhiteTypography = styled(Typography)({
    color: 'white',
  })

  const Resources = styled(Grid)({
    display: 'flex',
    textAlign: 'right',
    alignItems: 'flex-end',
    flexDirection: 'column',
    [theme.breakpoints.down('laptop')]: {
      alignItems: 'flex-start',
    },
  })

  const ResourcesLinks = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    alignItems: 'flex-end',
    textDecorationColor: 'white',
    textDecoration: 'underline',
    fontWeight: '300',
    fontSize: '20px',
    lineHeight: '23px',
    [theme.breakpoints.down('laptop')]: {
      alignItems: 'flex-start',
    },
  })

  const footerBreakpoint = useMediaQuery(theme.breakpoints.down('laptop'))

  return !footerBreakpoint ? (
    <div className={styles.footer}>
      <Container>
        <Grid container justifyContent='space-between'>
          <Grid item xs={8} className={styles.newsletter}>
            <WhiteTypography variant='h5'>Newsletter</WhiteTypography>
            <div className={styles.newsletterText}>
              <WhiteTypography>
                Subscribe to be the first to hear about our exclusive offers and
                latest arrivals.
              </WhiteTypography>
              <div className={styles.subscribe}>
                <Input className={styles.subscribeInput} placeholder='e-mail' />
                <Button variant='text' className={styles.subscribeButton}>
                  Send
                </Button>
              </div>
            </div>
          </Grid>
          <Grid item xs={2}>
            <WhiteTypography variant='h5'>Dev</WhiteTypography>
            <div className={styles.devLinks}>
              <div className={styles.github}>
                <GitHubIcon />
                <Link href='https://github.com/mista-a/shop'>
                  <WhiteTypography>GitHub</WhiteTypography>
                </Link>
              </div>
            </div>
          </Grid>
          <Resources item xs={2}>
            <WhiteTypography variant='h5'>Resources</WhiteTypography>
            <ResourcesLinks>
              <Link
                href={'/terms-and-conditions'}
                // classLink={styles.resourceLink}
              >
                <WhiteTypography className={styles.resourceLink}>
                  Terms and Conditions
                </WhiteTypography>
              </Link>
              {/* <Link href={'/privacy-policy'} classLink={styles.resourceLink}> */}
              <WhiteTypography className={styles.resourceLink}>
                Privacy Policy
              </WhiteTypography>
              {/* </Link> */}
              <Link
                href={'/shipping-and-returns'}
                // classLink={styles.resourceLink}
              >
                <WhiteTypography>Shipping & Returns</WhiteTypography>
              </Link>
              {/* <Link href={'/contact-us'} classLink={styles.resourceLink}> */}
              <WhiteTypography className={styles.resourcelink}>
                Contact Us
              </WhiteTypography>
              {/* </Link> */}
            </ResourcesLinks>
          </Resources>
        </Grid>
      </Container>
    </div>
  ) : (
    <div className={styles.footer}>
      <Container>
        <Grid container justifyContent='space-between'>
          <Grid item xs={2}>
            <WhiteTypography variant='h5'>Dev</WhiteTypography>
            <div className={styles.devLinks}>
              <div className={styles.github}>
                <GitHubIcon />
                <Link href='https://github.com/mista-a/shop'>
                  <WhiteTypography>GitHub</WhiteTypography>
                </Link>
              </div>
            </div>
          </Grid>
          <Grid item xs={8} className={styles.newsletter}>
            <WhiteTypography variant='h5'>Newsletter</WhiteTypography>
            <div className={styles.newsletterText}>
              <WhiteTypography>
                Subscribe to be the first to hear about our exclusive offers and
                latest arrivals.
              </WhiteTypography>
              <div className={styles.subscribe}>
                <Input className={styles.subscribeInput} placeholder='e-mail' />
                <Button variant='text' className={styles.subscribeButton}>
                  Send
                </Button>
              </div>
            </div>
          </Grid>
          <Resources item xs={2}>
            <WhiteTypography variant='h5'>Resources</WhiteTypography>
            <ResourcesLinks>
              <Link
                href={'/terms-and-conditions'}
                // className={styles.resourceLink}
              >
                Terms and Conditions
              </Link>
              {/* <Link href={'/privacy-policy'} className={styles.resourceLink}> */}
              <WhiteTypography className={styles.resourcelink}>
                Privacy Policy
              </WhiteTypography>
              {/* </Link> */}
              <Link
                href={'/shipping-and-returns'}
                // className={styles.resourceLink}
              >
                <WhiteTypography>{'Shipping & Returns'}</WhiteTypography>
              </Link>
              {/* <Link href={'/contact-us'} className={styles.resourceLink}> */}
              <WhiteTypography>Contact Us</WhiteTypography>
              {/* </Link> */}
            </ResourcesLinks>
          </Resources>
        </Grid>
      </Container>
    </div>
  )
}

export default React.memo(Footer)
