/* eslint-disable @typescript-eslint/no-explicit-any */
type FixedProps = {
  eventType: 'dot' | 'category' | 'bar' | 'slice' | 'bubble'
  categoryClicked: string
}

type BaseEventProps = FixedProps & {
  [key: string]: number | string
}

type EventProps = BaseEventProps | null | undefined

export interface BaseChartProps extends React.HTMLAttributes<HTMLDivElement> {
  data: any[]
  categories: string[]
  index: string
  layout?: 'vertical' | 'horizontal'
  stack?: boolean
  relative?: boolean
  onValueChange?: (value: EventProps) => void
}
