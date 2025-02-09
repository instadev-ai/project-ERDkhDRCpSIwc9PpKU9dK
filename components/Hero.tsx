import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-1.5 mb-8 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm">
              <span className="animate-pulse mr-2 h-2 w-2 rounded-full bg-green-400"></span>
              <span className="text-sm font-medium">Now Available Worldwide</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block mb-2 animate-fade-in-up">Revolutionize</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-pink-200 animate-fade-in-up animation-delay-150">
                Your Workflow
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-lg text-indigo-100 sm:text-xl lg:text-lg xl:text-xl max-w-3xl animate-fade-in-up animation-delay-300">
              Experience the future of productivity with our intelligent platform. Streamline collaboration, 
              automate tasks, and achieve more with AI-powered insights.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4 animate-fade-in-up animation-delay-450">
              <Button size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50 hover:text-indigo-700 shadow-lg shadow-black/10 hover:shadow-xl hover:scale-105 transition-all duration-300">
                Get Started Free
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white/20 backdrop-blur-sm hover:bg-white/10 hover:border-white transition-all duration-300">
                Watch Demo →
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex items-center gap-6 sm:justify-center lg:justify-start text-sm text-white/80 animate-fade-in-up animation-delay-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>14-day free trial</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-xl shadow-2xl lg:max-w-md transition-transform hover:scale-105 duration-500 animate-float">
              <div className="relative block w-full overflow-hidden rounded-xl">
                <Image
                  className="w-full rounded-xl"
                  src="/dashboard-preview.png"
                  alt="Dashboard preview"
                  width={600}
                  height={400}
                  priority
                />
                {/* Glass effect overlay */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-white/10 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}