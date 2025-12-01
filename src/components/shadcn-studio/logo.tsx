import { cn } from '@/lib/utils'

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn('flex items-center', className)}>
      <img
        src='/eemi-assets/logo.svg'
        alt='EEMI - European Entrepreneurship And Management Institute'
        className='h-8 w-auto'
      />
    </div>
  )
}

export default Logo
