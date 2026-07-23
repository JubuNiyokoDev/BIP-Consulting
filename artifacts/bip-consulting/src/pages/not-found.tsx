import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { useTranslation } from 'react-i18next';

export default function NotFound() {
  const { t } = useTranslation();
  return (
    <PageWrapper className="items-center justify-center bg-background py-32">
      <div className="text-center">
        <h1 className="font-serif text-8xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-primary mb-4">{t('notFound.title')}</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          {t('notFound.subtitle')}
        </p>
        <Button asChild size="lg">
          <Link href="/">{t('common.backHome')}</Link>
        </Button>
      </div>
    </PageWrapper>
  );
}
