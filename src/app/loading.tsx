import { Spinner } from '@/components/ui/Spinner'

export default function LoadingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-background to-secondary/20 px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-chart-1 to-chart-3 rounded-lg opacity-20 blur-xl"></div>
          <div className="relative bg-card p-8 rounded-lg shadow-lg">
            <div className="flex justify-center mb-6">
              <Spinner className="h-16 w-16 border-4 border-t-4 border-secondary border-t-primary" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Loading</h1>
            <p className="text-muted-foreground">
              Please wait while we prepare your content...
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
