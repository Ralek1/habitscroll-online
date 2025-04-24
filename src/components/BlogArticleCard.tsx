import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { optimizedImage } from '../utils/optimizeImage';

interface BlogArticle {
  id: string;
  imageUrl: string;
  tags: string[];
}

interface BlogArticleScrollProps {
  article: BlogArticle;
}

const BlogArticleCard: React.FC<BlogArticleScrollProps> = ({ article }) => {
  const { translate } = useLanguage();
  const imgProps = optimizedImage({
    src: article.imageUrl,       // "/lovable-uploads/…"
    alt: translate(`blog.articles.${article.id}.title`),
    width: 400,                  // oder passend für deinen Card-Block
    height: 240,
    className: 'w-full h-full object-cover',
    placeholder: true,           // lazy-loading mit 1×1-GIF
    priority: false              // normal lazy-loaden
  });

  
  const baseKey = `blog.articles.${article.id}`;

  return (
    <article className="bg-transparent border border-purple-600 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <Link to={`/blog/${article.id}`} className="block">
        <div className="w-full h-40 bg-gray-800 overflow-hidden">
          <img {...(imgProps as React.ImgHTMLAttributes<HTMLImageElement>)} 
          />
        </div>
        <div className="p-4">
          <h3 className="font-pixel text-lg text-green-400 mb-2">
            {translate(`${baseKey}.title`)}
          </h3>
          <p className="font-pixel-text text-retro-purple-400 line-clamp-4 text-lg">
            {translate(`${baseKey}.shortDescription`)}
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            {article.tags.map(tag => (
              <span
                key={tag}
                className="font-pixel-text text-xs bg-green-200 text-purple-900 px-1 py-0.9 rounded-full"
              >
                {translate(`tags.${tag}`)}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BlogArticleCard;
