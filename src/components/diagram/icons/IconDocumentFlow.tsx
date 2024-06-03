import { rem } from '@mantine/core'

interface IconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string
}

export function IconDocumentFlow({ size, style, ...others }: IconProps) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='3' viewBox='0 0 24 24' style={{ width: rem(size), height: rem(size), ...style }} {...others}>
      <path stroke='none' d='M0 0h24v24H0z' />
      <path d='M0.36084 1.611C0.366518 1.3064 0.461473 1.01715 0.625016 0.806289C0.78856 0.595424 1.00744 0.48003 1.23396 0.485246H22.7661C22.9927 0.48003 23.2115 0.595424 23.3751 0.806289C23.5386 1.01715 23.6336 1.3064 23.6393 1.611V23.0489C19.7499 19.2835 17.3181 19.2835 15.875 19.2835C13.5515 19.2835 10.4559 23.0489 8.12512 23.0489C6.68195 23.0489 4.23577 23.0489 0.375272 19.2835L0.36084 1.611Z' />
    </svg>
  )
}
