import React from "react"
import { IconTrendingUp, IconUsers, IconGraduationCap, IconBookOpen, IconDollarSign, IconCalendarCheck } from '@/components/icons/flaticon'

interface KPICard {
  title: string
  value: string | number
  change: number
  changeType: 'increase' | 'decrease'
  icon: React.ReactNode
}

export default function KPICards() {
  const kpis: KPICard[] = [
    {
      title: 'Total des étudiants',
      value: '0',
      change: 0,
      changeType: 'increase',
      icon: <IconUsers size={24} className="text-muted-foreground" />,
    },
    {
      title: 'Écoles actives',
      value: '0',
      change: 0,
      changeType: 'increase',
      icon: <IconBookOpen size={24} className="text-muted-foreground" />,
    },
    {
      title: 'Membres du personnel',
      value: '0',
      change: 0,
      changeType: 'increase',
      icon: <IconGraduationCap size={24} className="text-muted-foreground" />,
    },
    {
      title: 'Revenu mensuel',
      value: '0 FCFA',
      change: 0,
      changeType: 'increase',
      icon: <IconDollarSign size={24} className="text-muted-foreground" />,
    },
    {
      title: 'Validations en attente',
      value: '0',
      change: 0,
      changeType: 'increase',
      icon: <IconCalendarCheck size={24} className="text-muted-foreground" />,
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      {kpis.map((kpi, index) => (
        <div
          key={index}
          className="bg-card border border-border rounded-lg p-5 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
        >
          <div className="flex items-start justify-between mb-4">
            <div>{kpi.icon}</div>
            <div className={`flex items-center gap-1 text-sm font-medium ${kpi.changeType === 'increase' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
              <IconTrendingUp size={16} className="text-muted-foreground" />
              <span>{Math.abs(kpi.change)}%</span>
            </div>
          </div>

          <p className="text-muted-foreground text-sm font-medium mb-1">{kpi.title}</p>
          <p className="text-2xl font-bold text-foreground mb-2">{kpi.value}</p>
          <p className="text-xs text-muted-foreground">par rapport au mois dernier</p>
        </div>
      ))}
    </div>
  )
}
