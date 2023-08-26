// src/pages/index.tsx
import React from 'react';
import { MDXComponentsProvider, useMDXComponents } from '../mdx-components';
import mdxContent from './hello.mdx'; // Import the mdxContent function

export default function Home() {
  const components = useMDXComponents({}); // You can add custom components here.
  
  return (
    <MDXComponentsProvider components={components}>
      {/* Call mdxContent to render the MDX content */}
      {mdxContent({})}
    </MDXComponentsProvider>
  );
}
