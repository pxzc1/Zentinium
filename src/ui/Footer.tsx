import { useState } from 'react';
import { SendHorizonal, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const [input, setInput] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  return (
    <footer className="p-8 pt-0 w-full">
      <div className="max-w-3xl mx-auto flex items-end gap-3">
        {/* Message Input Container */}
        <div className="relative flex-1">
          <motion.textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            
            initial={{
              borderColor: "rgba(55, 65, 81, 1)",
              boxShadow: "0 0 0px rgba(255, 255, 255, 0)"
            }}
            animate={{
              borderColor: isFocused 
                ? "rgba(255, 255, 255, 0.8)" 
                : "rgba(55, 65, 81, 1)",
              boxShadow: isFocused 
                ? "0 0 20px rgba(255, 255, 255, 0.15)" 
                : "0 0 0px rgba(255, 255, 255, 0)"
            }}
            transition={{ duration: 0.5 }}
            
            className="w-full bg-[#161B22] text-[#F1F4F8] border rounded-2xl p-4 focus:outline-none resize-none shadow-2xl placeholder:text-gray-600 font-sans block"
            placeholder="Message..."
            rows={2}
          />
        </div>

        {/* Model Selection Button (Moved from Header) */}
        <button className="h-[42px] px-4 flex items-center gap-2 bg-[#161B22] border border-gray-800 rounded-xl hover:border-gray-600 transition-colors self-center mb-2 group">
          <Zap size={14} className="text-yellow-500 fill-yellow-500 group-hover:scale-110 transition-transform" />
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-outfit">
            v4-Visualizer
          </span>
        </button>

        {/* Send Button: Solid White Background */}
        <button 
          className="h-[42px] w-[42px] flex items-center justify-center bg-white text-black rounded-xl hover:bg-white/90 hover:scale-105 active:scale-95 transition-all shadow-lg self-center mb-2"
          onClick={() => console.log("Sending:", input)}
        >
          <SendHorizonal size={20} />
        </button>
      </div>
      
      <p className="text-center text-[10px] text-gray-600 mt-4 font-medium tracking-widest uppercase opacity-50">
        ZENTINIUM - 1.0.0
      </p>
    </footer>
  );
}