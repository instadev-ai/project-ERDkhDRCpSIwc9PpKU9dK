import { Button } from '@/components/ui/button';

export default function CTA() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="relative bg-white/60 backdrop-blur-xl rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden border border-indigo-100/50 shadow-xl">
          {/* Decorative Elements */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full opacity-20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full opacity-20 blur-3xl" />

          <div className="relative lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            {/* Content */}
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Ready to transform your workflow?
              </h2>
              <p className="mt-6 text-lg text-gray-600 max-w-xl">
                Join thousands of teams already using our platform to increase productivity and streamline their operations. Start your free trial today.
              </p>

              {/* Stats */}
              <div className="mt-10 grid grid-cols-2 gap-8 lg:gap-12">
                <div>
                  <div className="text-3xl font-bold text-indigo-600">98%</div>
                  <div className="mt-1 text-base text-gray-500">Customer satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-indigo-600">24/7</div>
                  <div className="mt-1 text-base text-gray-500">Expert support</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:scale-105 transition-all duration-300">
                  Start Free Trial
                </Button>
                <Button size="lg" variant="outline" className="border-indigo-200 text-indigo-600 hover:bg-indigo-50 hover:border-indigo-300 transition-all duration-300">
                  Schedule Demo
                </Button>
              </div>
            </div>

            {/* Testimonial */}
            <div className="mt-12 lg:mt-0">
              <blockquote className="relative bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-100">
                    <img 
                      src="https://randomuser.me/api/portraits/women/32.jpg" 
                      alt="Sarah Thompson"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Sarah Thompson</div>
                    <div className="text-sm text-gray-500">CTO at TechCorp</div>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Implementing this platform has been a game-changer for our team. Our productivity has increased by 60%, and the automated workflows save us countless hours every week."
                </p>
                {/* Rating */}
                <div className="mt-6 flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}