import { createContext, useContext, useState } from 'react';
import { RouterProvider, createRouter, createRoute, createRootRoute, Outlet } from '@tanstack/react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import InquiryModal from '@/components/InquiryModal';
import Home from '@/pages/Home';
import AnnualProgram from '@/pages/AnnualProgram';
import OurLegacy from '@/pages/OurLegacy';

// Modal context
interface ModalContextType {
  openModal: () => void;
  closeModal: () => void;
  isModalOpen: boolean;
}

export const ModalContext = createContext<ModalContextType>({
  openModal: () => {},
  closeModal: () => {},
  isModalOpen: false,
});

export function useModal() {
  return useContext(ModalContext);
}

// Query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: 1, staleTime: 30_000 },
  },
});

// Layout component
function Layout() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        openModal: () => setModalOpen(true),
        closeModal: () => setModalOpen(false),
        isModalOpen: modalOpen,
      }}
    >
      <div className="min-h-screen flex flex-col bg-background font-sans">
        <Navigation />
        <div className="flex-1">
          <Outlet />
        </div>
        <Footer />
        <InquiryModal />
      </div>
    </ModalContext.Provider>
  );
}

// Routes
const rootRoute = createRootRoute({ component: Layout });

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

const annualProgramRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/annual-program',
  component: AnnualProgram,
});

const ourLegacyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/our-legacy',
  component: OurLegacy,
});

const routeTree = rootRoute.addChildren([homeRoute, annualProgramRoute, ourLegacyRoute]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
