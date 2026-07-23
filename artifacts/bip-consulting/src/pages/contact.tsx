import { SEO } from '@/components/SEO';
import { PageWrapper, Section, fadeUpVariant, staggerContainer } from '@/components/layout/PageWrapper';
import { motion } from 'framer-motion';
import { companyDetails } from '@/data/content';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const INTEREST_KEYS = [
  'interest_strategy',
  'interest_ai',
  'interest_digital',
  'interest_software',
  'interest_talent',
  'interest_entrepreneurship',
  'interest_development',
  'interest_partnership',
  'interest_other',
] as const;

export default function Contact() {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);

  const formSchema = z.object({
    name: z.string().min(2, t('contact.errorName')),
    email: z.string().email(t('contact.errorEmail')),
    organization: z.string().min(1, t('contact.errorOrg')),
    interest: z.string().min(1, t('contact.errorInterest')),
    message: z.string().min(20, t('contact.errorMessage')),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '', email: '', organization: '', interest: '', message: '' },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setSubmitted(true);
  }

  return (
    <PageWrapper>
      <SEO
        title={t('contact.seoTitle')}
        description={t('contact.seoDesc')}
      />

      <section className="bg-primary text-white py-24 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.h1 variants={fadeUpVariant} className="font-serif text-5xl md:text-7xl font-bold mb-6">
              {t('contact.heroTitle')}
            </motion.h1>
            <motion.p variants={fadeUpVariant} className="text-xl md:text-2xl text-white/80 font-light max-w-2xl">
              {t('contact.heroSubtitle')}
            </motion.p>
          </motion.div>
        </div>
      </section>

      <Section className="bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Left: contact info */}
            <div className="lg:col-span-5">
              <div className="space-y-12 sticky top-32">
                <div>
                  <h2 className="font-serif text-3xl font-bold text-primary mb-6">{t('contact.officeTitle')}</h2>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">{t('contact.visitUs')}</h4>
                      <p className="text-muted-foreground">{companyDetails.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">{t('contact.emailUs')}</h4>
                      <a href={`mailto:${companyDetails.email}`} className="text-accent hover:underline">
                        {companyDetails.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">{t('contact.callUs')}</h4>
                      <a href={`tel:${companyDetails.phone.replace(/\s+/g, '')}`} className="text-accent hover:underline">
                        {companyDetails.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-border">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                      <Mail className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="font-serif text-3xl font-bold text-primary mb-4">{t('contact.successTitle')}</h3>
                    <p className="text-muted-foreground mb-8">{t('contact.successDesc')}</p>
                    <Button variant="outline" onClick={() => { setSubmitted(false); form.reset(); }}>
                      {t('contact.sendAnother')}
                    </Button>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="font-serif text-2xl font-bold text-primary mb-2">{t('contact.formTitle')}</h3>
                    <p className="text-muted-foreground mb-8">{t('contact.formSubtitle')}</p>

                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>{t('contact.fieldName')}</FormLabel>
                                <FormControl>
                                  <Input placeholder={t('contact.fieldNamePlaceholder')} className="h-12" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="organization"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>{t('contact.fieldOrg')}</FormLabel>
                                <FormControl>
                                  <Input placeholder={t('contact.fieldOrgPlaceholder')} className="h-12" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>{t('contact.fieldEmail')}</FormLabel>
                                <FormControl>
                                  <Input type="email" placeholder={t('contact.fieldEmailPlaceholder')} className="h-12" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="interest"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>{t('contact.fieldInterest')}</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger className="h-12">
                                      <SelectValue placeholder={t('contact.fieldInterestPlaceholder')} />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {INTEREST_KEYS.map((key) => (
                                      <SelectItem key={key} value={key}>
                                        {t(`contact.${key}` as any)}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{t('contact.fieldMessage')}</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder={t('contact.fieldMessagePlaceholder')}
                                  className="min-h-[150px] resize-none"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button type="submit" size="lg" className="w-full h-14 text-lg" disabled={form.formState.isSubmitting}>
                          {form.formState.isSubmitting ? t('common.sending') : t('common.submitInquiry')}
                        </Button>
                      </form>
                    </Form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </PageWrapper>
  );
}
