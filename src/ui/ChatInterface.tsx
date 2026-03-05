import { Zap } from 'lucide-react';
import NeuralCanvas from './NeuralCanvas';
import Footer from './Footer';

export default function ChatInterface() {
  // Logic for toggling removed to keep visualization permanently active
  return (
    <main className="flex-1 flex flex-col bg-[#0D1117] h-screen overflow-hidden">
      <header className="h-12 flex items-center px-6 border-b border-gray-800 bg-[#0D1117]/50 backdrop-blur-md justify-between z-10">
        <div className="flex items-center gap-2">
          <Zap size={14} className="text-yellow-500 fill-yellow-500" />
          <span className="text-xs font-bold text-gray-400 uppercase tracking-tighter font-outfit">
            MODEL: GPT-Visualizer-v4
          </span>
        </div>
        {/* Toggle button removed for a cleaner, permanent visualization UI */}
      </header>

      <section className="flex-1 flex overflow-hidden">
        {/* Main Chat Area - Set to 60% width */}
        <div className="flex flex-col h-full w-[60%] flex-shrink-0 border-r border-gray-800/30">
          <div className="flex-1 overflow-y-auto p-8">
            <div className="max-w-4xl mx-auto space-y-8">
              
              {/* Model Response: 60% of the chat container */}
              <div className="flex flex-col gap-2 items-start">
                <div className="text-[10px] font-bold text-gray-500 uppercase font-outfit tracking-widest ml-1">
                  Zentinium Engine
                </div>
                <div className="bg-[#161B22] border border-gray-800 p-4 rounded-2xl rounded-tl-none text-sm leading-relaxed w-[60%] font-outfit shadow-sm text-gray-300">
                  The visualizer is currently active on the right panel. Input your parameters or model layers to start the simulation.
                </div>
              </div>

              {/* User Response: 40% of the chat container */}
              <div className="flex flex-col gap-2 items-end">
                <div className="bg-blue-600/10 border border-blue-500/30 p-4 rounded-2xl rounded-tr-none text-sm leading-relaxed w-[40%] font-outfit text-blue-100 shadow-[0_0_20px_rgba(59,130,246,0.05)]">
                  Initialize the neural weight distribution for Layer 01.
                </div>
              </div>

            </div>
          </div>
          <Footer />
        </div>

        {/* Visualization Panel - Set to 40% width */}
        <div className="h-full w-[40%] p-4 bg-[#0D1117]">
          <div className="w-full h-full min-w-[300px]">
            <NeuralCanvas />
          </div>
        </div>
      </section>
    </main>
  );
}