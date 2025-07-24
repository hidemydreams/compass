"use client"

import { Button } from "@/shared/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/components/ui/card"
import { Badge } from "@/shared/components/ui/badge"
import {
  Zap,
  Users,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Shield,
  Clock,
  Percent, Filter
} from 'lucide-react';
import { usePopup } from '@/contexts/PopupContext';
import Logo from '@/shared/components/Logo';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/shared/components/ui/accordion';
import Image from 'next/image';
import capitalize from '@/shared/utils/capitalize';
import { settings } from '@/settings';
import HeroSection2 from '@/shared/components/HeroSection2';

const features = [
  "Unlimited job matches from all major job boards",
  "Advanced filtering by role, location, salary, and more",
  "Application tracking with saved jobs and status labels",
  "Priority support with faster response times"
];

const faqs = [
  {
    question: `When will ${settings.appName} be ready to use?`,
    answer:
      `We're launching ${settings.appName} in Q3 2025! Join our waitlist to get early access, development updates, and lock in our special launch pricing. We'll keep you posted on our progress every step of the way.`,
  },
  {
    question: "How is this different from LinkedIn or Indeed?",
    answer:
      "Great question! LinkedIn and Indeed show you every job that matches basic keywords. We actually read the job descriptions and your background to find jobs where you have a real shot at getting hired. Think of us as your personal job search assistant who pre-screens everything for you.",
  },
  {
    question: "Will my current employer find out I'm job searching?",
    answer:
      "Nope! Your profile is completely private. We never share your information with employers unless you explicitly apply to their job. Your current company won't have any idea you're looking.",
  },
  {
    question: "What job boards do you search?",
    answer:
      "We search 43 job boards including LinkedIn, Indeed, AngelList, Glassdoor, Stack Overflow Jobs, and tons of smaller niche boards. We also check company career pages directly. Basically, if there's a job posted online, we'll find it.",
  },
  {
    question: "How do I know this will actually work?",
    answer:
      `We're building ${settings.appName} because we've felt the same frustration - spending hours browsing job boards only to apply to positions that don't fit. Our AI focuses on quality matches over quantity, so you spend time applying to jobs you might actually get, not jobs that ignore your application.`,
  },
];

