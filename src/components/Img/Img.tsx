import Image, { ImageProps as NextImageProps } from 'next/image'

interface ImgProps extends NextImageProps {
  // src: string
}

const Img = ({ alt, layout = 'fill', src, ...props }: ImgProps) => {
  if (typeof src === 'string')
    src = src ? `https://${src.replace('https://', '')}` : '/'

  return <Image src={src} alt={alt} layout={layout} loading='lazy' {...props} />
}

export default Img
