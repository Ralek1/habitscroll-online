
import React, { useRef } from 'react';
import html2canvas from 'html2canvas';

const DownloadablePNGs: React.FC = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Function to download an element as a PNG
  const downloadElementAsPNG = (elementRef: React.RefObject<HTMLElement>, fileName: string) => {
    if (!elementRef.current) return;
    
    const element = elementRef.current;
    
    html2canvas(element, {
      backgroundColor: null,
      scale: 2, // Higher resolution
      logging: false,
      allowTaint: true,
      useCORS: true
    }).then(canvas => {
      const link = document.createElement('a');
      link.download = fileName;
      link.href = canvas.toDataURL('image/png');
      link.click();
    });
  };

  return (
    <div className="p-6 flex flex-col items-center gap-8">
      <h1 className="font-pixel text-xl text-retro-purple-200 mb-4">Download Elements as PNG</h1>
      
      {/* Background sample */}
      <div className="w-full max-w-md">
        <h2 className="font-pixel text-retro-purple-300 mb-2">Background</h2>
        <div 
          ref={backgroundRef}
          className="w-full h-96 rounded-xl overflow-hidden"
          style={{
            backgroundColor: "#120824",
            backgroundImage: `
              radial-gradient(white, rgba(255,255,255,.1) 2px, transparent 3px),
              radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 2px),
              radial-gradient(white, rgba(255,255,255,.1) 3px, transparent 4px),
              radial-gradient(rgba(255,255,255,.4), rgba(255,255,255,.1) 2px, transparent 3px),
              radial-gradient(rgba(255, 215, 255, 0.3), transparent 15px),
              radial-gradient(rgba(180, 145, 255, 0.2), transparent 12px),
              radial-gradient(ellipse at 25% 20%, rgba(147, 64, 191, 0.4) 0%, transparent 50%),
              radial-gradient(ellipse at 75% 40%, rgba(91, 33, 182, 0.5) 0%, transparent 60%),
              radial-gradient(ellipse at 50% 70%, rgba(189, 16, 224, 0.5) 0%, transparent 50%),
              repeating-radial-gradient(rgba(255, 255, 255, 0.03) 2px, transparent 4px, rgba(255, 255, 255, 0.03) 6px),
              radial-gradient(ellipse at 80% 50%, rgba(123, 31, 162, 0.6) 0%, transparent 70%),
              radial-gradient(ellipse at 20% 70%, rgba(74, 20, 140, 0.6) 0%, transparent 70%),
              linear-gradient(45deg, rgba(154, 85, 255, 0.1) 0%, transparent 70%),
              linear-gradient(135deg, rgba(188, 117, 244, 0.1) 0%, transparent 70%)
            `,
            backgroundSize: `
              550px 550px, 350px 350px, 250px 250px, 
              150px 150px, 
              300px 300px, 400px 400px,
              100% 100%, 100% 100%, 100% 100%,
              50px 50px,
              100% 100%, 100% 100%,
              100% 100%, 100% 100%
            `,
            backgroundPosition: `
              0 0, 30px 60px, 130px 270px, 
              70px 100px,
              200px 200px, 300px 300px,
              0 0, 0 0, 0 0,
              0 0,
              0 0, 0 0,
              0 0, 0 0
            `
          }}
        />
        <button 
          className="mt-4 pixel-button"
          onClick={() => downloadElementAsPNG(backgroundRef, 'habit-scrolls-background.png')}
        >
          Download Background
        </button>
      </div>
      
      {/* Empty Scroll */}
      <div className="w-full max-w-md mt-8">
        <h2 className="font-pixel text-retro-purple-300 mb-2">Empty Scroll</h2>
        <div ref={scrollRef} className="w-full max-w-xl mx-auto mt-6">
          <div className="pixel-scroll-container">
            {/* Top scroll handle */}
            <div className="pixel-scroll-handle pixel-scroll-handle-top">
              <div className="pixel-scroll-knob"></div>
              <div className="pixel-wooden-rod"></div>
              <div className="pixel-scroll-knob"></div>
            </div>
            
            {/* Scroll content */}
            <div className="scroll-paper rounded-xl">
              <div className="pixel-scroll-content p-6 px-8" style={{ height: '400px' }}>
                {/* Empty scroll with no content */}
              </div>
            </div>
            
            {/* Bottom scroll handle */}
            <div className="pixel-scroll-handle pixel-scroll-handle-bottom">
              <div className="pixel-scroll-knob"></div>
              <div className="pixel-wooden-rod"></div>
              <div className="pixel-scroll-knob"></div>
            </div>
          </div>
        </div>
        <button 
          className="mt-4 pixel-button"
          onClick={() => downloadElementAsPNG(scrollRef, 'empty-habit-scroll.png')}
        >
          Download Empty Scroll
        </button>
      </div>
    </div>
  );
};

export default DownloadablePNGs;
