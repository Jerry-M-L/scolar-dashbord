import React from "react"
import { IconShield, IconLock, IconUnlock, IconUser, IconUsers, IconSchool } from '@/components/icons/flaticon'
import StatusBadge from './status-badge'

type UserRole = 'super_admin' | 'school_admin' | 'teacher' | 'finance_officer'

interface RoleConfig {
  role: UserRole
  label: string
  description: string
  icon: React.ReactNode
  permissions: string[]
  accessLevel: 'full' | 'high' | 'medium' | 'low'
  color: string
}

const roleConfigs: RoleConfig[] = [
  {
    role: 'super_admin',
    label: 'Super Administrateur',
    description: 'Accès complet et contrôle du système',
    icon: <IconShield size={24} />,
    permissions: [
      'Voir toutes les écoles et données',
      'Approuver/rejeter les validations',
      'Gérer tous les rôles utilisateurs',
      'Accéder aux rapports financiers',
      'Exporter les données',
      'Configuration du système',
      'Accès aux journaux d\'audit',
      'Gestion du personnel dans toutes les écoles',
    ],
    accessLevel: 'full',
    color: 'from-purple-500 to-purple-600',
  },
  {
    role: 'school_admin',
    label: 'Administrateur d\'école',
    description: 'Contrôle administratif pour l\'école assignée',
    icon: <IconSchool size={24} />,
    permissions: [
      'Voir les données spécifiques à l\'école',
      'Soumettre des demandes de validation',
      'Gérer les étudiants et le personnel (école)',
      'Voir les rapports financiers (école)',
      'Exporter les données de l\'école',
      'Gérer la communication avec les parents',
      'Accès limité aux journaux d\'audit',
    ],
    accessLevel: 'high',
    color: 'from-purple-500 to-purple-600',
  },
  {
    role: 'teacher',
    label: 'Enseignant',
    description: 'Gestion de classe et des étudiants',
    icon: <IconUser size={24} />,
    permissions: [
      'Voir les notes des étudiants assignés',
      'Soumettre les rapports de notes',
      'Accéder à la liste de classe',
      'Soumettre les rapports d\'absence',
      'Export de données limité',
      'Communication avec les parents',
    ],
    accessLevel: 'low',
    color: 'from-teal-500 to-teal-600',
  },
  {
    role: 'finance_officer',
    label: 'Agent financier',
    description: 'Opérations financières et rapports',
    icon: <IconUsers size={24} />,
    permissions: [
      'Voir les rapports financiers',
      'Traiter les paiements',
      'Gestion du budget',
      'Suivi des revenus',
      'Rapports de dépenses',
      'Soumettre des demandes financières',
      'Accès limité à l\'audit',
    ],
    accessLevel: 'medium',
    color: 'from-orange-500 to-orange-600',
  },
]

interface RoleBasedAccessProps {
  userRole?: UserRole
}

export default function RoleBasedAccess({ userRole = 'super_admin' }: RoleBasedAccessProps) {
  const currentUserRole = roleConfigs.find(r => r.role === userRole)

  const getAccessBadge = (level: string) => {
    switch (level) {
      case 'full':
        return <StatusBadge status="success" label="Accès complet" />
      case 'high':
        return <StatusBadge status="success" label="Accès élevé" />
      case 'medium':
        return <StatusBadge status="warning" label="Accès moyen" />
      case 'low':
        return <StatusBadge status="pending" label="Accès limité" />
      default:
        return <StatusBadge status="error" label="Aucun accès" />
    }
  }

  return (
    <div className="space-y-6">
      {/* Current User Role */}
      {currentUserRole && (
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-lg bg-gradient-to-br ${currentUserRole.color} text-white`}>
                {currentUserRole.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">{currentUserRole.label}</h3>
                <p className="text-sm text-muted-foreground">{currentUserRole.description}</p>
              </div>
            </div>
            <div>{getAccessBadge(currentUserRole.accessLevel)}</div>
          </div>

          <div className="pt-4 border-t border-border">
            <h4 className="text-sm font-semibold text-foreground mb-3">Permissions accordées :</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {currentUserRole.permissions.map((permission, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-foreground">
                  <IconUnlock size={14} className="text-green-600 dark:text-green-400" />
                  {permission}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* All Role Comparison */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="text-lg font-bold text-foreground mb-4">Comparaison des rôles</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {roleConfigs.map((config) => (
            <div
              key={config.role}
              className={`border rounded-lg p-4 transition-all duration-200 ${
                userRole === config.role
                  ? 'border-primary bg-primary/5 shadow-lg'
                  : 'border-border hover:border-primary/30'
              }`}
            >
              <div className={`inline-flex p-2.5 rounded-lg bg-gradient-to-br ${config.color} text-white mb-3`}>
                {config.icon}
              </div>
              <h4 className="font-semibold text-foreground text-sm mb-1">{config.label}</h4>
              <p className="text-xs text-muted-foreground mb-3">{config.description}</p>

              <div className="mb-3">
                {getAccessBadge(config.accessLevel)}
              </div>

              <div className="text-xs text-muted-foreground space-y-1">
                <p className="font-medium text-foreground mb-2">Permissions clés :</p>
                {config.permissions.slice(0, 3).map((perm, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-400 mt-0.5">✓</span>
                    <span className="line-clamp-1">{perm}</span>
                  </div>
                ))}
                {config.permissions.length > 3 && (
                  <p className="text-muted-foreground italic">+{config.permissions.length - 3} de plus</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Restricted Features by Role */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="text-lg font-bold text-foreground mb-4">Matrice d'accès aux fonctionnalités</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-secondary border-b border-border">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-foreground">Fonctionnalité</th>
                {roleConfigs.map((role) => (
                  <th key={role.role} className="text-center px-4 py-3 font-semibold text-foreground">
                    {role.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                'Accès au tableau de bord',
                'Voir les données des étudiants',
                'Modifier les données des étudiants',
                'Voir les rapports financiers',
                'Approuver les validations',
                'Gérer le personnel',
                'Exporter les données',
                'Journaux d\'audit',
                'Paramètres du système',
              ].map((feature, idx) => (
                <tr key={idx} className="hover:bg-secondary/50">
                  <td className="px-4 py-3 text-foreground font-medium">{feature}</td>
                  {roleConfigs.map((role) => {
                    // Mock access matrix
                    const hasAccess = Math.random() > 0.4
                    return (
                      <td key={role.role} className="px-4 py-3 text-center">
                        {hasAccess ? (
                          <span className="inline-flex items-center gap-1 text-green-600 dark:text-green-400">
                            <IconUnlock size={14} />
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-muted-foreground">
                            <IconLock size={14} />
                          </span>
                        )}
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
