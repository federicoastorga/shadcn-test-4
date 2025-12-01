import { Button } from '@/components/ui/button'

const HeroSection = () => {
  return (
    <section className='relative flex min-h-[calc(100dvh-8rem)] flex-1 flex-col justify-center overflow-visible py-8 sm:py-12'>
      <div className='relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8'>
        {/* Hero Content */}
        <div className='flex flex-col gap-4 lg:gap-6'>
          <h1 className='text-3xl font-bold leading-tight text-balance sm:text-4xl lg:text-5xl xl:text-6xl'>
            Flexible, Innovative and Purpose-Driven Education for Entrepreneurs and Executives
          </h1>

          <p className='text-base text-foreground/90 sm:text-lg'>
            With EEMI, embark on your entrepreneurial venture during your studies and become part of an international network of successful entrepreneurs and executives.
          </p>

          <div className='flex flex-wrap gap-4'>
            <Button size='lg' asChild>
              <a href='#programs'>Our programs</a>
            </Button>
            <Button size='lg' variant='outline' asChild>
              <a href='#contact'>Contact us</a>
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className='relative lg:-mb-8 lg:self-end'>
          {/* Background pattern */}
          <img
            src='/eemi-assets/pattern-bg-1.svg'
            alt=''
            className='absolute -inset-8 w-[120%] h-[120%] object-contain opacity-30 pointer-events-none'
            aria-hidden='true'
          />
          <img
            src='/eemi-assets/hero-image.png'
            alt='EEMI Students collaborating'
            className='relative z-10 w-full'
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
