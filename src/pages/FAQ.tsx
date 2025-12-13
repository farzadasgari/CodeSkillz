import { useState } from "react";
import { Search, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    category: "Classes & Google Meet",
    questions: [
      {
        id: "meet-1",
        question: "How do I join my Google Meet class?",
        answer: "To join your Google Meet class, log in to your CodeSkillz dashboard and navigate to the 'My Classes' section. You'll find the Google Meet link for your upcoming class at least 15 minutes before the scheduled start time. Click the link to join directly, or copy it to your browser. Make sure you're using a supported browser (Chrome, Firefox, Edge) and have enabled camera and microphone permissions.",
      },
      {
        id: "meet-2",
        question: "What if I can't access the Google Meet link?",
        answer: "If you're having trouble accessing the Meet link, first check that you're logged into your CodeSkillz account. The link becomes available 15 minutes before class starts. If you still can't see it, try refreshing your browser or clearing your cache. For urgent issues during class time, contact support at khufarzadasgari@gmail.com with your class details.",
      },
      {
        id: "meet-3",
        question: "Can I join classes from my phone or tablet?",
        answer: "Yes! You can join Google Meet classes from any device with the Google Meet app (iOS/Android) or through your mobile browser. For the best experience, we recommend using a laptop or desktop with a stable internet connection, but mobile devices work well for watching and participating in class discussions.",
      },
      {
        id: "meet-4",
        question: "What happens if I miss a live class?",
        answer: "All live classes are recorded and uploaded to your course dashboard within 24 hours. You can watch the recording anytime at your convenience. However, we encourage attending live sessions for real-time interaction, Q&A, and hands-on exercises with Farzad.",
      },
    ],
  },
  {
    category: "Payments",
    questions: [
      {
        id: "pay-1",
        question: "What payment methods are accepted?",
        answer: "CodeSkillz accepts all major payment methods including Credit/Debit Cards (Visa, Mastercard, American Express), PayPal, and Stripe. All transactions are secure and encrypted. We also offer installment plans for select courses—contact us for details.",
      },
      {
        id: "pay-2",
        question: "Is my payment information secure?",
        answer: "Absolutely! We use industry-standard encryption (SSL/TLS) and trusted payment processors like Stripe and PayPal. CodeSkillz never stores your full credit card details on our servers. All payment data is handled securely by PCI-compliant payment gateways.",
      },
      {
        id: "pay-3",
        question: "Can I get an invoice or receipt for my purchase?",
        answer: "Yes! After completing your purchase, you'll receive an email receipt immediately. You can also download invoices anytime from your account dashboard under 'Purchases.' These invoices include all transaction details for your records or reimbursement purposes.",
      },
      {
        id: "pay-4",
        question: "Do you offer refunds?",
        answer: "We offer a 7-day money-back guarantee for all courses. If you're not satisfied within the first 7 days of purchase (and haven't completed more than 30% of the course), contact us for a full refund. Refunds are processed within 5-7 business days. Note: Individual missed classes are not refundable, but recordings are always available.",
      },
    ],
  },
  {
    category: "Course Access",
    questions: [
      {
        id: "access-1",
        question: "How do I access my course materials?",
        answer: "Once enrolled, all course materials (videos, code files, exercises, notes) are available in your dashboard under 'My Courses.' Click on your course to access modules, download resources, and track your progress. Materials remain accessible for lifetime access unless otherwise specified.",
      },
      {
        id: "access-2",
        question: "Do I get lifetime access to courses?",
        answer: "Yes! Most CodeSkillz courses come with lifetime access. You can revisit lessons, download materials, and watch class recordings anytime. Any course updates or new content added to your enrolled course are also included at no extra cost.",
      },
      {
        id: "access-3",
        question: "Can I download course materials?",
        answer: "Absolutely! All code files, slides, exercises, and supplementary resources are downloadable from your course dashboard. Video recordings can be streamed online but are not downloadable to protect content integrity. However, you have unlimited streaming access.",
      },
      {
        id: "access-4",
        question: "What if I have technical issues accessing content?",
        answer: "If you're experiencing issues accessing your course, try clearing your browser cache, using a different browser (Chrome recommended), or checking your internet connection. If problems persist, contact our support team at khufarzadasgari@gmail.com with details about the issue (error messages, device type, browser) for quick assistance.",
      },
    ],
  },
  {
    category: "Technical Support",
    questions: [
      {
        id: "tech-1",
        question: "What are the system requirements for courses?",
        answer: "For video streaming and live classes, you'll need: a modern browser (Chrome, Firefox, Edge, Safari), stable internet (at least 3 Mbps for video), and speakers/headphones. For coding courses, you'll need to install specific software (e.g., Python, VS Code) which is outlined in the course prerequisites. Most courses work on Windows, Mac, and Linux systems.",
      },
      {
        id: "tech-2",
        question: "Do I need coding experience to start?",
        answer: "It depends on the course! Beginner courses (like Python Fundamentals) require no prior experience—we start from scratch. Intermediate and Advanced courses list prerequisites clearly in the course description. Check the 'Course Level' and 'What You'll Need' sections before enrolling. Still unsure? Contact us for personalized recommendations.",
      },
      {
        id: "tech-3",
        question: "How do I get help if I'm stuck on a coding problem?",
        answer: "CodeSkillz offers multiple support channels: Ask questions during live classes, post in the course discussion forum (monitored by Farzad and teaching assistants), or email support with your code issue. We typically respond within 24 hours. For complex problems, schedule a 1-on-1 office hours session (availability varies by course).",
      },
      {
        id: "tech-4",
        question: "Can I switch to a different course after enrolling?",
        answer: "Course switches are handled on a case-by-case basis. If you enrolled in the wrong course or find it too advanced/basic, contact us within the first 7 days. We can help switch you to a more suitable course or process a refund per our policy. Course credit transfers depend on pricing differences.",
      },
    ],
  },
];

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...faqData.map((cat) => cat.category)];

  const filteredFAQs = faqData
    .filter((cat) => selectedCategory === "All" || cat.category === selectedCategory)
    .map((cat) => ({
      ...cat,
      questions: cat.questions.filter(
        (q) =>
          q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((cat) => cat.questions.length > 0);

  return (
    <div className="min-h-screen pb-20 mt-10">
      {/* Hero Section */}
      <section className="bg-gradient-hero pt-20 pb-16 mb-16">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/20 mb-6 animate-fade-in">
            <HelpCircle className="w-8 h-8 text-secondary" />
          </div>
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary-foreground mb-4 animate-fade-in">
            Got Questions? Find <span className="text-secondary">Answers Here!</span>
          </h1>
          <p className="text-xl text-primary-foreground/90 mb-8 animate-fade-in">
            Everything you need to know about classes, payments, and joining Google Meet sessions
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto animate-fade-in">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Search for answers (e.g., 'Google Meet' or 'payment')..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-6 text-lg bg-background/95 border-2 border-primary/20 focus:border-secondary"
            />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mt-8 animate-fade-in">
            <Link to="/contact">
              <Button variant="secondary" size="lg">
                Contact Us
              </Button>
            </Link>
            <Link to="/courses">
              <Button variant="outline" size="lg" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Browse Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Category Filters */}
          <div className="mb-12">
            <h2 className="font-heading font-semibold text-2xl text-foreground mb-4 text-center">
              Browse by Category
            </h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((cat) => (
                <Button
                  key={cat}
                  variant={selectedCategory === cat ? "secondary" : "outline"}
                  onClick={() => setSelectedCategory(cat)}
                  className={
                    selectedCategory === cat
                      ? ""
                      : "border-primary/30 hover:border-secondary hover:text-secondary"
                  }
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>

          {/* FAQ Accordion */}
          {filteredFAQs.length > 0 ? (
            <div className="space-y-8 animate-fade-in">
              {filteredFAQs.map((category) => (
                <div key={category.category} className="bg-card rounded-lg border-2 border-border p-6 shadow-lg">
                  <h3 className="font-heading font-bold text-2xl text-foreground mb-6 flex items-center gap-3">
                    <span className="w-2 h-8 bg-gradient-primary rounded"></span>
                    {category.category}
                  </h3>

                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((faq) => (
                      <AccordionItem key={faq.id} value={faq.id} className="border-b-2 border-border/50">
                        <AccordionTrigger className="text-left hover:text-secondary transition-colors py-4 text-base md:text-lg font-medium">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-6">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 animate-fade-in">
              <HelpCircle className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
              <h3 className="font-heading font-semibold text-2xl text-foreground mb-2">No results found</h3>
              <p className="text-muted-foreground">
                Try a different search term or browse all categories
              </p>
              <Button
                variant="secondary"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="mt-6"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Support CTA Section */}
      <section className="container mx-auto px-4 mt-20">
        <div className="max-w-4xl mx-auto bg-gradient-card rounded-lg p-12 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-foreground mb-4">
            Still Need <span className="text-secondary">Help?</span>
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Reach out for support or explore our courses to start learning!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Contact Support
              </Button>
            </Link>
            <Link to="/courses">
              <Button variant="outline" size="lg" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Browse Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
