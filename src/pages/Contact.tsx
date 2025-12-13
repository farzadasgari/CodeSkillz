import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen pb-20 mt-20">
      {/* Header */}
      <section className="bg-gradient-hero py-16 mb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary-foreground mb-4">
            Get in <span className="text-secondary">Touch</span>
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="font-heading font-bold text-3xl text-foreground mb-6">
                Let's <span className="text-secondary">Connect</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you have questions about courses, need support, or want to discuss collaboration opportunities,
                we're here to help. Send us a message and we'll respond as soon as possible.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border hover:border-primary transition-colors">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground mb-1">Email Us</h3>
                  <p className="text-muted-foreground text-sm">khufarzadasgari@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border hover:border-secondary transition-colors">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground mb-1">Support</h3>
                  <p className="text-muted-foreground text-sm">Available Monday - Friday</p>
                </div>
              </div>
            </div>

            {/* FAQ Link */}
            <div className="p-6 bg-muted rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">Quick Questions?</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Check out our FAQ section for instant answers to common questions
              </p>
              <Link to="/faq">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  View FAQ
                </Button>
              </Link>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg border border-border shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                  Full Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="border-border focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="border-border focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-card-foreground mb-2">
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Course inquiry"
                  className="border-border focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help..."
                  rows={6}
                  className="border-border focus:border-primary resize-none"
                />
              </div>

              <Button type="submit" variant="secondary" size="lg" className="w-full">
                <Send className="mr-2 w-5 h-5" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
