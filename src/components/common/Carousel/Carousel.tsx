import {
  Children,
  FC,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from 'react'
import styles from './Carousel.module.sass'

const Carousel: FC<PropsWithChildren> = ({ children }) => {
  const carouselRef = useRef<any>()
  const [activeItem, setActiveItem] = useState(0)

  const updateActiveItem = (item) => {
    if (item >= Children.count(children)) {
      item = 0
    }

    setActiveItem(item)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      updateActiveItem(activeItem + 1)
    }, 3500)

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  })

  return (
    <div ref={carouselRef} className={styles.carousel}>
      <div
        className={styles.inner}
        style={{ transform: `translateX(-${activeItem * 100}%)` }}
      >
        {Children.map(children, (child) => {
          return child
        })}
      </div>
      <div className={styles.carouselControllers}>
        {Children.map(children, (child, index) => {
          return (
            <button
              className={`${styles.carouselController} ${
                index === activeItem ? styles.activeController : ''
              } `}
              onClick={() => updateActiveItem(index)}
            ></button>
          )
        })}
      </div>
    </div>
  )
}

export default Carousel
