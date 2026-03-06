import { useState } from 'react';
import { SendHorizonal, PanelRightClose, PanelRightOpen, Zap, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import NeuralCanvas from './NeuralCanvas';
import Sidebar from './Sidebar';

export default function ChatInterface() {
  const [showViz, setShowViz] = useState(true);
  const [input, setInput] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="flex h-screen w-full bg-[#0D1117] text-[#F1F4F8] font-sans">
      <Sidebar />
      
      <main className="flex-1 flex overflow-hidden relative">
        <div className={`flex flex-col h-full transition-all duration-500 ease-in-out ${showViz ? 'w-[60%]' : 'w-full'}`}>
          
          <header className="h-14 flex items-center justify-between px-4 border-b border-white/5">
            <div className="flex items-center gap-2 text-gray-400">
              <span className="text-sm font-medium">Zentinium 1.0</span>
            </div>
            <button 
              onClick={() => setShowViz(!showViz)}
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors text-gray-400"
            >
              {showViz ? <PanelRightClose size={20} /> : <PanelRightOpen size={20} />}
            </button>
          </header>

          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            <div className="max-w-3xl mx-auto flex gap-4 items-start mt-4">
              <div className="w-8 h-8 rounded-full bg-white text-black flex-shrink-0 flex items-center justify-center font-bold text-xs">Z</div>
              <div className="text-[15px] leading-relaxed text-gray-200 pt-1">
                How can I assist with your neural architecture today?
              </div>
            </div>
          </div>

          <div className="p-4 pb-8">
            <div className="max-w-3xl mx-auto relative">
              <motion.div 
                className="relative bg-[#212121] rounded-3xl p-3 flex flex-col"
                animate={{
                  borderColor: isFocused ? "rgba(255, 255, 255, 0.8)" : "rgba(255, 255, 255, 0.1)",
                  boxShadow: isFocused ? "0 0 20px rgba(255, 255, 255, 0.15)" : "0 0 0px rgba(255, 255, 255, 0)"
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                style={{ border: '1px solid' }}
              >
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder="Message Zentinium..."
                  rows={1}
                  className="w-full bg-transparent border-none focus:outline-none focus:ring-0 resize-none text-[15px] py-2 px-2 text-white placeholder:text-gray-500"
                />
                
                <div className="flex justify-between items-center mt-2 px-1">
                   <div className="flex gap-1.5 items-center text-gray-400 hover:text-white cursor-pointer px-2 py-1.5 rounded-xl hover:bg-white/5 transition-colors">
                      <Zap size={16} className="text-yellow-500 fill-yellow-500" />
                      <span className="text-[13px] font-medium">v4-Visualizer</span>
                      <ChevronDown size={14} className="text-gray-500" />
                   </div>
                   <button 
                      className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-all disabled:opacity-30" 
                      disabled={!input}
                    >
                    <SendHorizonal size={18} />
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {showViz && (
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="w-[40%] border-l border-white/10 bg-[#0D1117] overflow-hidden"
            >
              <NeuralCanvas />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}