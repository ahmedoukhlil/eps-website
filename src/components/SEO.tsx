import { Metadata } from 'next';
import { generateSEOMeta, SEOProps } from '@/lib/seo';

interface SEOComponentProps extends SEOProps {
  children?: React.ReactNode;
}

export const SEO: React.FC<SEOComponentProps> = ({ children, ...props }) => {
  const meta = generateSEOMeta(props);
  
  return (
    <>
      <head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content={meta.openGraph.title} />
        <meta property="og:description" content={meta.openGraph.description} />
        <meta property="og:url" content={meta.openGraph.url} />
        <meta property="og:site_name" content={meta.openGraph.siteName} />
        <meta property="og:type" content={meta.openGraph.type} />
        {meta.openGraph.images && (
          <meta property="og:image" content={meta.openGraph.images[0].url} />
        )}
        
        {/* Twitter */}
        <meta name="twitter:card" content={meta.twitter.card} />
        <meta name="twitter:title" content={meta.twitter.title} />
        <meta name="twitter:description" content={meta.twitter.description} />
        {meta.twitter.images && (
          <meta name="twitter:image" content={meta.twitter.images[0]} />
        )}
        
        {/* Canonical */}
        <link rel="canonical" href={meta.alternates.canonical} />
      </head>
      {children}
    </>
  );
};

export const generateMetadata = (props: SEOProps): Metadata => {
  return generateSEOMeta(props);
};
