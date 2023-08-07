import { NextRouter } from 'next/router'

type Filter = {
  router: NextRouter
  page?: number
  colors?: string | string[]
  sort?: string
  min?: number
  max?: number
}

const filter = ({ router, page, colors, sort, min, max }: Filter): void => {
  const path = router.pathname
  const query = router.query

  if (sort) query.sort = sort
  if (colors) query.colors = colors
  if (min) query.min = min.toString()
  if (max) query.max = max.toString()
  if (page) query.page = page.toString()

  router.push({
    pathname: path,
    query: query,
  })
}

export default filter
