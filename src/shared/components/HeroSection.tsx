import { Coffee, Wand2Icon } from 'lucide-react';
import { settings } from '@/settings';
import { Button } from '@/shared/components/ui/button';

const HeroSection = () => {
  return <section
    style={{ minHeight: 'calc(100vh - 64px)' }}
    className='px-4 py-16 md:py-24 min-h-screen flex items-center justify-center'
  >
    <div className='container mx-auto max-w-5xl'>
      <div className='text-center mb-12'>
        <div
          className='inline-flex items-center bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-8'>
          <Coffee className='h-4 w-4 mr-2' />
          Built by job seekers, for job seekers
        </div>

        <h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight'>
          Stop wasting time on{' '}
          <span className='text-purple-600 decoration-purple-300 italic'>
                job applications
              </span>
          <br />
          that go nowhere
        </h1>

        <p className='text-lg text-gray-600 mb-10 max-w-3xl mx-auto'>
          Tired of sending 100 applications and hearing crickets? {settings.appName} finds roles where you’re actually a
          strong fit — so you apply
          smarter, not harder.
        </p>

        <div className='flex flex-col sm:flex-row items-center justify-center gap-4 mb-8'>
          <Button
            onClick={() => open('waitlist')}
            size='lg'
            className='bg-purple-600 hover:bg-purple-700 px-8 py-3 text-md'
          >
            Join waitlist
            <Wand2Icon className='ml-2 h-5 w-5' />
          </Button>
        </div>
      </div>
    </div>
  </section>
}

export default HeroSection