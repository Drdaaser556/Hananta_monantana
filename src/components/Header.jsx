'use client';
import { useStore } from '@/context/store';

const NAV = [['Shop', '#shop'], ['Services', '#services'], ['Site survey', '#survey'], ['Contact', '#contact']];

export default function Header() {
  const { count, setOpen } = useStore();
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-paper">
      <div className="wrap flex h-16 items-center gap-5">
        <a href="#top" className="flex items-center gap-2 font-display text-[1.35rem] font-extrabold tracking-tight">
          <i className="block h-[22px] w-3.5 rounded-sm bg-cable" />
          PC CLUB BD
        </a>
        <nav className="ml-auto hidden gap-5 md:flex">
          {NAV.map(([n, h]) => (
            <a key={h} href={h} className="text-[.95rem] font-medium hover:text-cable">{n}</a>
          ))}
        </nav>
        <button
          onClick={() => setOpen(true)}
          aria-label="Open cart"
          className="ml-auto flex items-center gap-2 rounded-md bg-ink px-4 py-2 font-medium text-white md:ml-0"
        >
          Cart <b className="rounded-full bg-cable px-2 text-[.8rem]">{count}</b>
        </button>
      </div>
    </header>
  );
}
