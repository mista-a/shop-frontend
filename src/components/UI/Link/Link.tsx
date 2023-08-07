import { ReactNode } from 'react'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { StyledLink } from './LinkStyled'

interface LinkProps extends NextLinkProps {
  className?: 'string'
  children?: ReactNode
}

const Link: React.FC<LinkProps> = ({ className, href, children, ...props }) => {
  return (
    <NextLink href={href} passHref={true} {...props}>
      <StyledLink className={className}>{children}</StyledLink>
    </NextLink>
  )
}

export default Link
