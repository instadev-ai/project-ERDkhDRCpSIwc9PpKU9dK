export default function Features() {
  const features = [
    { title: 'Easy Integration', description: 'Seamlessly integrate with your existing tools' },
    { title: 'Powerful Analytics', description: 'Gain insights with our advanced analytics' },
    { title: 'Secure & Reliable', description: 'Your data is safe with our robust security measures' },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}