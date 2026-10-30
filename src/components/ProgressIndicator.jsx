/** Slide number only: small and unobtrusive. */
export default function ProgressIndicator({ index, total }) {
  const pad = (n) => String(n).padStart(2, '0');
  return <div className="fixed right-6 bottom-4 text-sm text-muted tabular-nums">{pad(index + 1)} / {pad(total)}</div>;
}
