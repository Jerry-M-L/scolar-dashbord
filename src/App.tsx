import { useState } from 'react'
import { ThemeProvider } from '@/components/theme-provider'
import Sidebar from '@/components/dashboard/sidebar'
import TopNavigation from '@/components/dashboard/top-navigation'
import DashboardContent from '@/components/dashboard/dashboard-content'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [selectedView, setSelectedView] = useState<string>('overview')

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="flex h-screen bg-background text-foreground dark">
        <Sidebar open={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} selectedView={selectedView} onSelectView={setSelectedView} />
        
        <div className="flex flex-col flex-1 overflow-hidden">
          <TopNavigation sidebarOpen={sidebarOpen} onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
          
          <main className="flex-1 overflow-auto bg-gradient-to-br from-background to-secondary/20">
            <DashboardContent selectedView={selectedView} />
          </main>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
