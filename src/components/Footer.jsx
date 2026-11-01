import { ChevronUp, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-20 border-t border-white/5 bg-[#05070b]/80 backdrop-blur-md py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Left Branding */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <img
            src="/future-fest-logo.png"
            alt="Future Fest 2026"
            className="h-7 w-auto object-contain opacity-80"
          />
          <span className="hidden sm:inline-block text-white/20">|</span>
          <div>
            <p className="text-sm font-bold text-white font-['Outfit']">
              FUTURE FEST 2026 • PROJETO ASTRO BUDDY
            </p>
            <p className="text-xs text-slate-400">
              Criações autorais dos alunos do 3º Ano do Ensino Fundamental I
            </p>
          </div>
        </div>

        {/* Center note */}
        <div className="flex items-center gap-1.5 text-xs text-slate-400">
          <span>Desenvolvido com</span>
          <Heart className="w-3.5 h-3.5 text-[#ff007f] fill-[#ff007f]" />
          <span>para o dia do evento</span>
        </div>

        {/* Right Action: Scroll Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-xs font-semibold transition-all cursor-pointer"
        >
          <span>Voltar ao topo</span>
          <ChevronUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
}
