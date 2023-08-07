import { useAppSelector } from '../../../redux/hooks'
import NavigationMenuItem from '../NavigationMenuItem'
import {
  StyledNavigationMenuDrawer,
  StyledNavigationMenuDrawerInner,
} from './NavigationMenuStyled'

const NavigationMenu = ({ openMenu, onMenuClose }) => {
  const { categories } = useAppSelector((state) => state.categories)

  return (
    <StyledNavigationMenuDrawer
      anchor='left'
      open={openMenu}
      onClose={onMenuClose}
    >
      <StyledNavigationMenuDrawerInner>
        {categories.map(({ id, name, subcategories }) => (
          <NavigationMenuItem
            key={id}
            category={name}
            subcategories={subcategories}
          />
        ))}
      </StyledNavigationMenuDrawerInner>
    </StyledNavigationMenuDrawer>
  )
}

export default NavigationMenu
