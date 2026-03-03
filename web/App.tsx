import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Download, Github, Activity, Cpu, Box, Zap, ArrowRight, ExternalLink, Info, Shield, Zap as ZapIcon } from 'lucide-react';

const Logo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M50 5L90 27.5V72.5L50 95L10 72.5V27.5L50 5Z" stroke="currentColor" strokeWidth="6" strokeLinejoin="round" />
    <path d="M30 35H70L30 65H70" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="30" cy="35" r="4" fill="currentColor" />
    <circle cx="70" cy="65" r="4" fill="currentColor" />
  </svg>
);

const Navbar = () => (
  <nav className="relative z-50 flex justify-between items-center px-8 py-8 max-w-7xl mx-auto">
    <Link to="/" className="flex items-center gap-4 font-bold tracking-tighter text-xl group cursor-pointer">
      <div className="text-white hover:text-white/80 transition-colors drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
        <Logo className="w-9 h-9" />
      </div>
      <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent uppercase tracking-tight">
        Zentinium
      </span>
    </Link>
    
    <div className="hidden sm:flex gap-8 text-[11px] font-prompt font-semibold uppercase tracking-[0.1em] text-white/30">
      <Link to="/about" className="hover:text-white transition-colors">About</Link>
      <a href="https://github.com/pxzc1/Zentinium" className="hover:text-white transition-colors">Documentation</a>
      <a href="https://github.com/pxzc1/Zentinium" className="hover:text-white transition-colors">Architecture</a>
    </div>
  </nav>
);

const HomePage = () => (
  <main className="relative z-10 flex flex-col items-center justify-center pt-20 px-6 text-center">
    <div className="mb-10 flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
      <Zap size={12} className="text-white fill-white" />
      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">Local Runtime - Privacy</span>
    </div>
    
    <h1 className="text-6xl md:text-[7rem] font-black tracking-tighter mb-8 leading-[0.9] bg-gradient-to-b from-white via-white to-white/20 bg-clip-text text-transparent">
      Visualizing <br />in Real-Time.
    </h1>

    <p className="max-w-xl text-lg md:text-xl text-white/40 mb-14 font-light leading-relaxed">
      Application สำหรับดูการทำงานของ นิวรัลเน็ตเวิร์ก (Neural Network)
      บนโมเดลที่กำลังทำงานแบบ locally อยู่บนคอมพิวเตอร์ของคุณ
    </p>

    <div className="flex flex-col sm:flex-row gap-5 mb-32">
      <button className="group relative flex items-center justify-center px-10 py-5 bg-white text-black font-black rounded-2xl overflow-hidden transition-all duration-500 ease-out hover:scale-[1.05] active:scale-95 shadow-[0_0_50px_rgba(255,255,255,0.1)]">
        <div className="flex items-center gap-3 transition-transform duration-500 ease-out group-hover:-translate-x-4">
          <Download size={20} strokeWidth={3} />
          <span>Download for Windows</span>
        </div>
        <div className="absolute right-8 opacity-0 translate-x-4 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-x-0">
          <ArrowRight size={20} strokeWidth={3} />
        </div>
      </button>

      <a href="https://github.com/pxzc1/Zentinium" className="group relative flex items-center justify-center px-10 py-5 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 ease-out hover:bg-white/10 hover:border-white/20 font-bold">
        <div className="flex items-center gap-3 transition-transform duration-500 ease-out group-hover:-translate-x-4">
          <Github size={20} />
          <span>Source Code</span>
        </div>
        <div className="absolute right-8 opacity-0 translate-x-4 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-x-0 text-white/60">
          <ExternalLink size={18} />
        </div>
      </a>
    </div>

    {/* Feature Cards */}
    <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 pb-20 text-left">
      <div className="group p-10 bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-[3rem] hover:bg-white/[0.04] transition-all duration-500">
        <Activity className="mb-6 text-white/80 group-hover:scale-110 transition-transform duration-500" size={32} />
        <h3 className="text-xl font-bold mb-3">ดูการทำงานแบบเรียลไทม์</h3>
        <p className="text-white/40 text-sm leading-relaxed">ดูการทำงานของ นิวรัลเน็ตเวิร์ก ขณะที่กำลัง run โมเดลอยู่ โดยไม่ต้องหยุดทำงานใดๆ</p>
      </div>
      <div className="group p-10 bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-[3rem] hover:bg-white/[0.04] transition-all duration-500">
        <Cpu className="mb-6 text-white/80 group-hover:scale-110 transition-transform duration-500" size={32} />
        <h3 className="text-xl font-bold mb-3">ความล่าช้าต่ำ</h3>
        <p className="text-white/40 text-sm leading-relaxed">Optimized Rust-based backend ensures your visualization matches your GPU speed.</p>
      </div>
      <div className="group p-10 bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-[3rem] hover:bg-white/[0.04] transition-all duration-500">
        <Box className="mb-6 text-white/80 group-hover:scale-110 transition-transform duration-500" size={32} />
        <h3 className="text-xl font-bold mb-3">ความปลอดภัย</h3>
        <p className="text-white/40 text-sm leading-relaxed">ทุกอย่าง run และ deploy บนอุปกรณ์ของคุณ ไม่มีการทำงานบนเซิร์ฟเวอร์อื่นๆ ปลอดภัยแน่นอน</p>
      </div>
    </div>
  </main>
);

const AboutPage = () => (
  <main className="relative z-10 flex flex-col items-center pt-24 px-6 text-left max-w-4xl mx-auto pb-32">
    <div className="w-full">
      <div className="mb-8 flex items-center gap-2 text-white/40">
        <Info size={16} />
        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Our Philosophy</span>
      </div>
      
      <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-12 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent leading-tight">
        Transparency for the <br />Next Era of AI.
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <div className="space-y-6">
          <p className="text-white/60 text-lg leading-relaxed font-light">
            Zentinium was built on the belief that AI shouldn't be a "black box." As models grow in complexity, understanding how they reach decisions becomes critical for safety and development.
          </p>
          <p className="text-white/40 text-md leading-relaxed">
            Our tool hooks directly into your local runtime to provide a high-fidelity visual stream of layer activations and weight distributions without any cloud overhead.
          </p>
        </div>
        
        <div className="flex flex-col gap-4">
          <div className="p-6 bg-white/[0.03] border border-white/10 rounded-3xl backdrop-blur-3xl">
            <Shield className="text-white/80 mb-4" size={24} />
            <h4 className="font-bold text-sm mb-1 uppercase tracking-wider">Privacy by Design</h4>
            <p className="text-xs text-white/40 leading-relaxed">No data ever leaves your machine. Your model architecture and weights stay entirely local.</p>
          </div>
          <div className="p-6 bg-white/[0.03] border border-white/10 rounded-3xl backdrop-blur-3xl">
            <ZapIcon className="text-white/80 mb-4" size={24} />
            <h4 className="font-bold text-sm mb-1 uppercase tracking-wider">Engineered for Speed</h4>
            <p className="text-xs text-white/40 leading-relaxed">Built using a high-performance Rust core to handle massive tensor arrays in real-time.</p>
          </div>
        </div>
      </div>
    </div>
  </main>
);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen w-full bg-[#0a0a0a] text-white selection:bg-white/30 font-sans overflow-x-hidden">
        
        {/* Persistent Background Glows */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-[-5%] left-[-5%] w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-white/[0.07] rounded-full blur-[150px]" />
        </div>

        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>

        <footer className="py-12 border-t border-white/5 text-center">
          <p className="text-[9px] text-white/20 font-bold uppercase tracking-[0.5em]">Built for the future of interpretable AI</p>
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;