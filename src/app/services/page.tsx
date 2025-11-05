
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, Shield, Bot, Recycle, Leaf, FlaskConical, Package, PenTool, Users } from "lucide-react"; 

const createSlug = (text: string) => {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
};

const services = [
  {
    title: "Defense-grade AI & Communication",
    description: "Advanced AI systems and encrypted communication solutions for defense applications",
    icon: Shield,
    slug: createSlug("Defense-grade AI & Communication"),
  },
  {
    title: "IoT & Robotics Automation",
    description: "Industrial and agricultural automation solutions using IoT and robotics technology",
    icon: Bot,
    slug: createSlug("IoT & Robotics Automation"),
  },
  {
    title: "Renewable Energy Solutions",
    description: "Solar, biogas, and hybrid energy setups for sustainable power generation",
    icon: Recycle,
    slug: createSlug("Renewable Energy Solutions"),
  },
  {
    title: "Waste Management & Recycling",
    description: "E-waste, plastic, and organic recycling solutions for environmental sustainability",
    icon: Recycle,
    slug: createSlug("Waste Management & Recycling"),
  },
  {
    title: "AgriTech Innovation",
    description: "Microgreens, luxury crops cultivation, and solar-powered processing systems",
    icon: Leaf,
    slug: createSlug("AgriTech Innovation"),
  },
  {
    title: "Food & Beverage R&D",
    description: "Millet products development and advanced dehydration processing lines",
    icon: FlaskConical,
    slug: createSlug("Food & Beverage R&D"),
  },
  {
    title: "End-to-End Product R&D",
    description: "Complete hardware and software product development from concept to market",
    icon: Package,
    slug: createSlug("End-to-End Product R&D"),
  },
  {
    title: "Branding & D2C Solutions",
    description: "Internal branding, packaging design, and direct-to-consumer enablement",
    icon: PenTool,
    slug: createSlug("Branding & D2C Solutions"),
  },
  {
    title: "Training & Rural Development",
    description: "Skill development programs and charitable trust initiatives for rural communities",
    icon: Users,
    slug: createSlug("Training & Rural Development"),
  },
];

export default function ServicesPage() {
  return (
    <div className="py-20 md:py-24">
      <div className="container pt-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Services & Products</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Comprehensive solutions and products across multiple domains, engineered for **real-world impact** and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const href = `/services/${service.slug}`;

            return (
              <Link href={href} key={service.title} className="group block h-full">
                <Card className="service-card bg-transparent shadow-none overflow-hidden flex flex-col h-full">
                  <CardHeader className="flex-row items-center gap-4 space-y-0 pb-4">
                    <div className="p-3 rounded-full bg-accent/10 text-primary">
                        <service.icon className="h-10 w-10" />
                    </div>
                    <CardTitle className="font-headline text-xl" style={{ letterSpacing: '0.3px' }}>
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow pt-0">
                    <p className="text-muted-foreground mb-4 flex-grow">{service.description}</p>
                    <span className="inline-flex items-center text-primary font-medium group-hover:underline">
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
      
      <div className="container my-16">
        <div className="h-px w-full bg-white/5 my-16" />
      </div>

      <section className="py-16">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Need a Custom Solution?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-secondary-foreground/80 leading-relaxed" style={{ lineHeight: 1.7 }}>
            Our multidisciplinary team can develop **tailored, cutting-edge solutions** for your specific and unique challenges.
          </p>
          <div className="mt-8">
            <Button 
              asChild 
              size="lg" 
              variant="default"
              className="rounded-[6px] font-semibold transition-all duration-250 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(42,161,152,0.2)]"
            >
              <Link href="/contact">Discuss Your Project</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
