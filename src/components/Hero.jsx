import Rack from './Rack';

export default function Hero() {
  return (
    <div id="top" className="pb-12 pt-14">
      <div className="wrap grid items-center gap-12 md:grid-cols-[1.1fr_.9fr]">
        <div>
          <h1 className="font-display text-[clamp(2.2rem,5vw,3.9rem)] font-extrabold leading-[1.02] tracking-[-.03em]">
            Cameras, servers and networks. Installed right, kept running.
          </h1>
          <p className="mb-7 mt-5 max-w-[46ch] text-[1.1rem] text-mut">
            We supply, install and support IT and security systems for offices, shops and homes from Laboratory Road,
            Dhaka. Up to 15% off complete IT infrastructure setup.
          </p>
          <a href="#shop" className="btn">Shop equipment</a>
          <a href="#survey" className="ml-2.5 inline-block rounded-md border-2 border-ink px-5 py-[11px] font-medium">
            Book a site survey
          </a>
        </div>
        <Rack />
      </div>
    </div>
  );
}
