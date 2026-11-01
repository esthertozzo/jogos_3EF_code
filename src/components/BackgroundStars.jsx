export default function BackgroundStars() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {/* Ambient glowing radial orbs */}
      <div 
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-[140px] opacity-25 animate-pulse-glow"
        style={{ background: '#00dfb6' }}
      />
      <div 
        className="absolute top-1/3 -right-32 w-[28rem] h-[28rem] rounded-full blur-[160px] opacity-20 animate-pulse-glow"
        style={{ background: '#ff007f', animationDelay: '4s' }}
      />
      <div 
        className="absolute -bottom-32 left-1/3 w-96 h-96 rounded-full blur-[150px] opacity-15 animate-pulse-glow"
        style={{ background: '#00dfb6', animationDelay: '2s' }}
      />

      {/* Subtle minimalist grid overlay for a high-tech clean festival feel */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      {/* Subtle minimalist star sparkles */}
      <div className="absolute top-[12%] left-[15%] w-1.5 h-1.5 rounded-full bg-[#00dfb6] opacity-40 animate-ping" style={{ animationDuration: '4s' }} />
      <div className="absolute top-[28%] right-[18%] w-1 h-1 rounded-full bg-[#ff007f] opacity-50 animate-ping" style={{ animationDuration: '5s', animationDelay: '1s' }} />
      <div className="absolute top-[65%] left-[8%] w-1.5 h-1.5 rounded-full bg-white opacity-30 animate-pulse" style={{ animationDuration: '6s' }} />
      <div className="absolute top-[75%] right-[12%] w-1 h-1 rounded-full bg-[#00dfb6] opacity-40 animate-pulse" style={{ animationDuration: '3.5s' }} />
      <div className="absolute top-[45%] left-[30%] w-1 h-1 rounded-full bg-[#ff007f] opacity-30 animate-ping" style={{ animationDuration: '7s' }} />
    </div>
  );
}
