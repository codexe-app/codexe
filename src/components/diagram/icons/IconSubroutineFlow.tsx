import { rem } from '@mantine/core'

interface IconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string
}

export function IconSubroutineFlow({ size, style, ...others }: IconProps) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' viewBox='0 0 24 24' style={{ width: rem(size), height: rem(size), ...style }} {...others}>
      <path d='M0.360592 1.62011C0.360585 1.31697 0.452288 1.0261 0.615727 0.810864C0.779167 0.595628 1.0011 0.473463 1.23319 0.470978H22.7668C22.9989 0.473463 23.2209 0.595628 23.3843 0.810864C23.5477 1.0261 23.6394 1.31697 23.6394 1.62011V22.3423C23.6453 22.4971 23.6271 22.6518 23.5859 22.7972C23.5448 22.9426 23.4816 23.0756 23.4001 23.1882C23.3185 23.3008 23.2204 23.3908 23.1116 23.4526C23.0028 23.5144 22.8855 23.5468 22.7668 23.5479H1.23319C1.11704 23.5467 1.00222 23.5154 0.895358 23.4559C0.7885 23.3965 0.691717 23.3099 0.610593 23.2014C0.529469 23.0928 0.465611 22.9643 0.422702 22.8233C0.379794 22.6823 0.358684 22.5316 0.360592 22.3799V1.62011Z' />
      <path d='M2.68994 0.470978V23.5479M21.3173 0.470978V23.5479' />
    </svg>
  )
}
