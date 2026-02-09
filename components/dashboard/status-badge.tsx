import { IconCheckCircle, IconClock, IconXCircle, IconAlertCircle } from '@/components/icons/flaticon'

type StatusType = 'active' | 'pending' | 'inactive' | 'error' | 'success' | 'warning' | 'approved' | 'rejected'

interface StatusBadgeProps {
  status: StatusType
  label?: string
}

const statusConfig = {
  active: {
    bg: 'bg-green-50 dark:bg-green-950',
    border: 'border-green-200 dark:border-green-800',
    text: 'text-green-700 dark:text-green-300',
    icon: IconCheckCircle,
    label: 'Actif',
  },
  pending: {
    bg: 'bg-yellow-50 dark:bg-yellow-950',
    border: 'border-yellow-200 dark:border-yellow-800',
    text: 'text-yellow-700 dark:text-yellow-300',
    icon: IconClock,
    label: 'En attente',
  },
  inactive: {
    bg: 'bg-gray-50 dark:bg-gray-950',
    border: 'border-gray-200 dark:border-gray-800',
    text: 'text-gray-700 dark:text-gray-300',
    icon: IconXCircle,
    label: 'Inactif',
  },
  error: {
    bg: 'bg-red-50 dark:bg-red-950',
    border: 'border-red-200 dark:border-red-800',
    text: 'text-red-700 dark:text-red-300',
    icon: IconAlertCircle,
    label: 'Erreur',
  },
  success: {
    bg: 'bg-green-50 dark:bg-green-950',
    border: 'border-green-200 dark:border-green-800',
    text: 'text-green-700 dark:text-green-300',
    icon: IconCheckCircle,
    label: 'Succès',
  },
  warning: {
    bg: 'bg-orange-50 dark:bg-orange-950',
    border: 'border-orange-200 dark:border-orange-800',
    text: 'text-orange-700 dark:text-orange-300',
    icon: IconAlertCircle,
    label: 'Attention',
  },
  approved: {
    bg: 'bg-green-50 dark:bg-green-950',
    border: 'border-green-200 dark:border-green-800',
    text: 'text-green-700 dark:text-green-300',
    icon: IconCheckCircle,
    label: 'Approuvé',
  },
  rejected: {
    bg: 'bg-red-50 dark:bg-red-950',
    border: 'border-red-200 dark:border-red-800',
    text: 'text-red-700 dark:text-red-300',
    icon: IconXCircle,
    label: 'Rejeté',
  },
}

export default function StatusBadge({ status, label }: StatusBadgeProps) {
  const config = statusConfig[status]
  const Icon = config.icon

  return (
    <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium border ${config.bg} ${config.border} ${config.text}`}>
      <Icon size={16} />
      {label || config.label}
    </span>
  )
}
