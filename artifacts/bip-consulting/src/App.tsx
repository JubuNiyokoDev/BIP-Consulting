import '@/i18n'; // initialize i18n before anything else
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Route, Switch, Router as WouterRouter } from 'wouter';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

import Home from '@/pages/home';
import About from '@/pages/about';
import Services from '@/pages/services';
import Industries from '@/pages/industries';
import Solutions from '@/pages/solutions';
import Insights from '@/pages/insights';
import Careers from '@/pages/careers';
import Partners from '@/pages/partners';
import Contact from '@/pages/contact';
import NotFound from '@/pages/not-found';

const queryClient = new QueryClient();

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/industries" component={Industries} />
          <Route path="/solutions" component={Solutions} />
          <Route path="/insights" component={Insights} />
          <Route path="/careers" component={Careers} />
          <Route path="/partners" component={Partners} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
