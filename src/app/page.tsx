"use client"

import React, { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { 
  Bot, 
  Target, 
  TrendingUp, 
  Wallet, 
  MessageSquare, 
  Smartphone,
  ChevronRight,
  CheckCircle,
  Star,
  Globe,
  Camera,
  Send,
  PieChart as PieChartIcon,
  Calendar,
  Lock,
  ArrowRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import Link from "next/link"
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const barData = [
  { name: 'Dush', sarf: 120000 },
  { name: 'Sesh', sarf: 45000 },
  { name: 'Chor', sarf: 300000 },
  { name: 'Pay', sarf: 80000 },
  { name: 'Juma', sarf: 150000 },
  { name: 'Shan', sarf: 200000 },
  { name: 'Yak', sarf: 50000 },
]

const pieData = [
  { name: 'Oziq-ovqat', value: 400 },
  { name: 'Transport', value: 300 },
  { name: 'Kommunal', value: 300 },
  { name: 'Boshqa', value: 200 },
]
const COLORS = ['#10B981', '#0EA5E9', '#F59E0B', '#6366F1']

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState('Dashboard')
  const [chatInput, setChatInput] = useState('')
  const [chatMessages, setChatMessages] = useState<any[]>([
    { role: 'user', text: 'Bugun kafega 80 ming ishlatdim' },
    { role: 'bot', type: 'expense' }
  ])
  const chatContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      })
    }
  }, [chatMessages])

  const handleSendMessage = () => {
    if(!chatInput.trim()) return;
    const newMsg = { role: 'user', text: chatInput };
    setChatMessages(prev => [...prev, newMsg]);
    setChatInput('');
    
    setTimeout(() => {
      setChatMessages(prev => [...prev, {
        role: 'bot',
        type: 'promo'
      }])
    }, 800)
  }

  const renderDashboardContent = () => {
    switch(activeTab) {
      case 'Xarajatlar':
        return (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-4">
              <h3 className="text-2xl font-extrabold text-[#1A1D1E]">Xarajatlar Tarixi</h3>
              <Button className="w-full sm:w-auto rounded-full bg-[#10B981] hover:bg-[#059669] text-white font-bold shadow-[0_4px_15px_rgba(16,185,129,0.25)] border-none">+ Yangi Xarajat</Button>
            </div>
            <Card className="bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] rounded-[24px]">
              <CardContent className="p-0">
                <div className="divide-y divide-gray-50">
                  {[
                    { title: "Korzinka.uz", cat: "Oziq-ovqat", amount: "-120,000", date: "Bugun, 14:30" },
                    { title: "Yandex Taxi", cat: "Transport", amount: "-25,000", date: "Bugun, 09:15" },
                    { title: "Netflix Obuna", cat: "Ko'ngilochar", amount: "-45,000", date: "Kecha, 21:00" },
                    { title: "Kommunal to'lov", cat: "Uy-joy", amount: "-150,000", date: "12 Iyun, 10:00" },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center p-6 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center">
                          <Wallet className="w-6 h-6 text-gray-400" />
                        </div>
                        <div>
                          <div className="font-extrabold text-[#1A1D1E] text-lg">{item.title}</div>
                          <div className="text-sm text-gray-500 font-medium">{item.cat} • {item.date}</div>
                        </div>
                      </div>
                      <div className="font-extrabold text-red-500 text-lg">{item.amount} UZS</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )

      case 'Sozlamalar':
        return (
          <div className="space-y-6 animate-in fade-in duration-500">
            <h3 className="text-2xl font-extrabold text-[#1A1D1E] mb-6">Tizim Sozlamalari</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] rounded-[24px]">
                <CardHeader>
                  <CardTitle className="text-lg font-extrabold text-[#1A1D1E]">Shaxsiy Ma'lumotlar</CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-20 h-20 rounded-full bg-[#F8F9FB] overflow-hidden border-2 border-gray-100">
                      <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin&backgroundColor=10B981" alt="avatar" className="w-full h-full object-cover" />
                    </div>
                    <Button variant="outline" className="rounded-full border-gray-200 font-bold text-gray-600">Rasm o'zgartirish</Button>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Ism Familiya</label>
                    <input type="text" value="Sardor M." className="w-full bg-[#F8F9FB] border border-gray-200 rounded-xl px-4 py-3 font-extrabold text-[#1A1D1E] focus:outline-none" readOnly />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Telefon raqam</label>
                    <input type="text" value="+998 90 123 45 67" className="w-full bg-[#F8F9FB] border border-gray-200 rounded-xl px-4 py-3 font-extrabold text-gray-500 focus:outline-none" readOnly />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] rounded-[24px]">
                <CardHeader>
                  <CardTitle className="text-lg font-extrabold text-[#1A1D1E]">Xabarnomalar</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {[
                    { text: "Kunlik hisobotlarni yuborish", active: true },
                    { text: "Limitdan oshganda ogohlantirish", active: true },
                    { text: "Yangi maqsadlarga erishganda tabriklar", active: true },
                    { text: "Haftalik sun'iy intellekt maslahatlari", active: false }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="font-bold text-gray-600">{item.text}</span>
                      <div className={`w-12 h-6 rounded-full relative cursor-pointer transition-colors ${item.active ? 'bg-[#10B981]' : 'bg-gray-200'}`}>
                        <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 shadow-sm transition-all ${item.active ? 'right-0.5' : 'left-0.5'}`}></div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        )

      case 'Daromadlar':
      case 'Maqsadlar':
      case 'AI Yordamchi':
      case 'Hisobotlar':
        return (
          <div className="flex flex-col items-center justify-center h-full min-h-[400px] animate-in fade-in duration-500">
             <div className="w-20 h-20 bg-[#F8F9FB] rounded-full flex items-center justify-center mb-6">
                <Lock className="w-8 h-8 text-[#10B981]" />
             </div>
             <h3 className="text-2xl font-extrabold text-[#1A1D1E] mb-2">{activeTab} bo'limi</h3>
             <p className="text-gray-500 font-medium mb-4">To'liq imkoniyatlarni ko'rish va batafsil ma'lumot olish uchun Telegram botimizga o'ting!</p>
             <Link href="https://t.me/disciplixbot">
               <Button className="rounded-full bg-[#10B981] hover:bg-[#059669] text-white font-bold shadow-[0_4px_15px_rgba(16,185,129,0.25)] border-none">Telegram Botga o'tish</Button>
             </Link>
          </div>
        )

      case 'Dashboard':
      default:
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-4">
              <h3 className="text-2xl font-extrabold text-[#1A1D1E]">Umumiy Holat</h3>
              <Button variant="outline" size="sm" className="w-full sm:w-auto rounded-full border-gray-200 text-gray-600 font-bold hover:bg-gray-50 shadow-sm">Oylik hisobotni yuklash</Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "Jami Balans", val: "12,500,000 UZS", color: "text-[#1A1D1E]" },
                { title: "Oylik Daromad", val: "+8,000,000 UZS", color: "text-[#10B981]" },
                { title: "Oylik Xarajat", val: "-3,400,000 UZS", color: "text-red-500" },
                { title: "Tejamkorlik Darajasi", val: "57%", color: "text-[#0EA5E9]" }
              ].map((stat, i) => (
                <Card key={i} className="bg-[#F8F9FB] border-none shadow-none rounded-[20px]">
                  <CardHeader className="p-4 md:p-5 pb-2"><CardTitle className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-wider">{stat.title}</CardTitle></CardHeader>
                  <CardContent className="p-4 md:p-5 pt-0"><div className={`text-xl md:text-2xl font-extrabold ${stat.color}`}>{stat.val}</div></CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
              <Card className="col-span-2 bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] rounded-[24px]">
                <CardHeader className="p-6 pb-2"><CardTitle className="text-lg font-extrabold text-[#1A1D1E]">Xarajatlar statistikasi</CardTitle></CardHeader>
                <CardContent className="h-64 m-6 mt-0">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={barData}>
                      <XAxis dataKey="name" stroke="#9CA3AF" fontSize={12} tickLine={false} axisLine={false} fontWeight="bold" />
                      <Tooltip cursor={{fill: '#F3F4F6'}} contentStyle={{backgroundColor: '#fff', border: '1px solid #E5E7EB', borderRadius: '12px', color: '#1A1D1E', fontWeight: 'bold', boxShadow: '0 4px 15px rgba(0,0,0,0.05)'}} />
                      <Bar dataKey="sarf" fill="#10B981" radius={[6, 6, 0, 0]} barSize={40} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
              <Card className="col-span-1 bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] rounded-[24px]">
                <CardHeader className="p-6 pb-2"><CardTitle className="text-lg font-extrabold text-[#1A1D1E]">Kategoriyalar</CardTitle></CardHeader>
                <CardContent className="h-64 m-6 mt-0">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={pieData} cx="50%" cy="50%" innerRadius={55} outerRadius={75} paddingAngle={4} dataKey="value" stroke="none">
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip contentStyle={{backgroundColor: '#fff', border: '1px solid #E5E7EB', borderRadius: '12px', color: '#1A1D1E', fontWeight: 'bold', boxShadow: '0 4px 15px rgba(0,0,0,0.05)'}} />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-[#F8F9FB] text-[#1A1D1E] selection:bg-[#10B981] selection:text-white overflow-hidden relative font-sans">
      {/* Background soft shapes */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#10B981] blur-[140px] opacity-[0.07] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#0EA5E9] blur-[140px] opacity-[0.04] pointer-events-none" />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F8F9FB]/80 backdrop-blur-md border-b border-gray-200/50">
        <div className="container mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg md:rounded-xl bg-gradient-to-br from-[#10B981] to-[#059669] flex items-center justify-center font-bold text-white shadow-sm">
              D
            </div>
            <span className="text-lg md:text-xl font-extrabold tracking-tight text-[#1A1D1E]">Disciplix</span>
          </div>
          <div className="hidden md:flex items-center space-x-8 text-sm font-semibold text-gray-500">
            <Link href="#features" className="hover:text-[#10B981] transition-colors">Xususiyatlar</Link>
            <Link href="#dashboard" className="hover:text-[#10B981] transition-colors">Dashboard</Link>
            <Link href="#pricing" className="hover:text-[#10B981] transition-colors">Tariflar</Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="https://t.me/disciplixbot"><Button variant="ghost" className="hidden md:flex text-gray-600 font-semibold hover:bg-gray-100 hover:text-[#10B981]">Kirish</Button></Link>
            <Link href="https://t.me/disciplixbot"><Button className="rounded-full px-4 md:px-6 h-9 md:h-10 text-sm md:text-base bg-[#10B981] hover:bg-[#059669] text-white font-bold shadow-[0_4px_15px_rgba(16,185,129,0.25)]">Boshlash</Button></Link>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {/* 1. Hero Section */}
        <section className="container mx-auto px-6 py-12 lg:py-20 flex flex-col lg:flex-row items-center justify-between">
          <motion.div 
            initial="hidden" animate="visible" variants={fadeIn}
            className="lg:w-1/2 space-y-8 text-center lg:text-left relative z-10"
          >
            <div className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm font-medium text-gray-600 shadow-sm">
              <span className="flex h-2.5 w-2.5 rounded-full bg-[#10B981] mr-2"></span>
              Orzular Sari Yo&apos;l
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-[#1A1D1E]">
              Moliyangizni boshqaring. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#059669]">Orzularingizga erishing.</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Disciplix AI yordamida xarajatlaringizni nazorat qiladi, maqsadlaringizni kuzatadi va moliyaviy intizomni shakllantiradi.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="https://t.me/disciplixbot" className="w-full sm:w-auto">
                <Button size="lg" className="w-full rounded-full text-base bg-[#10B981] hover:bg-[#059669] text-white font-bold px-8 h-14 shadow-[0_8px_20px_rgba(16,185,129,0.3)]">
                  Bepul boshlash <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="https://t.me/disciplixbot" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full rounded-full text-base bg-white border-gray-200 text-gray-700 font-bold px-8 h-14 hover:bg-gray-50 hover:text-[#10B981] shadow-sm">
                  Telegram Botni ochish
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 mt-16 lg:mt-0 relative z-10"
          >
            <div className="relative rounded-[32px] bg-white p-2 shadow-[0_20px_60px_rgba(0,0,0,0.08)] transform md:rotate-1 md:hover:rotate-0 transition-transform duration-500 border border-gray-100 max-w-md mx-auto w-full overflow-hidden sm:overflow-visible">
              <div className="rounded-[24px] overflow-hidden bg-[#F8F9FB] border border-gray-100 relative">
                {/* Mockup Topbar */}
                <div className="h-10 bg-white border-b border-gray-100 flex items-center px-4 space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-[#10B981]"></div>
                </div>
                {/* Mockup Content */}
                <div className="p-5 grid grid-cols-2 gap-3">
                  <Card className="col-span-2 md:col-span-1 bg-gradient-to-br from-[#10B981]/10 to-[#10B981]/5 border-none shadow-sm rounded-2xl">
                    <CardHeader className="pb-1 px-3 md:px-4 pt-3 md:pt-4">
                      <CardTitle className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-wider">Jami Balans</CardTitle>
                    </CardHeader>
                    <CardContent className="px-3 md:px-4 pb-3 md:pb-4">
                      <div className="text-xl md:text-2xl font-extrabold text-[#1A1D1E]">12.5M <span className="text-xs md:text-sm font-medium text-gray-500">UZS</span></div>
                    </CardContent>
                  </Card>
                  <Card className="col-span-2 md:col-span-1 border-none bg-white shadow-[0_2px_10px_rgba(0,0,0,0.02)] rounded-2xl">
                    <CardHeader className="pb-1 px-3 md:px-4 pt-3 md:pt-4">
                      <CardTitle className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-wider">Tejamkorlik</CardTitle>
                    </CardHeader>
                    <CardContent className="px-3 md:px-4 pb-3 md:pb-4">
                      <div className="text-xl md:text-2xl font-extrabold text-[#10B981]">+4.6M</div>
                    </CardContent>
                  </Card>
                  <Card className="col-span-2 border-none bg-white shadow-[0_2px_10px_rgba(0,0,0,0.02)] rounded-2xl mt-2">
                    <CardHeader className="pb-2 px-4 pt-4">
                      <CardTitle className="text-xs font-bold text-gray-500 uppercase tracking-wider">Bugungi Xarajatlar</CardTitle>
                    </CardHeader>
                    <CardContent className="px-4 pb-4 space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-gray-50">
                        <div className="flex items-center text-sm font-bold text-[#1A1D1E]">
                          <div className="w-8 h-8 rounded-full bg-[#0EA5E9]/10 flex items-center justify-center mr-3">
                            <PieChartIcon className="w-4 h-4 text-[#0EA5E9]" />
                          </div>
                          Tushlik
                        </div>
                        <span className="text-sm font-bold text-[#1A1D1E]">-50,000</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <div className="flex items-center text-sm font-bold text-[#1A1D1E]">
                          <div className="w-8 h-8 rounded-full bg-[#F59E0B]/10 flex items-center justify-center mr-3">
                            <PieChartIcon className="w-4 h-4 text-[#F59E0B]" />
                          </div>
                          Taksi
                        </div>
                        <span className="text-sm font-bold text-[#1A1D1E]">-25,000</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute right-0 md:-right-6 top-6 md:top-12 scale-90 md:scale-100 origin-right bg-white/95 backdrop-blur-md rounded-[20px] p-3 md:p-4 shadow-[0_10px_30px_rgba(0,0,0,0.08)] flex items-center space-x-3 border border-gray-100 z-20">
                <div className="p-2.5 rounded-full bg-[#10B981]/10 text-[#10B981]"><CheckCircle className="w-4 h-4 md:w-5 md:h-5" /></div>
                <div>
                  <div className="text-xs md:text-sm font-extrabold text-[#1A1D1E]">Maqsadga erishildi</div>
                  <div className="text-[10px] md:text-xs font-medium text-gray-500">Yangi Noutbuk</div>
                </div>
              </motion.div>
              
              <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 5 }} className="absolute left-0 md:-left-6 bottom-12 md:bottom-16 scale-90 md:scale-100 origin-left bg-white/95 backdrop-blur-md rounded-[20px] p-3 md:p-4 shadow-[0_10px_30px_rgba(0,0,0,0.08)] flex items-center space-x-3 border border-gray-100 z-20">
                <div className="p-2.5 rounded-full bg-indigo-50 text-indigo-500"><Bot className="w-4 h-4 md:w-5 md:h-5" /></div>
                <div>
                  <div className="text-xs md:text-sm font-extrabold text-[#1A1D1E]">AI Maslahat</div>
                  <div className="text-[10px] md:text-xs font-medium text-gray-500">Yaxshi ketyapsiz!</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* 2. Features Section */}
        <section id="features" className="py-24 relative bg-white">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-[#1A1D1E]">Nima uchun Disciplix?</h2>
              <p className="text-gray-500 text-lg font-medium">Murakkab moliya ilovalaridan voz keching. AI yordamida barchasi avtomatlashtirilgan va sodda.</p>
            </div>

            <motion.div 
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {[
                { icon: Bot, title: "AI Xarajatlar Nazorati", desc: "Ovozli yoki matnli xabarlar yuboring: 'Bugun tushlikka 50 ming sarfladim'. AI avtomatik kategoriyalab bazaga yozadi." },
                { icon: Target, title: "Maqsadlar Tizimi", desc: "Orzular va moliyaviy maqsadlar (mashina, uy, sayohat) belgilang. Biz ularga erishishingizni kuzatamiz." },
                { icon: Wallet, title: "Kunlik Moliyaviy Limitlar", desc: "Sun'iy intellekt har kuni xavfsiz xarajat qilish limitingizni hisoblab beradi va sizni ogohlantiradi." },
                { icon: TrendingUp, title: "Murakkab Analitika", desc: "Chiroyli grafiklar, tendensiyalar va batafsil xarajat hisobotlarini ko'ring." },
                { icon: MessageSquare, title: "AI Moliyaviy Murabbiy", desc: "Shaxsiy tavsiyalar va moliyaviy yo'l-yo'riqlar olish uchun AI bilan erkin suhbatlashing." },
                { icon: Smartphone, title: "Telegram Integratsiyasi", desc: "Barcha funksiyalarni to'g'ridan-to'g'ri Telegram ichida ishlatishingiz mumkin." }
              ].map((feature, i) => (
                <motion.div key={i} variants={fadeIn}>
                  <Card className="h-full hover:-translate-y-1 transition-transform duration-300 border-gray-100 bg-[#F8F9FB] shadow-none rounded-[24px]">
                    <CardHeader>
                      <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-4 text-[#10B981]">
                        <feature.icon className="w-7 h-7" />
                      </div>
                      <CardTitle className="text-[#1A1D1E] text-xl font-bold">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base font-medium text-gray-500 leading-relaxed">{feature.desc}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 3. Dashboard Showcase Section */}
        <section id="dashboard" className="py-24 border-y border-gray-100 bg-[#F8F9FB]">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-16 text-[#1A1D1E]">Zamonaviy Boshqaruv Paneli</h2>
            
            <div className="rounded-[32px] border border-gray-200 bg-white overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.05)] relative max-w-6xl mx-auto flex flex-col md:flex-row text-left min-h-[600px]">
              {/* Sidebar */}
              <div className="w-full md:w-64 bg-[#F8F9FB] md:border-r border-b md:border-b-0 border-gray-100 p-4 md:p-6 space-y-4 md:space-y-6 flex-shrink-0">
                <div className="hidden md:flex items-center space-x-2 text-xl font-extrabold text-[#1A1D1E] mb-8">
                  <div className="w-6 h-6 rounded-lg bg-[#10B981]"></div>
                  <span>Disciplix</span>
                </div>
                <nav className="flex md:flex-col overflow-x-auto space-x-2 md:space-x-0 md:space-y-2 pb-2 md:pb-0 scrollbar-none">
                  {['Dashboard', 'Xarajatlar', 'Daromadlar', 'Maqsadlar', 'AI Yordamchi', 'Hisobotlar', 'Sozlamalar'].map((item, i) => (
                    <div 
                      key={i} 
                      onClick={() => setActiveTab(item)}
                      className={`whitespace-nowrap px-4 py-2.5 rounded-xl text-sm font-bold cursor-pointer transition-colors ${activeTab === item ? 'bg-white text-[#10B981] shadow-sm border border-gray-100' : 'text-gray-500 hover:text-[#1A1D1E] hover:bg-gray-100/50'}`}
                    >
                      {item}
                    </div>
                  ))}
                </nav>
              </div>
              
              {/* Main Content */}
              <div className="flex-1 p-8 bg-white overflow-y-auto">
                {renderDashboardContent()}
              </div>
            </div>
          </div>
        </section>

        {/* 4. Goal Tracking Section */}
        <section className="py-24 relative bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-16 text-center text-[#1A1D1E]">Maqsadlarga erishing</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { title: "MacBook Pro", progress: 67, target: "20,000,000 UZS", current: "13,400,000 UZS" },
                { title: "Mashina uchun", progress: 45, target: "100,000,000 UZS", current: "45,000,000 UZS" },
                { title: "Dubayga sayohat", progress: 82, target: "15,000,000 UZS", current: "12,300,000 UZS" }
              ].map((goal, i) => (
                <Card key={i} className="bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(16,185,129,0.1)] transition-all duration-300 rounded-[24px]">
                  <CardHeader>
                    <CardTitle className="text-xl font-extrabold text-[#1A1D1E]">{goal.title}</CardTitle>
                    <CardDescription className="text-gray-500 font-medium">Target: {goal.target}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-[#10B981] font-bold">{goal.current}</span>
                        <span className="text-gray-500 font-bold">{goal.progress}%</span>
                      </div>
                      <div className="h-3 bg-[#F8F9FB] rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }} whileInView={{ width: `${goal.progress}%` }} transition={{ duration: 1, delay: 0.2 }}
                          className="h-full bg-gradient-to-r from-[#10B981] to-[#059669] rounded-full" 
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 5. AI Assistant Section */}
        <section className="py-24 bg-[#F8F9FB] relative overflow-hidden">
          <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#1A1D1E]">Shaxsiy AI Moliyaviy Murabbiy</h2>
              <p className="text-lg text-gray-500 font-medium leading-relaxed">Oddiy tilda yozing. Sun'iy intellekt uni darhol tushunadi va bazaga yozadi. Endi menyularda tentirashga hojat yo'q.</p>
              <ul className="space-y-4 mt-8">
                <li className="flex items-center space-x-3 text-gray-600 font-bold"><CheckCircle className="text-[#10B981] w-6 h-6" /> <span>Xarajatlarni kategoriyalarga avtomatik ajratish</span></li>
                <li className="flex items-center space-x-3 text-gray-600 font-bold"><CheckCircle className="text-[#10B981] w-6 h-6" /> <span>Kelajak uchun byudjet maslahatlari</span></li>
                <li className="flex items-center space-x-3 text-gray-600 font-bold"><CheckCircle className="text-[#10B981] w-6 h-6" /> <span>Sizning moliyaviy holatingizga mos psixologik yordam</span></li>
              </ul>
            </div>
            <div className="lg:w-1/2 w-full max-w-md mx-auto">
              <Card className="bg-white border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-[32px] overflow-hidden">
                <CardHeader className="border-b border-gray-50 pb-4 bg-white/50 backdrop-blur-sm">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-[#10B981]/10 flex items-center justify-center">
                      <Bot className="w-6 h-6 text-[#10B981]" />
                    </div>
                    <div>
                      <CardTitle className="text-base font-extrabold text-[#1A1D1E]">Disciplix AI</CardTitle>
                      <CardDescription className="text-xs text-[#10B981] font-bold uppercase tracking-wider">Online</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent ref={chatContainerRef} className="p-6 space-y-4 h-72 overflow-y-auto scrollbar-none bg-[#F8F9FB]/50">
                  {chatMessages.map((msg, idx) => (
                    msg.role === 'user' ? (
                      <motion.div key={idx} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex justify-end">
                        <div className="bg-[#10B981] text-white px-5 py-3 rounded-2xl rounded-tr-sm text-[15px] max-w-[80%] font-medium shadow-[0_4px_15px_rgba(16,185,129,0.2)]">
                          {msg.text}
                        </div>
                      </motion.div>
                    ) : msg.type === 'expense' ? (
                      <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex justify-start">
                        <div className="bg-white text-[#1A1D1E] px-5 py-4 rounded-2xl rounded-tl-sm text-[15px] max-w-[85%] space-y-2 border border-gray-100 shadow-[0_4px_15px_rgba(0,0,0,0.03)] font-medium">
                          <p>✅ 80,000 UZS <b className="text-[#10B981]">"Oziq-ovqat"</b> kategoriyasiga xarajat sifatida yozildi.</p>
                          <p className="text-xs text-gray-500 leading-relaxed mt-2">Sizning bugungi limitingiz 120,000 UZS edi. Kunlik limitingizdan 40,000 UZS qoldi. Yaxshi ketyapsiz!</p>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex justify-start">
                        <div className="bg-white text-[#1A1D1E] px-5 py-4 rounded-2xl rounded-tl-sm text-[15px] max-w-[85%] space-y-3 border border-gray-100 shadow-[0_4px_15px_rgba(0,0,0,0.03)] font-medium">
                          <p>Mendan to'liq foydalanish va ma'lumotlarni saqlash uchun Telegram botimizga tashrif buyuring! 🤖</p>
                          <Link href="https://t.me/disciplixbot" className="block w-full">
                            <Button size="sm" className="w-full bg-[#10B981] hover:bg-[#059669] text-white rounded-xl shadow-sm">Telegram Botga o'tish</Button>
                          </Link>
                        </div>
                      </motion.div>
                    )
                  ))}
                </CardContent>
                <CardFooter className="border-t border-gray-50 p-4 bg-white">
                  <div className="w-full relative">
                    <input 
                      type="text" 
                      placeholder="Xabar yozish..." 
                      className="w-full bg-[#F8F9FB] border border-gray-200 rounded-full px-5 py-3 pr-12 text-sm font-medium focus:outline-none focus:border-[#10B981] focus:ring-1 focus:ring-[#10B981] transition-all text-[#1A1D1E]" 
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                    />
                    <button onClick={handleSendMessage} className="absolute right-4 top-3 outline-none">
                      <Send className="w-5 h-5 text-[#10B981] hover:text-[#059669] transition-colors cursor-pointer" />
                    </button>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* 6. Premium Pricing Section */}
        <section id="pricing" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-[#1A1D1E]">Oddiy va Tushunarli Tariflar</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="bg-white border border-gray-200 rounded-[32px] shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="p-6 md:p-8">
                  <CardTitle className="text-xl md:text-2xl font-extrabold text-[#1A1D1E]">Bepul</CardTitle>
                  <div className="text-3xl md:text-4xl font-extrabold mt-4 mb-2 text-[#1A1D1E]">0 <span className="text-base md:text-lg text-gray-500 font-bold">UZS/oy</span></div>
                  <CardDescription className="text-gray-500 font-medium">Boshlash uchun ayni muddao</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 px-8">
                  {['Oyiga 10 ta xarajat kiritish', '1 ta maqsad va 5 ta vazifa', 'Telegram WebApp orqali boshqaruv'].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3 text-[15px] font-bold text-gray-600"><CheckCircle className="text-gray-400 w-5 h-5" /> <span>{item}</span></div>
                  ))}
                </CardContent>
                <CardFooter className="p-6 md:p-8">
                  <Link href="https://t.me/disciplixbot" className="w-full">
                    <Button variant="outline" className="w-full rounded-full h-14 border-gray-200 text-gray-600 font-bold hover:bg-gray-50">Hozir boshlash</Button>
                  </Link>
                </CardFooter>
              </Card>
              
              <Card className="relative bg-[#10B981] border-none rounded-[32px] transform mt-6 md:mt-0 md:-translate-y-4 shadow-[0_20px_40px_rgba(16,185,129,0.25)] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>
                <div className="absolute top-0 right-4 md:right-8 transform -translate-y-1/2 bg-white text-[#10B981] text-[10px] md:text-xs font-extrabold px-3 py-1 md:px-4 md:py-1.5 rounded-full uppercase tracking-wider shadow-md">Tavsiya etiladi</div>
                <CardHeader className="p-6 md:p-8 relative z-10">
                  <CardTitle className="text-xl md:text-2xl font-extrabold flex items-center text-white">Premium <Star className="ml-2 w-4 h-4 md:w-5 md:h-5 text-yellow-300 fill-current" /></CardTitle>
                  <div className="text-3xl md:text-4xl font-extrabold mt-4 mb-2 text-white">20,000 <span className="text-base md:text-lg text-emerald-100 font-bold">UZS/oy</span></div>
                  <CardDescription className="text-emerald-50 font-medium">To'liq moliyaviy nazorat</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 px-8 relative z-10">
                  {['Cheksiz xarajat, maqsad va rejalar', 'Ovozli boshqaruv va AI', 'Kengaytirilgan analitika', 'PDF va Excel eksport', 'Prioritet yordam'].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3 text-[15px] font-bold text-white"><CheckCircle className="text-white w-5 h-5" /> <span>{item}</span></div>
                  ))}
                </CardContent>
                <CardFooter className="p-6 md:p-8 relative z-10">
                  <Link href="https://t.me/disciplixbot" className="w-full">
                    <Button className="w-full rounded-full h-14 bg-white hover:bg-gray-50 text-[#10B981] font-extrabold shadow-md">Premium olish</Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* 8. Final CTA Section */}
        <section className="py-20 relative text-center bg-[#F8F9FB]">
          <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-[#1A1D1E]">Bugundan moliyaviy intizomni boshlang</h2>
            <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto mb-10">
              Disciplix bilan har bir so'm maqsadingizga xizmat qiladi. Intizomli bo'ling, boy bo'ling.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="https://t.me/disciplixbot">
                <Button size="lg" className="w-full sm:w-auto rounded-full text-base px-10 h-14 bg-[#10B981] hover:bg-[#059669] text-white font-bold shadow-[0_8px_20px_rgba(16,185,129,0.25)]">
                  Hozir boshlash
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          <div className="space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#10B981] to-[#059669] flex items-center justify-center font-bold text-white text-sm shadow-sm">D</div>
              <span className="text-xl font-extrabold text-[#1A1D1E]">Disciplix</span>
            </div>
            <p className="text-sm font-medium text-gray-500 max-w-xs">AI yordamida moliyaviy intizom va maqsadlar boshqaruvi platformasi.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
            <div className="space-y-3 flex flex-col">
              <span className="font-extrabold text-[#1A1D1E]">Mahsulot</span>
              <Link href="#features" className="font-medium text-gray-500 hover:text-[#10B981] transition-colors">Xususiyatlar</Link>
              <Link href="#pricing" className="font-medium text-gray-500 hover:text-[#10B981] transition-colors">Tariflar</Link>
            </div>
            <div className="space-y-3 flex flex-col">
              <span className="font-extrabold text-[#1A1D1E]">Qonuniy</span>
              <Link href="https://t.me/disciplixbot" className="font-medium text-gray-500 hover:text-[#10B981] transition-colors">Maxfiylik siyosati</Link>
              <Link href="https://t.me/disciplixbot" className="font-medium text-gray-500 hover:text-[#10B981] transition-colors">Foydalanish shartlari</Link>
            </div>
            <div className="space-y-3 flex flex-col col-span-2 md:col-span-1">
              <span className="font-extrabold text-[#1A1D1E]">Ijtimoiy tarmoqlar</span>
              <div className="flex justify-center md:justify-start space-x-4">
                <Link href="https://instagram.com" className="text-gray-400 hover:text-[#10B981] transition-colors"><Camera className="w-5 h-5" /></Link>
                <Link href="https://t.me/disciplixbot" className="text-gray-400 hover:text-[#10B981] transition-colors"><Send className="w-5 h-5" /></Link>
                <Link href="https://t.me/disciplixbot" className="text-gray-400 hover:text-[#10B981] transition-colors"><Globe className="w-5 h-5" /></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-6 mt-8 pt-6 border-t border-gray-100 text-center text-sm font-bold text-gray-400">
          © {new Date().getFullYear()} Disciplix. Barcha huquqlar himoyalangan.
        </div>
      </footer>
    </div>
  )
}
