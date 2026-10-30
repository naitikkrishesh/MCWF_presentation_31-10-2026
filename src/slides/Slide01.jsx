import { motion } from 'framer-motion';
import { meta } from '../data/presentationContent';
import ImagePlaceholder from '../components/ImagePlaceholder';

/** Plain academic title slide. Edit text in src/data/presentationContent.js (meta). */
export default function Slide01() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}
      className="w-full h-full bg-white px-[110px] py-[80px] flex flex-col">
      <div className="w-[130px] h-[130px]"><ImagePlaceholder src={meta.logo} label="IIT Guwahati Logo" /></div>
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="font-display font-bold text-[52px] leading-tight text-heading m-0 max-w-[1200px]">{meta.title}</h1>
        <div className="h-[3px] w-24 bg-navy my-9" />
        <div className="text-[30px] text-heading">{meta.student}</div>
        <div className="text-[30px] text-heading">{meta.rollNumber}</div>

        <div className="text-[26px] text-body mt-2">{meta.degree}, {meta.department}</div>
        <div className="text-[26px] text-body">{meta.institute}</div>
        <div className="text-[26px] text-muted mt-8">Supervisor: {meta.supervisor}</div>
        <div className="text-[26px] text-muted">{meta.date}</div>
      </div>
    </motion.div>);
}
