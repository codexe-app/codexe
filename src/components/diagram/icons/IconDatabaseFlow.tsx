import { rem } from '@mantine/core'

interface IconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string
}

export function IconDatabaseFlow({ size, style, ...others }: IconProps) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' viewBox='0 0 24 24' style={{ width: rem(size), height: rem(size), ...style }} {...others}>
      <path d='M23.6393 21.3085C23.6393 22.5929 18.4294 23.6392 12 23.6392C5.5707 23.6392 0.36084 22.5929 0.36084 21.3085V2.69151C0.36084 1.39986 5.5707 0.360779 12 0.360779C18.4294 0.360779 23.6393 1.39986 23.6393 2.69151V21.3085Z' />
      <path d='M23.6393 2.92966C23.6393 4.21408 18.4294 5.26038 12 5.26038C5.5707 5.26038 0.36084 4.21408 0.36084 2.92966' stroke='#3B424B' />
    </svg>
  )
}
