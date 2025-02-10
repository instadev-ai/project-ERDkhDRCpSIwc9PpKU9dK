import { Button } from '@/components/ui/button';
import { HiCheck } from 'react-icons/hi';

type PricingTier = {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  callToAction: string;
};

export default function Pricing() {
  const tiers: PricingTier[] = [
    {
      name: 'Starter',
      price: '$29',
      description: 'Perfect for small teams and startups',
      features: [
        'Up to 5 team members',
        '5GB storage',
        'Basic analytics',
        'Email support',
        'API access',
      ],
      callToAction: 'Start with Starter'
    },
    {
      name: 'Professional',
      price: '$79',
      description: 'Best for growing businesses',
      features: [
        'Up to 20 team members',
        '50GB storage',
        'Advanced analytics',
        'Priority support',
        'API access',
        'Custom integrations',
        'Team training',
      ],
      highlighted: true,
      callToAction: 'Go Professional'
    },
    {
      name: 'Enterprise',
      price: '$199',
      description: 'For large-scale operations',
      features: [
        'Unlimited team members',
        'Unlimited storage',
        'Custom analytics',
        '24/7 phone support',
        'Advanced API access',
        'Custom integrations',
        'Dedicated success manager',
        'Enterprise training',
      ],
      callToAction: 'Contact Sales'
    }
  ];

  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-base font-semibold text-indigo-400 tracking-wide uppercase">
            Pricing
          </h2>
          <p className="mt-2 text-4xl font-bold text-white tracking-tight sm:text-5xl">
            Choose your perfect plan
          </p>
          <p className="mt-4 text-xl text-gray-300">
            Simple, transparent pricing that grows with you. Try any plan free for 30 days.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {tiers.map((tier, index) => (
            <div 
              key={index}
              className={`relative rounded-2xl ${tier.highlighted 
                ? 'bg-gradient-to-b from-indigo-500 to-purple-600 text-white shadow-2xl shadow-indigo-500/25 scale-105 z-10' 
                : 'bg-gray-800 text-gray-100'} 
                p-8 flex flex-col h-full transform hover:scale-[1.02] transition-all duration-300`}
            >
              {tier.highlighted && (
                <div className="absolute -top-5 left-0 right-0 flex justify-center">
                  <span className="bg-indigo-500 text-white text-sm font-medium px-6 py-2 rounded-full shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Tier Header */}
              <div className="text-center">
                <h3 className="text-2xl font-bold">{tier.name}</h3>
                <div className="mt-4 flex items-baseline justify-center">
                  <span className="text-5xl font-extrabold">{tier.price}</span>
                  <span className="ml-1 text-xl text-gray-300">/month</span>
                </div>
                <p className={`mt-4 text-sm ${tier.highlighted ? 'text-indigo-100' : 'text-gray-300'}`}>
                  {tier.description}
                </p>
              </div>

              {/* Feature List */}
              <ul className="mt-8 space-y-4 flex-grow">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <div className={`flex-shrink-0 ${tier.highlighted ? 'text-indigo-200' : 'text-indigo-400'}`}>
                      <HiCheck className="h-6 w-6" />
                    </div>
                    <p className="ml-3 text-base">{feature}</p>
                  </li>
                ))}
              </ul>

              {/* Call to Action */}
              <div className="mt-8 pt-6">
                <Button 
                  className={`w-full py-6 ${tier.highlighted 
                    ? 'bg-white text-indigo-600 hover:bg-gray-50 shadow-lg shadow-black/25' 
                    : 'bg-indigo-500 text-white hover:bg-indigo-600'}`}
                >
                  {tier.callToAction}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Link */}
        <div className="mt-16 text-center">
          <p className="text-gray-300">
            Have questions?{' '}
            <a href="#" className="text-indigo-400 hover:text-indigo-300 font-medium">
              Check our FAQ
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}