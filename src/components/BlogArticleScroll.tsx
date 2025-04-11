
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { lazyLoadImage } from '../utils/optimizeImage';

interface BlogArticle {
  id: string;
  imageUrl: string;
}

interface BlogArticleScrollProps {
  article: BlogArticle;
}

const BlogArticleScroll: React.FC<BlogArticleScrollProps> = ({ article }) => {
  const { translate, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Preload the image
    lazyLoadImage(article.imageUrl)
      .then(() => {
        setImageLoaded(true);
        console.log(`Image loaded successfully: ${article.imageUrl}`);
      })
      .catch((error) => {
        console.error(`Failed to load image: ${article.imageUrl}`, error);
      });
  }, [article.imageUrl]);

  const baseKey = `blog.articles.${article.id}`;

  return (
    <div className="w-full max-w-2xl mx-auto mt-6 mb-8">
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-full"
      >
        <div className="pixel-scroll-container">
          {/* Top scroll handle */}
          <div className="pixel-scroll-handle pixel-scroll-handle-top">
            <div className="pixel-scroll-knob"></div>
            <div className="pixel-wooden-rod"></div>
            <div className="pixel-scroll-knob"></div>
          </div>
          
          {/* Scroll content */}
          <div className="scroll-closed-body rounded-xl">
            <CollapsibleTrigger asChild onClick={toggleOpen}>
              <div className="cursor-pointer p-4 flex items-center justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-pixel text-green-600 text-lg mb-2">{translate(`${baseKey}.title`)}</h3>
                  {!isOpen && (
                    <p className="font-pixel-text text-retro-purple-400 text-sm line-clamp-2">
                      {translate(`${baseKey}.shortDescription`)}
                    </p>
                  )}
                </div>
                <div className="w-24 h-24 min-w-24 relative">
                  <img 
                    src={article.imageUrl} 
                    alt={translate(`${baseKey}.title`)}
                    className="w-full h-full object-cover rounded-lg"
                    key={`${article.id}-${Date.now()}`} // Force refresh of image
                    onLoad={() => console.log(`Image displayed: ${article.imageUrl}`)}
                    onError={(e) => console.error(`Image error: ${article.imageUrl}`, e)}
                  />
                </div>
                <div className="text-green-500">
                  {isOpen ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
                </div>
              </div>
            </CollapsibleTrigger>
            
            <CollapsibleContent className="px-6 pb-6">
              <div className="space-y-4 mt-2 font-pixel-text text-retro-purple-200">
                <p className="mb-4">{translate(`${baseKey}.introduction`)}</p>
                
                <h4 className="font-pixel text-green-400 text-base mt-6 mb-2">
                  {translate(`${baseKey}.whatIsTitle`)}
                </h4>
                <p>{translate(`${baseKey}.whatIsContent`)}</p>
                
                <h4 className="font-pixel text-green-400 text-base mt-6 mb-2">
                  {translate(`${baseKey}.whyTitle`)}
                </h4>
                <p>{translate(`${baseKey}.whyContent`)}</p>
                
                <h4 className="font-pixel text-green-400 text-base mt-6 mb-2">
                  {translate(`${baseKey}.whereTitle`)}
                </h4>
                <p>{translate(`${baseKey}.whereContent`)}</p>
                
                <h4 className="font-pixel text-green-400 text-base mt-6 mb-2">
                  {translate(`${baseKey}.howTitle`)}
                </h4>
                <p>{translate(`${baseKey}.howContent`)}</p>
                
                <h4 className="font-pixel text-green-400 text-base mt-6 mb-2">
                  {translate(`${baseKey}.effectiveTitle`)}
                </h4>
                <p>{translate(`${baseKey}.effectiveContent`)}</p>
                
                <h4 className="font-pixel text-green-400 text-base mt-6 mb-2">
                  {translate(`${baseKey}.youtuberTitle`)}
                </h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>{translate(`${baseKey}.youtuber1`)}</li>
                  <li>{translate(`${baseKey}.youtuber2`)}</li>
                  <li>{translate(`${baseKey}.youtuber3`)}</li>
                </ul>
                
                <h4 className="font-pixel text-green-400 text-base mt-6 mb-2">
                  {translate(`${baseKey}.conclusionTitle`)}
                </h4>
                <p>{translate(`${baseKey}.conclusionContent`)}</p>
              </div>
            </CollapsibleContent>
          </div>
          
          {/* Bottom scroll handle */}
          <div className="pixel-scroll-handle pixel-scroll-handle-bottom">
            <div className="pixel-scroll-knob"></div>
            <div className="pixel-wooden-rod"></div>
            <div className="pixel-scroll-knob"></div>
          </div>
        </div>
      </Collapsible>
    </div>
  );
};

export default BlogArticleScroll;
