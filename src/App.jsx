import { useState, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { INITIAL_ROOMS_DATA } from './data/gamesData';
import Header from './components/Header';
import RoomSelector from './components/RoomSelector';
import ControlsBar from './components/ControlsBar';
import GameCard from './components/GameCard';
import QrModal from './components/QrModal';
import HowToEditModal from './components/HowToEditModal';
import Footer from './components/Footer';
import BackgroundStars from './components/BackgroundStars';
import { SearchX } from 'lucide-react';
import './App.css';

function App() {
  const [rooms] = useState(INITIAL_ROOMS_DATA);
  const [activeRoomId, setActiveRoomId] = useState(INITIAL_ROOMS_DATA[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedGameForQr, setSelectedGameForQr] = useState(null);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [highlightedGameId, setHighlightedGameId] = useState(null);

  // Active room data
  const currentRoom = useMemo(() => {
    return rooms.find((r) => r.id === activeRoomId) || rooms[0];
  }, [rooms, activeRoomId]);

  // Extract unique categories for current room
  const categories = useMemo(() => {
    const set = new Set();
    currentRoom.games.forEach((g) => {
      if (g.category) set.add(g.category);
    });
    return ['Todos', ...Array.from(set)];
  }, [currentRoom]);

  // Filter games based on search and category
  const filteredGames = useMemo(() => {
    return currentRoom.games.filter((game) => {
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        game.studentName.toLowerCase().includes(query) ||
        game.gameTitle.toLowerCase().includes(query) ||
        String(game.number).includes(query);

      const matchesCategory =
        selectedCategory === 'Todos' || game.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [currentRoom, searchQuery, selectedCategory]);

  // Confetti celebration trigger
  const triggerCelebration = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#00dfb6', '#ff007f', '#ffffff', '#38bdf8'],
    });
  };

  // Launch game in new tab
  const handlePlayGame = (game) => {
    triggerCelebration();
    if (game.url) {
      window.open(game.url, '_blank', 'noopener,noreferrer');
    }
  };

  // Random game picker
  const handlePickRandom = () => {
    if (filteredGames.length === 0) return;
    const randomIndex = Math.floor(Math.random() * filteredGames.length);
    const chosenGame = filteredGames[randomIndex];

    setHighlightedGameId(chosenGame.id);
    triggerCelebration();

    setTimeout(() => {
      const element = document.getElementById(`game-card-${chosenGame.id}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);

    setTimeout(() => {
      setHighlightedGameId(null);
    }, 4500);
  };

  // Change room handler
  const handleSelectRoom = (roomId) => {
    setActiveRoomId(roomId);
    setSelectedCategory('Todos');
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen flex flex-col relative text-slate-100 selection:bg-[#00dfb6] selection:text-slate-950 font-sans">
      {/* Background ambience */}
      <BackgroundStars />

      {/* Header */}
      <Header onOpenGuide={() => setIsGuideOpen(true)} />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6">
        {/* Room Switcher: Sala 1 vs Sala 2 */}
        <RoomSelector
          rooms={rooms}
          activeRoomId={activeRoomId}
          onSelectRoom={handleSelectRoom}
        />

        {/* Room Welcome Subheader */}
        <div className="text-center mb-6 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-semibold text-slate-300 mb-2">
            <span
              className={`w-2 h-2 rounded-full ${
                currentRoom.accentColor === 'cyan' ? 'bg-[#00dfb6]' : 'bg-[#ff007f]'
              }`}
            />
            <span>{currentRoom.fullName}</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-400">
            {currentRoom.description}
          </p>
        </div>

        {/* Search & Filter Controls */}
        <ControlsBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categories={categories}
          onPickRandom={handlePickRandom}
          totalGames={currentRoom.games.length}
          filteredCount={filteredGames.length}
          accentColor={currentRoom.accentColor}
        />

        {/* Games Grid (20 games) */}
        {filteredGames.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
            {filteredGames.map((game) => (
              <GameCard
                key={game.id}
                game={game}
                accentColor={currentRoom.accentColor}
                onPlay={handlePlayGame}
                onOpenQr={(g) => setSelectedGameForQr(g)}
                isHighlighted={highlightedGameId === game.id}
              />
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="p-12 text-center rounded-3xl bg-slate-900/50 border border-white/5 max-w-md mx-auto my-12">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/5 flex items-center justify-center text-slate-400">
              <SearchX className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-white mb-1 font-['Outfit']">
              Nenhum aluno ou jogo encontrado
            </h3>
            <p className="text-xs text-slate-400 mb-5">
              Não encontramos nenhum jogo correspondente a "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('Todos');
              }}
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white transition-colors cursor-pointer"
            >
              Limpar busca e filtros
            </button>
          </div>
        )}
      </main>

      {/* QR Code / Mobile Modal */}
      {selectedGameForQr && (
        <QrModal
          game={selectedGameForQr}
          accentColor={currentRoom.accentColor}
          onClose={() => setSelectedGameForQr(null)}
        />
      )}

      {/* Guide Modal: How to edit names & links */}
      <HowToEditModal
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
