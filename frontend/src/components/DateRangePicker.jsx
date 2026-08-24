import { format } from 'date-fns'

export default function DateRangePicker({ dateRange, setDateRange }) {
  const presets = [
    { label: '7 Days', days: 7 },
    { label: '30 Days', days: 30 },
    { label: '90 Days', days: 90 },
  ]

  const setPreset = (days) => {
    setDateRange({
      from: new Date(Date.now() - days * 24 * 60 * 60 * 1000),
      to: new Date()
    })
  }

  return (
    <section className="win-window win-bevel-outset p-[2px] w-full max-w-2xl mx-auto shadow-[8px_8px_0px_rgba(0,0,0,0.7)] mt-4">
      <div className="win-titlebar flex justify-between items-center px-2 py-1">
        <span className="font-code-terminal text-[14px] font-bold tracking-wide">TIME.RANGE</span>
      </div>
      <div className="p-window-padding font-code-terminal text-code-terminal bg-[#c0c0c0] flex flex-wrap gap-2 items-center">
        <span className="text-black">&gt; FILTER:</span>
        {presets.map(preset => (
          <button
            key={preset.days}
            onClick={() => setPreset(preset.days)}
            className="win-bevel-button bg-white text-black font-bold px-3 py-1 hover:bg-gray-200"
          >
            {preset.label}
          </button>
        ))}
        <span className="text-black ml-auto text-[10px]">
          {format(dateRange.from, 'MMM dd')} - {format(dateRange.to, 'MMM dd')}
        </span>
      </div>
    </section>
  )
}
