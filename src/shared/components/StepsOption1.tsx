import { Upload, Search, Target, TrendingUp } from "lucide-react"
import { Badge } from '@/shared/components/ui/badge';
import { Button } from '@/shared/components/ui/button';

export function StepsOption1() {
  return (
    <section className="px-4 py-16 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The job search is broken (and we&apos;re fixing it)
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We&apos;ve all been there - sending out dozens of applications into the void. Here&apos;s what we&apos;re doing
            differently.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Timeline Design */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-16 bottom-16 w-0.5 bg-gradient-to-b from-purple-400 via-blue-400 to-green-400"></div>

            <div className="space-y-12">
              <div className="flex items-start space-x-6 relative">
                <div className="relative z-10 bg-gradient-to-br from-purple-500 to-purple-600 p-4 rounded-2xl shadow-lg">
                  <Upload className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1 bg-white rounded-xl p-6 shadow-sm border border-purple-100">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">Upload your resume (or don&apos;t)</h3>
                    <Badge className="bg-purple-100 text-purple-700 text-xs">Step 1</Badge>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Drag and drop your resume, or just tell us about yourself. We&apos;ll figure out what makes you awesome
                    and what kind of roles you&apos;d actually want.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6 relative">
                <div className="relative z-10 bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-2xl shadow-lg">
                  <Search className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1 bg-white rounded-xl p-6 shadow-sm border border-blue-100">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">We do the searching for you</h3>
                    <Badge className="bg-blue-100 text-blue-700 text-xs">Step 2</Badge>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Our system checks LinkedIn, Indeed, AngelList, and 40+ other job boards every day. No more endless
                    scrolling through irrelevant postings.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6 relative">
                <div className="relative z-10 bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-2xl shadow-lg">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1 bg-white rounded-xl p-6 shadow-sm border border-green-100">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">Only see jobs you might actually get</h3>
                    <Badge className="bg-green-100 text-green-700 text-xs">Step 3</Badge>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    We score each job based on your background and their requirements. No more applying to &quot;entry-level&quot;
                    jobs that want 5 years of experience.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Job Matches Mockup */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-gray-900">Your matches today</h4>
                <Badge className="bg-green-100 text-green-700 text-xs">3 new</Badge>
              </div>

              <div className="space-y-3">
                <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-400">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <div className="font-medium text-gray-900">Senior React Developer</div>
                      <div className="text-sm text-gray-600">Stripe • San Francisco</div>
                    </div>
                    <Badge className="bg-green-100 text-green-700 text-xs">92% match</Badge>
                  </div>
                  <div className="text-xs text-gray-500">Posted 2 hours ago</div>
                </div>

                <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-400">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <div className="font-medium text-gray-900">Frontend Engineer</div>
                      <div className="text-sm text-gray-600">Notion • Remote</div>
                    </div>
                    <Badge className="bg-green-100 text-green-700 text-xs">89% match</Badge>
                  </div>
                  <div className="text-xs text-gray-500">Posted 1 day ago</div>
                </div>

                <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-400">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <div className="font-medium text-gray-900">Product Engineer</div>
                      <div className="text-sm text-gray-600">Linear • New York</div>
                    </div>
                    <Badge className="bg-green-100 text-green-700 text-xs">85% match</Badge>
                  </div>
                  <div className="text-xs text-gray-500">Posted 3 days ago</div>
                </div>
              </div>

              <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-sm">
                Join waitlist for early access
              </Button>
            </div>

            <div className="absolute -top-2 -right-2 bg-yellow-400 rounded-full p-2">
              <TrendingUp className="h-4 w-4 text-yellow-800" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}