import React from 'react'
import BarChart from './BarChart'
import BarChartLayoutFix from './BarChartLayoutFix'

export const simpleBaseChartWithNegativeValues = [
  {
    month: 'Jan 21',
    Sales: 4000
  },
  {
    month: 'Feb 21',
    Sales: -2000
  }
]

function App() {
  const [data, setData] = React.useState('Click Bar to select')
  return (
    <main className="mx-auto flex h-screen flex-col items-center justify-center gap-16 bg-white">
      <pre>
        <code>{data}</code>
      </pre>
      <p className="text-lg font-bold">BarChart default</p>
      <div className="flex w-full gap-24">
        <BarChart
          data={simpleBaseChartWithNegativeValues}
          categories={['Sales']}
          index="month"
          onValueChange={(v) => setData(JSON.stringify(v))}
        />
        <BarChart
          data={simpleBaseChartWithNegativeValues}
          categories={['Sales']}
          index="month"
          onValueChange={(v) => setData(JSON.stringify(v))}
          layout="vertical"
        />
      </div>
      <p className="text-lg font-bold">BarChart with LayoutFix</p>
      <div className="flex w-full gap-24">
        <BarChartLayoutFix
          data={simpleBaseChartWithNegativeValues}
          categories={['Sales']}
          index="month"
          onValueChange={(v) => setData(JSON.stringify(v))}
        />
        <BarChartLayoutFix
          data={simpleBaseChartWithNegativeValues}
          categories={['Sales']}
          index="month"
          onValueChange={(v) => setData(JSON.stringify(v))}
          layout="vertical"
        />
      </div>
      <p className="text-lg font-bold">BarChart with LayoutFix and stacked</p>
      <div className="flex w-full gap-24">
        <BarChartLayoutFix
          data={simpleBaseChartWithNegativeValues}
          categories={['Sales']}
          index="month"
          onValueChange={(v) => setData(JSON.stringify(v))}
        />
        <BarChartLayoutFix
          data={simpleBaseChartWithNegativeValues}
          categories={['Sales']}
          index="month"
          onValueChange={(v) => setData(JSON.stringify(v))}
          layout="vertical"
        />
      </div>
    </main>
  )
}

export default App
