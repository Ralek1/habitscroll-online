
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  twitterCard?: 'summary' | 'summary_large_image';
}

const SEO = ({
  title,
  description,
  canonicalPath = '',
  image = '/lovable-uploads/cc0f0854-a00f-4def-bdb6-9e21ffaa7f07.png',
  type = 'website',
  publishedTime,
  modifiedTime,
  author = 'Your Habitscroll',
  twitterCard = 'summary_large_image'
}: SEOProps) => {
  const { translate } = useLanguage();
  
  const defaultTitle = translate('app.title') + ' | ' + translate('app.subtitle');
  const defaultDescription = translate('app.description') || 'Discover personalized habits to improve your life based on your learning style';
  
  const siteTitle = title ? `${title} | Your Habitscroll` : defaultTitle;
  const siteDescription = description || defaultDescription;
  const siteUrl = 'https://habitscroll.online';
  const canonicalUrl = `${siteUrl}${canonicalPath}`;
  
  // Ensure image has absolute URL
  const absoluteImageUrl = image.startsWith('http') 
    ? image 
    : `${siteUrl}${image}`;

  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={absoluteImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="1200" />
      <meta property="og:site_name" content="Your Habitscroll" />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content="@habitscroll" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={absoluteImageUrl} />
      <meta name="twitter:domain" content="habitscroll.online" />
      
      {/* Article specific tags (if applicable) */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && author && (
        <meta property="article:author" content={author} />
      )}
    </Helmet>
  );
};

export default SEO;
