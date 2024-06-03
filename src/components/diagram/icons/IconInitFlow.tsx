import { rem } from '@mantine/core'

interface IconInitFlowProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string
}

export function IconInitFlow({ size, style, ...others }: IconInitFlowProps) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' viewBox='0 0 24 24' style={{ width: rem(size), height: rem(size), ...style }} {...others}>
      <path d='M4.4682 1.48772C4.59175 1.18085 4.77968 0.923241 5.01126 0.743282C5.24285 0.563322 5.50909 0.468004 5.78064 0.467834H18.2193C18.4896 0.469721 18.7543 0.565848 18.9845 0.745714C19.2147 0.925579 19.4014 1.18226 19.5244 1.48772L23.4323 10.9848C23.5627 11.2976 23.6308 11.6461 23.6308 12C23.6308 12.3539 23.5627 12.7024 23.4323 13.0152L19.5244 22.5123C19.4014 22.8177 19.2147 23.0744 18.9845 23.2543C18.7543 23.4341 18.4896 23.5303 18.2193 23.5322H5.78064C5.50909 23.532 5.24285 23.4367 5.01126 23.2567C4.77968 23.0768 4.59175 22.8191 4.4682 22.5123L0.567738 13.0152C0.437319 12.7024 0.369141 12.3539 0.369141 12C0.369141 11.6461 0.437319 11.2976 0.567738 10.9848L4.4682 1.48772Z' />
    </svg>
  )
}
