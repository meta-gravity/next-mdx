// next.config.mjs
import createMDX from '@next/mdx';

const withMDX = createMDX({
  options: {
    extension: /\.mdx?$/,
    // Other options if needed.
  },
});

export default withMDX({
  // Other Next.js configuration options.
});
