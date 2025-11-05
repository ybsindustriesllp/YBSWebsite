
"use client";
import { useRef } from 'react';
import Autoplay from "embla-carousel-autoplay";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Lightbulb, Shield, Leaf, Bot, Recycle, FlaskConical, Package } from 'lucide-react';
import Link from 'next/link';

const homeServices = [
  {
    title: "Innovation",
    description: "Cutting-edge R&D solutions for real-world challenges",
    icon: Lightbulb,
    href: "/services/defense-grade-ai-communication",
  },
  {
    title: "Security",
    description: "Defense-grade systems and encrypted communications",
    icon: Shield,
    href: "/services/defense-grade-ai-communication",
  },
  {
    title: "Sustainability",
    description: "Renewable energy and eco-friendly solutions",
    icon: Recycle,
    href: "/services/renewable-energy-solutions",
  },
  {
    title: "AgriTech",
    description: "Microgreens, luxury crops, and solar-powered systems",
    icon: Leaf,
    href: "/services/agritech-innovation",
  },
  {
    title: "IoT & Robotics",
    description: "Industrial and agricultural automation solutions",
    icon: Bot,
    href: "/services/iot-robotics-automation",
  },
  {
    title: "Food & Beverage R&D",
    description: "Millet products and advanced dehydration processing",
    icon: FlaskConical,
    href: "/services/food-beverage-r-d",
  },
  {
    title: "End-to-End R&D",
    description: "Complete hardware and software product development",
    icon: Package,
    href: "/services/end-to-end-product-r-d",
  },
];

export default function Home() {
  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );
  return (
    <>
      {/* Hero Section */}
      <section className="py-24 md:py-40 bg-transparent relative overflow-hidden">
        <div className="container text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold font-headline tracking-tighter leading-tight">YBS Industries</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            A multi-domain innovation and R&D company dedicated to building scalable, sustainable, and secure solutions and products across sectors like technology, agriculture, energy, defense, and automation.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg" className="rounded-lg shadow-[0_0_8px_rgba(42,161,152,0.25)]">
              <Link href="/services">Explore Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-headline animate-fade-in-up">What We Do</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              From secure defense systems to sustainable agriculture, our innovations drive progress.
            </p>
          </div>
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-4 p-2">
              {homeServices.map((service, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-4 text-center h-full flex flex-col items-center border border-white/10 rounded-lg">
                    <div className="mx-auto bg-accent/10 border border-accent/20 p-4 rounded-full w-fit mb-6">
                      <service.icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="font-headline text-xl font-bold pt-4">{service.title}</h3>
                    <p className="text-muted-foreground mt-2 flex-grow">{service.description}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 md:py-24 bg-secondary/5">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h2 className="text-3xl font-bold font-headline mb-4">Vision</h2>
              <p className="text-muted-foreground">
                To be a leading force in innovation landscape, creating intelligent engineering solutions and products that address real-world challenges and contribute to a sustainable future.
              </p>
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h2 className="text-3xl font-bold font-headline mb-4">Mission</h2>
              <p className="text-muted-foreground">
                To leverage our expertise in technology, agriculture, energy, defense, and automation to develop scalable, sustainable, and secure solutions that empower communities, enhance national security, and drive economic growth across India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Ready to Innovate Together?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Let's discuss how we can solve your challenges with intelligent engineering solutions.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" variant="default" className="rounded-lg shadow-[0_0_12px_rgba(42,161,152,0.3)]">
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
