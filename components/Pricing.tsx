import { Button } from '@/components/ui/button';

export default function Pricing() {
  const plans = [
    { name: 'Basic', price: '$9.99', features: ['Feature 1', 'Feature 2', 'Feature 3'] },
    { name: 'Pro', price: '$19.99', features: ['All Basic features', 'Feature 4', 'Feature 5'] },
    { name: 'Enterprise', price: 'Custom', features: ['All Pro features', 'Priority support', 'Custom integrations'] },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="border rounded-lg p-6 text-center">
              <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-3xl font-bold mb-6">{plan.price}</p>
              <ul className="mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="mb-2">{feature}</li>
                ))}
              </ul>
              <Button>Choose Plan</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}