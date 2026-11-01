import { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { X, ExternalLink, Copy, Check, Smartphone } from 'lucide-react';

export default function QrModal({ game, accentColor, onClose }) {
  const [qrDataUrl, setQrDataUrl] = useState('');
  const [copied, setCopied] = useState(false);

  const isCyan = accentColor === 'cyan';

  useEffect(() => {
    if (!game?.url) return;

    QRCode.toDataURL(game.url, {
      width: 300,
      margin: 2,
      color: {
        dark: '#07090e',
        light: '#ffffff',
      },
    })
      .then((url) => setQrDataUrl(url))
      .catch((err) => console.error('Erro ao gerar QR Code:', err));
  }, [game]);

  const handleCopy = () => {
    if (!game?.url) return;
    navigator.clipboard.writeText(game.url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!game) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-md p-6 rounded-3xl bg-[#0e1424] border border-white/10 shadow-2xl flex flex-col items-center text-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 mb-2">
          <Smartphone className={`w-5 h-5 ${isCyan ? 'text-[#00dfb6]' : 'text-[#ff007f]'}`} />
          <span className="text-xs uppercase font-extrabold tracking-widest text-slate-400">
            Jogar no Celular
          </span>
        </div>

        <h3 className="text-xl font-bold text-white font-['Outfit'] mb-1">
          {game.gameTitle}
        </h3>
        <p className="text-sm font-medium text-slate-300 mb-5">
          Criado por: <span className="text-white font-semibold">{game.studentName}</span>
        </p>

        {/* QR Code container */}
        <div className="p-4 bg-white rounded-2xl shadow-xl mb-4 border-4 border-white/10">
          {qrDataUrl ? (
            <img
              src={qrDataUrl}
              alt={`QR Code para ${game.gameTitle}`}
              className="w-56 h-56 object-contain"
            />
          ) : (
            <div className="w-56 h-56 flex items-center justify-center text-slate-400 text-xs">
              Carregando QR Code...
            </div>
          )}
        </div>

        <p className="text-xs text-slate-400 max-w-xs mb-6">
          Aponte a câmera do seu smartphone para o código acima para jogar diretamente na tela do seu aparelho.
        </p>

        {/* URL Box & Actions */}
        <div className="w-full flex flex-col gap-2.5">
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-white/10 text-xs">
            <span className="text-slate-400 truncate max-w-[220px] font-mono text-left">
              {game.url}
            </span>
            <button
              onClick={handleCopy}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                copied
                  ? 'bg-emerald-500 text-slate-950'
                  : 'bg-white/10 hover:bg-white/20 text-white'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copiar</span>
                </>
              )}
            </button>
          </div>

          <a
            href={game.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg ${
              isCyan
                ? 'bg-[#00dfb6] hover:bg-[#12ebd4] text-slate-950'
                : 'bg-[#ff007f] hover:bg-[#ff248f] text-white'
            }`}
          >
            <span>Abrir no Navegador Agora</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
