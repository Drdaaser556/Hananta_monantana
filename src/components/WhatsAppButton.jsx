import { waUrl } from '@/lib/utils';

export default function WhatsAppButton() {
  return (
    <a
      href={waUrl()}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-[18px] right-[18px] z-30 rounded-full bg-[#25D366] px-4 py-3 font-medium text-[#073B1B] shadow-lg"
    >
      WhatsApp us
    </a>
  );
}
