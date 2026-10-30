import SlideLayout from '../components/SlideLayout';
import { slides } from '../data/presentationContent';
// Edit content in src/data/presentationContent.js (key: s10)
const Col = ({ title, items }) => (
  <div>
    <h3 className="font-bold text-[32px] text-navy m-0 mb-5">{title}</h3>
    <ul className="list-disc marker:text-navy pl-8 m-0 flex flex-col gap-4">
      {items.map((t) => <li key={t} className="text-[28px] text-body">{t}</li>)}
    </ul>
  </div>);
export default function Slide10() {
  const { conclusions, future } = slides.s10;
  return (
    <SlideLayout title="Conclusion and future scope">
      <div className="h-full flex flex-col justify-between">
        <div className="grid grid-cols-2 gap-24">
          <Col title="Conclusions" items={conclusions} />
          <Col title="Future scope" items={future} />
        </div>
        <div className="border-t border-line pt-6 text-[36px] text-heading">Thank you. Questions?</div>
      </div>
    </SlideLayout>);
}
