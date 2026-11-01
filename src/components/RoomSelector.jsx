import { Rocket, Sparkles, Users } from 'lucide-react';

export default function RoomSelector({ rooms, activeRoomId, onSelectRoom }) {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 mt-4 mb-8">
      <div className="text-center mb-3">
        <span className="text-xs uppercase tracking-[0.2em] font-semibold text-slate-400">
          Selecione a Sala para Visualizar os Jogos
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-1.5 rounded-2xl bg-[#0b0f19] border border-white/10 shadow-2xl">
        {rooms.map((room) => {
          const isActive = room.id === activeRoomId;
          const isCyan = room.accentColor === 'cyan';

          return (
            <button
              key={room.id}
              onClick={() => onSelectRoom(room.id)}
              className={`relative flex items-center justify-between p-4 sm:p-5 rounded-xl transition-all duration-300 text-left cursor-pointer group ${
                isActive
                  ? isCyan
                    ? 'bg-gradient-to-r from-[#00dfb6]/15 to-[#00dfb6]/5 border-2 border-[#00dfb6] shadow-[0_0_25px_-5px_rgba(0,223,182,0.3)]'
                    : 'bg-gradient-to-r from-[#ff007f]/15 to-[#ff007f]/5 border-2 border-[#ff007f] shadow-[0_0_25px_-5px_rgba(255,0,127,0.3)]'
                  : 'bg-white/[0.02] hover:bg-white/[0.05] border-2 border-transparent hover:border-white/10'
              }`}
            >
              {/* Left Side: Icon & Info */}
              <div className="flex items-center gap-3.5">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${
                    isActive
                      ? isCyan
                        ? 'bg-[#00dfb6] text-slate-950 font-bold shadow-lg shadow-[#00dfb6]/30'
                        : 'bg-[#ff007f] text-white font-bold shadow-lg shadow-[#ff007f]/30'
                      : 'bg-white/[0.06] text-slate-400'
                  }`}
                >
                  {isCyan ? (
                    <Rocket className={`w-6 h-6 ${isActive ? 'text-slate-950' : 'text-[#00dfb6]'}`} />
                  ) : (
                    <Sparkles className={`w-6 h-6 ${isActive ? 'text-white' : 'text-[#ff007f]'}`} />
                  )}
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs uppercase font-extrabold tracking-wider text-slate-400">
                      {room.name}
                    </span>
                    {isActive && (
                      <span
                        className={`text-[10px] font-bold px-1.5 py-0.2 rounded-full uppercase ${
                          isCyan ? 'bg-[#00dfb6]/20 text-[#00dfb6]' : 'bg-[#ff007f]/20 text-[#ff66b2]'
                        }`}
                      >
                        Ativa
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white font-['Outfit']">
                    {room.grade}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-1">
                    {room.fullName.split('•')[1] || room.tagline}
                  </p>
                </div>
              </div>

              {/* Right Side: Total badge */}
              <div className="flex flex-col items-end">
                <div
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${
                    isActive
                      ? isCyan
                        ? 'bg-[#00dfb6]/20 text-[#00dfb6]'
                        : 'bg-[#ff007f]/20 text-[#ff66b2]'
                      : 'bg-white/5 text-slate-400'
                  }`}
                >
                  <Users className="w-3 h-3" />
                  <span>{room.games.length} Jogos</span>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
