import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
}

export function SEOHead({
  title = "Good Work Roofing - Professional Roofing Services in McKinney, TX",
  description = "Expert roofing services in McKinney, Dallas-Fort Worth area. Residential & commercial roof repair, replacement, installation. Licensed, insured, 24/7 emergency service. Call (214) 836-4511",
  keywords = "roofing contractor McKinney TX, roof repair Dallas, roofing services Fort Worth, residential roofing, commercial roofing, emergency roof repair",
  canonical,
  ogImage = "https://goodworkroofing.com/og-image.jpg",
  noindex = false
}: SEOHeadProps) {
  const fullTitle = title.includes('Good Work Roofing') ? title : `${title} | Good Work Roofing`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {canonical && <link rel="canonical" href={canonical} />}
      
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      {canonical && <meta property="og:url" content={canonical} />}
      
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}