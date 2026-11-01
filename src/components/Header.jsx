import { Sparkles, Gamepad2, Info } from 'lucide-react';

export default function Header({ onOpenGuide }) {
  return (
    <header className="relative pt-6 pb-8 md:pt-10 md:pb-12 text-center border-b border-white/5">
      {/* Top subtle bar with guide button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-medium text-slate-300">
          <span className="w-2 h-2 rounded-full bg-[#00dfb6] animate-pulse" />
          <span>Evento Oficial • Future Fest 2026</span>
        </div>

        <button
          onClick={onOpenGuide}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-white/20 transition-all cursor-pointer"
          title="Clique para ver instruções de como alterar nomes e links"
        >
          <Info className="w-3.5 h-3.5 text-[#00dfb6]" />
          <span className="hidden sm:inline">Como editar nomes e links</span>
          <span className="sm:hidden">Guia de Edição</span>
        </button>
      </div>

      {/* Main Logos and Title */}
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center">
        {/* Logos container */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mb-6">
          {/* Future Fest Logo */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#00dfb6]/20 to-[#ff007f]/20 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition-opacity" />
            <div className="relative px-5 py-3 rounded-xl bg-[#0d121e]/80 border border-white/10 flex items-center justify-center">
              <img 
                src="/future-fest-logo.png" 
                alt="Future Fest Logo" 
                className="h-10 sm:h-12 w-auto object-contain select-none" 
              />
            </div>
          </div>

          <span className="hidden sm:inline-block text-white/20 font-light text-2xl">|</span>

          {/* Astro Buddy Project Branding */}
          <div className="flex items-center gap-3">
            <img 
              src="/astro-buddy-sparkles.png" 
              alt="Astro Buddy Elements" 
              className="h-8 sm:h-9 w-auto object-contain select-none"
            />
            <div className="text-left">
              <div className="flex items-center gap-1.5">
                <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#00dfb6]">
                  Projeto
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#ff007f]/20 text-[#ff66b2] font-semibold border border-[#ff007f]/30">
                  3º Ano
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white font-['Outfit']">
                ASTRO <span className="text-[#ff007f]">BUDDY</span>
              </h2>
            </div>
          </div>
        </div>

        {/* Subtitle / Intro text */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-3 font-['Outfit'] leading-tight">
          Feira de Jogos Digitais
        </h1>

        <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed mb-6 font-normal">
          Bem-vindo(a) ao espaço dos nossos pequenos desenvolvedores! Cada aluno do 
          <strong className="text-white font-semibold"> 3º Ano do Fundamental I </strong> 
          programou seu próprio jogo temático no <span className="text-[#00dfb6] font-semibold">Code.org</span>. 
          Escolha uma sala abaixo para jogar!
        </p>

        {/* Highlight Pills */}
        <div className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-4 text-xs font-medium text-slate-300">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800">
            <span className="w-2 h-2 rounded-full bg-[#00dfb6]" />
            <span>2 Salas Temáticas</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800">
            <Gamepad2 className="w-3.5 h-3.5 text-[#ff007f]" />
            <span>40 Jogos Interativos</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Acesso Rápido & QR Code</span>
          </div>
        </div>
      </div>
    </header>
  );
}
