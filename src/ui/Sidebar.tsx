import { useState } from 'react';
import { Settings, SquarePen, Activity, Upload, Search } from 'lucide-react';

const ZentiniumLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M25 30H75L25 70H75" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" className="opacity-20" />
    <path d="M25 30H75L25 70H75" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="25" cy="30" r="6" fill="currentColor" />
    <circle cx="75" cy="70" r="6" fill="currentColor" />
  </svg>
);

export default function Sidebar() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const chatHistory = [
    { id: 1, name: 'Neural_Graph_01' },
    { id: 2, name: 'Transformer_Layer_V2' },
    { id: 3, name: 'Optimization_Weights' },
    { id: 4, name: 'Gradient_Descent_Test' },
  ];

  const filteredChats = chatHistory.filter(chat => 
    chat.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    // Increased sidebar width to w-72 (288px) for better presence
    <aside className="w-72 h-screen bg-[#0D1117] flex flex-col border-r border-gray-800 select-none">
      
      {/* Brand Header - Scaled up slightly for balance */}
      <div className="p-7 pb-5 flex items-center gap-4">
        <ZentiniumLogo className="w-8 h-8 text-[#F1F4F8] shrink-0" />
        <h1 className="text-[#F1F4F8] font-bold text-xl tracking-tight leading-none uppercase font-outfit">
          Zentinium
        </h1>
      </div>

      <div className="px-4 space-y-1 mb-8">
        {/* New Chat - Increased icon and text size to match image style at a larger scale */}
        <button className="w-full flex items-center gap-4 px-3 py-3 text-gray-300 hover:text-[#F1F4F8] hover:bg-gray-800/40 rounded-xl transition-all group">
          <SquarePen size={22} strokeWidth={1.5} className="text-gray-400 group-hover:text-[#F1F4F8]" />
          <span className="text-[16px] font-medium tracking-tight">New chat</span>
        </button>

        {/* Search Chats - Increased padding and font size */}
        <div className="relative flex items-center px-3 py-3 group cursor-text">
          <Search size={22} strokeWidth={1.5} className="text-gray-400 group-focus-within:text-[#F1F4F8]" />
          <input 
            type="text"
            placeholder="Search chats"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent border-none pl-4 text-[16px] text-[#F1F4F8] placeholder-gray-500 focus:outline-none focus:ring-0 font-normal"
          />
        </div>

        {/* Upload Model Button - Centered and emboldened */}
        <div className="px-2 pt-3">
          <button className="w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-gray-800 bg-[#161B22]/50 rounded-xl text-gray-400 hover:text-[#F1F4F8] hover:border-gray-600 transition-all group shadow-sm">
            <Upload size={16} strokeWidth={2} className="group-hover:-translate-y-0.5 transition-transform" />
            <span className="text-[12px] font-bold uppercase tracking-[0.15em] font-outfit">Upload</span>
          </button>
        </div>
      </div>

      {/* History Section - Increased spacing for readability */}
      <div className="flex-1 overflow-y-auto px-3 space-y-1.5">
        <div className="text-[11px] font-bold text-gray-600 uppercase px-4 py-2 tracking-[0.25em] font-outfit">History</div>
        
        {filteredChats.length > 0 ? (
          filteredChats.map(chat => (
            <div key={chat.id} className="flex items-center gap-4 px-4 py-2.5 rounded-xl text-gray-400 hover:text-[#F1F4F8] hover:bg-gray-800/30 border border-transparent hover:border-gray-800/50 cursor-pointer transition-colors group">
              <Activity size={16} className="text-blue-500/30 group-hover:text-blue-400" />
              <span className="text-[15px] truncate font-outfit font-medium">{chat.name}</span>
            </div>
          ))
        ) : (
          <div className="px-4 py-2 text-[11px] text-gray-600 italic">No matches found</div>
        )}
      </div>

      {/* Footer Settings - Increased icon and touch target */}
      <div className="p-5 mt-auto border-t border-gray-800/50">
        <button className="flex items-center gap-4 w-full px-3 py-3 text-gray-400 hover:text-[#F1F4F8] hover:bg-gray-800/50 rounded-xl transition-colors group">
          <Settings size={20} strokeWidth={1.5} className="group-hover:rotate-45 transition-transform duration-500" />
          <span className="text-[15px] font-medium">Settings</span>
        </button>
      </div>
    </aside>
  );
}