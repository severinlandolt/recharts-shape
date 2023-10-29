import React from 'react'
import BarChart from './BarChart'
import BarChartLayoutFix from './BarChartLayoutFix'

export const simpleBaseChartWithNegativeValues = [
  {
    month: 'Jan 21',
    Sales: 4000,
    Payment: 2000
  },
  {
    month: 'Feb 21',
    Sales: -2000,
    Payment: -500
  }
]

function App() {
  const [data, setData] = React.useState('Click Bar to select')
  return (
    <main className="mx-auto flex min-h-screen flex-col items-center justify-center gap-16 bg-white p-12">
      <pre>
        <code>{data}</code>
      </pre>
      <p className="text-lg font-bold">BarChart default</p>
      <div className="flex w-full max-w-2xl flex-wrap gap-24">
        <BarChart
          data={simpleBaseChartWithNegativeValues}
          categories={['Sales', 'Payment']}
          index="month"
          onValueChange={(v) => setData(JSON.stringify(v))}
        />
        <BarChart
          data={simpleBaseChartWithNegativeValues}
          categories={['Sales', 'Payment']}
          index="month"
          onValueChange={(v) => setData(JSON.stringify(v))}
          layout="vertical"
        />
      </div>
      <p className="text-lg font-bold">BarChart with LayoutFix</p>
      <div className="flex w-full max-w-2xl flex-wrap gap-24">
        <BarChartLayoutFix
          data={simpleBaseChartWithNegativeValues}
          categories={['Sales', 'Payment']}
          index="month"
          onValueChange={(v) => setData(JSON.stringify(v))}
        />
        <BarChartLayoutFix
          data={simpleBaseChartWithNegativeValues}
          categories={['Sales', 'Payment']}
          index="month"
          onValueChange={(v) => setData(JSON.stringify(v))}
          layout="vertical"
        />
      </div>
      <p className="text-lg font-bold">
        BarChart with LayoutFix and stacked = true
      </p>
      <div className="flex w-full max-w-2xl flex-wrap gap-24">
        <BarChartLayoutFix
          data={simpleBaseChartWithNegativeValues}
          categories={['Sales', 'Payment']}
          index="month"
          onValueChange={(v) => setData(JSON.stringify(v))}
          stack={true}
        />
        <BarChartLayoutFix
          data={simpleBaseChartWithNegativeValues}
          categories={['Sales', 'Payment']}
          index="month"
          onValueChange={(v) => setData(JSON.stringify(v))}
          layout="vertical"
          stack={true}
        />
      </div>
    </main>
  )
}

export default App
