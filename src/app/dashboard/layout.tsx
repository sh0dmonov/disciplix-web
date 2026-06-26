import React from "react"
import Link from "next/link"
import Image from "next/image"
import { LayoutDashboard, Wallet, Target, Bot, PieChart, Settings, LogOut } from "lucide-react"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-[#09090B] text-white overflow-hidden flex-col md:flex-row">
      {/* Mobile Header */}
      <header className="h-16 border-b border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-between px-6 md:hidden sticky top-0 z-40 shrink-0">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#2563EB] flex items-center justify-center font-bold text-white mr-3 text-sm">
            D
          </div>
          <span className="text-lg font-bold tracking-tight">{"Disciplix"}</span>
        </div>
        <div className="w-8 h-8 rounded-full bg-white/10 overflow-hidden border border-white/20">
          <Image src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin&backgroundColor=10B981" alt="avatar" width={32} height={32} unoptimized className="w-full h-full object-cover" />
        </div>
      </header>

      {/* Sidebar (Desktop) */}
      <aside className="w-64 bg-white/5 border-r border-white/10 flex flex-col hidden md:flex shrink-0">
        <div className="h-20 flex items-center px-6 border-b border-white/10">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#2563EB] flex items-center justify-center font-bold text-white mr-3">
            D
          </div>
          <span className="text-xl font-bold tracking-tight">Disciplix</span>
        </div>
        
        <nav className="flex-1 px-4 py-6 space-y-2">
          <Link href="/dashboard" className="flex items-center space-x-3 px-4 py-3 bg-[#7C3AED] text-white rounded-xl font-medium shadow-lg shadow-[#7C3AED]/20">
            <LayoutDashboard className="w-5 h-5" /> <span>Umumiy holat</span>
          </Link>
          <Link href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl font-medium transition-colors">
            <Wallet className="w-5 h-5" /> <span>Xarajat va Daromad</span>
          </Link>
          <Link href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl font-medium transition-colors">
            <Target className="w-5 h-5" /> <span>Maqsadlar</span>
          </Link>
          <Link href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl font-medium transition-colors">
            <PieChart className="w-5 h-5" /> <span>Hisobotlar</span>
          </Link>
          <div className="pt-4 mt-4 border-t border-white/10">
            <Link href="#" className="flex items-center space-x-3 px-4 py-3 text-[#10B981] hover:bg-white/5 rounded-xl font-medium transition-colors">
              <Bot className="w-5 h-5" /> <span>AI Maslahatchi</span>
            </Link>
          </div>
        </nav>

        <div className="p-4 border-t border-white/10 space-y-2">
          <Link href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl font-medium transition-colors">
            <Settings className="w-5 h-5" /> <span>Sozlamalar</span>
          </Link>
          <Link href="/" className="flex items-center space-x-3 px-4 py-3 text-red-400 hover:bg-white/5 rounded-xl font-medium transition-colors">
            <LogOut className="w-5 h-5" /> <span>Chiqish</span>
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto relative pb-20 md:pb-8">
        <div className="absolute top-[-20%] left-[20%] w-[50%] h-[50%] rounded-full bg-[#7C3AED] blur-[150px] opacity-10 pointer-events-none" />
        <div className="p-4 md:p-8">
          {children}
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 h-16 bg-[#09090B]/90 backdrop-blur-lg border-t border-white/10 flex items-center justify-around px-2 z-50 md:hidden pb-safe">
        <Link href="/dashboard" className="flex flex-col items-center justify-center space-y-0.5 text-white">
          <LayoutDashboard className="w-5.5 h-5.5 text-[#7C3AED]" />
          <span className="text-[9px] font-semibold">{"Dashboard"}</span>
        </Link>
        <Link href="#" className="flex flex-col items-center justify-center space-y-0.5 text-gray-400 hover:text-white">
          <Wallet className="w-5.5 h-5.5" />
          <span className="text-[9px] font-semibold">{"Moliyaviy"}</span>
        </Link>
        <Link href="#" className="flex flex-col items-center justify-center space-y-0.5 text-gray-400 hover:text-white">
          <Target className="w-5.5 h-5.5" />
          <span className="text-[9px] font-semibold">{"Maqsadlar"}</span>
        </Link>
        <Link href="#" className="flex flex-col items-center justify-center space-y-0.5 text-[#10B981]">
          <Bot className="w-5.5 h-5.5" />
          <span className="text-[9px] font-semibold">{"AI Bot"}</span>
        </Link>
        <Link href="#" className="flex flex-col items-center justify-center space-y-0.5 text-gray-400 hover:text-white">
          <Settings className="w-5.5 h-5.5" />
          <span className="text-[9px] font-semibold">{"Sozlamalar"}</span>
        </Link>
      </nav>
    </div>
  )
}
