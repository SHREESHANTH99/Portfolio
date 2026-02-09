/**
 * MDX Type Definitions
 * 
 * Required for TypeScript to understand MDX imports and component types.
 */

declare module '*.mdx' {
  import type { MDXProps } from 'mdx/types';
  export default function MDXContent(props: MDXProps): JSX.Element;
  export const metadata: {
    title: string;
    description: string;
    date: string;
    tags?: string[];
    author?: string;
  };
}

declare module 'mdx/types' {
  export interface MDXProps {
    components?: Record<string, React.ComponentType<unknown>>;
    [key: string]: unknown;
  }
}
