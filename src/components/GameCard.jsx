import { 
  ExternalLink, 
  QrCode, 
  Gamepad2, 
  Rocket, 
  Star, 
  Sparkles, 
  Zap, 
  Bot, 
  Compass, 
  Shield, 
  Moon, 
  Flame, 
  Smile, 
  Eye, 
  Orbit, 
  HelpCircle, 
  Crosshair, 
  Heart, 
  FastForward, 
  Globe 
} from 'lucide-react';

// Dynamic icon mapper for game cards
const ICON_MAP = {
  rocket: Rocket,
  gamepad: Gamepad2,
  star: Star,
  sparkles: Sparkles,
  zap: Zap,
  bot: Bot,
  compass: Compass,
  shield: Shield,
  moon: Moon,
  flame: Flame,
  smile: Smile,
  eye: Eye,
  orbit: Orbit,
  'help-circle': HelpCircle,
  crosshair: Crosshair,
  heart: Heart,
  'fast-forward': FastForward,
  globe: Globe,
};

export default function GameCard({
  game,
  accentColor,
  onPlay,
  onOpenQr,
  isHighlighted,
}) {
  const isCyan = accentColor === 'cyan';
  const IconComponent = ICON_MAP[game.icon] || Gamepad2;

  // Format number as 2 digits (e.g., 01, 02)
  const formattedNumber = String(game.number).padStart(2, '0');

  return (
    <div
      id={`game-card-${game.id}`}
      className={`group relative rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 ${
        isHighlighted
          ? isCyan
            ? 'ring-4 ring-[#00dfb6] bg-slate-900/90 shadow-[0_0_40px_rgba(0,223,182,0.4)] scale-[1.02]'
            : 'ring-4 ring-[#ff007f] bg-slate-900/90 shadow-[0_0_40px_rgba(255,0,127,0.4)] scale-[1.02]'
          : 'glass-card hover:bg-slate-900/70'
      }`}
    >
      {/* Top Card Bar: Number + Category */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-2">
          <span
            className={`text-xs font-black tracking-wider px-2.5 py-1 rounded-md font-mono ${
              isCyan
                ? 'bg-[#00dfb6]/15 text-[#00dfb6] border border-[#00dfb6]/30'
                : 'bg-[#ff007f]/15 text-[#ff66b2] border border-[#ff007f]/30'
            }`}
          >
            #{formattedNumber}
          </span>
          {/* <span className="text-[11px] font-medium text-slate-400 bg-white/5 px-2 py-0.5 rounded-full border border-white/5">
            {game.category || 'Jogo'}
          </span> */}
        </div>

        {/* Quick mobile QR button */}
        <button
          onClick={() => onOpenQr(game)}
          className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          title="Ver QR Code para jogar no celular"
        >
          <QrCode className="w-4 h-4" />
        </button>
      </div>

      {/* Student & Game Info */}
      <div className="mb-4">
        {/* Student Name */}
        {/* <div className="flex items-center gap-2 mb-1.5">
          <div
            className={`w-2 h-2 rounded-full ${
              isCyan ? 'bg-[#00dfb6]' : 'bg-[#ff007f]'
            }`}
          />
           <h4 className="text-sm font-semibold text-slate-300 tracking-wide uppercase">
            {game.gameTitle}
          </h4> 
        </div> */}

        {/* Game Title with Icon */}
        <div className="flex items-start gap-2.5 my-1">
          <div
            className={`p-2 rounded-xl shrink-0 mt-0.5 ${
              isCyan
                ? 'bg-[#00dfb6]/10 text-[#00dfb6]'
                : 'bg-[#ff007f]/10 text-[#ff007f]'
            }`}
          >
            <IconComponent className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white tracking-tight leading-snug font-['Outfit'] group-hover:text-white transition-colors">
              {game.studentName}
            </h3>
            {/* <p className="text-xs text-slate-400 line-clamp-2 mt-1 leading-relaxed">
              {game.description || 'Clique no botão abaixo para carregar e jogar a fase criada.'}
            </p> */}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-3 border-t border-white/5 flex items-center gap-2">
        {/* Main "JOGAR AGORA" Button */}
        <button
          onClick={() => onPlay(game)}
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold tracking-wide transition-all duration-200 cursor-pointer shadow-lg active:scale-98 ${
            isCyan
              ? 'bg-[#00dfb6] hover:bg-[#12ebd4] text-slate-950 shadow-[#00dfb6]/20 hover:shadow-[#00dfb6]/40'
              : 'bg-[#ff007f] hover:bg-[#ff248f] text-white shadow-[#ff007f]/20 hover:shadow-[#ff007f]/40'
          }`}
          title={`Abrir jogo de ${game.studentName}`}
        >
          <span>JOGAR AGORA</span>
          <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>

        {/* Secondary QR code button for mobile visitors */}
        <button
          onClick={() => onOpenQr(game)}
          className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
          title="Abrir no celular via QR Code"
        >
          <QrCode className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
