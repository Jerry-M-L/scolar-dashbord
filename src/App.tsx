import { useState, useEffect, useRef } from 'react'
import Sidebar from '@/components/dashboard/sidebar'
import TopNavigation from '@/components/dashboard/top-navigation'
import DashboardContent from '@/components/dashboard/dashboard-content'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [selectedView, setSelectedView] = useState<string>('overview')
  const mainRef = useRef<HTMLElement>(null)

  useEffect(() => {
    mainRef.current?.scrollTo({ top: 0, behavior: 'auto' })
  }, [selectedView])

  return (
      <div className="flex h-screen overflow-hidden bg-background text-foreground dark">
        <Sidebar open={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} selectedView={selectedView} onSelectView={setSelectedView} />
        
        <div className="flex flex-col flex-1 overflow-hidden">
          <TopNavigation sidebarOpen={sidebarOpen} onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
          
          <main ref={mainRef} className="flex-1 overflow-auto scrollbar-auto bg-background">
            <DashboardContent selectedView={selectedView} />
          </main>
        </div>
      </div>
  )
}

export default App
