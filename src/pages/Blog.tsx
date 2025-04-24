import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PixelButton from "../components/PixelButton";
import HeaderNavigation from "../components/HeaderNavigation";
import { useLanguage } from "../context/LanguageContext";
import BlogArticleCard from "../components/BlogArticleCard";
import SEO from "../components/SEO";
import { preloadCriticalImages } from "../utils/optimizeImage";

interface BlogArticle {
  id: string;
  imageUrl: string;
  altText: string;
  tags: string[];
  
}

// Blog articles data (with tags and ALT texts)
const blogArticles: BlogArticle[] = [
  { 
    id: "habits-vs-goals", 
    imageUrl: "/lovable-uploads/habits-vs-goals-how-to-set-right-habits.png", 
    altText: "Habits vs Goals – Richtige Gewohnheiten aufbauen für langfristigen Erfolg", 
    tags: ["all","aufbauen", "sinnvoll","hacks"], 
  
  },
  { 
    id: "obsidian",          
    imageUrl: "/lovable-uploads/obsidian-productivity-hacks.png", 
    altText: "Obsidian Produktivitäts-Hacks für bessere Organisation und Mindset", 
    tags: ["hacks", "mindset"],
  },  
  { 
    id: "handwritten",       
    imageUrl: "/lovable-uploads/handwritten-habit-tracking-methods.png", 
    altText: "Handschriftliche Methoden für effektives Habit-Tracking", 
    tags: ["sinnvoll", "hacks"],
  
  },
  { 
    id: "getting-back-on-track", 
    imageUrl: "/lovable-uploads/getting-back-on-track-with-habits.png", 
    altText: "Mit Gewohnheiten zurück auf Kurs – erfolgreich neu starten", 
    tags: ["aufbauen", "mindset", "hacks"], 
  },
  // Weitere Artikel hier später ergänzen
];

const tagOptions = [
  { key: "all",      label: "Alle Artikel" },
  { key: "aufbauen", label: "Gewohnheiten aufbauen" },
  { key: "loswerden",label: "Gewohnheiten loswerden" },
  { key: "sinnvoll", label: "Sinnvolle Gewohnheiten" },
  { key: "mindset",  label: "Motivation & Mindset" },
  { key: "hacks",    label: "Habit‑Hacks" }
];

const PAGE_SIZE = 9;

const Blog: React.FC = () => {
  const { translate } = useLanguage();
  const [activeTag, setActiveTag] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Preload images and set document title
  useEffect(() => {
    document.title = translate("page.blog.title");
    preloadCriticalImages(blogArticles.map(a => a.imageUrl));
  }, [translate]);

  // Filter articles
  const filtered = activeTag === "all"
    ? blogArticles
    : blogArticles.filter(a => a.tags.includes(activeTag));

  // Pagination calculations
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const start = (currentPage - 1) * PAGE_SIZE;
  const pageArticles = filtered.slice(start, start + PAGE_SIZE);

  const goToPage = (page: number) => {
    const p = Math.min(Math.max(1, page), totalPages);
    setCurrentPage(p);
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-12 px-4">
      <SEO
        title={translate("page.blog.title")}
        description={translate("page.blog.subtitle")}
        canonicalPath="/blog"
      />

      <div className="absolute top-4 right-4 z-10">
        <HeaderNavigation />
      </div>

      {/* Hero */}
      <div className="text-center mb-8 animate-appear">
        <div className="inline-block bg-retro-purple-700 px-4 py-1 rounded mb-2">
          <h1 className="font-pixel text-retro-light text-xs">
            {translate("app.title")}
          </h1>
        </div>
        <h2 className="font-pixel text-2xl text-retro-purple-200 leading-relaxed">
          {translate("page.blog.title")}
          <br />
          <span className="text-green-400">{translate("page.blog.subtitle")}</span>
        </h2>
      </div>

      {/* Tag Filter Bar */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {tagOptions.map(tag => (
          <button
            key={tag.key}
            onClick={() => { setActiveTag(tag.key); setCurrentPage(1); }}
            className={`px-4 py-1 rounded-full font-pixel text-sm whitespace-nowrap ${
              activeTag === tag.key ? "bg-purple-500 text-white" : "bg-purple-700 text-green-200"
            }`}
          >
            {translate(`tags.${tag.key}`) || tag.label}
          </button>
        ))}
      </div>

      {/* Articles Grid */}
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pageArticles.map(article => (
            <BlogArticleCard key={article.id} article={article} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex flex-col items-center mt-8 space-y-2">
          <div className="flex items-center gap-4">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 bg-purple-700 text-green-200 rounded-full disabled:opacity-50"
            >
              &lt;
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`px-3 py-1 rounded-full font-pixel text-sm ${
                  currentPage === page ? "bg-purple-500 text-white" : "bg-purple-700 text-green-200"
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1 bg-purple-700 text-green-200 rounded-full disabled:opacity-50"
            >
              &gt;
            </button>
          </div>
          <div className="font-pixel text-sm text-green-200">
            Springen zu: Seite {currentPage} von {totalPages}
          </div>
        </div>
      </div>

      {/* Back Home */}
      <div className="mt-8">
        <Link to="/">
          <PixelButton onClick={() => {}}>{translate("button.home")}</PixelButton>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
