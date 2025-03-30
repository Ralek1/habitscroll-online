
import React from "react";
import { Link } from "react-router-dom";
import PixelButton from "../components/PixelButton";
import HeaderNavigation from "../components/HeaderNavigation";
import { useLanguage } from "../context/LanguageContext";
import BlogArticleScroll from "../components/BlogArticleScroll";

// Blog articles data
const blogArticles = [
  {
    id: "obsidian",
    imageUrl: "/lovable-uploads/8d7b002d-7c00-40c5-bdc8-7f70c5c69d87.png"
  },
  // Add more articles here in the future
];

const Blog: React.FC = () => {
  const { translate } = useLanguage();
  
  React.useEffect(() => {
    document.title = translate('page.blog.title');
  }, [translate]);

  return (
    <div className="min-h-screen flex flex-col items-center py-12 px-4">
      <div className="absolute top-4 right-4 z-10">
        <HeaderNavigation />
      </div>
      
      <div className="text-center mb-8 animate-appear">
        <div className="inline-block bg-retro-purple-700 px-4 py-1 rounded mb-2">
          <h1 className="font-pixel text-retro-light text-xs">{translate('app.title')}</h1>
        </div>
        <h2 className="font-pixel text-2xl text-retro-purple-200 leading-relaxed">
          {translate('page.blog.title')} <br /> 
          <span className="text-green-400">{translate('page.blog.subtitle')}</span>
        </h2>
      </div>

      <div className="w-full max-w-4xl mx-auto">
        {blogArticles.length > 0 ? (
          <div className="space-y-6">
            {blogArticles.map(article => (
              <BlogArticleScroll key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center text-green-200 mb-8 font-pixel-text max-w-2xl mx-auto">
            {translate('page.blog.comingSoon')}
          </div>
        )}
      </div>
      
      <div className="mt-8">
        <Link to="/">
          <PixelButton onClick={() => {}}>
            {translate('button.returnHome')}
          </PixelButton>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
