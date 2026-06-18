export const mockStats = {
  totalBalance: 12500000,
  monthlyIncome: 8000000,
  monthlyExpenses: 3400000,
  savingsRate: 57,
};

export const mockTransactions = [
  { id: 1, title: "Tushlik", category: "Oziq-ovqat", amount: -50000, date: "2024-05-20", isExpense: true },
  { id: 2, title: "Oylik maosh", category: "Daromad", amount: 8000000, date: "2024-05-01", isExpense: false },
  { id: 3, title: "Taksi", category: "Transport", amount: -25000, date: "2024-05-19", isExpense: true },
  { id: 4, title: "Kiyim-kechak", category: "Xaridlar", amount: -450000, date: "2024-05-15", isExpense: true },
];

export const mockGoals = [
  { id: 1, title: "MacBook Pro", target: 20000000, current: 13400000, percentage: 67, date: "2024-12-01" },
  { id: 2, title: "Car Fund", target: 100000000, current: 45000000, percentage: 45, date: "2025-06-01" },
  { id: 3, title: "Travel to Dubai", target: 15000000, current: 12300000, percentage: 82, date: "2024-09-01" },
];

export const mockChartData = [
  { name: 'Oziq-ovqat', value: 1200000 },
  { name: 'Transport', value: 400000 },
  { name: 'Kommunal', value: 300000 },
  { name: 'Xaridlar', value: 1500000 },
];

export const mockBarData = [
  { month: "Yan", income: 7000000, expense: 3200000 },
  { month: "Fev", income: 7000000, expense: 3500000 },
  { month: "Mar", income: 7500000, expense: 3100000 },
  { month: "Apr", income: 8000000, expense: 3800000 },
  { month: "May", income: 8000000, expense: 3400000 },
];
