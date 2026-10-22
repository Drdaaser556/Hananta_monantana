const ITEMS = [
  ['Fast delivery', 'Early shipping on every order'],
  ['Support 24/7', 'Online, every day'],
  ['7-day money back', 'Return guarantee'],
  ['Service comes first', 'Install, repair and upgrade'],
];

export default function TrustStrip() {
  return (
    <div className="border-y border-line bg-paper">
      <div className="wrap grid grid-cols-2 gap-4 py-4 text-[.92rem] md:grid-cols-4">
        {ITEMS.map(([t, d]) => (
          <div key={t}><b className="block font-display">{t}</b>{d}</div>
        ))}
      </div>
    </div>
  );
}
