import { IconType } from 'react-icons';
import { HiOutlineLightningBolt, HiOutlineChartBar, HiOutlineShieldCheck, HiOutlineClock, HiOutlineChat, HiOutlineGlobe } from 'react-icons/hi';

interface Feature {
  title: string;
  description: string;
  icon: IconType;
  color: string;
}

export default function Features() {
  const features: Feature[] = [
    {
      title: 'Lightning Fast',
      description: 'Experience blazing fast performance with our optimized infrastructure',
      icon: HiOutlineLightningBolt,
      color: 'from-amber-400 to-orange-500'
    },
    {
      title: 'Powerful Analytics',
      description: 'Gain deep insights with our advanced analytics and reporting tools',
      icon: HiOutlineChartBar,
      color: 'from-blue-400 to-indigo-500'
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-grade security with end-to-end encryption and compliance',
      icon: HiOutlineShieldCheck,
      color: 'from-green-400 to-emerald-500'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock support from our dedicated customer success team',
      icon: HiOutlineClock,
      color: 'from-purple-400 to-pink-500'
    },
    {
      title: 'Team Collaboration',
      description: 'Seamless collaboration tools for teams of any size',
      icon: HiOutlineChat,
      color: 'from-red-400 to-rose-500'
    },
    {
      title: 'Global Scale',
      description: 'Deploy worldwide with our distributed infrastructure',
      icon: HiOutlineGlobe,
      color: 'from-teal-400 to-cyan-500'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl">
            Everything you need
          </p>
          <p className="mt-4 text-xl text-gray-500">
            Powerful features to help you manage, analyze, and scale your business effectively.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="relative group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center p-3 rounded-2xl bg-gradient-to-r ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-500">
                  {feature.description}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}