import { useState } from 'react';
import { X, Code2, Check, Copy, FileText } from 'lucide-react';

export default function HowToEditModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const exampleCode = `// Exemplo no arquivo: src/data/gamesData.js
{
  id: "a-01",
  number: 1,
  studentName: "Lucas Silva", // <-- Digite o nome do aluno aqui
  gameTitle: "Astro Aventura", // <-- Nome do jogo
  category: "Aventura",
  url: "https://studio.code.org/projects/playlab/abc123xyz", // <-- Cole o link aqui!
  description: "Desvie dos meteoros e colete poeira estelar.",
}`;

  const copyExample = () => {
    navigator.clipboard.writeText(exampleCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div 
        className="relative w-full max-w-2xl p-6 sm:p-8 rounded-3xl bg-[#0e1424] border border-white/10 shadow-2xl flex flex-col text-left max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 mb-2">
          <div className="p-2 rounded-xl bg-[#00dfb6]/10 text-[#00dfb6]">
            <Code2 className="w-5 h-5" />
          </div>
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#00dfb6]">
            Guia Rápido do Organizador / Professor
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-white font-['Outfit'] mb-2">
          Como preencher os nomes e links dos jogos
        </h3>
        <p className="text-sm text-slate-300 mb-6 leading-relaxed">
          Tudo foi configurado de forma modular. Para colocar os nomes reais dos alunos e os links de acesso dos 40 jogos (20 de cada sala), siga os 3 passos simples abaixo:
        </p>

        {/* Steps */}
        <div className="space-y-4 mb-6">
          <div className="flex gap-3.5 p-3.5 rounded-2xl bg-white/[0.03] border border-white/5">
            <span className="w-7 h-7 rounded-full bg-[#00dfb6] text-slate-950 font-black text-sm flex items-center justify-center shrink-0">
              1
            </span>
            <div>
              <h4 className="text-sm font-bold text-white">Abra o arquivo de dados</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                No seu editor de código (VS Code / Antigravity), abra o arquivo:
                <br />
                <code className="text-[#00dfb6] bg-slate-900 px-2 py-0.5 rounded font-mono text-[11px] inline-block mt-1">
                  src/data/gamesData.js
                </code>
              </p>
            </div>
          </div>

          <div className="flex gap-3.5 p-3.5 rounded-2xl bg-white/[0.03] border border-white/5">
            <span className="w-7 h-7 rounded-full bg-[#ff007f] text-white font-black text-sm flex items-center justify-center shrink-0">
              2
            </span>
            <div>
              <h4 className="text-sm font-bold text-white">Altere os campos dos alunos</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Cada sala possui 20 posições já numeradas de 1 a 20. Altere:
                <br />
                • <strong className="text-white">studentName</strong>: Nome do aluno (ex: "Enzo Gabriel", "Sophia Silva")
                <br />
                • <strong className="text-white">gameTitle</strong>: Título do jogo criado
                <br />
                • <strong className="text-white">url</strong>: Link direto gerado no Code.org ou Scratch (ex: https://studio.code.org/projects/...)
              </p>
            </div>
          </div>

          <div className="flex gap-3.5 p-3.5 rounded-2xl bg-white/[0.03] border border-white/5">
            <span className="w-7 h-7 rounded-full bg-amber-400 text-slate-950 font-black text-sm flex items-center justify-center shrink-0">
              3
            </span>
            <div>
              <h4 className="text-sm font-bold text-white">Salve o arquivo</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Basta salvar o arquivo (<kbd className="bg-slate-800 text-slate-200 px-1 rounded text-[10px]">Ctrl+S</kbd>). A página atualiza instantaneamente com os novos nomes, links e QR Codes funcionando!
              </p>
            </div>
          </div>
        </div>

        {/* Code Example Preview */}
        <div className="relative rounded-2xl bg-slate-950 p-4 border border-white/10 font-mono text-xs text-slate-300 mb-6">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-slate-400 text-[11px]">
            <span className="flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5" />
              <span>gamesData.js</span>
            </span>
            <button
              onClick={copyExample}
              className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copiado!' : 'Copiar formato'}</span>
            </button>
          </div>
          <pre className="overflow-x-auto whitespace-pre text-[11.5px] leading-relaxed text-emerald-400/90">
            {exampleCode}
          </pre>
        </div>

        {/* Close Modal button */}
        <button
          onClick={onClose}
          className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm transition-all cursor-pointer"
        >
          Entendi, voltar para os jogos!
        </button>
      </div>
    </div>
  );
}
