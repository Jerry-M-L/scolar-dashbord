import { useState } from 'react'
import { IconSearch, IconFilter, IconDownload } from '@/components/icons/flaticon'

interface AuditLog {
  id: string
  timestamp: string
  user: string
  action: string
  resource: string
  resourceId: string
  details: string
  status: 'success' | 'failed' | 'warning'
  ipAddress: string
}

const auditLogsData: AuditLog[] = []

export default function AuditLogs() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedAction, setSelectedAction] = useState('all')
  const [selectedStatus, setSelectedStatus] = useState('all')

  const filteredLogs = auditLogsData.filter((log) => {
    const matchesSearch = log.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         log.resource.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         log.resourceId.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesAction = selectedAction === 'all' || log.action === selectedAction
    const matchesStatus = selectedStatus === 'all' || log.status === selectedStatus
    return matchesSearch && matchesAction && matchesStatus
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success':
        return 'bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800'
      case 'failed':
        return 'bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800'
      case 'warning':
        return 'bg-yellow-100 dark:bg-yellow-950 text-yellow-700 dark:text-yellow-300 border border-yellow-200 dark:border-yellow-800'
      default:
        return 'bg-gray-100 dark:bg-gray-950 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800'
    }
  }

  const formatDate = (timestamp: string) => {
    // Formatage de date cohérent pour éviter les problèmes d'hydratation
    const parts = timestamp.split('T')
    const dateParts = parts[0].split('-')
    const timeParts = parts[1].split(':')
    
    const months = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jui', 'Jui', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc']
    const month = months[parseInt(dateParts[1]) - 1]
    const day = parseInt(dateParts[2])
    const year = dateParts[0]
    const hour = timeParts[0]
    const minute = timeParts[1]
    const second = timeParts[2].split('Z')[0]
    
    return `${day} ${month} ${year} ${hour}:${minute}:${second}`
  }
  
  const translateAction = (action: string) => {
    const translations: Record<string, string> = {
      'Created': 'Créé',
      'Updated': 'Modifié',
      'Deleted': 'Supprimé',
      'Approved': 'Approuvé',
      'Rejected': 'Rejeté',
      'Exported': 'Exporté',
      'Login Failed': 'Échec de connexion',
    }
    return translations[action] || action
  }
  
  const translateStatus = (status: string) => {
    const translations: Record<string, string> = {
      'success': 'SUCCÈS',
      'failed': 'ÉCHEC',
      'warning': 'ATTENTION',
    }
    return translations[status] || status.toUpperCase()
  }

  const getActionColor = (action: string) => {
    const actionLower = action.toLowerCase()
    if (actionLower.includes('created') || actionLower.includes('créé')) {
      return 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950'
    }
    if (actionLower.includes('updated') || actionLower.includes('modifié')) {
      return 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950'
    }
    if (actionLower.includes('deleted') || actionLower.includes('supprimé')) {
      return 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950'
    }
    if (actionLower.includes('approved') || actionLower.includes('approuvé')) {
      return 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-950'
    }
    if (actionLower.includes('rejected') || actionLower.includes('rejeté')) {
      return 'text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-950'
    }
    if (actionLower.includes('exported') || actionLower.includes('exporté')) {
      return 'text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950'
    }
    if (actionLower.includes('login failed') || actionLower.includes('échec')) {
      return 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950'
    }
    return 'text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-950'
  }

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Header with controls */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-bold text-foreground">Journaux d'audit</h3>
            <p className="text-sm text-muted-foreground">Activité système et historique des modifications</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium">
            <IconDownload size={16} />
            Exporter
          </button>
        </div>

        <div className="space-y-4">
          {/* Search */}
          <div className="relative">
            <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <input
              type="text"
              placeholder="Rechercher par utilisateur, ressource ou ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-secondary text-foreground placeholder-muted-foreground pl-10 pr-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Filters */}
          <div className="flex gap-3 flex-wrap">
            <div className="flex items-center gap-2">
              <IconFilter size={18} className="text-muted-foreground" />
              <select
                value={selectedAction}
                onChange={(e) => setSelectedAction(e.target.value)}
                className="bg-secondary text-foreground border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Filtrer par action"
                title="Filtrer par action"
              >
                <option value="all">Toutes les actions</option>
                <option value="Created">Créé</option>
                <option value="Updated">Modifié</option>
                <option value="Deleted">Supprimé</option>
                <option value="Approved">Approuvé</option>
                <option value="Rejected">Rejeté</option>
              </select>
            </div>

            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="bg-secondary text-foreground border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Filtrer par statut"
              title="Filtrer par statut"
            >
              <option value="all">Tous les statuts</option>
              <option value="success">Succès</option>
              <option value="warning">Attention</option>
              <option value="failed">Échec</option>
            </select>

            <span className="text-xs text-muted-foreground ml-auto flex items-center">
              {filteredLogs.length} journaux
            </span>
          </div>
        </div>
      </div>

      {/* Logs List */}
      <div className="divide-y divide-border">
        {filteredLogs.map((log) => (
          <div key={log.id} className="p-4 hover:bg-secondary/50 transition-colors">
            <div className="flex items-start justify-between gap-4 mb-2">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${getActionColor(log.action)}`}>
                    {translateAction(log.action)}
                  </span>
                  <span className="text-sm font-medium text-foreground">{log.resource}</span>
                  <span className="text-xs text-muted-foreground">({log.resourceId})</span>
                </div>
                <p className="text-sm text-muted-foreground">{log.details}</p>
              </div>
              <span className={`px-2.5 py-0.5 rounded text-xs font-semibold whitespace-nowrap ${getStatusColor(log.status)}`}>
                {translateStatus(log.status)}
              </span>
            </div>

            <div className="flex items-center gap-4 text-xs text-muted-foreground mt-2 pt-2 border-t border-border/50">
              <span>Par : {log.user}</span>
              <span>IP : {log.ipAddress}</span>
              <span>{formatDate(log.timestamp)}</span>
              <span className="text-xs font-mono text-muted-foreground ml-auto">{log.id}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="px-6 py-4 border-t border-border flex items-center justify-between bg-secondary/30">
        <span className="text-sm text-muted-foreground">Affichage 1-{filteredLogs.length} sur {auditLogsData.length}</span>
        <div className="flex gap-2">
          <button className="px-4 py-2 rounded-lg bg-secondary text-foreground hover:bg-secondary/80 text-sm font-medium transition-colors">
            Précédent
          </button>
          <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-medium transition-colors">
            Suivant
          </button>
        </div>
      </div>
    </div>
  )
}
