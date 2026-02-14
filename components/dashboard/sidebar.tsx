import {
  IconDashboard,
  IconUsers,
  IconGraduationCap,
  IconBookOpen,
  IconClass,
  IconLayoutList,
  IconCalendar,
  IconCalendarCheck,
  IconHelpCircle,
  IconSettings,
  IconLogOut,
  IconMenu,
  IconX,
  IconDollarSign,
  IconCheckSquare,
} from "@/components/icons/flaticon";

interface SidebarProps {
  open: boolean;
  onToggle: () => void;
  selectedView: string;
  onSelectView: (view: any) => void;
}

const menuItems = [
  { id: "overview", label: "Tableau de bord", icon: IconDashboard },
  { id: "students", label: "Élèves/ Étudiants", icon: IconUsers },
  { id: "staff", label: "Enseignants", icon: IconGraduationCap },
  { id: "parents", label: "Parents", icon: IconUsers },
  { id: "library", label: "Bibliothèque", icon: IconBookOpen },
  { id: "class", label: "Classe", icon: IconClass },
  { id: "subject", label: "Matière", icon: IconLayoutList },
  { id: "routine", label: "Emploi du temps", icon: IconCalendar },
  { id: "attendance", label: "Présence", icon: IconCalendarCheck },
  { id: "finances", label: "Finances", icon: IconDollarSign },
  { id: "validation", label: "Validations", icon: IconCheckSquare },
  { id: "help", label: "Aide", icon: IconHelpCircle },
  { id: "settings", label: "Paramètres", icon: IconSettings },
];

export default function Sidebar({
  open,
  onToggle,
  selectedView,
  onSelectView,
}: SidebarProps) {
  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={onToggle}
        className="fixed top-4 left-4 z-50 md:hidden p-2 rounded-lg bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-accent"
      >
        {open ? <IconX size={20} /> : <IconMenu size={20} />}
      </button>

      {/* Sidebar backdrop for mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-background/60 backdrop-blur-sm z-30 md:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:relative w-64 h-screen bg-sidebar text-sidebar-foreground border-r border-sidebar-border transition-transform duration-300 z-40 flex flex-col overflow-hidden shrink-0 ${
          open ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* Logo section */}
        <div className="p-6 border-b border-sidebar-border">
          <div className="flex items-center gap-2 mb-1">
            <img
              src="/ikoue_edu.png"
              alt="Ikoué Éducation"
              className="h-9 w-auto max-w-[180px] object-contain object-left"
            />
          </div>
          <p className="text-xs text-sidebar-foreground/60">v1.0.0</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 min-h-0 overflow-y-auto scrollbar-auto p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = selectedView === item.id;
            const iconClasses =
              item.id === "settings"
                ? "transition-transform duration-300 group-hover:animate-[spin_2s_linear_infinite]"
                : "";
            return (
              <button
                key={item.id}
                onClick={() => {
                  onSelectView(item.id);
                  // Close sidebar on mobile after selection
                  if (window.innerWidth < 768) onToggle();
                }}
                className={`group w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  isActive
                    ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-lg"
                    : "text-sidebar-foreground hover:bg-muted hover:text-sidebar-foreground"
                }`}
              >
                <Icon size={20} className={iconClasses} />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* User section */}
        <div className="p-4 border-t border-sidebar-border space-y-3">
          <div className="px-4 py-2">
            <p className="text-sm font-medium text-sidebar-foreground">
              Utilisateur Admin
            </p>
            <p className="text-xs text-sidebar-foreground/60">
              admin@school.edu
            </p>
          </div>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sidebar-foreground hover:bg-muted hover:text-sidebar-foreground transition-all duration-200">
            <IconLogOut size={18} />
            <span className="font-medium">Déconnexion</span>
          </button>
        </div>
      </aside>
    </>
  );
}
