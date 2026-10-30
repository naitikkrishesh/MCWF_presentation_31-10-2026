import SlideLayout from './SlideLayout';
import EquationBlock from './EquationBlock';
import ScientificDiagram from './ScientificDiagram';

/** Generic slide driven by presentationContent.js. */
export default function ContentSlide({ title, points = [], equations = [], figures = [], wide }) {
  const Points = () => (
    <ul className="list-disc marker:text-navy pl-8 m-0 flex flex-col gap-4">
      {points.map((p) => <li key={p} className="text-[28px] leading-snug text-body max-w-[800px]">{p}</li>)}
    </ul>);
  if (wide) {
    return (
      <SlideLayout title={title}>
        <div className="h-full flex flex-col gap-8">
          <div className="grid grid-cols-2 gap-12 flex-1 min-h-0">
            {figures.map((f, i) => <ScientificDiagram key={i} {...f} number={f.number ?? i + 1} />)}
          </div>
          <Points />
        </div>
      </SlideLayout>);
  }
  return (
    <SlideLayout title={title}>
      <div className="h-full grid grid-cols-[1fr_1fr] gap-20">
        <div className="flex flex-col gap-10 justify-start min-h-0">
          <Points />
          {equations.map((e, i) => <EquationBlock key={i} {...e} />)}
        </div>
        <div className="min-h-0">{figures.map((f, i) => <ScientificDiagram key={i} {...f} />)}</div>
      </div>
    </SlideLayout>);
}
