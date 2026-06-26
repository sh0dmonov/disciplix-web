"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { mockStats, mockTransactions, mockGoals, mockChartData, mockBarData } from "@/lib/mock-data"
import { ArrowUpRight, ArrowDownRight, MoreHorizontal, Target } from "lucide-react"
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts"

const COLORS = ['#7C3AED', '#2563EB', '#10B981', '#F59E0B'];

export default function DashboardPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Xush kelibsiz, Sardor!</h1>
          <p className="text-gray-400 mt-1">Moliyaviy intizomingiz yaxshi ketyapti.</p>
        </div>
        <div className="text-sm font-medium px-4 py-2 bg-white/5 rounded-full border border-white/10">
          Oktabr, 2024
        </div>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <Card className="bg-[#7C3AED]/10 border-[#7C3AED]/20">
          <CardHeader className="pb-2">
            <CardDescription>Jami Balans</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{mockStats.totalBalance.toLocaleString()} UZS</div>
            <p className="text-xs text-[#10B981] flex items-center mt-2">
              <ArrowUpRight className="w-3 h-3 mr-1" /> {"+12% o'tgan oydan"}
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Oylik Daromad</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-[#10B981]">+{mockStats.monthlyIncome.toLocaleString()}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Oylik Xarajat</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-red-400">{mockStats.monthlyExpenses.toLocaleString()}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Tejamkorlik</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-[#2563EB]">{mockStats.savingsRate}%</div>
            <p className="text-xs text-gray-400 mt-2">Daromadning yarmi saqlanmoqda</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Charts */}
        <div className="xl:col-span-2 space-y-8">
          <Card className="border-white/10">
            <CardHeader>
              <CardTitle>Daromad va Xarajat dinamikasi</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-72 w-full mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={mockBarData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                    <XAxis dataKey="month" stroke="#ffffff50" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#ffffff50" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(val) => `${val/1000000}M`} />
                    <Tooltip cursor={{ fill: '#ffffff05' }} contentStyle={{ backgroundColor: '#09090B', borderColor: '#ffffff20', borderRadius: '8px' }} />
                    <Bar dataKey="income" name="Daromad" fill="#10B981" radius={[4, 4, 0, 0]} barSize={30} />
                    <Bar dataKey="expense" name="Xarajat" fill="#F87171" radius={[4, 4, 0, 0]} barSize={30} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Goals */}
          <Card className="border-white/10">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Moliyaviy Maqsadlar</CardTitle>
                <button className="text-sm text-[#7C3AED] hover:underline">Barchasi</button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {mockGoals.map(goal => (
                <div key={goal.id} className="space-y-2">
                  <div className="flex justify-between">
                    <div className="flex items-center space-x-2">
                      <Target className="w-4 h-4 text-[#7C3AED]" />
                      <span className="font-medium">{goal.title}</span>
                    </div>
                    <span className="text-sm text-gray-400">{goal.percentage}%</span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#7C3AED] to-[#2563EB] rounded-full" style={{ width: `${goal.percentage}%` }}></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>{"Yig'ildi:"} {goal.current.toLocaleString()} UZS</span>
                    <span>Qoldi: {(goal.target - goal.current).toLocaleString()} UZS</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Sidebar info */}
        <div className="space-y-8">
          {/* Pie Chart */}
          <Card className="border-white/10">
            <CardHeader>
              <CardTitle>Xarajatlar tarkibi</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-52 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={mockChartData} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value" stroke="none">
                      {mockChartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ backgroundColor: '#09090B', borderColor: '#ffffff20', borderRadius: '8px' }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {mockChartData.map((data, i) => (
                  <div key={i} className="flex items-center space-x-2 text-sm">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[i % COLORS.length] }}></div>
                    <span className="text-gray-300">{data.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Transactions */}
          <Card className="border-white/10">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>{"So'nggi O'tkazmalar"}</CardTitle>
                <MoreHorizontal className="w-5 h-5 text-gray-400 cursor-pointer" />
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {mockTransactions.map(tr => (
                <div key={tr.id} className="flex justify-between items-center p-3 rounded-xl hover:bg-white/5 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${tr.isExpense ? 'bg-red-500/10 text-red-400' : 'bg-green-500/10 text-green-400'}`}>
                      {tr.isExpense ? <ArrowDownRight className="w-5 h-5" /> : <ArrowUpRight className="w-5 h-5" />}
                    </div>
                    <div>
                      <div className="font-medium text-sm">{tr.title}</div>
                      <div className="text-xs text-gray-500">{tr.category} • {tr.date}</div>
                    </div>
                  </div>
                  <div className={`font-bold text-sm ${tr.isExpense ? 'text-white' : 'text-[#10B981]'}`}>
                    {tr.isExpense ? '' : '+'}{tr.amount.toLocaleString()}
                  </div>
                </div>
              ))}
              <button className="w-full py-2 mt-4 text-sm text-[#7C3AED] hover:bg-[#7C3AED]/10 rounded-lg transition-colors border border-dashed border-[#7C3AED]/30">
                {"Barcha tarixni ko'rish"}
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
