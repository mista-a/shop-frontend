import { Box, Button, ClickAwayListener } from '@mui/material'
import React from 'react'
import styles from './Filters.module.sass'
import { CSSTransition } from 'react-transition-group'
import FlexBox from '../../../UI/FlexBox'

const Filter = ({ open, setOpen, label, children }) => {
  const nodeRef = React.useRef(null)
  const toggleFilter = () => setOpen(!open)

  return (
    <Box>
      <ClickAwayListener
        mouseEvent='onMouseDown'
        touchEvent='onTouchStart'
        onClickAway={() => setOpen(false)}
      >
        <FlexBox
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            width: '150px',
            height: '65px',
            border: '2px solid lightGrey',
            borderRadius: '13px',
            backgroundColor: 'inherit',
          }}
        >
          <Button
            sx={{
              lineHeight: '20px',
              width: '100%',
              height: '100%',
              border: 'none',
              backgroundColor: 'inherit',
            }}
            variant='text'
            onClick={toggleFilter}
          >
            {label}
          </Button>
          {/* @ts-ignore */}
          <CSSTransition
            in={open}
            timeout={500}
            classNames={{
              enter: styles.menuEnterAnimation,
              exit: styles.menuExitAnimation,
            }}
            nodeRef={nodeRef}
            unmountOnExit
          >
            <FlexBox
              ref={nodeRef}
              sx={{
                flexDirection: 'column',
                gap: '20px',
                transformOrigin: 'top left',
                maxHeight: '285px',
                overflowY: 'auto',
                width: '250px',
                position: 'absolute',
                top: 'calc(100% + 10px)',
                left: 0,
                padding: '25px 20px',
                zIndex: 1,
                background: '#fff',
                border: '1px solid #bbbbbb',
                borderRadius: '13px',
                ...(open && {
                  opacity: 1,
                  scale: 1,
                }),
              }}
            >
              {children}
            </FlexBox>
          </CSSTransition>
        </FlexBox>
      </ClickAwayListener>
    </Box>
  )
}

export default Filter
