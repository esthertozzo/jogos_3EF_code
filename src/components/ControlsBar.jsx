import { Search, X, Dices /*Filter*/ } from 'lucide-react';

export default function ControlsBar({
  searchQuery,
  setSearchQuery,
  // selectedCategory,
  // setSelectedCategory,
  // categories,
  onPickRandom,
  totalGames,
  filteredCount,
  accentColor
}) {
  const isCyan = accentColor === 'cyan';
  const borderFocusClass = isCyan ? 'focus:border-[#00dfb6]' : 'focus:border-[#ff007f]';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-6">
      <div className="p-4 rounded-2xl bg-[#0d1322]/80 border border-white/10 backdrop-blur-md flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 shadow-xl">
        {/* Search Bar */}
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar por nome do aluno"
            className={`w-full pl-10 pr-10 py-2.5 rounded-xl bg-slate-900/90 text-sm text-white placeholder-slate-500 border border-white/10 outline-none transition-all ${borderFocusClass}`}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Categories Bar */}
        {/* <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          <Filter className="w-4 h-4 text-slate-500 shrink-0 ml-1 hidden sm:block" />
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? isCyan
                      ? 'bg-[#00dfb6] text-slate-950 shadow-md shadow-[#00dfb6]/20'
                      : 'bg-[#ff007f] text-white shadow-md shadow-[#ff007f]/20'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div> */}

        {/* Action Button: Random Game */}
        <div className="flex items-center justify-between md:justify-end gap-3 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-white/5">
          <span className="text-xs text-slate-400 font-medium">
            Mostrando <strong className="text-white">{filteredCount}</strong> de {totalGames}
          </span>

          <button
            onClick={onPickRandom}
            className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-lg active:scale-95 ${
              isCyan
                ? 'bg-gradient-to-r from-[#00dfb6]/20 to-[#00dfb6]/10 hover:from-[#00dfb6]/30 hover:to-[#00dfb6]/20 text-[#00dfb6] border border-[#00dfb6]/40'
                : 'bg-gradient-to-r from-[#ff007f]/20 to-[#ff007f]/10 hover:from-[#ff007f]/30 hover:to-[#ff007f]/20 text-[#ff66b2] border border-[#ff007f]/40'
            }`}
            title="Sortear um jogo aleatório para jogar agora"
          >
            <Dices className="w-4 h-4" />
            <span>Sortear Jogo</span>
          </button>
        </div>
      </div>
    </div>
  );
}
