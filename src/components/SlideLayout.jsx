import { motion } from 'framer-motion';
import { meta } from '../data/presentationContent';

/** Shared 1920x1080 frame: running header, title, thin rule, body, small footer. */
export default function SlideLayout({ title, children }) {
  return (
    <div className="relative w-full h-full px-[110px] pt-[96px] pb-[70px] flex flex-col bg-white">

      {/* RUNNING HEADER: shown on slides 2-10.
          Text comes from `meta` in src/data/presentationContent.js. Edit it there. */}
      <div className="absolute top-[28px] left-[110px] right-[110px] flex justify-between text-[18px] text-muted">
        <span>{meta.student}, {meta.rollNumber}<br></br> {meta.title}</span>
        <span>Supervisor: {meta.supervisor}<br></br> Date: {meta.date}</span>
      </div>

      {title && (
        <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}
          className="font-display font-bold text-[44px] leading-tight text-navy m-0">{title}</motion.h2>)}
      <div className="h-px w-full bg-line mt-5 mb-10" />
      <div className="flex-1 min-h-0">{children}</div>
      <div className="absolute bottom-[26px] left-[110px] text-[18px] text-muted">{meta.shortTitle}</div>
    </div>
  );
}