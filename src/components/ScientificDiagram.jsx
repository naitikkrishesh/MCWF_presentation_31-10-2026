import ImagePlaceholder from './ImagePlaceholder';
/** Figure with preserved aspect ratio, optional number and caption. */
export default function ScientificDiagram({ src, label, caption, number }) {
  return (
    <figure className="m-0 flex flex-col h-full min-h-0">
      <div className="flex-1 min-h-0 flex items-center justify-center"><ImagePlaceholder src={src} label={label} /></div>
      {(caption || number) && (
        <figcaption className="mt-4 text-[20px] text-muted">
          {number && <span className="text-navy mr-2">Fig. {number}</span>}{caption}
        </figcaption>)}
    </figure>
  );
}
