import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const lineData = [
  { month: 'Jan', students: 0, staff: 0, revenue: 0 },
  { month: 'Fév', students: 0, staff: 0, revenue: 0 },
  { month: 'Mar', students: 0, staff: 0, revenue: 0 },
  { month: 'Avr', students: 0, staff: 0, revenue: 0 },
  { month: 'Mai', students: 0, staff: 0, revenue: 0 },
  { month: 'Jui', students: 0, staff: 0, revenue: 0 },
]

const barData = [
  { school: 'Lycée Central', enrollment: 0, staff: 0, budget: 0 },
  { school: 'Collège Est', enrollment: 0, staff: 0, budget: 0 },
  { school: 'École Primaire Ouest', enrollment: 0, staff: 0, budget: 0 },
  { school: 'Académie Nord', enrollment: 0, staff: 0, budget: 0 },
  { school: 'Collège Sud', enrollment: 0, staff: 0, budget: 0 },
  { school: 'Préparatoire Centre-ville', enrollment: 0, staff: 0, budget: 0 },
]

const pieData = [
  { name: 'Approuvé', value: 0, color: '#10b981' },
  { name: 'En attente', value: 0, color: '#f59e0b' },
  { name: 'Rejeté', value: 0, color: '#ef4444' },
  { name: 'En révision', value: 0, color: '#3b82f6' },
]

export default function Charts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
      {/* Line Chart - Enrollment Trends */}
      <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
        <div className="mb-6">
          <h3 className="text-lg font-bold text-foreground">Tendances des inscriptions</h3>
          <p className="text-sm text-muted-foreground">Vue d'ensemble sur 6 mois</p>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={lineData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis stroke="hsl(var(--muted-foreground))" style={{ fontSize: '12px' }} />
            <YAxis stroke="hsl(var(--muted-foreground))" style={{ fontSize: '12px' }} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--card))', 
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px'
              }}
              labelStyle={{ color: 'hsl(var(--foreground))' }}
            />
            <Legend />
            <Line type="monotone" dataKey="students" name="Étudiants" stroke="hsl(var(--chart-1))" strokeWidth={2} dot={{ r: 4 }} />
            <Line type="monotone" dataKey="staff" name="Personnel" stroke="hsl(var(--chart-2))" strokeWidth={2} dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart - School Performance */}
      <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
        <div className="mb-6">
          <h3 className="text-lg font-bold text-foreground">Performance des écoles</h3>
          <p className="text-sm text-muted-foreground">Inscriptions par école</p>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="school" stroke="hsl(var(--muted-foreground))" style={{ fontSize: '11px' }} angle={-45} textAnchor="end" height={80} />
            <YAxis stroke="hsl(var(--muted-foreground))" style={{ fontSize: '12px' }} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--card))', 
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px'
              }}
              labelStyle={{ color: 'hsl(var(--foreground))' }}
            />
            <Legend />
            <Bar dataKey="enrollment" name="Inscriptions" fill="hsl(var(--chart-1))" radius={[8, 8, 0, 0]} />
            <Bar dataKey="staff" name="Personnel" fill="hsl(var(--chart-2))" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart - Validation Status */}
      <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
        <div className="mb-6">
          <h3 className="text-lg font-bold text-foreground">Statut des validations</h3>
          <p className="text-sm text-muted-foreground">Répartition globale des demandes</p>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, value }) => `${name} ${value}%`}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--card))', 
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px'
              }}
              labelStyle={{ color: 'hsl(var(--foreground))' }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Revenue Trend */}
      <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
        <div className="mb-6">
          <h3 className="text-lg font-bold text-foreground">Tendance des revenus</h3>
          <p className="text-sm text-muted-foreground">Croissance mensuelle des revenus</p>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={lineData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis stroke="hsl(var(--muted-foreground))" style={{ fontSize: '12px' }} />
            <YAxis stroke="hsl(var(--muted-foreground))" style={{ fontSize: '12px' }} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--card))', 
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px'
              }}
              labelStyle={{ color: 'hsl(var(--foreground))' }}
              formatter={(value) => `${(Number(value) / 1000000).toFixed(1)}M FCFA`}
            />
            <Bar dataKey="revenue" fill="hsl(var(--chart-4))" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
