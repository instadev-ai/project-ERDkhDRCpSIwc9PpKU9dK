import { Button } from '@/components/ui/button';

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-24">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-extrabold mb-6 leading-tight">Ready to Transform Your Business?</h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto">Join thousands of satisfied customers and experience the power of our SaaS solution today.</p>
        <Button 
          variant="secondary" 
          size="lg" 
          className="bg-white text-red-600 hover:bg-red-100 hover:text-red-700 transition-colors duration-300 text-lg px-8 py-3 rounded-full shadow-lg"
        >
          Get Started Now
        </Button>
      </div>
    </section>
  );
}