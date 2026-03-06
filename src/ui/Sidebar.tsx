import { useState } from 'react';
import { Settings, SquarePen, Activity, Search, Upload } from 'lucide-react';
import iconPath from '../../assets/icon.svg';
import UploadComponent from '../core/Upload';

export default function Sidebar() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const chatHistory = [
    { id: 1, name: 'Neural_Graph_01' },
    { id: 2, name: 'Transformer_Layer_V2' },
    { id: 3, name: 'Optimization_Weights' },
  ];

  const filteredChats = chatHistory.filter(chat => 
    chat.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <aside className="w-[260px] h-screen bg-[#0D1117] flex flex-col border-r border-white/10 select-none">
      {/* App Icon Area */}
      <div className="p-4 relative">
        <img src={iconPath} alt="Zentinium" className="w-8 h-8 object-contain" />
      </div>

      {/* Actions */}
      <div className="px-3 flex flex-col gap-1">
        <button className="flex items-center gap-3 px-3 py-2 text-gray-200 hover:bg-gray-800/60 rounded-lg transition-colors">
            <SquarePen size={16} className="text-gray-500" />
            <span className="text-sm font-medium">New chat</span>
        </button>

        <div className="flex items-center gap-3 px-3 py-2 text-gray-200 hover:bg-gray-800/60 rounded-lg transition-colors cursor-pointer">
           <Search size={16} className="text-gray-500" />
           <input 
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent w-full text-sm placeholder-gray-500 outline-none"
           />
        </div>

        <button className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-white hover:bg-gray-800/40 rounded-lg transition-colors">
          <Upload size={16} />
          <span className="text-sm font-medium">UPLOAD</span>
        </button>
      </div>

      {/* Separator Bar */}
      <div className="my-4 mx-6 border-t border-white/10" />

      {/* History Section */}
      <div className="flex-1 overflow-y-auto px-3">
        <div className="text-[11px] font-bold text-gray-600 px-3 py-2 uppercase tracking-wider opacity-50">Today</div>
        {filteredChats.map(chat => (
          <div key={chat.id} className="group flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-300 hover:bg-gray-800/50 cursor-pointer transition-colors">
            <Activity size={14} className="text-gray-500 group-hover:text-blue-400 transition-colors" />
            <span className="text-sm truncate font-medium">{chat.name}</span>
          </div>
        ))}
      </div>

      {/* Settings at Bottom */}
      <div className="p-3 border-t border-white/5">
        <button className="flex items-center gap-3 w-full px-3 py-3 text-gray-300 hover:bg-gray-800/50 rounded-lg transition-colors group">
          <Settings size={18} />
          <span className="text-sm">Settings</span>
        </button>

        <UploadComponent />
      </div>
    </aside>
  );
}