"use client"

import { Button } from "@/shared/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/components/ui/card"
import { Badge } from "@/shared/components/ui/badge"
import {
  Upload,
  Search,
  Target,
  Zap,
  Users,
  BarChart3,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Shield,
  Clock,
  MessageCircle,
  Coffee, Wand2Icon
} from 'lucide-react';
import { usePopup } from '@/contexts/PopupContext';

function LandingPage() {
  const {open} = usePopup();


  return (
    <div className='min-h-screen bg-white'>
      {/* Navigation */}

      {/* Hero Section */}
      <section className='px-4 py-16 md:py-24'>
        <div className='container mx-auto max-w-5xl'>
          <div className='flex items-center space-x-2 justify-center mb-12'>
            <div className='w-7 h-7 bg-purple-600 rounded-lg flex items-center justify-center transform'>
              <Target className='h-5 w-5 text-white transform' />
            </div>
            <span className='text-xl font-bold text-gray-900'>compass</span>
          </div>
          <div className='text-center mb-12'>
            <div className='inline-flex items-center bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-8'>
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
              We built Compass because we were tired of applying to 100+ jobs
              and hearing nothing back. Now our AI finds jobs where you actually
              have a shot at getting hired.
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

      {/* Problem Section */}
      <section id='how-it-works' className='px-4 py-16 bg-gray-50'>
        <div className='container mx-auto max-w-6xl'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              The job search is broken (and we&apos;re fixing it)
            </h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              We&apos;ve all been there - sending out dozens of applications into the
              void. Here&apos;s what we&apos;re doing differently.
            </p>
          </div>

          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div className='space-y-8'>
              <div className='flex items-start space-x-4'>
                <div className='bg-purple-100 p-3 rounded-lg flex-shrink-0'>
                  <Upload className='h-6 w-6 text-purple-600' />
                </div>
                <div>
                  <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                    Upload your resume (or don&apos;t)
                  </h3>
                  <p className='text-gray-600'>
                    Drag and drop your resume, or just tell us about yourself.
                  </p>&apos;
                </div>
              </div>

              <div className='flex items-start space-x-4'>
                <div className='bg-blue-100 p-3 rounded-lg flex-shrink-0'>
                  <Search className='h-6 w-6 text-blue-600' />
                </div>
                <div>
                  <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                    We do the searching for you
                  </h3>
                  <p className='text-gray-600'>
                    Our system checks LinkedIn, Indeed, AngelList, and 40+ other
                    job boards every day. No more endless scrolling through
                    irrelevant postings.
                  </p>
                </div>
              </div>

              <div className='flex items-start space-x-4'>
                <div className='bg-green-100 p-3 rounded-lg flex-shrink-0'>
                  <Target className='h-6 w-6 text-green-600' />
                </div>
                <div>
                  <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                    Only see jobs you might actually get
                  </h3>
                  <p className='text-gray-600'>
                    We score each job based on your background and their
                    requirements. No more applying to &quot;entry-level&quot; jobs that
                    want 5 years of experience.
                  </p>
                </div>
              </div>
            </div>

            <div className='relative'>
              <div className='bg-white rounded-2xl p-6 shadow-lg'>
                <div className='flex items-center justify-between mb-4'>
                  <h4 className='font-semibold text-gray-900'>
                    Your matches today
                  </h4>
                  <Badge className='bg-green-100 text-green-700 text-xs pointer-events-none'>
                    3 new
                  </Badge>
                </div>

                <div className='space-y-3'>
                  <div className='bg-purple-50 rounded-lg p-4 border-l-4 border-purple-400'>
                    <div className='flex items-center justify-between mb-2'>
                      <div>
                        <div className='font-medium text-gray-900'>
                          Senior React Developer
                        </div>
                        <div className='text-sm text-gray-600'>
                          Stripe • San Francisco
                        </div>
                      </div>
                      <Badge className='bg-green-100 text-green-700 text-xs pointer-events-none'>
                        92% match
                      </Badge>
                    </div>
                    <div className='text-xs text-gray-500'>
                      Posted 2 hours ago
                    </div>
                  </div>

                  <div className='bg-blue-50 rounded-lg p-4 border-l-4 border-blue-400'>
                    <div className='flex items-center justify-between mb-2'>
                      <div>
                        <div className='font-medium text-gray-900'>
                          Frontend Engineer
                        </div>
                        <div className='text-sm text-gray-600'>
                          Notion • Remote
                        </div>
                      </div>
                      <Badge className='bg-green-100 text-green-700 text-xs pointer-events-none'>
                        89% match
                      </Badge>
                    </div>
                    <div className='text-xs text-gray-500'>
                      Posted 1 day ago
                    </div>
                  </div>

                  <div className='bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-400'>
                    <div className='flex items-center justify-between mb-2'>
                      <div>
                        <div className='font-medium text-gray-900'>
                          Product Engineer
                        </div>
                        <div className='text-sm text-gray-600'>
                          Linear • New York
                        </div>
                      </div>
                      <Badge className='bg-green-100 text-green-700 text-xs pointer-events-none'>
                        85% match
                      </Badge>
                    </div>
                    <div className='text-xs text-gray-500'>
                      Posted 3 days ago
                    </div>
                  </div>
                </div>
              </div>

              <div className='absolute -top-2 -right-2 bg-yellow-400 rounded-full p-2'>
                <TrendingUp className='h-4 w-4 text-yellow-800' />
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
              Everything you need to land your next job
            </h2>
            <p className='text-lg text-gray-600'>
              No fluff, just the tools that actually help you get hired.
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <Card className='border-0 transition-shadow'>
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

            <Card className='border-0 transition-shadow'>
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

            <Card className='border-0 transition-shadow'>
              <CardContent className='p-6'>
                <div className='bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4'>
                  <BarChart3 className='h-6 w-6 text-green-600' />
                </div>
                <h3 className='font-semibold text-gray-900 mb-2'>
                  Application tracking
                </h3>
                <p className='text-gray-600 text-sm'>
                  Keep track of where you&apos;ve applied, when to follow up, and
                  what happened. Finally, some organization.
                </p>
              </CardContent>
            </Card>

            <Card className='border-0 transition-shadow'>
              <CardContent className='p-6'>
                <div className='bg-yellow-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4'>
                  <Users className='h-6 w-6 text-yellow-600' />
                </div>
                <h3 className='font-semibold text-gray-900 mb-2'>
                  Company research
                </h3>
                <p className='text-gray-600 text-sm'>
                  Get the inside scoop on company culture, interview processes,
                  and what it&apos;s really like to work there.
                </p>
              </CardContent>
            </Card>

            <Card className='border-0 transition-shadow'>
              <CardContent className='p-6'>
                <div className='bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4'>
                  <MessageCircle className='h-6 w-6 text-red-600' />
                </div>
                <h3 className='font-semibold text-gray-900 mb-2'>
                  Interview prep
                </h3>
                <p className='text-gray-600 text-sm'>
                  Practice common interview questions and get tips specific to
                  the companies you&apos;re applying to.
                </p>
              </CardContent>
            </Card>

            <Card className='border-0'>
              <CardContent className='p-6'>
                <div className='bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4'>
                  <Shield className='h-6 w-6 text-indigo-600' />
                </div>
                <h3 className='font-semibold text-gray-900 mb-2'>
                  Privacy first
                </h3>
                <p className='text-gray-600 text-sm'>
                  Your current employer will never know you&apos;re looking. We keep
                  your job search completely confidential.
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
              Try it free for 14 days. No credit card required.
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
                  <li className='flex items-center space-x-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    <span className='text-sm'>Unlimited job matches</span>
                  </li>
                  <li className='flex items-center space-x-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    <span className='text-sm'>Advanced filtering</span>
                  </li>
                  <li className='flex items-center space-x-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    <span className='text-sm'>Application tracking</span>
                  </li>
                  <li className='flex items-center space-x-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    <span className='text-sm'>Company research</span>
                  </li>
                  <li className='flex items-center space-x-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    <span className='text-sm'>Interview prep</span>
                  </li>
                  <li className='flex items-center space-x-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    <span className='text-sm'>Priority support</span>
                  </li>
                </ul>
                <Button onClick={() => open('waitlist')} className='w-full bg-purple-600 hover:bg-purple-700'>
                  Join waitlist
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className='text-center mt-8 text-sm text-gray-600'>
            <p>
              Cancel anytime. No questions asked. No spam.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {/*<section className="px-4 py-20 bg-gray-50">*/}
      {/*  <div className="container mx-auto max-w-3xl">*/}
      {/*    <div className="text-center mb-16">*/}
      {/*      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Questions? We've got answers.</h2>*/}
      {/*    </div>*/}

      {/*    <Accordion type="single" collapsible className="space-y-4">*/}
      {/*      <AccordionItem value="item-1" className="bg-white rounded-lg px-6 border-0 shadow-sm">*/}
      {/*        <AccordionTrigger className="text-left font-medium">*/}
      {/*          How is this different from LinkedIn or Indeed?*/}
      {/*        </AccordionTrigger>*/}
      {/*        <AccordionContent className="text-gray-600">*/}
      {/*          Great question! LinkedIn and Indeed show you every job that matches basic keywords. We actually read the*/}
      {/*          job descriptions and your background to find jobs where you have a real shot at getting hired. Think of*/}
      {/*          us as your personal job search assistant who pre-screens everything for you.*/}
      {/*        </AccordionContent>*/}
      {/*      </AccordionItem>*/}

      {/*      <AccordionItem value="item-2" className="bg-white rounded-lg px-6 border-0 shadow-sm">*/}
      {/*        <AccordionTrigger className="text-left font-medium">*/}
      {/*          Will my current employer find out I'm job searching?*/}
      {/*        </AccordionTrigger>*/}
      {/*        <AccordionContent className="text-gray-600">*/}
      {/*          Nope! Your profile is completely private. We never share your information with employers unless you*/}
      {/*          explicitly apply to their job. Your current company won't have any idea you're looking.*/}
      {/*        </AccordionContent>*/}
      {/*      </AccordionItem>*/}

      {/*      <AccordionItem value="item-3" className="bg-white rounded-lg px-6 border-0 shadow-sm">*/}
      {/*        <AccordionTrigger className="text-left font-medium">What job boards do you search?</AccordionTrigger>*/}
      {/*        <AccordionContent className="text-gray-600">*/}
      {/*          We search 43 job boards including LinkedIn, Indeed, AngelList, Glassdoor, Stack Overflow Jobs, and tons*/}
      {/*          of smaller niche boards. We also check company career pages directly. Basically, if there's a job posted*/}
      {/*          online, we'll find it.*/}
      {/*        </AccordionContent>*/}
      {/*      </AccordionItem>*/}

      {/*      <AccordionItem value="item-4" className="bg-white rounded-lg px-6 border-0 shadow-sm">*/}
      {/*        <AccordionTrigger className="text-left font-medium">*/}
      {/*          Can I cancel my subscription anytime?*/}
      {/*        </AccordionTrigger>*/}
      {/*        <AccordionContent className="text-gray-600">*/}
      {/*          Absolutely. Cancel with one click from your account settings. No phone calls, no hassle. If you cancel*/}
      {/*          within your first 14 days, we'll refund you completely.*/}
      {/*        </AccordionContent>*/}
      {/*      </AccordionItem>*/}

      {/*      <AccordionItem value="item-5" className="bg-white rounded-lg px-6 border-0 shadow-sm">*/}
      {/*        <AccordionTrigger className="text-left font-medium">*/}
      {/*          Do you work for remote jobs and international positions?*/}
      {/*        </AccordionTrigger>*/}
      {/*        <AccordionContent className="text-gray-600">*/}
      {/*          Yes! We search for remote positions and jobs in over 50 countries. Just set your location preferences*/}
      {/*          and we'll find opportunities that match, whether they're down the street or on the other side of the*/}
      {/*          world.*/}
      {/*        </AccordionContent>*/}
      {/*      </AccordionItem>*/}
      {/*    </Accordion>*/}
      {/*  </div>*/}
      {/*</section>*/}

      {/* CTA */}
      <section className='px-4 py-20 bg-purple-600 text-white'>
        <div className='container mx-auto max-w-4xl text-center'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Ready to find your next job?
          </h2>
          <p className='text-xl mb-8 text-purple-100'>
            Join 2,847 people who found jobs this month with Compass.
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