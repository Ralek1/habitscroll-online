// src/pages/BlogDetail.tsx
import React, { useMemo } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';
import HeaderNavigation from '../components/HeaderNavigation';
import PixelButton from '../components/PixelButton';
import { optimizedImage } from '../utils/optimizeImage';  // ← Import

// Import your JSON translations
import deData from '../translations/de.json';
import enData from '../translations/en.json';

const blogArticles= [
    { 
      id: "habits-vs-goals", 
      imageUrl: "/lovable-uploads/habits-vs-goals-how-to-set-right-habits.png", 
      altText: "Habits vs Goals – Richtige Gewohnheiten aufbauen für langfristigen Erfolg", 
      tags: ["all","aufbauen", "sinnvoll","hacks"] 
    },
    { 
      id: "obsidian",          
      imageUrl: "/lovable-uploads/obsidian-productivity-hacks.png", 
      altText: "Obsidian Produktivitäts-Hacks für bessere Organisation und Mindset", 
      tags: ["hacks", "mindset"] 
    },
    { 
      id: "handwritten",       
      imageUrl: "/lovable-uploads/handwritten-habit-tracking-methods.png", 
      altText: "Handschriftliche Methoden für effektives Habit-Tracking", 
      tags: ["sinnvoll", "hacks"] 
    },
    { 
      id: "getting-back-on-track", 
      imageUrl: "/lovable-uploads/getting-back-on-track-with-habits.png", 
      altText: "Mit Gewohnheiten zurück auf Kurs – erfolgreich neu starten", 
      tags: ["aufbauen", "mindset", "hacks"] 
    }
]
const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { translate, language } = useLanguage();

  // pick correct JSON
  const data: any = language === 'de' ? deData : enData;
  const entry = data.blog.articles[id!];
  if (!entry) return <Navigate to="/blog" replace />;

  const meta = blogArticles.find(a => a.id === id);
  const imageUrl = meta?.imageUrl;
  const baseKey = `blog.articles.${id}`;

  // prepare word count
  const allText = useMemo(() => [
    entry.introduction,
    entry.whatIsContent,
    entry.whyContent,
    entry.whereContent,
    entry.howContent,
    entry.effectiveContent,
    entry.conclusionContent
  ].join(' '), [entry]);
  const wordCount = useMemo(() =>
    allText.trim().split(/\s+/).filter(Boolean).length
  , [allText]);

  // table of contents sections
  const toc = [
    { id: 'einleitung',   label: translate(`${baseKey}.introductionTitle`) },
    { id: 'was-ist',      label: translate(`${baseKey}.whatIsTitle`) },
    { id: 'warum',        label: translate(`${baseKey}.whyTitle`) },
    { id: 'wo-anfangen',  label: translate(`${baseKey}.whereTitle`) },
    { id: 'wie',          label: translate(`${baseKey}.howTitle`) },
    { id: 'wirksamste',   label: translate(`${baseKey}.effectiveTitle`) },
    { id: 'ressourcen',   label: translate(`${baseKey}.SourcesTitle`) },
    { id: 'fazit',        label: translate(`${baseKey}.conclusionTitle`) }
  ];

  const scrollTo = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };
  const imgProps = imageUrl
    ? optimizedImage({
        src: imageUrl,
        alt: entry.title,
        width: 800,                // Passe Breite/Höhe nach Bedarf an
        height: 450,
        className: 'w-full max-w-2xl mx-auto mb-6 rounded-lg',
        placeholder: true,
        priority: true,            // setzt loading="eager" und preload
      })
    : null;

  return (
    <div className="prose mx-auto py-12 px-4 text-left">
      <SEO title={entry.title} description={entry.shortDescription} />

      <div className="absolute top-4 right-4 z-10">
        <HeaderNavigation />
      </div>

      <h1 className="font-pixel text-4xl text-green-400 mb-2">{entry.title}</h1>
      <div className="text-xs text-gray-500 mb-6">
        {language === 'de' ? `${wordCount} Wörter` : `${wordCount} words`}
      </div>

      {/* **Hier** verwendest du imgProps */}
      {imgProps && (
        // cast nötig, damit TS die Props-Typen akzeptiert
        <img {...(imgProps as React.ImgHTMLAttributes<HTMLImageElement>)} />
      )}

      {/* Inhaltsverzeichnis */}
      <div className="mb-8">
        <strong>{translate(`${baseKey}.content`)}</strong><br /><br />
        {toc.map((sec, idx) => (
          <React.Fragment key={sec.id}>
            {idx + 1}.{' '}
            <a
              href="#"
              className="text-purple-400 cursor-pointer"
              onClick={(e) => { e.preventDefault(); scrollTo(sec.id); }}
            >
              {sec.label}
            </a>
            <br />
          </React.Fragment>
        ))}
        <br />
        <strong className="text-xs text-purple-500">Tags:</strong>{' '}
        {entry.tags.map((tag: string, i: number) => (
          <span key={tag} className="text-xs text-purple-500">
            {translate(`tags.${tag}`)}{i < entry.tags.length - 1 ? ' • ' : ''}
          </span>
        ))}
      </div>

        {/* 1. Einleitung */}
<section id="einleitung" className="mb-8 text-green-400 text-lb">
  <h2 className="font-pixel text-2xl mb-2">{translate(`${baseKey}.introductionTitle`)}</h2>
  <p
    className="font-pixel text-white mb-2"
    dangerouslySetInnerHTML={{
      __html: entry.introduction
        .replace(/\n/g, '<br>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    }}
  />
</section>

{/* 2. Was ist der Unterschied? */}
<section id="was-ist" className="mb-8 text-green-400 text-lb">
  <h2 className="font-pixel text-2xl mb-2">{translate(`${baseKey}.whatIsTitle`)}</h2>
  <p
    className="font-pixel text-white mb-2"
    dangerouslySetInnerHTML={{
      __html: entry.whatIsContent
        .replace(/\n/g, '<br>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    }}
  />
</section>

{/* 3. Warum Gewohnheiten gewinnen */}
<section id="warum" className="mb-8 text-green-400 text-lb">
  <h2 className="font-pixel text-2xl mb-2">{translate(`${baseKey}.whyTitle`)}</h2>
  <p
    className="font-pixel text-white mb-2"
    dangerouslySetInnerHTML={{
      __html: entry.whyContent
        .replace(/\n/g, '<br>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    }}
  />
</section>

{/* 4. Wo anfangen */}
<section id="wo-anfangen" className="mb-8 text-green-400 text-lb">
  <h2 className="font-pixel text-2xl mb-2">{translate(`${baseKey}.whereTitle`)}</h2>
  <p
    className="font-pixel text-white mb-2"
    dangerouslySetInnerHTML={{
      __html: entry.whereContent
        .replace(/\n/g, '<br>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    }}
  />
</section>

{/* 5. Wie man Gewohnheiten aufbaut */}
<section id="wie" className="mb-8 text-green-400 text-lb">
  <h2 className="font-pixel text-2xl mb-2">{translate(`${baseKey}.howTitle`)}</h2>
  <p
    className="font-pixel text-white mb-2"
    dangerouslySetInnerHTML={{
      __html: entry.howContent
        .replace(/\n/g, '<br>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    }}
  />
</section>

{/* 6. Wirksamste Gewohnheiten */}
<section id="wirksamste" className="mb-8 text-green-400 text-lb">
  <h2 className="font-pixel text-2xl mb-2">{translate(`${baseKey}.effectiveTitle`)}</h2>
  <p
    className="font-pixel text-white mb-2"
    dangerouslySetInnerHTML={{
      __html: entry.effectiveContent
        .replace(/\n/g, '<br>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    }}
  />
</section>

{/* 7. Weiterführende Ressourcen */}
<section id="ressourcen" className="mb-8 text-green-400 text-lb">
  <h2 className="font-pixel text-2xl mb-2">{translate(`${baseKey}.SourcesTitle`)}</h2>
  <p
    className="font-pixel text-white mb-2"
    dangerouslySetInnerHTML={{
      __html: entry.sourcesContent
        .replace(/\n/g, '<br>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    }}
  />
</section>

{/* 8. Fazit & Call‑to‑Action */}
<section id="fazit" className="mb-8 text-green-400 text-lb">
  <h2 className="font-pixel text-2xl mb-2">{translate(`${baseKey}.conclusionTitle`)}</h2>
  <p
    className="font-pixel text-white mb-2"
    dangerouslySetInnerHTML={{
      __html: entry.conclusionContent
        .replace(/\n/g, '<br>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    }}
  />
</section>

      <div className="mt-8">
        <Link to="/blog">
          <PixelButton onClick={() => {}}>
            {translate('button.backToBlog')}
          </PixelButton>
        </Link>
      </div>
    </div>
  );
};

export default BlogDetail;
