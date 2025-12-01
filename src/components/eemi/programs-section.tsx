import { Button } from '@/components/ui/button'

type Program = {
  title: string
  href: string
}

type ProgramCategory = {
  category: string
  programs: Program[]
}

const ListIcon = () => (
  <svg
    role="graphics-symbol"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-shrink-0"
  >
    <path d="M8 8L15.9998 3.03374e-05L8 2.9638e-05L8 8Z" fill="#BBFF6D"></path>
    <path d="M16 0L8.00023 7.99997L16 7.99997L16 0Z" fill="#BBFF6D"></path>
    <path d="M8 16L15.9998 8.00003L8 8.00003L8 16Z" fill="#BBFF6D"></path>
    <path d="M8 0L0.00022705 7.99997L8 7.99997L8 0Z" fill="#BBFF6D"></path>
  </svg>
)

const programsData: ProgramCategory[] = [
  {
    category: 'Foundation',
    programs: [
      { title: 'Business and Technology Foundation', href: '/foundation-programs#foundation-business' },
      { title: 'English Foundation', href: '/foundation-programs#foundation-english' }
    ]
  },
  {
    category: 'Bachelor Degree',
    programs: [{ title: 'Bachelor of Business Administration', href: '/bachelor-of-business-administration' }]
  },
  {
    category: 'Masters Degrees',
    programs: [
      {
        title: 'Master in Entrepreneurship and Startups Management',
        href: '/master-in-entrepreneurship-and-startups-management/'
      },
      {
        title: 'Master in Digital Marketing and Entrepreneurship',
        href: '/master-in-digital-marketing-and-entrepreneurship/'
      }
    ]
  }
]

const ProgramsSection = () => {
  return (
    <section className='relative py-16 sm:py-20 lg:py-24 bg-background overflow-hidden'>
      {/* Background pattern */}
      <img
        src='/eemi-assets/pattern-bg-1.svg'
        alt=''
        className='absolute right-0 bottom-0 w-1/3 h-auto opacity-20 pointer-events-none'
        aria-hidden='true'
      />

      <div className='relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid gap-12 lg:grid-cols-2 lg:gap-16'>
          {/* Left Column - Image and Title */}
          <div className='space-y-6'>
            <div className='relative'>
              <img
                src='/eemi-assets/home-programs-2.jpg'
                alt='EEMI Programs'
                className='w-full rounded-lg object-cover'
              />
            </div>
            <div>
              <h2 className='text-3xl font-bold text-foreground mb-2 sm:text-4xl lg:text-5xl'>Our Programs</h2>
              <div className='w-20 h-1 bg-primary'></div>
            </div>
          </div>

          {/* Right Column - Programs List */}
          <div className='space-y-8'>
            {programsData.map((category, categoryIndex) => (
              <div key={categoryIndex} className='space-y-4'>
                <h3 className='text-2xl font-bold text-foreground sm:text-3xl'>{category.category}</h3>
                <ul className='space-y-3'>
                  {category.programs.map((program, programIndex) => (
                    <li key={programIndex}>
                      <a
                        href={program.href}
                        className='flex items-start gap-3 text-foreground/90 hover:text-primary transition-colors group'
                      >
                        <ListIcon />
                        <span className='text-base sm:text-lg group-hover:underline'>{program.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className='mt-16 pt-12 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6'>
          <p className='text-base text-foreground/90 sm:text-lg max-w-md'>
            Receive the information of all our programs in your email.
          </p>
          <Button size='lg' asChild>
            <a href='#programs-section'>Download Our Catalogue</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ProgramsSection
