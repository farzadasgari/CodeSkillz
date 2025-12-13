import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, FileText, Scale, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TermsOfService = () => {
    const [activeSection, setActiveSection] = useState('introduction');

    const sections = [
        { id: 'introduction', title: 'Introduction', icon: FileText },
        {
            id: 'user-responsibilities',
            title: 'User Responsibilities',
            icon: Shield,
        },
        { id: 'course-access', title: 'Course Access', icon: ChevronRight },
        { id: 'payments', title: 'Payments', icon: ChevronRight },
        { id: 'refunds', title: 'Refunds', icon: ChevronRight },
        { id: 'conduct', title: 'User Conduct', icon: ChevronRight },
        { id: 'termination', title: 'Termination', icon: ChevronRight },
        { id: 'contact', title: 'Contact Us', icon: ChevronRight },
    ];

    const scrollToSection = (id: string) => {
        setActiveSection(id);
        const element = document.getElementById(id);
        if (element) {
            const offset = 100;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="min-h-screen bg-background pb-20 mt-10">
            {/* Hero Section */}
            <section className="bg-gradient-hero pt-20 pb-16 mb-12">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/20 mb-6 animate-fade-in">
                        <Scale className="w-8 h-8 text-secondary" />
                    </div>
                    <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary-foreground mb-4 animate-fade-in">
                        Code<span className="text-secondary">Skillz</span> Terms
                        of Service
                    </h1>
                    <p className="text-xl text-primary-foreground/90 mb-6 animate-fade-in">
                        Understand the rules for using CodeSkillz and joining
                        our courses
                    </p>
                    <p className="text-sm text-secondary mb-8 animate-fade-in">
                        Last Updated: October 23, 2025
                    </p>
                    <Link to="/contact">
                        <Button
                            variant="secondary"
                            size="lg"
                            className="animate-fade-in"
                        >
                            Contact Us
                        </Button>
                    </Link>
                </div>
            </section>

            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {/* Desktop Sidebar - Table of Contents */}
                    <aside className="hidden lg:block lg:col-span-1">
                        <div className="sticky top-24 bg-card rounded-lg border-2 border-border shadow-lg p-6">
                            <h3 className="font-heading font-bold text-lg text-card-foreground mb-4">
                                Table of Contents
                            </h3>
                            <nav className="space-y-2">
                                {sections.map((section) => (
                                    <button
                                        key={section.id}
                                        onClick={() =>
                                            scrollToSection(section.id)
                                        }
                                        className={`w-full flex items-center gap-2 px-3 py-2 rounded-md text-left text-sm transition-all ${
                                            activeSection === section.id
                                                ? 'bg-secondary text-secondary-foreground font-semibold'
                                                : 'text-foreground hover:bg-muted hover:text-secondary'
                                        }`}
                                    >
                                        <section.icon className="w-4 h-4 flex-shrink-0" />
                                        <span className="truncate">
                                            {section.title}
                                        </span>
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </aside>

                    {/* Mobile Dropdown - Table of Contents */}
                    <div className="lg:hidden col-span-full mb-6">
                        <div className="bg-card rounded-lg border-2 border-primary p-4">
                            <select
                                value={activeSection}
                                onChange={(e) =>
                                    scrollToSection(e.target.value)
                                }
                                className="w-full bg-background border border-border rounded-md px-4 py-2 text-foreground focus:border-secondary focus:outline-none"
                            >
                                {sections.map((section) => (
                                    <option key={section.id} value={section.id}>
                                        {section.title}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Main Content */}
                    <main className="lg:col-span-3 space-y-8 animate-fade-in">
                        {/* Introduction */}
                        <section
                            id="introduction"
                            className="bg-card rounded-lg border-2 border-border p-8 shadow-lg"
                        >
                            <h2 className="font-heading font-bold text-3xl text-foreground mb-6 flex items-center gap-3">
                                <span className="w-1.5 h-8 bg-gradient-primary rounded"></span>
                                Introduction
                            </h2>
                            <div className="space-y-4 text-foreground leading-relaxed">
                                <p>
                                    Welcome to CodeSkillz! These Terms of
                                    Service ("Terms") govern your access to and
                                    use of the CodeSkillz platform, including
                                    our website, courses, and Google
                                    Meet-powered live classes. By creating an
                                    account or enrolling in a course, you agree
                                    to these Terms.
                                </p>
                                <p>
                                    CodeSkillz is operated by{' '}
                                    <strong className="text-secondary">
                                        Farzad
                                    </strong>
                                    , a passionate educator dedicated to helping
                                    students master coding skills through
                                    hands-on learning and expert instruction.
                                </p>
                                <p>
                                    Please read these Terms carefully. If you do
                                    not agree to these Terms, you may not use
                                    our services. We may update these Terms from
                                    time to time, and changes will be effective
                                    upon posting.
                                </p>
                            </div>
                        </section>

                        {/* User Responsibilities */}
                        <section
                            id="user-responsibilities"
                            className="bg-card rounded-lg border-2 border-border p-8 shadow-lg"
                        >
                            <h2 className="font-heading font-bold text-3xl text-foreground mb-6 flex items-center gap-3">
                                <span className="w-1.5 h-8 bg-gradient-primary rounded"></span>
                                User Responsibilities
                            </h2>
                            <div className="space-y-4 text-foreground leading-relaxed">
                                <p>By using CodeSkillz, you agree to:</p>
                                <ul className="space-y-3 ml-6">
                                    <li className="flex items-start gap-3">
                                        <ChevronRight className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                                        <div>
                                            <strong className="text-secondary">
                                                Account Security:
                                            </strong>
                                            <span className="text-foreground">
                                                {' '}
                                                Maintain the confidentiality of
                                                your login credentials and
                                                notify us immediately of any
                                                unauthorized access.
                                            </span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <ChevronRight className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                                        <div>
                                            <strong className="text-secondary">
                                                Accurate Information:
                                            </strong>
                                            <span className="text-foreground">
                                                {' '}
                                                Provide accurate and complete
                                                information during registration
                                                and keep your profile updated.
                                            </span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <ChevronRight className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                                        <div>
                                            <strong className="text-secondary">
                                                No Sharing:
                                            </strong>
                                            <span className="text-foreground">
                                                {' '}
                                                Course materials, Google Meet
                                                links, and recordings are for
                                                your personal use only and may
                                                not be shared, redistributed, or
                                                sold.
                                            </span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <ChevronRight className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                                        <div>
                                            <strong className="text-secondary">
                                                Compliance:
                                            </strong>
                                            <span className="text-foreground">
                                                {' '}
                                                Follow all applicable laws and
                                                regulations when using our
                                                platform.
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* Course Access */}
                        <section
                            id="course-access"
                            className="bg-card rounded-lg border-2 border-border p-8 shadow-lg"
                        >
                            <h2 className="font-heading font-bold text-3xl text-foreground mb-6 flex items-center gap-3">
                                <span className="w-1.5 h-8 bg-gradient-primary rounded"></span>
                                Course Access
                            </h2>
                            <div className="space-y-4 text-foreground leading-relaxed">
                                <p>
                                    Once you enroll in a CodeSkillz course, you
                                    will receive:
                                </p>
                                <div className="bg-secondary/10 border-2 border-secondary/50 rounded-lg p-6 space-y-3">
                                    <div className="flex items-start gap-3">
                                        <ChevronRight className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                                        <div>
                                            <strong className="text-secondary">
                                                Google Meet Links:
                                            </strong>
                                            <span className="text-foreground">
                                                {' '}
                                                Access links for live classes
                                                are provided in your dashboard
                                                at least 15 minutes before each
                                                session. Links are unique and
                                                should not be shared.
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <ChevronRight className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                                        <div>
                                            <strong className="text-secondary">
                                                Course Materials:
                                            </strong>
                                            <span className="text-foreground">
                                                {' '}
                                                All videos, code files, slides,
                                                and exercises are accessible
                                                from your course dashboard
                                                immediately upon enrollment.
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <ChevronRight className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                                        <div>
                                            <strong className="text-secondary">
                                                Lifetime Access:
                                            </strong>
                                            <span className="text-foreground">
                                                {' '}
                                                Most courses include lifetime
                                                access to materials, unless
                                                otherwise specified. You can
                                                revisit lessons anytime.
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <ChevronRight className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                                        <div>
                                            <strong className="text-secondary">
                                                Recordings:
                                            </strong>
                                            <span className="text-foreground">
                                                {' '}
                                                Live class recordings are
                                                uploaded to your dashboard
                                                within 24 hours of the session
                                                for on-demand viewing.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Payments */}
                        <section
                            id="payments"
                            className="bg-card rounded-lg border-2 border-border p-8 shadow-lg"
                        >
                            <h2 className="font-heading font-bold text-3xl text-foreground mb-6 flex items-center gap-3">
                                <span className="w-1.5 h-8 bg-gradient-primary rounded"></span>
                                Payments
                            </h2>
                            <div className="space-y-4 text-foreground leading-relaxed">
                                <p>
                                    All payments for CodeSkillz courses are
                                    processed securely through{' '}
                                    <strong className="text-secondary">
                                        Stripe
                                    </strong>
                                    ,{' '}
                                    <strong className="text-secondary">
                                        PayPal
                                    </strong>
                                    , or other approved payment processors.
                                </p>
                                <ul className="space-y-3 ml-6">
                                    <li className="flex items-start gap-3">
                                        <ChevronRight className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                                        <div>
                                            <strong className="text-secondary">
                                                One-Time Payments:
                                            </strong>
                                            <span className="text-foreground">
                                                {' '}
                                                Most courses require a one-time
                                                payment for lifetime access.
                                                Prices are listed in USD and
                                                subject to change without
                                                notice.
                                            </span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <ChevronRight className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                                        <div>
                                            <strong className="text-secondary">
                                                Installment Plans:
                                            </strong>
                                            <span className="text-foreground">
                                                {' '}
                                                Select courses may offer
                                                installment payment options.
                                                Contact us for details.
                                            </span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <ChevronRight className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                                        <div>
                                            <strong className="text-secondary">
                                                Security:
                                            </strong>
                                            <span className="text-foreground">
                                                {' '}
                                                All transactions are encrypted
                                                and PCI-compliant. CodeSkillz
                                                does not store your full credit
                                                card details.
                                            </span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <ChevronRight className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                                        <div>
                                            <strong className="text-secondary">
                                                Receipts:
                                            </strong>
                                            <span className="text-foreground">
                                                {' '}
                                                You will receive an email
                                                receipt upon purchase. Invoices
                                                are available in your dashboard
                                                under "Purchases."
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* Refunds */}
                        <section
                            id="refunds"
                            className="bg-card rounded-lg border-2 border-border p-8 shadow-lg"
                        >
                            <h2 className="font-heading font-bold text-3xl text-foreground mb-6 flex items-center gap-3">
                                <span className="w-1.5 h-8 bg-gradient-primary rounded"></span>
                                Refunds
                            </h2>
                            <div className="space-y-4 text-foreground leading-relaxed">
                                <p>
                                    We want you to be satisfied with your
                                    learning experience. CodeSkillz offers a{' '}
                                    <strong className="text-secondary">
                                        7-day money-back guarantee
                                    </strong>{' '}
                                    for all courses.
                                </p>
                                <div className="bg-secondary/10 border-2 border-secondary/50 rounded-lg p-6 space-y-3">
                                    <div className="flex items-start gap-3">
                                        <ChevronRight className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                                        <div>
                                            <strong className="text-secondary">
                                                Eligibility:
                                            </strong>
                                            <span className="text-foreground">
                                                {' '}
                                                Refunds are available within 7
                                                days of purchase if you have
                                                completed less than 30% of the
                                                course content.
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <ChevronRight className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                                        <div>
                                            <strong className="text-secondary">
                                                How to Request:
                                            </strong>
                                            <span className="text-foreground">
                                                {' '}
                                                Contact us at
                                                khufarzadasgari@gmail.com with
                                                your order details and reason
                                                for the refund request.
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <ChevronRight className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                                        <div>
                                            <strong className="text-secondary">
                                                Processing:
                                            </strong>
                                            <span className="text-foreground">
                                                {' '}
                                                Approved refunds are processed
                                                within 5-7 business days to your
                                                original payment method.
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <ChevronRight className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                                        <div>
                                            <strong className="text-secondary">
                                                Exclusions:
                                            </strong>
                                            <span className="text-foreground">
                                                {' '}
                                                Individual missed live classes
                                                are not refundable, but
                                                recordings are always available.
                                                Refunds are not provided for
                                                completed courses or after the
                                                7-day window.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* User Conduct */}
                        <section
                            id="conduct"
                            className="bg-card rounded-lg border-2 border-border p-8 shadow-lg"
                        >
                            <h2 className="font-heading font-bold text-3xl text-foreground mb-6 flex items-center gap-3">
                                <span className="w-1.5 h-8 bg-gradient-primary rounded"></span>
                                User Conduct
                            </h2>
                            <div className="space-y-4 text-foreground leading-relaxed">
                                <p>You agree not to:</p>
                                <ul className="space-y-3 ml-6">
                                    <li className="flex items-start gap-3">
                                        <ChevronRight className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                                        <span className="text-foreground">
                                            Use CodeSkillz for any unlawful or
                                            fraudulent purpose.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <ChevronRight className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                                        <span className="text-foreground">
                                            Share, copy, distribute, or resell
                                            course content, including Google
                                            Meet links or recordings.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <ChevronRight className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                                        <span className="text-foreground">
                                            Disrupt live classes or engage in
                                            behavior that is abusive, harassing,
                                            or disrespectful to instructors or
                                            other students.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <ChevronRight className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                                        <span className="text-foreground">
                                            Attempt to hack, reverse engineer,
                                            or otherwise compromise the security
                                            or integrity of the CodeSkillz
                                            platform.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <ChevronRight className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                                        <span className="text-foreground">
                                            Create multiple accounts or use bots
                                            to access our services.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* Termination */}
                        <section
                            id="termination"
                            className="bg-card rounded-lg border-2 border-border p-8 shadow-lg"
                        >
                            <h2 className="font-heading font-bold text-3xl text-foreground mb-6 flex items-center gap-3">
                                <span className="w-1.5 h-8 bg-gradient-primary rounded"></span>
                                Termination
                            </h2>
                            <div className="space-y-4 text-foreground leading-relaxed">
                                <p>
                                    CodeSkillz reserves the right to suspend or
                                    terminate your account at any time if you
                                    violate these Terms or engage in conduct
                                    that we deem harmful to the platform or
                                    other users.
                                </p>
                                <ul className="space-y-3 ml-6">
                                    <li className="flex items-start gap-3">
                                        <ChevronRight className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                                        <div>
                                            <strong className="text-secondary">
                                                Immediate Termination:
                                            </strong>
                                            <span className="text-foreground">
                                                {' '}
                                                Accounts may be terminated
                                                immediately for sharing course
                                                materials, fraudulent activity,
                                                or abusive behavior.
                                            </span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <ChevronRight className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                                        <div>
                                            <strong className="text-secondary">
                                                Loss of Access:
                                            </strong>
                                            <span className="text-foreground">
                                                {' '}
                                                Terminated accounts lose access
                                                to all courses, materials, and
                                                recordings. No refunds are
                                                provided for terminated
                                                accounts.
                                            </span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <ChevronRight className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                                        <div>
                                            <strong className="text-secondary">
                                                User Termination:
                                            </strong>
                                            <span className="text-foreground">
                                                {' '}
                                                You may delete your account at
                                                any time by contacting us. Note
                                                that paid course access cannot
                                                be refunded after the 7-day
                                                refund window.
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* Contact Us */}
                        <section
                            id="contact"
                            className="bg-gradient-card rounded-lg border-2 border-secondary/50 p-8 shadow-lg"
                        >
                            <h2 className="font-heading font-bold text-3xl text-primary-foreground mb-6 flex items-center gap-3">
                                <span className="w-1.5 h-8 bg-secondary rounded"></span>
                                Contact Us
                            </h2>
                            <div className="space-y-4 text-primary-foreground leading-relaxed">
                                <p>
                                    If you have any questions about these Terms
                                    of Service, please contact us:
                                </p>
                                <div className="bg-primary-dark/50 rounded-lg p-6 space-y-3">
                                    <div className="flex items-start gap-3">
                                        <ChevronRight className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                                        <div>
                                            <strong className="text-secondary">
                                                Email:
                                            </strong>
                                            <span className="text-primary-foreground">
                                                {' '}
                                                khufarzadasgari@gmail.com
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <ChevronRight className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                                        <div>
                                            <strong className="text-secondary">
                                                Contact Form:
                                            </strong>
                                            <span className="text-primary-foreground">
                                                {' '}
                                                Visit our{' '}
                                            </span>
                                            <Link
                                                to="/contact"
                                                className="text-secondary hover:underline font-semibold"
                                            >
                                                Contact page
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <Link to="/contact">
                                        <Button
                                            variant="hero"
                                            size="lg"
                                            className="w-full md:w-auto"
                                        >
                                            Contact Support
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;
