
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

const founders = [
  {
    name: "Banda Shravan Kumar",
    title: "Execution Lead",
    bio: "A hands-on technologist driven by precision and practicality. Shravan specializes in embedded systems and AI integration, translating complex architectures into robust real-world solutions. His approach combines engineering discipline with a clear focus on scalability and deployment readiness.",
    skills: [
      "Real-time System Execution",
      "AI & Embedded Systems Integration",
      "Defense-Grade Deployments",
      "Scalable Architecture Implementation",
    ],
    imageId: "founder1",
    shortName: "Shravan",
  },
  {
    name: "Yasam Ganesh Chand",
    title: "Innovation Lead",
    bio: "A strategist with a deep focus on aligning technology with purpose. Ganesh transforms emerging ideas into field-ready innovations by connecting R&D with real-world needs. His work bridges concept to deployment through empathy, structure, and measurable outcomes.",
    skills: [
      "Innovation Strategy",
      "Concept-to-Deployment Leadership",
      "Stakeholder Alignment",
      "Practical Technology Translation",
    ],
    imageId: "founder2",
    shortName: "Ganesh",
  },
];

export default function FoundersPage() {
  return (
    <div className="bg-secondary/10">
      <div className="container py-20 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Our Founders</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed">
            Bridging innovation with real-world execution through complementary expertise in technology, design, and delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {founders.map((founder, index) => {
            const image = PlaceHolderImages.find(img => img.id === founder.imageId);
            return (
              <Card key={founder.name} className="flex flex-col text-left overflow-hidden bg-secondary/20 border-white/5 shadow-lg shadow-black/20 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-accent/5">
                <CardHeader className="p-0">
                  <div className="p-8">
                    {image && (
                      <div className="flex items-center gap-6">
                        <Image
                          src={image.imageUrl}
                          alt={`Portrait of ${founder.name}`}
                          width={100}
                          height={100}
                          className="rounded-full object-cover ring-2 ring-primary/50"
                          data-ai-hint={image.imageHint}
                        />
                        <div>
                          <CardTitle className="font-headline text-2xl tracking-wide">{founder.name}</CardTitle>
                          <CardDescription className="text-accent-foreground/80 font-medium text-lg">{founder.title}</CardDescription>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="px-8 pb-6">
                     <p className="text-muted-foreground leading-relaxed">{founder.bio}</p>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow p-8 pt-0">
                  <h3 className="font-bold font-headline text-primary mb-4">Key Expertise</h3>
                  <ul className="space-y-3">
                    {founder.skills.map(skill => (
                      <li key={skill} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500/70 mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto mt-20 text-center bg-secondary/20 p-8 rounded-lg border border-white/5 shadow-lg shadow-black/20">
          <h2 className="text-3xl font-bold font-headline text-primary">Together: Bridging R&D with Real-World Scale</h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Our complementary expertise ensures every innovation doesn't just advance technology — it delivers impact. From agriculture to defense, we engineer solutions that are quiet in operation but powerful in effect.
          </p>
        </div>
      </div>
    </div>
  );
}
