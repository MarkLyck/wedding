import { AlertTriangle } from 'lucide-react'

export const Alert = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center rounded border-[1px] border-red-600 bg-white py-2 px-3 text-sm text-red-600">
      <AlertTriangle className="mr-2 h-4 w-4" />
      {children}
    </div>
  )
}
