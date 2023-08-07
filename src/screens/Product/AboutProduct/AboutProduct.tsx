import { Box, Button, Typography } from '@mui/material'
import React, { FC, useState } from 'react'
import styles from './AboutProduct.module.sass'

const AboutProduct: FC = () => {
  const [activeSection, setActiveSection] = useState<'DESCRIPTION' | 'REVIEWS'>(
    'DESCRIPTION'
  )

  const changeActiveSection = (section: 'DESCRIPTION' | 'REVIEWS') => {
    setActiveSection(section)
  }

  return (
    <Box className={styles.REVIEWS}>
      <Box className={styles.sectionsNames}>
        <Button onClick={() => changeActiveSection('DESCRIPTION')}>
          <Typography
            component='span'
            className={`${styles.sectionName} ${
              activeSection === 'DESCRIPTION' ? styles.activeSection : ''
            }`}
          >
            DESCRIPTION
          </Typography>
        </Button>
        <Button onClick={() => changeActiveSection('REVIEWS')}>
          <Typography
            component='span'
            className={`${styles.sectionName} ${
              activeSection === 'REVIEWS' ? styles.activeSection : ''
            }`}
          >
            REVIEWS
          </Typography>
        </Button>
      </Box>
      {activeSection === 'DESCRIPTION' ? (
        <Box className={styles.description}>
          <Typography>
            Short-sleeved shirt in Tencel™ lyocell with a printed pattern,
            turn-down collar, and smooth button placket. Regular fit – classic
            fit with good room for movement and gently shaped waist for a
            comfortable, tailored silhouette.
          </Typography>
        </Box>
      ) : (
        <Box className={styles.reviews}>
          <Typography>b</Typography>
        </Box>
      )}
    </Box>
  )
}

export default AboutProduct
