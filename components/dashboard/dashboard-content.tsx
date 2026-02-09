import React from 'react'
import KPICards from './kpi-cards'
import Charts from './charts'
import DataTables from './data-tables'
import ValidationWorkflows from './validation-workflows'
import AuditLogs from './audit-logs'
import { IconUsers, IconGraduationCap, IconDollarSign, IconCheckSquare, IconBookOpen, IconHelpCircle, IconSettings, IconHourglass, IconLayoutList, IconCalendar, IconCalendarCheck } from '@/components/icons/flaticon'

interface DashboardContentProps {
  selectedView: string
}

export default function DashboardContent({ selectedView }: DashboardContentProps) {
  const renderContent = () => {
    switch (selectedView) {
      case 'overview':
        return (
          <div className="p-6 space-y-6">
            {/* Title */}
            <div>
              <h1 className="text-4xl font-bold text-foreground text-balance">Bienvenue, Dr. Johnson</h1>
              <p className="text-muted-foreground mt-2">Voici ce qui se passe dans votre réseau scolaire aujourd'hui.</p>
            </div>

            {/* KPI Cards */}
            <KPICards />

            {/* Charts */}
            <Charts />

            {/* Data Tables */}
            <DataTables />

            {/* Audit Logs */}
            <div className="mt-6">
              <AuditLogs />
            </div>
          </div>
        )

      case 'students':
        return (
          <div className="p-6 space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground flex items-center gap-3 text-balance">
                <IconUsers size={32} className="text-primary" />
                Gestion des étudiants
              </h1>
              <p className="text-muted-foreground mt-2">Gérer les dossiers, les inscriptions et le progrès académique des étudiants</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <IconUsers size={20} className="text-muted-foreground" />
                  <p className="text-muted-foreground text-sm font-medium">Total inscrits</p>
                </div>
                <p className="text-3xl font-bold text-foreground">0</p>
                <p className="text-xs text-muted-foreground mt-2">Aucune donnée disponible</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <IconCheckSquare size={20} className="text-muted-foreground" />
                  <p className="text-muted-foreground text-sm font-medium">Actifs ce semestre</p>
                </div>
                <p className="text-3xl font-bold text-foreground">0</p>
                <p className="text-xs text-muted-foreground mt-2">Aucune donnée disponible</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <IconBookOpen size={20} className="text-muted-foreground" />
                  <p className="text-muted-foreground text-sm font-medium">Examens en attente</p>
                </div>
                <p className="text-3xl font-bold text-foreground">0</p>
                <p className="text-xs text-muted-foreground mt-2">Aucune donnée disponible</p>
              </div>
            </div>

            <DataTables />
          </div>
        )

      case 'staff':
        return (
          <div className="p-6 space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground flex items-center gap-3 text-balance">
                <IconGraduationCap size={32} className="text-accent" />
                Gestion du personnel
              </h1>
              <p className="text-muted-foreground mt-2">Gérer les membres du personnel, les rôles et la structure organisationnelle</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <IconGraduationCap size={20} className="text-muted-foreground" />
                  <p className="text-muted-foreground text-sm font-medium">Personnel total</p>
                </div>
                <p className="text-3xl font-bold text-foreground">0</p>
                <p className="text-xs text-muted-foreground mt-2">Aucune donnée disponible</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <IconCalendar size={20} className="text-muted-foreground" />
                  <p className="text-muted-foreground text-sm font-medium">En congé</p>
                </div>
                <p className="text-3xl font-bold text-foreground">0</p>
                <p className="text-xs text-muted-foreground mt-2">Aucune donnée disponible</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <IconUsers size={20} className="text-muted-foreground" />
                  <p className="text-muted-foreground text-sm font-medium">Nouvelles embauches</p>
                </div>
                <p className="text-3xl font-bold text-foreground">0</p>
                <p className="text-xs text-muted-foreground mt-2">Aucune donnée disponible</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-bold text-foreground mb-4">Répartition par département</h3>
                <div className="space-y-3">
                  {[
                    { name: 'Mathématiques', count: 0, color: 'from-blue-500 to-blue-600' },
                    { name: 'Français', count: 0, color: 'from-purple-500 to-purple-600' },
                    { name: 'Sciences', count: 0, color: 'from-green-500 to-green-600' },
                    { name: 'Éducation physique', count: 0, color: 'from-orange-500 to-orange-600' },
                    { name: 'Arts et humanités', count: 0, color: 'from-pink-500 to-pink-600' },
                    { name: 'Administration', count: 0, color: 'from-teal-500 to-teal-600' },
                  ].map((dept, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <div className="flex items-center gap-3 flex-1">
                        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${dept.color}`}></div>
                        <span className="text-sm text-foreground">{dept.name}</span>
                      </div>
                      <span className="text-sm font-semibold text-foreground">{dept.count}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-bold text-foreground mb-4">Métriques de performance</h3>
                <div className="space-y-4">
                  {[
                    { metric: 'Fin de formation', value: 0, color: 'bg-green-500' },
                    { metric: 'Taux de présence', value: 0, color: 'bg-blue-500' },
                    { metric: 'Évaluation de performance', value: 0, color: 'bg-purple-500' },
                    { metric: 'Satisfaction des étudiants', value: 0, color: 'bg-orange-500' },
                  ].map((item, idx) => (
                    <div key={idx}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-foreground">{item.metric}</span>
                        <span className="text-sm font-bold text-primary">{item.value}%</span>
                      </div>
                      <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className={`h-full ${item.color} rounded-full transition-all duration-300`}
                          style={{ width: `${item.value}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )

      case 'finances':
        return (
          <div className="p-6 space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground flex items-center gap-3 text-balance">
                <IconDollarSign size={32} className="text-orange-500" />
                Gestion financière
              </h1>
              <p className="text-muted-foreground mt-2">Surveiller les budgets, les dépenses et les revenus de toutes les écoles</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <IconDollarSign size={20} className="text-muted-foreground" />
                  <p className="text-muted-foreground text-sm font-medium">Budget total</p>
                </div>
                <p className="text-3xl font-bold text-foreground">0 FCFA</p>
                <p className="text-xs text-muted-foreground mt-2">Année fiscale 2024</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <IconDollarSign size={20} className="text-muted-foreground" />
                  <p className="text-muted-foreground text-sm font-medium">Dépensé YTD</p>
                </div>
                <p className="text-3xl font-bold text-foreground">0 FCFA</p>
                <p className="text-xs text-muted-foreground mt-2">Aucune donnée disponible</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <IconDollarSign size={20} className="text-muted-foreground" />
                  <p className="text-muted-foreground text-sm font-medium">Revenu mensuel</p>
                </div>
                <p className="text-3xl font-bold text-foreground">0 FCFA</p>
                <p className="text-xs text-muted-foreground mt-2">Aucune donnée disponible</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <IconCheckSquare size={20} className="text-muted-foreground" />
                  <p className="text-muted-foreground text-sm font-medium">Approbations en attente</p>
                </div>
                <p className="text-3xl font-bold text-foreground">0 FCFA</p>
                <p className="text-xs text-muted-foreground mt-2">0 demandes</p>
              </div>
            </div>

            <Charts />
          </div>
        )

      case 'validation':
        return (
          <div className="p-6 space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground flex items-center gap-3 text-balance">
                <IconCheckSquare size={32} className="text-primary" />
                Flux de validation
              </h1>
              <p className="text-muted-foreground mt-2">Examiner et gérer toutes les demandes et approbations en attente</p>
            </div>

            <ValidationWorkflows />

            <AuditLogs />
          </div>
        )

      case 'parents':
      case 'library':
      case 'class':
      case 'subject':
      case 'routine':
      case 'attendance':
        const placeholders: Record<string, { icon: React.ReactNode; label: string }> = {
          parents: { icon: <IconUsers size={32} className="text-primary" />, label: 'Parents' },
          library: { icon: <IconBookOpen size={32} className="text-primary" />, label: 'Bibliothèque' },
          class: { icon: <IconHourglass size={32} className="text-primary" />, label: 'Classe' },
          subject: { icon: <IconLayoutList size={32} className="text-primary" />, label: 'Matière' },
          routine: { icon: <IconCalendar size={32} className="text-primary" />, label: 'Emploi du temps' },
          attendance: { icon: <IconCalendarCheck size={32} className="text-primary" />, label: 'Présence' },
        }
        const ph = placeholders[selectedView] || { icon: <IconBookOpen size={32} className="text-primary" />, label: 'Section' }
        return (
          <div className="p-6 space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground flex items-center gap-3 text-balance">
                {ph.icon}
                {ph.label}
              </h1>
              <p className="text-muted-foreground mt-2">Cette section sera bientôt disponible.</p>
            </div>
          </div>
        )

      case 'help':
        return (
          <div className="p-6 space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground flex items-center gap-3 text-balance">
                <IconHelpCircle size={32} className="text-primary" />
                Centre d'aide
              </h1>
              <p className="text-muted-foreground mt-2">Besoin d'assistance ? Consultez notre documentation ou contactez le support.</p>
            </div>
          </div>
        )

      case 'settings':
        return (
          <div className="p-6 space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground flex items-center gap-3 text-balance">
                <IconSettings size={32} className="text-primary" />
                Paramètres
              </h1>
              <p className="text-muted-foreground mt-2">Configurez les préférences de votre application.</p>
            </div>
          </div>
        )

      default:
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold text-foreground">Aperçu</h1>
            <p className="text-muted-foreground mt-2">Sélectionnez une section dans le menu.</p>
          </div>
        )
    }
  }

  return <>{renderContent()}</>
}
