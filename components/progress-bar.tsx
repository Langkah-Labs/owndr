import { Progress } from '@nextui-org/react'

export default function App() {
  const value = 10 // Set your value here
  // Determine color based on value
  const getColor = (value: number) => {
    if (value < 33) return 'danger' // Red for 0-32%
    if (value < 66) return 'warning' // Yellow for 33-65%
    return 'success' // Green for 66-100%
  }

  return (
    <div>
      <div className="flex gap-2 items-center mb-2">
        <span className="tracking-wider font-medium text-default-600 text-[0.5rem]">
          Information Score
        </span>
        <span className="text-base font-bold tracking-wide">{value}</span>
      </div>
      <Progress
        size="sm"
        radius="sm"
        color={getColor(value)} // Dynamically set color based on value
        classNames={{
          base: 'max-w-sm',
          track: 'border border-default',
          // indicator: "bg-gradient-to-r from-[#FFB3B3] to-[#B3FFC7]",
          label: 'tracking-wider font-medium text-default-600 text-xs',
          value: 'text-foreground/60 font-semibold text-xl',
        }}
        //   label="Information Score"
        value={value}
        showValueLabel={false}
        valueLabel={`${value}`}
      />
    </div>
  )
}
