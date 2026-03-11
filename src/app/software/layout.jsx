import '@/styles/tailwind.css'
import '@/styles/animations.css'
import SoftwareLayoutWrapper from './_components/SoftwareLayoutWrapper'

export const metadata = {
  icons: {
    icon: '/software/icon.svg',
  },
}

export default function SoftwareLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full bg-[#0b0f19] antialiased selection:bg-blue-500/30">
        <div className="relative min-h-screen text-zinc-200 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />

          <SoftwareLayoutWrapper>
            {children}
          </SoftwareLayoutWrapper>
        </div>
      </body>
    </html>
  )
}
