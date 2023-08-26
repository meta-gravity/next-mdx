// src/mdx-components.tsx
import { MDXProvider } from '@mdx-js/react';
import React from 'react';

type MDXComponents = {
  [key: string]: React.ComponentType;
};

interface MDXComponentsProviderProps {
  children: React.ReactNode;
  components: MDXComponents;
}

// Allow the use of global variables (e.g., React components) in JSX expressions
declare global {
  namespace JSX {
    interface IntrinsicElements {
      // Define any global component here
      // For example: "my-custom-component": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
    }
  }
}

export function useMDXComponents(components: MDXComponents) {
  // Define your custom components here
  // For example: const customComponents = { ... };
  return {
    ...components,
    // ...customComponents,
  };
}

export function MDXComponentsProvider({ children, components }: MDXComponentsProviderProps) {
  return <MDXProvider components={components}>{children}</MDXProvider>;
}
