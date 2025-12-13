import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PrivacyPolicy = () => {
    const [activeSection, setActiveSection] = useState('intro');

    const sections = [
        { id: 'intro', title: 'Introduction' },
        { id: 'data-collection', title: 'Data We Collect' },
        { id: 'data-usage', title: 'How We Use Data' },
        { id: 'data-sharing', title: 'Data Sharing' },
        { id: 'data-security', title: 'Data Security' },
        { id: 'your-rights', title: 'Your Rights' },
        { id: 'contact', title: 'Contact Us' },
    ];

    const scrollToSection = (id: string) => {
        setActiveSection(id);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="min-h-screen bg-background pb-20 mt-10">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-primary-foreground pt-20 pb-16 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 text-6xl font-mono animate-pulse">
                        &lt;data&gt;
                    </div>
                    <div className="absolute bottom-10 right-10 text-6xl font-mono animate-pulse">
                        &lt;/data&gt;
                    </div>
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                            Code<span className="text-secondary">Skillz</span>{' '}
                            Privacy Policy
                        </h1>
                        <p className="text-lg mb-6 text-primary-foreground/90">
                            Your data is safe with us. Learn how we protect your
                            information
                        </p>
                        <p className="text-sm text-secondary font-semibold">
                            Last Updated: October 23, 2025
                        </p>
                        <Link to="/contact">
                            <Button variant="secondary" className="mt-6">
                                Contact Us About Privacy
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-secondary to-primary"></div>
            </section>

            {/* Main Content */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Table of Contents - Desktop Sidebar */}
                        <aside className="hidden lg:block lg:w-64 sticky top-24 self-start">
                            <div className="bg-primary-dark rounded-lg p-6 shadow-lg">
                                <h2 className="text-lg font-heading font-semibold text-primary-foreground mb-4">
                                    Table of Contents
                                </h2>
                                <nav className="space-y-2">
                                    {sections.map((section) => (
                                        <button
                                            key={section.id}
                                            onClick={() =>
                                                scrollToSection(section.id)
                                            }
                                            className={`w-full text-left px-3 py-2 rounded transition-colors text-sm ${
                                                activeSection === section.id
                                                    ? 'bg-secondary/20 text-secondary font-semibold'
                                                    : 'text-primary-foreground hover:text-secondary hover:bg-primary/20'
                                            }`}
                                        >
                                            {section.title}
                                        </button>
                                    ))}
                                </nav>
                            </div>
                        </aside>

                        {/* Table of Contents - Mobile Dropdown */}
                        <div className="lg:hidden">
                            <select
                                value={activeSection}
                                onChange={(e) =>
                                    scrollToSection(e.target.value)
                                }
                                className="w-full px-4 py-3 rounded-lg border-2 border-secondary bg-card text-foreground font-medium"
                            >
                                {sections.map((section) => (
                                    <option key={section.id} value={section.id}>
                                        {section.title}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Policy Content */}
                        <main className="flex-1 max-w-4xl">
                            <div className="space-y-8">
                                {/* Introduction */}
                                <div
                                    id="intro"
                                    className="bg-card rounded-lg shadow-md overflow-hidden border border-border"
                                >
                                    <div className="bg-gradient-to-r from-primary to-primary-dark p-4">
                                        <h2 className="text-2xl font-heading font-bold text-primary-foreground">
                                            Introduction
                                        </h2>
                                    </div>
                                    <div className="p-6 space-y-4">
                                        <p className="text-foreground leading-relaxed">
                                            Welcome to CodeSkillz! This Privacy
                                            Policy explains how we collect, use,
                                            disclose, and safeguard your
                                            information when you use our online
                                            coding courses platform. We are
                                            committed to protecting your privacy
                                            and ensuring transparency in how we
                                            handle your data.
                                        </p>
                                        <p className="text-foreground leading-relaxed">
                                            By using CodeSkillz, you agree to
                                            the collection and use of
                                            information in accordance with this
                                            policy. If you do not agree with our
                                            policies and practices, please do
                                            not use our services.
                                        </p>
                                    </div>
                                </div>

                                {/* Data We Collect */}
                                <div
                                    id="data-collection"
                                    className="bg-card rounded-lg shadow-md overflow-hidden border border-border"
                                >
                                    <div className="bg-gradient-to-r from-primary to-primary-dark p-4">
                                        <h2 className="text-2xl font-heading font-bold text-primary-foreground">
                                            Data We Collect
                                        </h2>
                                    </div>
                                    <div className="p-6 space-y-4">
                                        <p className="text-foreground leading-relaxed">
                                            We collect several types of
                                            information to provide and improve
                                            our services:
                                        </p>
                                        <div className="space-y-3">
                                            <div className="flex items-start gap-3">
                                                <ChevronRight className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                                                <div>
                                                    <strong className="text-secondary">
                                                        Personal Information:
                                                    </strong>
                                                    <span className="text-foreground">
                                                        {' '}
                                                        Name, email address,
                                                        phone number, and
                                                        profile picture
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <ChevronRight className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                                                <div>
                                                    <strong className="text-secondary">
                                                        Payment Information:
                                                    </strong>
                                                    <span className="text-foreground">
                                                        {' '}
                                                        Credit card details,
                                                        billing address
                                                        (processed securely via
                                                        Stripe)
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <ChevronRight className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                                                <div>
                                                    <strong className="text-secondary">
                                                        Course Data:
                                                    </strong>
                                                    <span className="text-foreground">
                                                        {' '}
                                                        Enrollment records,
                                                        progress tracking,
                                                        assignments, and quiz
                                                        results
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <ChevronRight className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                                                <div>
                                                    <strong className="text-secondary">
                                                        Google Meet Attendance:
                                                    </strong>
                                                    <span className="text-foreground">
                                                        {' '}
                                                        Session join times and
                                                        participation records
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <ChevronRight className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                                                <div>
                                                    <strong className="text-secondary">
                                                        Technical Data:
                                                    </strong>
                                                    <span className="text-foreground">
                                                        {' '}
                                                        IP address, browser
                                                        type, device
                                                        information, and usage
                                                        analytics
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-6 p-4 bg-secondary/10 border-2 border-secondary rounded-lg">
                                            <p className="text-foreground text-sm">
                                                <strong className="text-secondary">
                                                    Note:
                                                </strong>{' '}
                                                We only collect information that
                                                is necessary to provide our
                                                services and improve your
                                                learning experience.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* How We Use Data */}
                                <div
                                    id="data-usage"
                                    className="bg-card rounded-lg shadow-md overflow-hidden border border-border"
                                >
                                    <div className="bg-gradient-to-r from-primary to-primary-dark p-4">
                                        <h2 className="text-2xl font-heading font-bold text-primary-foreground">
                                            How We Use Data
                                        </h2>
                                    </div>
                                    <div className="p-6 space-y-4">
                                        <p className="text-foreground leading-relaxed">
                                            We use your information for the
                                            following purposes:
                                        </p>
                                        <div className="space-y-3">
                                            <div className="flex items-start gap-3">
                                                <ChevronRight className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                                                <div>
                                                    <strong className="text-secondary">
                                                        Delivering Classes:
                                                    </strong>
                                                    <span className="text-foreground">
                                                        {' '}
                                                        Providing access to
                                                        Google Meet sessions and
                                                        course materials
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <ChevronRight className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                                                <div>
                                                    <strong className="text-secondary">
                                                        Processing Payments:
                                                    </strong>
                                                    <span className="text-foreground">
                                                        {' '}
                                                        Handling course
                                                        enrollments and
                                                        subscription payments
                                                        via Stripe
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <ChevronRight className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                                                <div>
                                                    <strong className="text-secondary">
                                                        Communication:
                                                    </strong>
                                                    <span className="text-foreground">
                                                        {' '}
                                                        Sending course updates,
                                                        class schedules, and
                                                        educational content
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <ChevronRight className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                                                <div>
                                                    <strong className="text-secondary">
                                                        Improving Services:
                                                    </strong>
                                                    <span className="text-foreground">
                                                        {' '}
                                                        Analyzing usage patterns
                                                        to enhance platform
                                                        features and content
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <ChevronRight className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                                                <div>
                                                    <strong className="text-secondary">
                                                        Support:
                                                    </strong>
                                                    <span className="text-foreground">
                                                        {' '}
                                                        Responding to inquiries
                                                        and providing technical
                                                        assistance
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Data Sharing */}
                                <div
                                    id="data-sharing"
                                    className="bg-card rounded-lg shadow-md overflow-hidden border border-border"
                                >
                                    <div className="bg-gradient-to-r from-primary to-primary-dark p-4">
                                        <h2 className="text-2xl font-heading font-bold text-primary-foreground">
                                            Data Sharing
                                        </h2>
                                    </div>
                                    <div className="p-6 space-y-4">
                                        <p className="text-foreground leading-relaxed">
                                            We do not sell your personal
                                            information. We may share your data
                                            with trusted third parties only when
                                            necessary:
                                        </p>
                                        <div className="space-y-3">
                                            <div className="flex items-start gap-3">
                                                <ChevronRight className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                                                <div>
                                                    <strong className="text-secondary">
                                                        Payment Processors:
                                                    </strong>
                                                    <span className="text-foreground">
                                                        {' '}
                                                        Stripe handles payment
                                                        processing with
                                                        industry-standard
                                                        encryption
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <ChevronRight className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                                                <div>
                                                    <strong className="text-secondary">
                                                        Video Conferencing:
                                                    </strong>
                                                    <span className="text-foreground">
                                                        {' '}
                                                        Google Meet for live
                                                        class sessions (subject
                                                        to Google's privacy
                                                        policy)
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <ChevronRight className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                                                <div>
                                                    <strong className="text-secondary">
                                                        Analytics Services:
                                                    </strong>
                                                    <span className="text-foreground">
                                                        {' '}
                                                        Aggregated, anonymized
                                                        data for platform
                                                        improvement
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <ChevronRight className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                                                <div>
                                                    <strong className="text-secondary">
                                                        Legal Compliance:
                                                    </strong>
                                                    <span className="text-foreground">
                                                        {' '}
                                                        When required by law or
                                                        to protect our rights
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-6 p-4 bg-secondary/10 border-2 border-secondary rounded-lg">
                                            <p className="text-foreground text-sm">
                                                <strong className="text-secondary">
                                                    We use Stripe for secure
                                                    payment processing.
                                                </strong>{' '}
                                                Your payment information is
                                                encrypted and never stored on
                                                our servers.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Data Security */}
                                <div
                                    id="data-security"
                                    className="bg-card rounded-lg shadow-md overflow-hidden border border-border"
                                >
                                    <div className="bg-gradient-to-r from-primary to-primary-dark p-4">
                                        <h2 className="text-2xl font-heading font-bold text-primary-foreground">
                                            Data Security
                                        </h2>
                                    </div>
                                    <div className="p-6 space-y-4">
                                        <p className="text-foreground leading-relaxed">
                                            We implement robust security
                                            measures to protect your data:
                                        </p>
                                        <div className="space-y-3">
                                            <div className="flex items-start gap-3">
                                                <ChevronRight className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                                                <div>
                                                    <strong className="text-secondary">
                                                        Encryption:
                                                    </strong>
                                                    <span className="text-foreground">
                                                        {' '}
                                                        SSL/TLS encryption for
                                                        data transmission and
                                                        secure storage
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <ChevronRight className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                                                <div>
                                                    <strong className="text-secondary">
                                                        Access Controls:
                                                    </strong>
                                                    <span className="text-foreground">
                                                        {' '}
                                                        Restricted access to
                                                        personal data on a
                                                        need-to-know basis
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <ChevronRight className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                                                <div>
                                                    <strong className="text-secondary">
                                                        Regular Audits:
                                                    </strong>
                                                    <span className="text-foreground">
                                                        {' '}
                                                        Periodic security
                                                        reviews and
                                                        vulnerability
                                                        assessments
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <ChevronRight className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                                                <div>
                                                    <strong className="text-secondary">
                                                        Secure Infrastructure:
                                                    </strong>
                                                    <span className="text-foreground">
                                                        {' '}
                                                        Hosting on trusted cloud
                                                        platforms with advanced
                                                        security
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-foreground leading-relaxed mt-4">
                                            While we strive to protect your
                                            data, no method of transmission over
                                            the internet is 100% secure. We
                                            continuously update our security
                                            practices to maintain the highest
                                            standards.
                                        </p>
                                    </div>
                                </div>

                                {/* Your Rights */}
                                <div
                                    id="your-rights"
                                    className="bg-card rounded-lg shadow-md overflow-hidden border border-border"
                                >
                                    <div className="bg-gradient-to-r from-primary to-primary-dark p-4">
                                        <h2 className="text-2xl font-heading font-bold text-primary-foreground">
                                            Your Rights
                                        </h2>
                                    </div>
                                    <div className="p-6 space-y-4">
                                        <p className="text-foreground leading-relaxed">
                                            You have the following rights
                                            regarding your personal data:
                                        </p>
                                        <div className="space-y-3">
                                            <div className="flex items-start gap-3">
                                                <ChevronRight className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                                                <div>
                                                    <strong className="text-secondary">
                                                        Access:
                                                    </strong>
                                                    <span className="text-foreground">
                                                        {' '}
                                                        Request a copy of your
                                                        personal data we hold
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <ChevronRight className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                                                <div>
                                                    <strong className="text-secondary">
                                                        Correction:
                                                    </strong>
                                                    <span className="text-foreground">
                                                        {' '}
                                                        Update or correct
                                                        inaccurate information
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <ChevronRight className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                                                <div>
                                                    <strong className="text-secondary">
                                                        Deletion:
                                                    </strong>
                                                    <span className="text-foreground">
                                                        {' '}
                                                        Request deletion of your
                                                        data (subject to legal
                                                        obligations)
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <ChevronRight className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                                                <div>
                                                    <strong className="text-secondary">
                                                        Opt-Out:
                                                    </strong>
                                                    <span className="text-foreground">
                                                        {' '}
                                                        Unsubscribe from
                                                        marketing communications
                                                        at any time
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <ChevronRight className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                                                <div>
                                                    <strong className="text-secondary">
                                                        Data Portability:
                                                    </strong>
                                                    <span className="text-foreground">
                                                        {' '}
                                                        Receive your data in a
                                                        structured,
                                                        machine-readable format
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-foreground leading-relaxed mt-4">
                                            To exercise any of these rights,
                                            please contact us using the
                                            information below. We will respond
                                            to your request within 30 days.
                                        </p>
                                    </div>
                                </div>

                                {/* Contact Us */}
                                <div
                                    id="contact"
                                    className="bg-card rounded-lg shadow-md overflow-hidden border border-border"
                                >
                                    <div className="bg-gradient-to-r from-primary to-primary-dark p-4">
                                        <h2 className="text-2xl font-heading font-bold text-primary-foreground">
                                            Contact Us
                                        </h2>
                                    </div>
                                    <div className="p-6 space-y-4">
                                        <p className="text-foreground leading-relaxed">
                                            If you have questions or concerns
                                            about this Privacy Policy or how we
                                            handle your data, please contact us:
                                        </p>
                                        <div className="space-y-3">
                                            <div className="flex items-start gap-3">
                                                <ChevronRight className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                                                <div>
                                                    <strong className="text-secondary">
                                                        Email:
                                                    </strong>
                                                    <span className="text-foreground">
                                                        {' '}
                                                        khufarzadasgari@gmail.com
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <ChevronRight className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                                                <div>
                                                    <strong className="text-secondary">
                                                        Contact Page:
                                                    </strong>
                                                    <Link
                                                        to="/contact"
                                                        className="text-secondary hover:underline"
                                                    >
                                                        Visit our Contact page
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-6">
                                            <Link to="/contact">
                                                <Button
                                                    variant="secondary"
                                                    className="w-full md:w-auto"
                                                >
                                                    Contact Support
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
