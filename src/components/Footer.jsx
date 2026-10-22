import { SITE } from '@/data/site';
import { waUrl } from '@/lib/utils';

export default function Footer() {
  return (
    <footer className="bg-ink py-7 text-[.9rem] text-[#B8C6CC]">
      <div className="wrap flex flex-wrap justify-between gap-3">
        <span>© 2026 PC Club BD. Prices shown are samples and may change.</span>
        <span className="flex gap-4">
          <a className="text-white" href={SITE.fb} target="_blank" rel="noreferrer">Facebook</a>
          <a className="text-white" href={waUrl()} target="_blank" rel="noreferrer">WhatsApp</a>
        </span>
      </div>
    </footer>
  );
}
