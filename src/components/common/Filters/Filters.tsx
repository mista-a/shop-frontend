import PriceFilter from './PriceFilter/PriceFilter'
import React, { FC, useState } from 'react'
import ColorFilter from '../../ColorFilter/ColorFilter'
import Filter from './Filter/Filter'
import FlexBox from '../../UI/FlexBox'
import SortBy from './SortBy'
import valueToLabel from '../../../utils/valueToLabel'
import { useRouter } from 'next/router'

const Filters = ({ colors }) => {
  const router = useRouter()

  let defaultValueOfSort = 'toLessPopular'
  if (!Array.isArray(router.query.sort) && router.query.sort) {
    defaultValueOfSort = router.query.sort
  }
  const defaultLabelOfSort = valueToLabel(defaultValueOfSort)

  interface FilterProps {
    setOpen: (open: boolean) => void
  }

  const RenderFilter = (
    label: string,
    FilterComponent: FC<FilterProps>,
    props?: object
  ) => {
    const [open, setOpen] = useState<boolean>(false)
    return (
      <Filter open={open} setOpen={setOpen} label={label}>
        <FilterComponent setOpen={setOpen} {...props} />
      </Filter>
    )
  }

  return (
    <FlexBox sx={{ flexDirection: 'row-reverse', gap: '25px' }}>
      {RenderFilter('Price', PriceFilter)}
      {RenderFilter('Color', ColorFilter, { colors })}
      {RenderFilter(defaultLabelOfSort, SortBy)}
    </FlexBox>
  )
}

export default Filters
