const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Index-Do4HUa2N.js","./components-B3acf4OV.js","./react-vendor-DQN6Balh.js","./icons-BSZjHztC.js","./pages-C_k99irL.js"])))=>i.map(i=>d[i]);
import{r as n,j as e,q as p,H as c,a as u,b as o,c as f}from"./react-vendor-DQN6Balh.js";import{_ as a,a as _}from"./components-B3acf4OV.js";import{N as h}from"./pages-C_k99irL.js";import"./icons-BSZjHztC.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))m(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&m(l)}).observe(document,{childList:!0,subtree:!0});function d(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function m(r){if(r.ep)return;r.ep=!0;const s=d(r);fetch(r.href,s)}})();const w=n.lazy(()=>a(()=>import("./Index-Do4HUa2N.js"),__vite__mapDeps([0,1,2,3]),import.meta.url)),x=n.lazy(()=>a(()=>import("./pages-C_k99irL.js").then(t=>t.L),__vite__mapDeps([4,2,1,3]),import.meta.url)),g=n.lazy(()=>a(()=>import("./pages-C_k99irL.js").then(t=>t.a),__vite__mapDeps([4,2,1,3]),import.meta.url)),j=n.lazy(()=>a(()=>import("./pages-C_k99irL.js").then(t=>t.b),__vite__mapDeps([4,2,1,3]),import.meta.url)),y=n.lazy(()=>a(()=>import("./pages-C_k99irL.js").then(t=>t.I),__vite__mapDeps([4,2,1,3]),import.meta.url)),E=n.lazy(()=>a(()=>import("./pages-C_k99irL.js").then(t=>t.D),__vite__mapDeps([4,2,1,3]),import.meta.url)),L=n.lazy(()=>a(()=>import("./pages-C_k99irL.js").then(t=>t.c),__vite__mapDeps([4,2,1,3]),import.meta.url)),v=n.lazy(()=>a(()=>import("./pages-C_k99irL.js").then(t=>t.B),__vite__mapDeps([4,2,1,3]),import.meta.url)),b=n.lazy(()=>a(()=>import("./pages-C_k99irL.js").then(t=>t.d),__vite__mapDeps([4,2,1,3]),import.meta.url)),P=n.lazy(()=>a(()=>import("./pages-C_k99irL.js").then(t=>t.A),__vite__mapDeps([4,2,1,3]),import.meta.url)),O=n.lazy(()=>a(()=>import("./pages-C_k99irL.js").then(t=>t.V),__vite__mapDeps([4,2,1,3]),import.meta.url)),A=n.lazy(()=>a(()=>import("./pages-C_k99irL.js").then(t=>t.K),__vite__mapDeps([4,2,1,3]),import.meta.url)),I=()=>e.jsx("div",{className:"flex items-center justify-center min-h-screen bg-retro-dark",children:e.jsx("div",{className:"text-retro-purple-200 font-pixel text-xl animate-pulse",children:"Loading..."})});function R(){return e.jsx(p,{children:e.jsx(_,{children:e.jsx(c,{children:e.jsx(n.Suspense,{fallback:e.jsx(I,{}),children:e.jsxs(u,{children:[e.jsx(o,{path:"/",element:e.jsx(w,{})}),e.jsx(o,{path:"/learn-who-you-are",element:e.jsx(x,{})}),e.jsx(o,{path:"/learn-about-habits",element:e.jsx(g,{})}),e.jsx(o,{path:"/learn-how-to-track",element:e.jsx(j,{})}),e.jsx(o,{path:"/impressum",element:e.jsx(y,{})}),e.jsx(o,{path:"/datenschutz",element:e.jsx(E,{})}),e.jsx(o,{path:"/deploy",element:e.jsx(L,{})}),e.jsx(o,{path:"/blog",element:e.jsx(v,{})}),e.jsx(o,{path:"/bookworms",element:e.jsx(b,{})}),e.jsx(o,{path:"/audiophiles",element:e.jsx(P,{})}),e.jsx(o,{path:"/visual-learners",element:e.jsx(O,{})}),e.jsx(o,{path:"/knowledge-seekers",element:e.jsx(A,{})}),e.jsx(o,{path:"*",element:e.jsx(h,{})})]})})})})})}if(typeof window<"u"&&"performance"in window&&(window.performance.mark("app-init"),"PerformanceObserver"in window))try{new PerformanceObserver(i=>{for(const d of i.getEntries())d.duration>50&&console.debug("Long task detected:",d)}).observe({entryTypes:["longtask"]})}catch{console.debug("PerformanceObserver for longtask not supported")}const T=()=>{"requestIdleCallback"in window&&window.requestIdleCallback(()=>{const t=["./pages/LearnWhoYouAre","./pages/LearnAboutHabits","./pages/LearnHowToTrack"];Promise.all(t.map(i=>import(i).catch(d=>console.debug(`Prefetch failed for ${i}:`,d))))})};(async()=>{try{f(document.getElementById("root")).render(e.jsx(R,{})),window.performance.mark("app-rendered"),window.performance.measure("app-render-time","app-init","app-rendered"),T()}catch(t){console.error("Error rendering application:",t)}})();window.addEventListener("DOMContentLoaded",()=>{window.performance.mark("dom-content-loaded"),window.performance.measure("dom-load-time","app-init","dom-content-loaded")});window.addEventListener("load",()=>{window.performance.mark("page-load-complete"),window.performance.measure("total-page-load","app-init","page-load-complete");const t=window.performance.getEntriesByName("total-page-load")[0];t&&console.debug(`Page fully loaded in: ${Math.round(t.duration)}ms`),typeof window<"u"&&"navigation"in window&&window.addEventListener("navigate",()=>{document.dispatchEvent(new Event("securityrefresh"))})});
