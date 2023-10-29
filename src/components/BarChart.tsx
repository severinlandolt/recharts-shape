/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

import {
  Bar,
  BarChart as ReChartsBarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip
} from 'recharts'

import { deepEqual } from 'utils'
import { BaseChartProps } from 'utils/types'

const renderShape = (props: any, activeBar: any | undefined) => {
  const { x, y, width, height, fillOpacity, payload, value } = props

  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      opacity={
        activeBar
          ? deepEqual(activeBar, { ...payload, value })
            ? fillOpacity
            : 0.3
          : fillOpacity
      }
    />
  )
}

const BarChart = React.forwardRef<HTMLDivElement, BaseChartProps>(
  (props, ref) => {
    const {
      data = [],
      categories = [],
      index,
      layout = 'horizontal',
      stack = false,
      relative = false,
      onValueChange,
      ...other
    } = props
    const [activeBar, setActiveBar] = React.useState<any | undefined>(undefined)
    const hasOnValueChange = !!onValueChange

    function onBarClick(data: any, idx: number, event: React.MouseEvent) {
      event.stopPropagation()
      if (!onValueChange) return
      if (deepEqual(activeBar, { ...data.payload, value: data.value })) {
        setActiveBar(undefined)
        onValueChange?.(null)
      } else {
        setActiveBar({
          ...data.payload,
          value: data.value
        })
        onValueChange?.({
          eventType: 'bar',
          categoryClicked: data.tooltipPayload?.[0]?.dataKey,
          ...data.payload
        })
      }
    }

    return (
      <div ref={ref} className="h-64 w-full" {...other}>
        <ResponsiveContainer className="h-full w-full">
          <ReChartsBarChart
            data={data}
            stackOffset={relative ? 'sign' : 'none'}
            layout={layout === 'vertical' ? 'vertical' : 'horizontal'}
            onClick={
              hasOnValueChange && activeBar
                ? () => {
                    setActiveBar(undefined)
                    onValueChange?.(null)
                  }
                : undefined
            }
          >
            <CartesianGrid
              className="stroke-1"
              horizontal={layout !== 'vertical'}
              vertical={layout === 'vertical'}
            />

            {layout !== 'vertical' ? (
              <XAxis
                padding={{ left: 20, right: 20 }}
                dataKey={index}
                interval="equidistantPreserveStart"
                tick={{ transform: 'translate(0, 6)' }}
                fill=""
                stroke=""
                className="mt-4"
                tickLine={false}
                axisLine={false}
              />
            ) : (
              <XAxis
                type="number"
                tick={{ transform: 'translate(-3, 0)' }}
                domain={[0, 'auto']}
                fill=""
                stroke=""
                tickLine={false}
                axisLine={false}
                minTickGap={5}
              />
            )}
            {layout !== 'vertical' ? (
              <YAxis
                width={55}
                axisLine={false}
                tickLine={false}
                type="number"
                domain={[0, 'auto']}
                tick={{ transform: 'translate(-3, 0)' }}
                fill=""
                stroke=""
              />
            ) : (
              <YAxis
                width={55}
                dataKey={index}
                axisLine={false}
                tickLine={false}
                type="category"
                interval="preserveStartEnd"
                tick={{ transform: 'translate(0, 6)' }}
                fill=""
                stroke=""
              />
            )}
            <Tooltip
              wrapperStyle={{ outline: 'none' }}
              isAnimationActive={false}
              cursor={{ fill: '#d1d5db', opacity: '0.15' }}
              position={{ y: 0 }}
            />
            {categories.map((category) => (
              <Bar
                className={`${
                  category === 'Sales' ? 'fill-blue-600' : 'fill-rose-500'
                } ${onValueChange ? 'cursor-pointer' : ''}`}
                key={category}
                name={category}
                type="linear"
                stackId={stack || relative ? 'a' : undefined}
                dataKey={category}
                fill=""
                shape={(props) => renderShape(props, activeBar)}
                onClick={onBarClick}
              />
            ))}
          </ReChartsBarChart>
        </ResponsiveContainer>
      </div>
    )
  }
)

BarChart.displayName = 'BarChart'

export default BarChart
