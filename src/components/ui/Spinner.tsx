import { cn } from '@/lib/utils/classnames'

interface SpinnerProps {
  className?: string
}

export const Spinner = ({ className }: SpinnerProps) => {
  return (
    <div
      className={cn(
        'h-6 w-6 border-2 border-t-2 border-secondary border-t-primary rounded-full animate-spin',
        className,
      )}
    />
  )
}
