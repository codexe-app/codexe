import { rem } from '@mantine/core'

interface IconOperateFlowProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string
}

export function IconOperateFlow({ size, style, ...others }: IconOperateFlowProps) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' viewBox='0 0 24 24' style={{ width: rem(size), height: rem(size), ...style }} {...others}>
      <path d='M0.399816 1.58553C0.361684 1.36216 0.389603 1.12907 0.478397 0.929493C0.56719 0.729914 0.710832 0.577386 0.882683 0.500196C0.93922 0.480884 0.997607 0.471358 1.05621 0.471883H22.9361C23.1189 0.476841 23.2927 0.571799 23.4199 0.736135C23.547 0.90047 23.6172 1.12091 23.6152 1.34959C23.623 1.42792 23.623 1.50719 23.6152 1.58553L19.3222 22.405C19.2644 22.7222 19.1227 23.0057 18.92 23.2095C18.7173 23.4134 18.4656 23.5256 18.2055 23.5281H5.7868C5.52746 23.5223 5.27702 23.4088 5.07488 23.2055C4.87274 23.0022 4.73037 22.7206 4.67017 22.405L0.399816 1.58553Z' />
    </svg>
  )
}
