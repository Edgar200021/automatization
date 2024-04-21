import { ProtectedRoute } from '@/components/ProtectedRoute/ProtectedRoute'
import { Sidebar } from '@/components/Sidebar/Sidebar'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard',
}

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="min-h-[100svh] grid grid-cols-5 gap-x-5">
      <div className="col-span-1">
        <Sidebar />
      </div>
      {/*<ProtectedRoute>*/}
        <div className="col-span-4 py-10">{children}</div>
      {/*</ProtectedRoute>*/}
    </div>
  )
}
