import katex from 'katex';
import { motion } from 'framer-motion';

const render = (latex, displayMode) => ({ __html: katex.renderToString(latex, { displayMode, throwOnError: false }) });

/** Inline math: <InlineMath latex="\\sigma_z" /> */
export const InlineMath = ({ latex }) => <span dangerouslySetInnerHTML={render(latex, false)} />;

/** Block equation. `latex` may be a string or an array (steps appear in sequence). */
export default function EquationBlock({ latex, label, delay = 0.3 }) {
  const steps = Array.isArray(latex) ? latex : [latex];
  return (
    <div className="bg-wash px-8 py-5">
      {label && <div className="text-[20px] text-muted mb-2">{label}</div>}
      <div className="flex flex-col gap-3 text-[34px]">
        {steps.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: delay + i * 0.5, duration: 0.4 }}
            dangerouslySetInnerHTML={render(s, true)} />
        ))}
      </div>
    </div>
  );
}
