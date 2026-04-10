import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const ContactForm = () => (
  <form onSubmit={(e) => e.preventDefault()} className="space-y-6 rounded-lg border bg-card p-6 md:p-8">
    <div className="space-y-2">
      <Label htmlFor="name">Full Name</Label>
      <Input id="name" placeholder="John Doe" required />
    </div>
    <div className="space-y-2">
      <Label htmlFor="phone">Phone Number</Label>
      <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" required />
    </div>
    <div className="space-y-2">
      <Label htmlFor="message">Message</Label>
      <Textarea id="message" placeholder="Describe your legal matter briefly..." rows={5} required />
    </div>
    <Button type="submit" className="w-full" size="lg">
      Send Message
    </Button>
    <p className="text-center text-xs text-muted-foreground">
      By submitting, you agree to our privacy policy. Your data is confidential.
    </p>
  </form>
);

export default ContactForm;
