import { useState } from 'react'
import { IconChevronDown, IconSearch, IconFilter, IconEye, IconTrash } from '@/components/icons/flaticon'
import StatusBadge from './status-badge'

// Consistent date formatting to avoid hydration mismatch
function formatDateConsistent(dateString: string): string {
  const [year, month, day] = dateString.split('-')
  return `${day}/${month}/${year}`
}

interface Student {
  id: string
  name: string
  email: string
  school: string
  grade: string
  status: 'active' | 'pending' | 'inactive'
  enrollmentDate: string
}

const studentData: Student[] = []

interface DataTableProps {
  title: string
  data: Student[]
  columns: Array<{ key: keyof Student; label: string }>
}

export default function DataTables() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [sortBy, setSortBy] = useState('name')

  const filteredData = studentData.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = selectedStatus === 'all' || item.status === selectedStatus
    return matchesSearch && matchesStatus
  })

  const columns = [
    { key: 'name' as const, label: 'Nom de l\'étudiant' },
    { key: 'email' as const, label: 'Email' },
    { key: 'school' as const, label: 'École' },
    { key: 'grade' as const, label: 'Classe' },
    { key: 'status' as const, label: 'Statut' },
    { key: 'enrollmentDate' as const, label: 'Date d\'inscription' },
  ]

  return (
    <div className="bg-card border border-border rounded-lg mt-6 overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Header with filters */}
      <div className="p-6 border-b border-border">
        <h3 className="text-lg font-bold text-foreground mb-4">Dossiers des étudiants</h3>
        
        <div className="space-y-4">
          {/* Search */}
          <div className="relative">
            <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <input
              type="text"
              placeholder="Rechercher par nom ou email..."
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
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                aria-label="Filtrer par statut"
                className="bg-secondary text-foreground border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="all">Tous les statuts</option>
                <option value="active">Actif</option>
                <option value="pending">En attente</option>
                <option value="inactive">Inactif</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Trier par :</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                aria-label="Trier par"
                className="bg-secondary text-foreground border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="name">Nom</option>
                <option value="enrollment">Date d'inscription</option>
                <option value="school">École</option>
              </select>
            </div>

            <span className="text-xs text-muted-foreground ml-auto flex items-center">
              {filteredData.length} dossiers
            </span>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-secondary border-b border-border">
            <tr>
              {columns.map((col) => (
                <th key={col.key} className="px-6 py-4 text-left text-xs font-semibold text-foreground uppercase tracking-wider">
                  <div className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
                    {col.label}
                    {sortBy === col.key && <IconChevronDown size={14} />}
                  </div>
                </th>
              ))}
              <th className="px-6 py-4 text-left text-xs font-semibold text-foreground uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {filteredData.map((row, idx) => (
              <tr key={idx} className="hover:bg-secondary/50 transition-colors">
                {columns.map((col) => (
                  <td key={col.key} className="px-6 py-4 text-sm text-foreground">
                    {col.key === 'status' ? (
                      <StatusBadge status={row[col.key] as any} />
                    ) : col.key === 'enrollmentDate' ? (
                      formatDateConsistent(row[col.key])
                    ) : (
                      row[col.key]
                    )}
                  </td>
                ))}
                <td className="px-6 py-4 text-sm">
                  <div className="flex gap-2">
                    <button className="p-1.5 rounded-lg hover:bg-primary/10 text-primary transition-colors" title="Voir les détails">
                      <IconEye size={16} />
                    </button>
                    <button className="p-1.5 rounded-lg hover:bg-destructive/10 text-destructive transition-colors" title="Supprimer le dossier">
                      <IconTrash size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="px-6 py-4 border-t border-border flex items-center justify-between">
        <span className="text-sm text-muted-foreground">Affichage 1-{filteredData.length} sur {studentData.length}</span>
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
