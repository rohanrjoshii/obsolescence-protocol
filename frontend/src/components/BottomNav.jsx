export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 w-full z-50 border-t-4 border-l-4 border-white bg-surface-dim font-label-sm text-label-sm text-secondary-container flex justify-around items-center h-20 px-window-padding md:hidden"
      style={{ boxShadow: 'inset 0px 4px 4px rgba(0,0,0,0.5)' }}>
      
      <a className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container p-unit border-inset w-16 h-16 win-bevel-inset" href="#">
        <span className="material-symbols-outlined mb-1" style={{ fontVariationSettings: '"FILL" 1' }}>
          query_stats
        </span>
        <span className="text-[10px] uppercase font-bold">Feed</span>
      </a>
      
      <a className="flex flex-col items-center justify-center text-outline p-unit w-16 h-16 hover:bg-surface-bright active:translate-x-0.5 active:translate-y-0.5 transition-transform win-bevel-button bg-[#c0c0c0]" href="#">
        <span className="material-symbols-outlined text-black mb-1">history_edu</span>
        <span className="text-[10px] uppercase text-black font-bold">Logs</span>
      </a>
      
      <a className="flex flex-col items-center justify-center text-outline p-unit w-16 h-16 hover:bg-surface-bright active:translate-x-0.5 active:translate-y-0.5 transition-transform win-bevel-button bg-[#c0c0c0]" href="#">
        <span className="material-symbols-outlined text-black mb-1">settings_input_component</span>
        <span className="text-[10px] uppercase text-black font-bold">Sys</span>
      </a>
      
      <a className="flex flex-col items-center justify-center text-outline p-unit w-16 h-16 hover:bg-surface-bright active:translate-x-0.5 active:translate-y-0.5 transition-transform win-bevel-button bg-[#c0c0c0]" href="#">
        <span className="material-symbols-outlined text-black mb-1 text-on-error">priority_high</span>
        <span className="text-[10px] uppercase text-black font-bold">Alert</span>
      </a>
    </nav>
  )
}
