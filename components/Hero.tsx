import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
              <span className="block">Revolutionize Your</span>
              <span className="block text-indigo-200">Workflow</span>
            </h1>
            <p className="mt-3 text-base text-indigo-100 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Our SaaS platform empowers teams to collaborate, innovate, and achieve more. Experience the future of productivity today.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <Button size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50 hover:text-indigo-700">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="ml-4 text-white border-white hover:bg-white hover:text-indigo-600">
                Learn More
              </Button>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <Image
                className="w-full rounded-lg"
                src="/dashboard-preview.png"
                alt="Dashboard preview"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 w-1/2 bg-indigo-700 opacity-50 transform skew-x-12"></div>
    </section>
  );
}