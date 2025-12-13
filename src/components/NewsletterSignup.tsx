import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { useTranslation } from 'react-i18next';

const NewsletterSignup = () => {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { t } = useTranslation('common');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));

        toast.success(t('newsletter.success'));
        setEmail('');
        setIsLoading(false);
    };

    return (
        <section className="w-full bg-primary py-16 px-4">
            <div className="container mx-auto max-w-3xl text-center">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
                    {t('newsletter.title')}
                </h2>
                <p className="text-lg text-primary-foreground/90 mb-8">
                    {t('newsletter.description')}
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto"
                >
                    <Input
                        type="email"
                        placeholder={t('newsletter.placeholder')}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="flex-1 h-12 bg-background/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                    />
                    <Button
                        type="submit"
                        disabled={isLoading}
                        variant="secondary"
                        size="lg"
                        className="md:w-auto w-full"
                    >
                        {isLoading
                            ? t('newsletter.subscribing')
                            : t('newsletter.subscribe')}
                    </Button>
                </form>

                <p className="text-secondary text-sm mt-4 font-semibold">
                    {t('newsletter.gift')}
                </p>
            </div>
        </section>
    );
};

export default NewsletterSignup;
