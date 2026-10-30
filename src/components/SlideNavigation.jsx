import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize } from 'lucide-react';

/** Keys: →/Space next, ← prev, Home, End, F fullscreen. Controls fade after idle. */
export default function SlideNavigation({ index, total, go }) {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const toggleFs = () => (document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen?.());
    const onKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); go(index + 1); }
      else if (e.key === 'ArrowLeft') go(index - 1);
      else if (e.key === 'Home') go(0);
      else if (e.key === 'End') go(total - 1);
      else if (e.key.toLowerCase() === 'f') toggleFs();
    };
    let t;
    const onMove = () => { setVisible(true); clearTimeout(t); t = setTimeout(() => setVisible(false), 2500); };
    window.addEventListener('keydown', onKey); window.addEventListener('mousemove', onMove); onMove();
    return () => { window.removeEventListener('keydown', onKey); window.removeEventListener('mousemove', onMove); clearTimeout(t); };
  }, [index, total, go]);

  const btn = 'p-2 rounded-full text-muted hover:text-heading hover:bg-wash transition-colors';
  return (
    <div className={`fixed bottom-3 left-1/2 -translate-x-1/2 flex gap-2 transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <button className={btn} onClick={() => go(index - 1)} aria-label="Previous slide"><ChevronLeft size={20} /></button>
      <button className={btn} onClick={() => document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen()} aria-label="Toggle fullscreen"><Maximize size={18} /></button>
      <button className={btn} onClick={() => go(index + 1)} aria-label="Next slide"><ChevronRight size={20} /></button>
    </div>);
}