function LandingPage() {
  const {open} = usePopup();


  return (
    <div className='min-h-screen bg-white'>
      {/* Navigation */}
      <nav className='sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-200'>
        <div className='container mx-auto px-4 py-4'>
          <div className='flex items-center justify-between'>
            <Logo />
            <div className='flex items-center space-x-6'>
              {/*<a href="#how-it-works" className="text-gray-600 hover:text-gray-900">*/}
              {/*  How it works*/}
              {/*</a>*/}
              {/*<a href="#features" className="text-gray-600 hover:text-gray-900">*/}
              {/*  Features*/}
              {/*</a>*/}
              {/*<a href="#" className="text-gray-600 hover:text-gray-900">*/}
              {/*  Blog*/}
              {/*</a>*/}
              <Button
                onClick={() => open('waitlist')}
                size='sm'
                className='bg-purple-600 hover:bg-purple-700'
              >
                Join waitlist
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      {/*<HeroSection />*/}
      <HeroSection2 />

      <section id='how-it-works' className='px-4 py-12 sm:py-16 bg-gray-50'>
        <div className='container mx-auto max-w-6xl px-2 sm:px-0'>
          <div className='text-center mb-12 sm:mb-16 px-2 sm:px-0'>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4'>
              The job search is broken{' '}
              <span className='text-purple-600 italic'>and we fixed it</span>
            </h2>
            <p className='text-base sm:text-lg text-gray-600 max-w-xl mx-auto'>
              {capitalize(settings.appName)} pulls vacancies from all major job
              boards and presents them in a single, easy-to-use dashboard for
              you.
            </p>
          </div>

          {/* Main Product Screenshot */}
          <div className='relative mb-12 sm:mb-20 max-w-full mx-auto'>
            {/* Background decorations */}
            <div className='hidden sm:block absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full opacity-20 blur-3xl'></div>
            <div className='hidden sm:block absolute -bottom-4 -right-4 w-96 h-96 bg-gradient-to-tl from-green-200 to-yellow-200 rounded-full opacity-20 blur-3xl'></div>

            {/* Screenshot container */}
            <div className='relative bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden max-w-[300px] w-full md:max-w-full mx-auto'>
              {/* Browser chrome */}
              <div className='bg-gray-100 px-4 py-3 border-b border-gray-200'>
                <div className='flex items-center space-x-2'>
                  <div className='flex space-x-1'>
                    <div className='w-3 h-3 bg-red-400 rounded-full'></div>
                    <div className='w-3 h-3 bg-yellow-400 rounded-full'></div>
                    <div className='w-3 h-3 bg-green-400 rounded-full'></div>
                  </div>
                  <div className='flex-1 bg-white rounded-md px-3 py-1 text-xs sm:text-sm text-gray-600 ml-4 truncate'>
                    {settings.appName.toLowerCase()}.app/dashboard
                  </div>
                </div>
              </div>

              {/* Dashboard screenshot */}
              <div className='relative h-[500px] sm:h-[500px] md:h-[600px] lg:h-[700px]'>
                {/* Mobile image: visible below md */}
                <Image
                  fill
                  className='w-full h-auto object-contain block md:hidden'
                  src={'/mobile.png'}
                  alt='Mobile screenshot showcase'
                />

                {/* Desktop image: visible from md and above */}
                <Image
                  fill
                  className='w-full h-auto object-contain hidden md:block'
                  src={'/showcase.png'}
                  alt='Desktop screenshot showcase'
                />

                {/* Floating feature callouts - visible on sm+ */}
                <div className='hidden md:flex absolute top-4 right-4 bg-white rounded-lg shadow-lg p-3 border border-gray-200 max-w-xs w-full max-w-[12rem] flex-col space-y-1'>
                  <div className='flex items-center space-x-2'>
                    <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></div>
                    <span className='text-xs font-medium text-gray-900'>
                      Live Updates
                    </span>
                  </div>
                  <p className='text-xs text-gray-600'>
                    New matches appear in real-time as they&apos;re posted
                  </p>
                </div>

                <div className='hidden md:flex absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-3 border border-gray-200 max-w-xs w-full max-w-[13rem] flex-col space-y-1'>
                  <div className='flex items-center space-x-2'>
                    <Percent className='h-4 w-4 text-purple-600' />
                    <span className='text-xs font-medium text-gray-900'>
                      Match Score
                    </span>
                  </div>
                  <p className='text-xs text-gray-600'>
                    AI analyzes 50+ factors to find your perfect fit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className='px-4 py-20 bg-white'>
        <div className='container mx-auto max-w-6xl'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              Everything you need to land{' '}
              <span className='text-purple-600 italic'>your next job</span>
            </h2>
            <p className='text-lg text-gray-600'>
              No fluff, just the tools that actually help you get hired.
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <Card className='border-0 transition-shadow shadow-none'>
              <CardContent className='p-6'>
                <div className='bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4'>
                  <Zap className='h-6 w-6 text-purple-600' />
                </div>
                <h3 className='font-semibold text-gray-900 mb-2'>
                  Smart job matching
                </h3>
                <p className='text-gray-600 text-sm'>
                  Our AI actually reads job descriptions and compares them to
                  your background. No more keyword spam.
                </p>
              </CardContent>
            </Card>

            <Card className='border-0 transition-shadow shadow-none'>
              <CardContent className='p-6'>
                <div className='bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4'>
                  <Clock className='h-6 w-6 text-blue-600' />
                </div>
                <h3 className='font-semibold text-gray-900 mb-2'>
                  Daily job alerts
                </h3>
                <p className='text-gray-600 text-sm'>
                  Get an email every morning with new jobs that match your
                  profile. Skip the ones that don&apos;t.
                </p>
              </CardContent>
            </Card>

            <Card className='border-0 transition-shadow shadow-none'>
              <CardContent className='p-6'>
                <div className='bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4'>
                  <BarChart3 className='h-6 w-6 text-green-600' />
                </div>
                <h3 className='font-semibold text-gray-900 mb-2'>
                  Application tracking
                </h3>
                <p className='text-gray-600 text-sm'>
                  Keep track of where you&apos;ve applied, when to follow up,
                  and what happened. Finally, some organization.
                </p>
              </CardContent>
            </Card>

            <Card className='border-0 transition-shadow shadow-none'>
              <CardContent className='p-6'>
                <div className='bg-yellow-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4'>
                  <Users className='h-6 w-6 text-yellow-600' />
                </div>
                <h3 className='font-semibold text-gray-900 mb-2'>
                  Multiple profiles
                </h3>
                <p className='text-gray-600 text-sm'>
                  Create multiple profiles to be sure you are getting everything
                </p>
              </CardContent>
            </Card>

            <Card className='border-0 transition-shadow shadow-none'>
              <CardContent className='p-6'>
                <div className='bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4'>
                  <Filter className='h-6 w-6 text-red-600' />
                </div>
                <h3 className='font-semibold text-gray-900 mb-2'>
                  Advanced filtering
                </h3>
                <p className='text-gray-600 text-sm'>
                  Filter jobs as you would filter them on any job board
                </p>
              </CardContent>
            </Card>

            <Card className='border-0 shadow-none'>
              <CardContent className='p-6'>
                <div className='bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4'>
                  <Shield className='h-6 w-6 text-indigo-600' />
                </div>
                <h3 className='font-semibold text-gray-900 mb-2'>
                  Privacy first
                </h3>
                <p className='text-gray-600 text-sm'>
                  Your current employer will never know you&apos;re looking. We
                  keep your job search completely confidential.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id='pricing' className='px-4 py-20 bg-white'>
        <div className='container mx-auto max-w-5xl'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              Simple, honest pricing
            </h2>
            <p className='text-lg text-gray-600'>
              Join waitlist. No credit card required.
            </p>
          </div>

          <div className='flex'>
            <Card className='border-2 border-purple-600 relative max-w-lg mx-auto w-full'>
              <Badge className='absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white'>
                Most popular
              </Badge>
              <CardHeader className='text-center'>
                <CardTitle className='text-xl'>Pro</CardTitle>
                <div className='text-4xl font-bold my-2'>$5.99</div>
                <CardDescription>For serious job seekers</CardDescription>
              </CardHeader>
              <CardContent className='space-y-4'>
                <ul className='space-y-3'>
                  {features.map((item, index) => (
                    <li key={index} className='flex items-center space-x-2'>
                      <CheckCircle className='h-4 w-4 text-green-500' />
                      <span className='text-sm'>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => open('waitlist')}
                  className='w-full bg-purple-600 hover:bg-purple-700'
                >
                  Join waitlist
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className='text-center mt-8 text-sm text-gray-600'>
            <p>Cancel anytime. No questions asked. No spam.</p>
          </div>
        </div>
      </section>

      <section className='px-4 py-20 bg-gray-50'>
        <div className='container mx-auto max-w-3xl'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              Questions? We&apos;ve got answers.
            </h2>
          </div>

          <Accordion type='single' collapsible className='space-y-4'>
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index + 1}`}
                className="bg-white rounded-lg px-6 border-0 shadow-sm"
              >
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className='px-4 py-20 bg-purple-600 text-white'>
        <div className='container mx-auto max-w-4xl text-center'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Ready to find your next job?
          </h2>
          <p className='text-xl mb-8 text-purple-100'>
            Find jobs where you&apos;re actually a strong match — with{' '}
            {settings.appName}.
          </p>
          <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
            <Button
              onClick={() => open('waitlist')}
              size='lg'
              className='bg-white text-purple-600 hover:bg-gray-100 px-8 py-3'
            >
              Join waitlist
              <ArrowRight className='ml-2 h-5 w-5' />
            </Button>
          </div>
          <p className='text-sm text-purple-200 mt-4'>
            Leave your email • No credit card required
          </p>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;