
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Handshake, Lightbulb, Recycle, Sprout, TestTube } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const partnershipAreas = [
  {
    icon: <Handshake className="h-8 w-8 text-primary" />,
    title: "Public-Private Pilots",
    description: "Collaborative initiatives bridging government needs with innovative technology solutions",
  },
  {
    icon: <TestTube className="h-8 w-8 text-primary" />,
    title: "Smart Village Tech Trials",
    description: "Field-testing sustainable technologies in rural communities for scalable impact",
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    title: "R&D Grants",
    description: "Joint research and development projects funded through government and private grants",
  },
  {
    icon: <Recycle className="h-8 w-8 text-primary" />,
    title: "CSR-Enabled Tech Adoption",
    description: "Corporate social responsibility programs enabling technology adoption in underserved areas",
  },
];

const whyPartner = [
  {
    number: "01",
    title: "Proven Expertise",
    description: "Multi-domain experience across technology, agriculture, energy, and defense sectors",
  },
  {
    number: "02",
    title: "Field-Tested Solutions",
    description: "Real-world deployment experience ensuring practical and scalable implementations",
  },
  {
    number: "03",
    title: "Social Impact Focus",
    description: "Commitment to solutions that create positive social and economic impact",
  },
];

export default function PartnershipsPage() {
  return (
    <div className="container py-20 md:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">Partnerships & Collaborations</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Building bridges between innovation and implementation through strategic partnerships
        </p>
      </div>

      <div className="bg-transparent p-8 rounded-lg mb-16">
        <h2 className="text-3xl font-bold font-headline text-primary mb-4 text-center">Collaborative Innovation</h2>
        <p className="max-w-4xl mx-auto text-center text-muted-foreground text-lg">
          YBS Industries believes in collaborative innovation. We actively engage with government bodies, NGOs, and private partners to build solutions that are scalable, field-tested, and socially inclusive.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {partnershipAreas.map((area) => (
          <Card key={area.title} className="service-card text-center bg-transparent shadow-none">
            <CardHeader>
              <div className="mx-auto bg-accent/10 border border-accent/20 p-4 rounded-full w-fit">
                {area.icon}
              </div>
              <CardTitle className="font-headline pt-4">{area.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{area.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">Why Partner with YBS Industries?</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {whyPartner.map((reason) => (
          <div key={reason.number} className="flex items-start space-x-6">
            <div className="flex-shrink-0">
              <span className="text-5xl font-bold text-primary/30 font-headline">{reason.number}</span>
            </div>
            <div>
              <h3 className="text-xl font-bold font-headline mb-2">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </div>
          </div>
        ))}
      </div>

      <section className="py-20 md:py-24">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Ready to Collaborate?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Let's explore how we can work together to create innovative solutions that make a real difference.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" variant="default" className="rounded-lg shadow-[0_0_12px_rgba(42,161,152,0.3)]">
              <Link href="/contact">Partner with Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
