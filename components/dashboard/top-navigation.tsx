import { IconSearch, IconBell, IconSettings, IconMenu } from '@/components/icons/flaticon'

interface TopNavigationProps {
  sidebarOpen: boolean
  onToggleSidebar: () => void
}

export default function TopNavigation({ sidebarOpen, onToggleSidebar }: TopNavigationProps) {
  return (
    <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6 shadow-sm">
      <div className="flex items-center gap-4 flex-1">
        <button
          onClick={onToggleSidebar}
          className="md:hidden p-2 rounded-lg hover:bg-secondary text-foreground"
          aria-label="Ouvrir ou fermer le menu"
          title="Ouvrir ou fermer le menu"
        >
          <IconMenu size={20} />
        </button>
        
        <div className="flex-1 max-w-md">
          <div className="relative">
            <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <input
              type="text"
              placeholder="Rechercher écoles, étudiants, personnel..."
              className="w-full bg-secondary text-foreground placeholder-muted-foreground pl-10 pr-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 rounded-lg hover:bg-secondary text-foreground transition-colors" aria-label="Notifications" title="Notifications">
          <IconBell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <button className="p-2 rounded-lg hover:bg-secondary text-foreground transition-colors" aria-label="Paramètres" title="Paramètres">
          <IconSettings size={20} />
        </button>

        <div className="flex items-center gap-3 pl-4 border-l border-border">
          <div className="text-right">
            <p className="text-sm font-medium text-foreground">Dr. Sarah Johnson</p>
            <p className="text-xs text-muted-foreground">Super Administrateur</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-semibold">
            SJ
          </div>
        </div>
      </div>
    </header>
  )
}
