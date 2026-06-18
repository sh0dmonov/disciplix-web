import React from "react"
import Link from "next/link"
import { LayoutDashboard, Wallet, Target, Bot, PieChart, Settings, LogOut } from "lucide-react"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-[#09090B] text-white overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-white/5 border-r border-white/10 flex flex-col hidden md:flex">
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
      <main className="flex-1 overflow-y-auto relative">
        <div className="absolute top-[-20%] left-[20%] w-[50%] h-[50%] rounded-full bg-[#7C3AED] blur-[150px] opacity-10 pointer-events-none" />
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  )
}
