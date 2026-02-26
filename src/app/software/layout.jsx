export default function SoftwareLayout({ children }) {
  return (
    <div className="relative min-h-screen bg-[#0b0f19] text-gray-200 overflow-hidden">
      
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:32px_32px] opacity-10 pointer-events-none" />

      {/* Glow Accent */}
      <div className="absolute top-[-200px] right-[-200px] w-[500px] h-[500px] bg-blue-600/20 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 px-6 sm:px-12 py-20">
        
        {/* Content Card */}
        <div className="mx-auto max-w-4xl">
          <div className="bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.6)] p-10 sm:p-16">
            
            <article className="prose prose-invert prose-blue lg:prose-lg max-w-none prose-headings:tracking-tight prose-headings:text-white prose-p:text-gray-300 prose-strong:text-white prose-a:text-blue-400 hover:prose-a:text-blue-300">
              {children}
            </article>

          </div>
        </div>

      </div>
    </div>
  );
}
