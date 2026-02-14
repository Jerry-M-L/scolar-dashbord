import { useState } from 'react'
import { IconCheckCircle, IconXCircle, IconMessageSquare, IconChevronRight, IconX } from '@/components/icons/flaticon'
import StatusBadge from './status-badge'

interface ValidationRequest {
  id: string
  requestType: string
  submittedBy: string
  school: string
  submittedDate: string
  status: 'pending' | 'approved' | 'rejected'
  priority: 'high' | 'medium' | 'low'
  description: string
}

const validationData: ValidationRequest[] = []

export default function ValidationWorkflows() {
  const [selectedRequest, setSelectedRequest] = useState<ValidationRequest | null>(null)
  const [showModal, setShowModal] = useState(false)
  const [actionType, setActionType] = useState<'approve' | 'reject' | null>(null)

  const handleOpenRequest = (request: ValidationRequest) => {
    setSelectedRequest(request)
    setShowModal(true)
  }

  const handleAction = (type: 'approve' | 'reject') => {
    setActionType(type)
  }

  const confirmAction = () => {
    // Handle approval/rejection logic here
    setShowModal(false)
    setSelectedRequest(null)
    setActionType(null)
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300'
      case 'medium':
        return 'bg-yellow-100 dark:bg-yellow-950 text-yellow-700 dark:text-yellow-300'
      case 'low':
        return 'bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300'
      default:
        return 'bg-gray-100 dark:bg-gray-950 text-gray-700 dark:text-gray-300'
    }
  }

  const getPriorityLabel = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'ÉLEVÉE'
      case 'medium':
        return 'MOYENNE'
      case 'low':
        return 'FAIBLE'
      default:
        return priority.toUpperCase()
    }
  }

  return (
    <div className="space-y-4">
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-bold text-foreground">Validations en attente</h3>
            <p className="text-sm text-muted-foreground">Examiner et approuver/rejeter les demandes</p>
          </div>
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold">
            {validationData.filter(r => r.status === 'pending').length} En attente
          </span>
        </div>

        <div className="space-y-3">
          {validationData.map((request) => (
            <div
              key={request.id}
              className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-secondary/50 hover:border-primary/20 transition-all duration-200 cursor-pointer group"
              onClick={() => handleOpenRequest(request)}
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">{request.requestType}</h4>
                    <p className="text-xs text-muted-foreground">{request.id} • {request.school}</p>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${getPriorityColor(request.priority)}`}>
                    {getPriorityLabel(request.priority)}
                  </span>
                  <StatusBadge status={request.status} />
                </div>
                <p className="text-sm text-muted-foreground">{request.description}</p>
                <p className="text-xs text-muted-foreground mt-2">
                  Soumis par {request.submittedBy} le {new Date(request.submittedDate).toLocaleDateString('fr-FR')}
                </p>
              </div>
              <IconChevronRight className="text-muted-foreground group-hover:text-primary transition-colors ml-4" size={20} />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && selectedRequest && (
        <div className="fixed inset-0 bg-white/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-card border border-border rounded-lg w-full max-w-md shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div>
                <h2 className="text-xl font-bold text-foreground">{selectedRequest.requestType}</h2>
                <p className="text-sm text-muted-foreground mt-1">ID: {selectedRequest.id}</p>
              </div>
              <button
                title="Fermer"
                aria-label="Fermer"
                onClick={() => {
                  setShowModal(false)
                  setActionType(null)
                }}
                className="p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
              >
                <IconX size={20} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-4 max-h-96 overflow-y-auto scrollbar-auto">
              <div>
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">École</label>
                <p className="text-foreground mt-1">{selectedRequest.school}</p>
              </div>

              <div>
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Soumis par</label>
                <p className="text-foreground mt-1">{selectedRequest.submittedBy}</p>
              </div>

              <div>
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Description</label>
                <p className="text-foreground mt-1">{selectedRequest.description}</p>
              </div>

              <div>
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Statut</label>
                <div className="mt-1">
                  <StatusBadge status={selectedRequest.status} />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Priorité</label>
                <p className={`text-foreground mt-1 px-2 py-1 rounded inline-block text-sm font-semibold ${getPriorityColor(selectedRequest.priority)}`}>
                  {getPriorityLabel(selectedRequest.priority)}
                </p>
              </div>

              {/* Comments Section */}
              {!actionType && (
                <div>
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-2 mb-2">
                    <IconMessageSquare size={14} />
                    Ajouter des commentaires
                  </label>
                  <textarea
                    placeholder="Ajouter des notes ou commentaires de validation..."
                    className="w-full bg-secondary text-foreground placeholder-muted-foreground px-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    rows={3}
                  />
                </div>
              )}

              {/* Action Confirmation */}
              {actionType && (
                <div className={`p-4 rounded-lg border-2 ${
                  actionType === 'approve' 
                    ? 'bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800' 
                    : 'bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-800'
                }`}>
                  <p className={actionType === 'approve' ? 'text-green-700 dark:text-green-300' : 'text-red-700 dark:text-red-300'}>
                    Êtes-vous certain de vouloir <strong>{actionType === 'approve' ? 'approuver' : 'rejeter'}</strong> cette demande ?
                  </p>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-border flex gap-3">
              {!actionType ? (
                <>
                  <button
                    onClick={() => {
                      setShowModal(false)
                      setActionType(null)
                    }}
                    className="flex-1 px-4 py-2 rounded-lg border border-border text-foreground hover:bg-secondary transition-colors font-medium"
                  >
                    Fermer
                  </button>
                  <button
                    onClick={() => handleAction('reject')}
                    className="flex-1 px-4 py-2 rounded-lg bg-destructive text-destructive-foreground hover:bg-destructive/90 transition-colors font-medium flex items-center justify-center gap-2"
                  >
                    <IconXCircle size={16} />
                    Rejeter
                  </button>
                  <button
                    onClick={() => handleAction('approve')}
                    className="flex-1 px-4 py-2 rounded-lg bg-green-600 dark:bg-green-700 text-white hover:bg-green-700 dark:hover:bg-green-600 transition-colors font-medium flex items-center justify-center gap-2"
                  >
                    <IconCheckCircle size={16} />
                    Approuver
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => setActionType(null)}
                    className="flex-1 px-4 py-2 rounded-lg border border-border text-foreground hover:bg-secondary transition-colors font-medium"
                  >
                    Annuler
                  </button>
                  <button
                    onClick={confirmAction}
                    className={`flex-1 px-4 py-2 rounded-lg transition-colors font-medium ${
                      actionType === 'approve'
                        ? 'bg-green-600 dark:bg-green-700 text-white hover:bg-green-700 dark:hover:bg-green-600'
                        : 'bg-destructive text-destructive-foreground hover:bg-destructive/90'
                    }`}
                  >
                    {actionType === 'approve' ? 'Confirmer l\'approbation' : 'Confirmer le rejet'}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
