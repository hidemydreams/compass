"use client"

import { Upload, Search, Target, TrendingUp, CheckCircle, Zap } from "lucide-react"
import { Badge } from '@/shared/components/ui/badge';
import { Button } from '@/shared/components/ui/button';

export function StepsOption3() {
  const steps = [
    {
      icon: Upload,
      title: "Upload your resume (or don't)",
      description:
        "Drag and drop your resume, or just tell us about yourself. We'll figure out what makes you awesome and what kind of roles you'd actually want.",
      color: "purple",
      stats: "30 sec setup",
      features: ["Resume parsing", "Skills extraction", "Career goal analysis"],
    },
    {
      icon: Search,
      title: "We do the searching for you",
      description:
        "Our system checks LinkedIn, Indeed, AngelList, and 40+ other job boards every day. No more endless scrolling through irrelevant postings.",
      color: "blue",
      stats: "40+ job boards",
      features: ["24/7 monitoring", "Real-time updates", "Smart filtering"],
    },
    {
      icon: Target,
      title: "Only see jobs you might actually get",
      description:
        "We score each job based on your background and their requirements. No more applying to 'entry-level' jobs that want 5 years of experience.",
      color: "green",
      stats: "92% accuracy",
      features: ["AI matching", "Compatibility scores", "Success prediction"],
    },
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      purple: {
        bg: "bg-purple-500",
        light: "bg-purple-100",
        text: "text-purple-700",
        border: "border-purple-200",
      },
      blue: {
        bg: "bg-blue-500",
        light: "bg-blue-100",
        text: "text-blue-700",
        border: "border-blue-200",
      },
      green: {
        bg: "bg-green-500",
        light: "bg-green-100",
        text: "text-green-700",
        border: "border-green-200",
      },
    }
    return colors[color as keyof typeof colors]
  }

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

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Interactive Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => {
              const colors = getColorClasses(step.color)
              const isActive = true;
              const Icon = step.icon

              return (
                <div
                  key={index}
                  className={`transition-all duration-300 ${
                    isActive ? "transform scale-105" : "hover:transform hover:scale-102"
                  }`}
                >
                  <div
                    className={`bg-white rounded-2xl p-6 shadow-lg border-2 ${
                      isActive ? colors.border : "border-gray-100"
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`${colors.bg} p-3 rounded-xl flex-shrink-0`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                          <Badge className={`${colors.light} ${colors.text} text-xs`}>{step.stats}</Badge>
                        </div>
                        <p className="text-gray-600 text-sm mb-3 leading-relaxed">{step.description}</p>

                        {isActive && (
                          <div className="space-y-2 animate-in slide-in-from-top-2 duration-300">
                            {step.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center space-x-2">
                                <CheckCircle className="h-4 w-4 text-green-500" />
                                <span className="text-sm text-gray-600">{feature}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}

            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-6 text-white">
              <div className="flex items-center space-x-3 mb-3">
                <Zap className="h-6 w-6" />
                <h4 className="font-bold">The Result</h4>
              </div>
              <p className="text-purple-100 text-sm">
                3x more interviews, 5x less time spent searching, and jobs that actually match your skills and goals.
              </p>
            </div>
          </div>

          {/* Right side - Job Matches Mockup */}
          <div className="relative sticky top-8">
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
