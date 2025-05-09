import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-background to-secondary/20 px-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-chart-2 to-chart-4 rounded-lg opacity-20 blur-xl"></div>
          <div className="relative bg-card p-8 rounded-lg shadow-lg">
            <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
            <p className="text-xl text-muted-foreground mb-8">
              The page you are looking for doesn&#39;t exist or has been moved.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link href="/">Return Home</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
              >
                <Link href="/contact">Contact Support</Link>
              </Button>
            </div>
          </div>
        </div>
        <p className="text-muted-foreground">
          If you believe this is an error, please contact our support team.
        </p>
      </div>
    </div>
  )
}
