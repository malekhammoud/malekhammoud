'use client'

export function CyberLoader({ isLoading }) {
  if (!isLoading) return null;
  
  return (
    <div className="absolute inset-0 z-40 flex items-center justify-center bg-zinc-900/90 backdrop-blur-sm rounded-inherit transition-opacity duration-500">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-inherit">
        <div 
          className="w-full h-[1px] bg-emerald-500/40 shadow-[0_0_10px_rgba(16,185,129,0.8)] absolute top-0 left-0" 
          style={{ animation: 'scan 2s ease-in-out infinite' }}
        />
        <style>{`
          @keyframes scan {
            0% { transform: translateY(-100%); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateY(500px); opacity: 0; }
          }
        `}</style>
      </div>
      <div className="relative flex flex-col items-center justify-center gap-4">
        <div className="relative w-14 h-14 flex items-center justify-center">
          {/* Outer ring */}
          <div className="absolute inset-0 border-[2px] border-zinc-800 rounded-full" />
          <div className="absolute inset-0 border-[2px] border-transparent border-t-emerald-500 rounded-full animate-[spin_1.5s_linear_infinite]" />
          
          {/* Middle ring */}
          <div className="absolute inset-2 border-[2px] border-zinc-800 rounded-full" />
          <div className="absolute inset-2 border-[2px] border-transparent border-l-teal-400 rounded-full animate-[spin_1s_linear_infinite_reverse]" />
          
          {/* Inner ring */}
          <div className="absolute inset-4 border-[2px] border-transparent border-b-cyan-400 rounded-full animate-[spin_2s_linear_infinite]" />
          
          {/* Center core */}
          <div className="w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_12px_rgba(52,211,153,1)] animate-pulse" />
        </div>
      </div>
    </div>
  )
}
