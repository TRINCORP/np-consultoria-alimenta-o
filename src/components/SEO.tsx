import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  type?: string;
}

const SEO = ({ 
  title, 
  description, 
  keywords = "consultoria alimentar, nutrição, rotulagem, segurança alimentar, qualidade alimentar",
  image = "/logoNP.png",
  type = "website"
}: SEOProps) => {
  const location = useLocation();
  const siteUrl = window.location.origin;
  const currentUrl = `${siteUrl}${location.pathname}`;
  
  const fullTitle = `${title} | NP Consultoria Alimentos`;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Update or create meta tags
    const updateMetaTag = (property: string, content: string, isName = false) => {
      const attribute = isName ? 'name' : 'property';
      let element = document.querySelector(`meta[${attribute}="${property}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, property);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Standard meta tags
    updateMetaTag('description', description, true);
    updateMetaTag('keywords', keywords, true);
    
    // Open Graph tags
    updateMetaTag('og:title', fullTitle);
    updateMetaTag('og:description', description);
    updateMetaTag('og:type', type);
    updateMetaTag('og:url', currentUrl);
    updateMetaTag('og:image', `${siteUrl}${image}`);
    updateMetaTag('og:site_name', 'NP Consultoria Alimentos');
    updateMetaTag('og:locale', 'pt_PT');
    
    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image', true);
    updateMetaTag('twitter:title', fullTitle, true);
    updateMetaTag('twitter:description', description, true);
    updateMetaTag('twitter:image', `${siteUrl}${image}`, true);
    
    // Additional SEO tags
    updateMetaTag('robots', 'index, follow', true);
    updateMetaTag('author', 'NP Consultoria Alimentos', true);
  }, [title, description, keywords, image, type, fullTitle, currentUrl, siteUrl]);

  return null;
};

export default SEO;
