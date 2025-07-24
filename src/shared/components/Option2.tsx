import { Upload, Search, TrendingUp, Eye } from 'lucide-react';
import { Badge } from '@/shared/components/ui/badge';

export function StepsOption2() {
  return (
    <section className="px-4 py-16 bg-gradient-to-br from-purple-50 via-white to-blue-50">
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
          {/* Left side - Floating Cards Design */}
          <div className="relative">
            {/* Background decoration */}

            <div className="relative space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-purple-100">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-3 rounded-xl">
                    <Upload className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900">Upload your resume (or don&apos;t)</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-xs text-gray-500">30 seconds</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Drag and drop your resume, or just tell us about yourself. We&apos;ll figure out what makes you awesome.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-blue-100">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-xl">
                    <Search className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900">We do the searching for you</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-xs text-gray-500">24/7 automated</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Our system checks 40+ job boards every day. No more endless scrolling through irrelevant postings.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-green-100">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-xl">
                    <Eye className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900">Only see jobs you might actually get</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-xs text-gray-500">AI-powered matching</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We score each job based on your background. No more &quot;entry-level&quot; jobs wanting 5 years experience.
                </p>
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
