import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="text-center py-20">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our SaaS Platform</h1>
      <p className="text-xl mb-8">Revolutionize your workflow with our cutting-edge solution</p>
      <Button size="lg">Get Started</Button>
    </section>
  );
}