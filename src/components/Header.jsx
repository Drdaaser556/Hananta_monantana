"use client";
import { useStore } from "@/context/store";

const NAV = [
  ["Shop", "#shop"],
  ["Services", "#services"],
  ["Site survey", "#survey"],
  ["Contact", "#contact"],
];

export default function Header() {
  const { count, setOpen } = useStore();
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-paper">
      <div className="wrap flex h-16 items-center gap-5">
        <a href="#top" className="flex shrink-0 items-center gap-2">
          <img
            src="/hello_ecomm2/images/cropped-pcclub.jpg"
            alt="PC Club BD logo"
            className="h-10 w-auto object-contain"
          />
          <span className="font-display text-[1.35rem] font-extrabold tracking-tight">
            PC CLUB BD
          </span>
        </a>
        <nav className="ml-auto hidden gap-5 md:flex">
          {NAV.map(([n, h]) => (
            <a
              key={h}
              href={h}
              className="text-[.95rem] font-medium hover:text-cable"
            >
              {n}
            </a>
          ))}
        </nav>
        <button
          onClick={() => setOpen(true)}
          aria-label="Open cart"
          className="ml-auto flex items-center gap-2 rounded-md bg-cable px-4 py-2 font-medium text-white md:ml-0 hover:bg-ink"
        >
          <span>Cart</span>
          <b className="rounded-full px-2 text-ink bg-white text-[.8rem]">{count}</b>
        </button>
      </div>
    </header>
  );
}
