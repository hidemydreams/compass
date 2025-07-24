import { Upload, Search, Target, TrendingUp, Sparkles, Zap, Clock } from "lucide-react"
import { Badge } from '@/shared/components/ui/badge';

export function StepsOption4() {
  return (
    <section className="px-4 py-16 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full -translate-x-48 -translate-y-48 opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-green-100 to-yellow-100 rounded-full translate-x-48 translate-y-48 opacity-50"></div>

      <div className="container mx-auto max-w-6xl relative">
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
          {/* Left side - Modern Grid Design */}
          <div className="grid grid-cols-1 gap-6">
            {/* Step 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 group-hover:border-purple-200 transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="relative">
                    <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-4 rounded-2xl shadow-lg">
                      <Upload className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 bg-purple-100 rounded-full p-1">
                      <Sparkles className="h-3 w-3 text-purple-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <h3 className="text-xl font-bold text-gray-900">Upload your resume (or don&apos;t)</h3>
                      <Badge className="bg-purple-50 text-purple-700 text-xs border border-purple-200">
                        <Clock className="h-3 w-3 mr-1" />
                        30s
                      </Badge>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Drag and drop your resume, or just tell us about yourself. We&apos;ll figure out what makes you awesome
                      and what kind of roles you&apos;d actually want.
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>• Resume parsing</span>
                      <span>• Skills extraction</span>
                      <span>• Goal analysis</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="group relative ml-8">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 group-hover:border-blue-200 transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="relative">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-2xl shadow-lg">
                      <Search className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 bg-blue-100 rounded-full p-1">
                      <Zap className="h-3 w-3 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <h3 className="text-xl font-bold text-gray-900">We do the searching for you</h3>
                      <Badge className="bg-blue-50 text-blue-700 text-xs border border-blue-200">24/7</Badge>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Our system checks LinkedIn, Indeed, AngelList, and 40+ other job boards every day. No more endless
                      scrolling through irrelevant postings.
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>• 40+ job boards</span>
                      <span>• Real-time updates</span>
                      <span>• Smart filtering</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 group-hover:border-green-200 transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="relative">
                    <div className="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-2xl shadow-lg">
                      <Target className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 bg-green-100 rounded-full p-1">
                      <TrendingUp className="h-3 w-3 text-green-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <h3 className="text-xl font-bold text-gray-900">Only see jobs you might actually get</h3>
                      <Badge className="bg-green-50 text-green-700 text-xs border border-green-200">92% accuracy</Badge>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      We score each job based on your background and their requirements. No more applying to
                      &quot;entry-level&quot; jobs that want 5 years of experience.
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>• AI matching</span>
                      <span>• Compatibility scores</span>
                      <span>• Success prediction</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Job Matches Mockup */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-gray-900">Your matches today</h4>
                <Badge className="bg-green-100 text-green-700 text-xs">3 new</Badge>
              </div>

              <div className="space-y-3">
                <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-400">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <div className="font-medium text-gray-900">Clinical Research Coordinator</div>
                      <div className="text-sm text-gray-600">Clava • San Francisco</div>
                    </div>
                    <Badge className="bg-green-100 text-green-700 text-xs">92% match</Badge>
                  </div>
                  <div className="text-xs text-gray-500">Posted 2 hours ago</div>
                </div>

                <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-400">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <div className="font-medium text-gray-900">Supply Chain Analyst</div>
                      <div className="text-sm text-gray-600">Costco • Remote</div>
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
