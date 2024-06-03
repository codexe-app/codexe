import { rem } from '@mantine/core'

interface IconInputFlowProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string
}

export function IconInputFlow({ size, style, ...others }: IconInputFlowProps) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' viewBox='0 0 24 24' style={{ width: rem(size), height: rem(size), ...style }} {...others}>
      <path d='M0.363159 5.35155C0.364584 5.03261 0.452889 4.72512 0.61177 4.48586C0.77065 4.2466 0.989377 4.09172 1.22757 4.04982L22.7724 0.491769C22.9746 0.459044 23.1783 0.534026 23.339 0.700295C23.4996 0.866564 23.6041 1.11057 23.6295 1.37887C23.6331 1.42052 23.6331 1.46258 23.6295 1.50422V22.3608C23.6295 22.6677 23.5377 22.962 23.3742 23.179C23.2107 23.396 22.989 23.5179 22.7578 23.5179H1.23483C1.00365 23.5179 0.781936 23.396 0.618466 23.179C0.454996 22.962 0.363159 22.6677 0.363159 22.3608V5.35155Z' />
    </svg>
  )
}
