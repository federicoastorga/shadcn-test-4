import { Card, CardContent } from '@/components/ui/card'

type Feature = {
  image: string
  icon: string
  title: string
  description: string
}

const featuresData: Feature[] = [
  {
    image: '/eemi-assets/home-about-bsem-1-4.jpg',
    icon: '/eemi-assets/Icon-whysection-homepage.svg',
    title: 'Study in Barcelona',
    description: "Gain experience in Europe's leading startups ecosystem and a major international business hub."
  },
  {
    image: '/eemi-assets/home-about-bsem-1-3.jpg',
    icon: '/eemi-assets/Icon-whysection-homepage.svg',
    title: 'Leverage the flexibility of online learning opportunities',
    description: 'All our students have access to the same pool of professors ensuring consistent quality of education for both online and on campus modalites.'
  },
  {
    image: '/eemi-assets/home-about-bsem-3-2.jpg',
    icon: '/eemi-assets/Icon-whysection-homepage.svg',
    title: 'Responsive and Personalized advisory',
    description: 'Receive support from a dedicated student advisor, available to assist you with program information, enrollment and visa procedures if needed, until you start the program.'
  }
]

const FeaturesSection = () => {
  return (
    <section className='py-16 sm:py-20 lg:py-24 bg-[#F5F3FF]'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {featuresData.map((feature, index) => (
            <Card key={index} className='overflow-visible border-0 shadow-none bg-transparent'>
              <CardContent className='p-0'>
                {/* Image Container */}
                <div className='relative mb-8'>
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className='w-full rounded-lg object-cover'
                  />
                  {/* Overlapping Icon */}
                  <div className='absolute -bottom-6 left-0'>
                    <img
                      src={feature.icon}
                      alt=''
                      className='w-10 h-10'
                      aria-hidden='true'
                    />
                  </div>
                </div>

                {/* Content */}
                <div className='pt-4'>
                  <h2 className='text-xl font-bold text-[#2E4A9E] mb-3 leading-tight sm:text-2xl'>
                    {feature.title}
                  </h2>
                  <p className='text-[#4A4A4A] text-base leading-relaxed'>
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
