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
  title = "GoodWorkRoofing - Professional Roofing Services in McKinney, Dallas-Fort Worth TX",
  description = "Expert roofing contractor in McKinney, Dallas-Fort Worth area. Residential & commercial roof repair, replacement, installation. Licensed, insured, 24/7 emergency service. Call (214) 836-4511",
  keywords = "roofing contractor McKinney TX, roof repair Dallas, roofing services Fort Worth, residential roofing, commercial roofing, emergency roof repair, Dallas roofing company",
  canonical,
  ogImage = "/lovable-uploads/8471e9f7-aec3-4ca3-8079-b90ea7fae8c9.png",
  noindex = false
}: SEOHeadProps) {
  const fullTitle = title.includes('GoodWorkRoofing') ? title : `${title} | GoodWorkRoofing`;
  
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