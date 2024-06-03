import { rem } from '@mantine/core'

interface IconProcessFlowProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string
}

export function IconProcessFlow({ size, style, ...others }: IconProcessFlowProps) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' viewBox='0 0 24 24' style={{ width: rem(size), height: rem(size), ...style }} {...others}>
      <path d='M0.357891 1.6252C0.357891 1.31947 0.449894 1.02626 0.61366 0.810077C0.777425 0.593893 0.99954 0.472443 1.23114 0.472443H22.7689C22.9967 0.479841 23.2134 0.604551 23.3725 0.819938C23.5317 1.03532 23.6207 1.32432 23.6206 1.6252V22.4126C23.6206 22.7183 23.5286 23.0115 23.3649 23.2277C23.2011 23.4439 22.979 23.5654 22.7474 23.5654H1.23114C1.11401 23.5654 0.998071 23.5344 0.890214 23.4741C0.782356 23.4139 0.684787 23.3255 0.603313 23.2145C0.521838 23.1034 0.458124 22.9718 0.415962 22.8276C0.3738 22.6833 0.354051 22.5293 0.357891 22.3748V1.6252Z' />
    </svg>
  )
}
