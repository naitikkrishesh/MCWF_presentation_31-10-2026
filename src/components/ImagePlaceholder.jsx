import { useState } from 'react';

/** Resolves a path inside /public/assets. Only place paths are built. */
export const assetPath = (p) => `${import.meta.env.BASE_URL}assets/${p}`;

export default function ImagePlaceholder({ src, label = 'Insert Image' }) {
  const [failed, setFailed] = useState(false);
  if (src && !failed) {
    return <img src={assetPath(src)} alt={label} onError={() => setFailed(true)}
      className="max-w-full max-h-full object-contain bg-white" />;
  }
  return (
    <div className="w-full h-full min-h-[240px] flex flex-col items-center justify-center gap-2 border border-dashed border-line bg-white">
      <div className="text-[26px] text-body">{label}</div>
      {src && <div className="text-[20px] text-muted">public/assets/{src}</div>}
    </div>
  );
}
