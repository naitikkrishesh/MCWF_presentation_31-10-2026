import SlideLayout from './SlideLayout';
import EquationBlock from './EquationBlock';
import ScientificDiagram from './ScientificDiagram';

/** Lays out any number of figures. cols = columns; rows share the height equally. */
const FigureGrid = ({ figures, cols }) => (
  <div className="h-full grid gap-8"
    style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`, gridAutoRows: 'minmax(0, 1fr)' }}>
    {figures.map((f, i) => (
      <div key={i} className="min-h-0">
        <ScientificDiagram {...f} number={f.number} />
      </div>
    ))}
  </div>
);

/** Generic slide driven by presentationContent.js. */
export default function ContentSlide({ title, points = [], equations = [], figures = [], wide, split = '1fr 1fr' }) {
  const Points = () => (
    <ul className="list-disc marker:text-navy pl-8 m-0 flex flex-col gap-4">
      {points.map((p) => <li key={p} className="text-[28px] leading-snug text-body max-w-[800px]">{p}</li>)}
    </ul>
  );

  if (wide) {
    // Figures across the top: 1-3 in one row, 4 as a 2x2 grid. Text underneath.
    const cols = figures.length === 4 ? 2 : Math.min(figures.length, 3);
    return (
      <SlideLayout title={title}>
        <div className="h-full flex flex-col gap-6">
          <div className="flex-1 min-h-0"><FigureGrid figures={figures} cols={cols} /></div>
          <Points />
        </div>
      </SlideLayout>
    );
  }

  // Text and equations on the left, figures on the right (stacked; 2x2 if 4 or more).
  return (
    <SlideLayout title={title}>
      <div className="h-full grid gap-12" style={{ gridTemplateColumns: split }}>
        <div className="flex flex-col gap-10 justify-start min-h-0">
          <Points />
          {equations.map((e, i) => <EquationBlock key={i} {...e} />)}
        </div>
        <div className="min-h-0"><FigureGrid figures={figures} cols={figures.length >= 4 ? 2 : 1} /></div>
      </div>
    </SlideLayout>
  );
}