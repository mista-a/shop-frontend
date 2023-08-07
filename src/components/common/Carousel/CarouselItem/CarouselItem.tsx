import { FC, ReactNode } from 'react'
import styles from './CarouselItem.module.sass'

interface CorouselItemProps {
  width?: number
  children?: ReactNode
}

const CarouselItem: FC<CorouselItemProps> = ({ children, width }) => {
  return (
    <div className={styles.carouselItem} style={{ width }}>
      {children}
    </div>
  )
}

export default CarouselItem
