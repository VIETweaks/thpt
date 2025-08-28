import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type RouterContextType = {
  currentPath: string;
  navigate: (path: string) => void;
};

const RouterContext = createContext<RouterContextType | null>(null);

export function Router({ children }: { children: ReactNode }) {
  const [currentPath, setCurrentPath] = useState(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      // Ensure we default to home page if path is empty or just a slash
      return path === '' || path === '/' ? '/' : path;
    }
    return '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
      // Scroll to top when using browser back/forward buttons
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      // Scroll to top when navigating
      window.scrollTo(0, 0);
    }
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a Router');
  }
  return context;
}

export function Routes({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

export function Route({ path, component }: { path: string; component: ReactNode }) {
  const { currentPath } = useRouter();
  
  // Exact match for all paths
  // Normalize both paths to handle empty strings and trailing slashes
  const normalizedCurrentPath = currentPath === '' ? '/' : currentPath;
  const normalizedRoutePath = path === '' ? '/' : path;
  
  const isMatch = normalizedCurrentPath === normalizedRoutePath;
  
  if (isMatch) {
    return <>{component}</>;
  }
  
  return null;
}

export function Link({ to, children, className = "", onClick }: { 
  to: string; 
  children: ReactNode; 
  className?: string;
  onClick?: () => void;
}) {
  const { navigate } = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(to);
    onClick?.();
  };

  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}