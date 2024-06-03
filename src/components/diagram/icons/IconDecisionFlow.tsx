import { rem } from '@mantine/core'

interface IconDecisionFlowProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string
}

export function IconDecisionFlow({ size, style, ...others }: IconDecisionFlowProps) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' viewBox='0 0 24 24' style={{ width: rem(size), height: rem(size), ...style }} {...others}>
      <path d='M11.2764 0.791214C11.4837 0.589325 11.7349 0.480347 11.9928 0.480347C12.2508 0.480347 12.502 0.589325 12.7093 0.791214L23.3695 11.303C23.5065 11.4523 23.5963 11.6633 23.6215 11.8948C23.6466 12.1264 23.6053 12.362 23.5057 12.5557C23.4677 12.6244 23.4218 12.6848 23.3695 12.7347L12.7236 23.2088C12.5163 23.4107 12.2651 23.5197 12.0072 23.5197C11.7492 23.5197 11.498 23.4107 11.2907 23.2088L0.630446 12.7159C0.493495 12.5665 0.403701 12.3556 0.37854 12.124C0.35338 11.8925 0.394653 11.6569 0.494326 11.4631C0.533396 11.4011 0.579274 11.3472 0.630446 11.303L11.2764 0.791214Z' />
    </svg>
  )
}
