import { Helmet } from 'react-helmet-async'

export function Dashboard() {
  return (
    <div>
      <Helmet title="Dashboard" />

      <h1>Dashboard</h1>
      <p>
        This is the dashboard page. You can see that it is loaded in the{' '}
        <code>src/pages/app/dashboard.tsx</code> file.
      </p>
    </div>
  )
}
