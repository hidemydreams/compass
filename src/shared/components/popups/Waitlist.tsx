import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/shared/components/ui/dialog';
import { Button } from '@/shared/components/ui/button';
import { DialogBody } from 'next/dist/client/components/react-dev-overlay/internal/components/Dialog';
import { CheckCircle, Mail, Sparkles} from 'lucide-react';
import { Badge } from '@/shared/components/ui/badge';
import { Input } from '@/shared/components/ui/input';
import { useState } from 'react';

interface CreatorFeaturesPopupProps {
  open: boolean;
  onClose: () => void;
  action: unknown;
  onPositive: () => void;
}

function WaitlistPopup({
  open,
  onClose,
}: CreatorFeaturesPopupProps) {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitted(true)
    setIsLoading(false)

    // Auto close after 3 seconds
    setTimeout(() => {
      onClose()
      setIsSubmitted(false)
      setEmail("")
    }, 3000)
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className='sm:max-w-md'>
        <DialogBody>
            <div className="bg-white">
              <div className="p-8">
                {!isSubmitted ? (
                  <>
                    {/* Header */}
                    <div className="text-center mb-6">
                      <div
                        className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl mb-4">
                        <Sparkles className="h-8 w-8 text-white" />
                      </div>
                      <DialogTitle className="text-2xl font-bold text-gray-900 mb-2">Join the waitlist</DialogTitle>
                      <p className="text-gray-600">
                        Be the first to know when Compass launches. We&apos;ll send you early access and exclusive updates.
                      </p>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-center space-x-6 mb-6 text-sm">
                      <div className="text-center">
                        <div className="font-bold text-gray-900">2,847</div>
                        <div className="text-gray-500">on waitlist</div>
                      </div>
                      <div className="w-px h-8 bg-gray-200"></div>
                      <div className="text-center">
                        <div className="font-bold text-gray-900">Q1 2024</div>
                        <div className="text-gray-500">launch date</div>
                      </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <Input
                          type="email"
                          placeholder="Enter your email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="pl-10 h-12 border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isLoading || !email}
                        className="w-full h-12 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium rounded-lg"
                      >
                        {isLoading ? (
                          <div className="flex items-center space-x-2">
                            <div
                              className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            <span>Joining...</span>
                          </div>
                        ) : (
                          "Join waitlist"
                        )}
                      </Button>
                    </form>

                    {/* Benefits */}
                    <div className="mt-6 space-y-2">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Early access to beta</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Exclusive job search tips</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>No spam, unsubscribe anytime</span>
                      </div>
                    </div>
                  </>
                ) : (
                  /* Success state */
                  <div className="text-center py-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-4">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">You&apos;re on the list!</h2>
                    <p className="text-gray-600 mb-4">
                      Thanks for joining! We&apos;ll send you updates as we get closer to launch.
                    </p>
                    <Badge className="bg-green-100 text-green-700 border-green-200">Position #2,848 on waitlist</Badge>
                  </div>
                )}
              </div>
            </div>
        </DialogBody>
      </DialogContent>
    </Dialog>
  );
}

export default WaitlistPopup;
