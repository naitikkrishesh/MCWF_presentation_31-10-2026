import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { order } from './data/presentationContent';
import SlideNavigation from './components/SlideNavigation';
import ProgressIndicator from './components/ProgressIndicator';
import Slide01 from './slides/Slide01'; import Slide02 from './slides/Slide02';
import Slide03 from './slides/Slide03'; import Slide04 from './slides/Slide04';
import Slide05 from './slides/Slide05'; import Slide06 from './slides/Slide06';
import Slide07 from './slides/Slide07'; import Slide08 from './slides/Slide08';
import Slide09 from './slides/Slide09'; import Slide10 from './slides/Slide10';

const registry = { s01: Slide01, s02: Slide02, s03: Slide03, s04: Slide04, s05: Slide05,
  s06: Slide06, s07: Slide07, s08: Slide08, s09: Slide09, s10: Slide10 };
const W = 1920, H = 1080;

export default function App() {
  const [index, setIndex] = useState(0);
  const [scale, setScale] = useState(1);
  const go = useCallback((i) => setIndex(Math.min(order.length - 1, Math.max(0, i))), []);
  useEffect(() => {
    const fit = () => setScale(Math.min(window.innerWidth / W, window.innerHeight / H));
    fit(); window.addEventListener('resize', fit); return () => window.removeEventListener('resize', fit);
  }, []);
  const Current = registry[order[index]];
  return (
    <div className="w-screen h-screen bg-white relative overflow-hidden">
      <div style={{ width: W, height: H, transform: `scale(${scale})`, transformOrigin: 'top left',
        position: 'absolute', left: (window.innerWidth - W * scale) / 2, top: (window.innerHeight - H * scale) / 2 }}
        className="bg-white overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div key={order[index]} className="w-full h-full"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}>
            <Current />
          </motion.div>
        </AnimatePresence>
      </div>
      <SlideNavigation index={index} total={order.length} go={go} />
      <ProgressIndicator index={index} total={order.length} />
    </div>);
}
