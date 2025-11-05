
import { Mail, MapPin } from 'lucide-react';
import { ContactForm } from './contact-form';

export default function ContactPage() {
  return (
    <div className="container py-20 md:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">Let's Begin a Conversation</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          We welcome meaningful collaborations — quietly built, deeply impactful.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 max-w-6xl mx-auto">
        <div className="md:col-span-3 bg-transparent border border-white/10 p-8 rounded-lg">
          <h2 className="text-3xl font-bold font-headline mb-6 text-primary">Send us a Message</h2>
          <ContactForm />
          <p className="mt-6 text-sm text-muted-foreground text-center">
            We value thoughtful communication. Expect a personal response within 2-3 business days.
          </p>
        </div>
        <div className="md:col-span-2 space-y-8 mt-8 md:mt-0">
          <div className="space-y-4 text-lg">
            <div>
                <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-bold font-headline text-primary">Email Us</h3>
                </div>
                <a href="mailto:ybsindustriesllp@gmail.com" className="hover:text-primary transition-colors ml-10">
                    ybsindustriesllp@gmail.com
                </a>
            </div>
            <div>
                <div className="flex items-center gap-4 mt-8">
                    <MapPin className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-bold font-headline text-primary">Location</h3>
                </div>
                <div className='ml-10'>
                    <span>Telangana, India</span>
                    <p className='text-muted-foreground text-base'>Serving clients across India and beyond</p>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-20 text-muted-foreground italic">
        <p>“We believe meaningful partnerships begin with a simple message.”</p>
      </div>
    </div>
  );
}
