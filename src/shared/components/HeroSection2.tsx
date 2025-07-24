import { ArrowRight, Briefcase, CheckCircle, MessageCircle, TrendingUp, Zap } from 'lucide-react';
import { Button } from '@/shared/components/ui/button';
import { useEffect, useState } from 'react';
import { Card } from '@/shared/components/ui/card';
import { Badge } from '@/shared/components/ui/badge';

const HeroSection = () => {
  const [currentNotification, setCurrentNotification] = useState(0)

  const notifications = [
    {
      type: "job",
      icon: Briefcase,
      title: "New job match found!",
      subtitle: "Senior React Developer at Stripe",
      match: "94% match",
      time: "2 min ago",
      color: "bg-green-500",
    },
    {
      type: "message",
      icon: MessageCircle,
      title: "Message from recruiter",
      subtitle: "Sarah from Linear wants to chat",
      match: "Interested in you",
      time: "5 min ago",
      color: "bg-blue-500",
    },
    {
      type: "interview",
      icon: TrendingUp,
      title: "Interview scheduled!",
      subtitle: "Notion - Product Engineer role",
      match: "Tomorrow 2PM",
      time: "1 hour ago",
      color: "bg-purple-500",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNotification((prev) => (prev + 1) % notifications.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="px-4 py-16 md:py-24 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge className="bg-purple-100 text-purple-700 px-4 py-2 text-sm font-medium">
                <Zap className="h-4 w-4 mr-2" />
                3x more interviews guaranteed
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Stop applying to jobs that
                <span className="text-purple-600 block">ignore you</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                Our AI finds jobs where you&apos;ll actually get hired. Get matched with roles that want YOUR skills, not
                just any skills.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 px-8 py-4 text-lg font-semibold"
              >
                Join 2,847 people on waitlist
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg bg-white border-2 border-gray-200 hover:border-purple-300"
              >
                See how it works
              </Button>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Free beta access</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Launch in Q3 2025</span>
              </div>
            </div>
          </div>

          {/* Right side - Live notifications */}
          <div className="relative">
            <div className="space-y-4">
              {notifications.map((notification, index) => {
                const Icon = notification.icon
                const isActive = index === currentNotification

                return (
                  <Card
                    key={index}
                    className={`p-4 transition-all duration-500 transform ${
                      isActive ? "scale-105 shadow-lg border-purple-200 bg-white" : "scale-95 opacity-60 bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`${notification.color} p-3 rounded-full`}>
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold text-gray-900">{notification.title}</h4>
                          <span className="text-xs text-gray-500">{notification.time}</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{notification.subtitle}</p>
                        <Badge className="bg-green-100 text-green-700 text-xs">{notification.match}</Badge>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>

            {/* Floating stats */}
            <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3 border border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">94%</div>
                <div className="text-xs text-gray-600">Success rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection