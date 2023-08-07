import { Typography } from '@mui/material'
import { useAppSelector } from '../../redux/hooks'
import { textToLink } from '../../utils/textToLink'
import Link from '../UI/Link/Link'
import { ISubcategory } from '../../types/Subcategory'
import {
  StyledCategoryTypography,
  StyledNavigation,
  StyledSubcategoryName,
  StyledTooltipTitles,
} from './StyledNavigation'
import NoMaxWidthTooltip from '../NoMaxWidthTooltip/NoMaxWidthTooltip'

const Navigation: React.FC = () => {
  const { categories } = useAppSelector((state) => state.categories)

  return (
    <StyledNavigation>
      {categories.map(({ name, id, subcategories }) => (
        <NoMaxWidthTooltip
          arrow
          key={id}
          title={
            <StyledTooltipTitles>
              {subcategories.map((subcategory: ISubcategory) => (
                <Link
                  key={subcategory.id}
                  href={`/${textToLink(name)}/${textToLink(subcategory.name)}`}
                >
                  <StyledSubcategoryName>
                    {subcategory.name}
                  </StyledSubcategoryName>
                </Link>
              ))}
            </StyledTooltipTitles>
          }
        >
          <div>
            {/* <Link href={`/${textToLink(name)}`}> */}
            <StyledCategoryTypography textTransform='uppercase'>
              {name}
            </StyledCategoryTypography>
            {/* </Link> */}
          </div>
        </NoMaxWidthTooltip>
      ))}
    </StyledNavigation>
  )
}

export default Navigation
