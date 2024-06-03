import { rem } from '@mantine/core'

interface IconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string
}

export function IconTerminalFlow({ size, style, ...others }: IconProps) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' viewBox='0 0 24 24' style={{ width: rem(size), height: rem(size), ...style }} {...others}>
      <path d='M8.3,1h7.3C19.7,1,23,4.3,23,8.3v7.3c0,4.1-3.3,7.3-7.3,7.3H8.3C4.3,23,1,19.7,1,15.7V8.3C1,4.3,4.3,1,8.3,1z' />
    </svg>
  )
}
