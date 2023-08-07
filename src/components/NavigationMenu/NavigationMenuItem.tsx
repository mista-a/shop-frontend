import { Button, Collapse, styled, Typography } from '@mui/material'
import { FC, useState } from 'react'
import Link from '../UI/Link/Link'
import FlexBox from '../UI/FlexBox'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { textToLink } from '../../utils/textToLink'
import { ISubcategory } from '../../types/Subcategory'

const LinkItem = styled(FlexBox)({
  alignItems: 'center',
  justifyContent: 'space-between',
})

interface NavigationMenuItemProps {
  category: string
  subcategories: ISubcategory[]
}

const NavigationMenuItem: FC<NavigationMenuItemProps> = ({
  category,
  subcategories,
}) => {
  const [expandCategory, setExpandCategory] = useState<boolean>(false)

  const switchExpandCategory = () => setExpandCategory(!expandCategory)

  return (
    <>
      <Button
        onClick={switchExpandCategory}
        fullWidth
        sx={{ justifyContent: 'flex-start', padding: '10px' }}
      >
        <Typography>{category}</Typography>
        <ArrowForwardIosIcon
          fontSize='small'
          sx={{
            ml: 'auto',
            transition: 'transform .3s',
            ...(expandCategory && {
              transform: 'rotate(90deg)',
            }),
          }}
        />
      </Button>
      <Collapse in={expandCategory}>
        <FlexBox
          sx={{
            flexDirection: 'column',
            gap: '10px',
            paddingLeft: '15px',
            paddingRight: '10px',
          }}
        >
          <Link href={'/' + textToLink(category)}>
            <LinkItem>
              Most Popular
              <ArrowForwardIcon />
            </LinkItem>
          </Link>
          {subcategories.map((subcategory: ISubcategory) => (
            <Link
              href={`/${textToLink(category)}/${textToLink(subcategory.name)}`}
              key={subcategory.id}
            >
              <LinkItem key={subcategory.id}>
                {subcategory.name}
                <ArrowForwardIcon />
              </LinkItem>
            </Link>
          ))}
        </FlexBox>
      </Collapse>
    </>
  )
}

export default NavigationMenuItem
