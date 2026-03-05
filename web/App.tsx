import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { 
  Download, Github, Activity, Cpu, Box, Zap, 
  ArrowRight, ExternalLink, Info, Shield, 
  Book, Heart, Terminal, FileCode, Workflow
} from 'lucide-react';

type Lang = 'en' | 'th';

const content = {
  en: {
    about: "About",
    docs: "Documentation",
    donate: "Donate",
    heroTitle: <>Visualizing <br />Continuously</>,
    heroSub: "Application for visualizing Neural Networks running locally on your computer, Private and Free.",
    download: "Download for Linux",
    source: "Source Code",
    features: [
      { title: "Real-time Visualization", desc: "Monitor neural network activity live while the model is running." },
      { title: "Low Latency", desc: "Optimized Rust-based backend ensures visualization matches GPU speed." },
      { title: "Privacy First", desc: "Everything runs locally on your hardware, none working on cloude VPS or any server." }
    ],
    philosophy: "ABOUT",
    aboutTitle: <>Transparency for the <br />Next Era of AI.</>,
    aboutBody: "Zentinium was built on the belief that AI shouldn't be a \"black box.\" Our tool hooks directly into your local runtime to provide high-fidelity visual streams.",
    privacyTitle: "Privacy by Design",
    privacySub: "No data leaves your machine. Your weights stay local.",
    devResources: "Developer Resources"
  },
  th: {
    about: "เกี่ยวกับ",
    docs: "เอกสารประกอบ",
    donate: "โดเนท",
    heroTitle: <>Visualizing <br />Continuously</>,
    heroSub: "แอปพลิเคชันสำหรับดูการทำงานของ Neural Network บนโมเดลที่กำลังทำงานอยู่บนคอมพิวเตอร์ของคุณ ปลอดภัยและฟรี",
    download: "ดาวน์โหลดสำหรับ Linux",
    source: "ซอร์สโค้ด",
    features: [
      { title: "ดูการทำงานแบบเรียลไทม์", desc: "ดูการทำงานของ Neural Network ขณะที่โมเดลกำลังทำงานอยู่ โดยไม่ต้องกดหยุดการทำงานใดๆ" },
      { title: "ความหน่วงต่ำ", desc: "Backend ที่พัฒนาด้วย Rust ช่วยให้การแสดงผลลื่นไหลตามความเร็ว GPU ของคุณ" },
      { title: "ความปลอดภัย", desc: "ทุกอย่างทำงานบนอุปกรณ์ของคุณ ไม่มีการทำงานบนเซิร์ฟเวอร์อื่นๆ" }
    ],
    philosophy: "เกี่ยวกับ",
    aboutTitle: <>ความโปร่งใสสำหรับ <br />ยุคใหม่ของ AI</>,
    aboutBody: "Zentinium ถูกสร้างขึ้นบนความเชื่อที่ว่า AI ไม่ควรเป็น \"กล่องดำ\" เครื่องมือของเราเชื่อมต่อกับรันไทม์ในเครื่องโดยตรงเพื่อแสดงผลข้อมูลที่มีความแม่นยำสูง",
    privacyTitle: "ความเป็นส่วนตัวโดยการออกแบบ",
    privacySub: "ไม่มีข้อมูลใดออกจากเครื่องของคุณ ทุกอย่างถูกเก็บไว้เป็นความลับ",
    devResources: "แหล่งข้อมูลสำหรับนักพัฒนา"
  }
};

const MatrixBackground = () => {
  const [columns, setColumns] = useState<number>(0);
  useEffect(() => {
    const calculateColumns = () => setColumns(Math.floor(window.innerWidth / 12));
    calculateColumns();
    window.addEventListener('resize', calculateColumns);
    return () => window.removeEventListener('resize', calculateColumns);
  }, []);

  const characters = "010011010110000101110100011100100110100101111000";

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 opacity-[0.15] select-none font-mono text-[10px] flex justify-between px-1">
      {Array.from({ length: columns }).map((_, i) => (
        <div key={i} className="flex flex-col whitespace-nowrap animate-matrix-fall text-center" style={{ animationDuration: `${10 + Math.random() * 15}s`, animationDelay: `${Math.random() * -20}s` }}>
          {Array.from({ length: 50 }).map((_, j) => (
            <span key={j} className="py-[1px] block">{characters.charAt(Math.floor(Math.random() * characters.length))}</span>
          ))}
        </div>
      ))}
      <style>{`@keyframes matrix-fall { 0% { transform: translateY(-100%); } 100% { transform: translateY(100vh); } } .animate-matrix-fall { will-change: transform; animation: matrix-fall linear infinite; }`}</style>
    </div>
  );
};

const Logo = ({ className = "w-8 h-8" }: { className?: string }) => (
    <svg 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
  >
    <path 
      d="M25 30H75L25 70H75" 
      stroke="currentColor" 
      strokeWidth="8" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className="opacity-20"
    />
    
    <path 
      d="M25 30H75L25 70H75" 
      stroke="currentColor" 
      strokeWidth="8" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />

    <circle cx="25" cy="30" r="6" fill="currentColor" />
    <circle cx="75" cy="70" r="6" fill="currentColor" />
  </svg>
);

const Navbar = () => {
  const { lang } = useParams<{ lang: Lang }>();
  const location = useLocation();
  const isThai = lang === 'th';
  const t = content[isThai ? 'th' : 'en'];
  const navFont = isThai ? 'font-prompt' : 'font-google-flex';
  const navSize = isThai ? 'text-[13px]' : 'text-[11px]';

  const getNewLangPath = (newLang: Lang) => {
    const pathSegments = location.pathname.split('/');
    pathSegments[1] = newLang;
    return pathSegments.join('/');
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/[0.06] bg-[#0a0a0a]/60 backdrop-blur-xl backdrop-saturate-150">
      <div className="flex justify-between items-center px-8 py-5 max-w-7xl mx-auto">
        <Link to={`/${lang}`} className="flex items-center gap-4 font-bold tracking-tighter text-xl group cursor-pointer">
          <div className="text-white hover:text-white/80 transition-colors drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            <Logo className="w-9 h-9" />
          </div>
          <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent uppercase tracking-tight font-ibm">Zentinium</span>
        </Link>
        
        <div className={`hidden sm:flex items-center gap-8 ${navSize} font-semibold uppercase tracking-[0.1em] ${navFont}`}>
          <Link to={`/${lang}/about`} className="text-white/30 hover:text-white transition-colors">{t.about}</Link>
          <Link to={`/${lang}/docs`} className="text-white/30 hover:text-white transition-colors">{t.docs}</Link>
          
          <div className="flex items-center gap-4">
            <a href="https://ezdn.app/Phattaraphan" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white text-white hover:text-black border border-white/10 rounded-full transition-all duration-300">
              <Heart size={12} className="fill-current" />
              {t.donate}
            </a>
            
            <div className="flex items-center gap-2 text-white/20 border-l border-white/10 pl-4 h-4 text-[10px] font-bold">
              <Link 
                to={getNewLangPath('th')} 
                className={`hover:text-white transition-colors ${isThai ? 'text-white' : ''}`}
              >
                TH
              </Link>
              <span className="opacity-30">|</span>
              <Link 
                to={getNewLangPath('en')} 
                className={`hover:text-white transition-colors ${!isThai ? 'text-white' : ''}`}
              >
                EN
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const HomePage = () => {
  const { lang } = useParams<{ lang: Lang }>();
  const isThai = lang === 'th';
  const t = content[isThai ? 'th' : 'en'];
  const subFont = isThai ? 'font-prompt' : 'font-lexend';
  const btnFont = isThai ? 'font-prompt' : 'font-outfit';
  const cardFont = isThai ? 'font-prompt' : 'font-google-flex';

  return (
    <main className="relative z-10 flex flex-col items-center justify-center pt-20 px-6 text-center">
      <div className="mb-10 flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
        <Zap size={12} className="text-white fill-white" />
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 font-google-flex">
          Local Runtime - Privacy
        </span>
      </div>
      
      <div className="relative flex flex-col items-center text-center">
        <div
          className="absolute pointer-events-none"
          style={{
            inset: '-40px -80px',
            background: 'radial-gradient(ellipse 90% 85% at 50% 42%, #0a0a0a 15%, rgba(10,10,10,0.85) 35%, rgba(10,10,10,0.4) 60%, transparent 100%)',
            zIndex: -1,
          }}
        />
        <h1 className="text-6xl md:text-[7rem] font-normal tracking-tighter mb-8 leading-[0.9] bg-gradient-to-b from-white via-white to-white/20 bg-clip-text text-transparent font-google-flex">
          {t.heroTitle}
        </h1>
        <p className={`max-w-xl text-lg md:text-xl text-white/40 mb-14 font-light leading-relaxed ${subFont}`}>
          {t.heroSub}
        </p>
        <div className={`flex flex-col sm:flex-row gap-5 mb-32 ${btnFont}`}>
          <button className="group relative flex items-center justify-center px-10 py-5 bg-[#F4F1F8] text-black font-semibold rounded-2xl overflow-hidden transition-all duration-500 ease-out hover:scale-[1.05] active:scale-95 shadow-[0_0_50px_rgba(255,255,255,0.1)]">
            <div className="flex items-center gap-3 transition-transform duration-500 ease-out group-hover:-translate-x-4">
              <Download size={20} strokeWidth={3} />
              <span>{t.download}</span>
            </div>
            <div className="absolute right-8 opacity-0 translate-x-4 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-x-0">
              <ArrowRight size={20} strokeWidth={3} />
            </div>
          </button>

          <a href="https://github.com/pxzc1/Zentinium" target="_blank" rel="noreferrer" className="group relative flex items-center justify-center px-10 py-5 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 ease-out hover:bg-white/10 font-bold">
            <div className="flex items-center gap-3 transition-transform duration-500 ease-out group-hover:-translate-x-4">
              <Github size={20} />
              <span>{t.source}</span>
            </div>
            <div className="absolute right-8 opacity-0 translate-x-4 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-x-0 text-white/60">
              <ExternalLink size={18} />
            </div>
          </a>
        </div>
      </div>
      <div className={`w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 pb-20 text-left relative z-10 ${cardFont}`}>
        {t.features.map((item, i) => {
          const icons = [Activity, Cpu, Box];
          const Icon = icons[i];
          return (
            <div key={i} className="group p-10 bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-[3rem] hover:bg-white/[0.04] transition-all duration-500">
              <Icon className="mb-6 text-white/80 group-hover:scale-110 transition-transform duration-500" size={32} />
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
};

const AboutPage = () => {
  const { lang } = useParams<{ lang: Lang }>();
  const t = content[lang === 'th' ? 'th' : 'en'];
  return (
    <main className="relative z-10 flex flex-col items-center pt-24 px-6 text-left max-w-4xl mx-auto pb-32">
      <div className="w-full">
        <div className="mb-8 flex items-center gap-2 text-white/40">
          <Info size={16} />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{t.philosophy}</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-12 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent leading-tight">{t.aboutTitle}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <p className="text-white/60 text-lg leading-relaxed font-light">{t.aboutBody}</p>
          <div className="p-6 bg-white/[0.03] border border-white/10 rounded-3xl backdrop-blur-3xl">
            <Shield className="text-white/80 mb-4" size={24} />
            <h4 className="font-bold text-sm mb-1 uppercase tracking-wider">{t.privacyTitle}</h4>
            <p className="text-xs text-white/40">{t.privacySub}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

const DocsPage = () => {
  const { lang } = useParams<{ lang: Lang }>();
  const t = content[lang === 'th' ? 'th' : 'en'];
  return (
    <main className="relative z-10 flex flex-col items-center pt-24 px-6 text-left max-w-6xl mx-auto pb-32">
      <div className="w-full">
        <div className="mb-8 flex items-center gap-2 text-white/40">
          <Book size={16} />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{t.devResources}</span>
        </div>
        <h1 className="text-5xl font-black tracking-tighter mb-12 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">{t.docs}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {["Getting Started", "API Reference", "Architecture"].map((title, i) => {
            const icons = [Terminal, FileCode, Workflow];
            const Icon = icons[i];
            return (
              <a key={i} href="https://github.com/pxzc1/Zentinium" target="_blank" rel="noreferrer" className="group p-8 bg-white/[0.02] border border-white/10 rounded-[2rem] hover:bg-white/[0.05] transition-all">
                <Icon className="mb-4 text-white/60 group-hover:text-white transition-colors" size={24} />
                <h3 className="font-bold text-lg mb-2">{title}</h3>
                <p className="text-xs text-white/30 mb-6">Explore the technical implementation on our GitHub repository.</p>
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">Read More <ArrowRight size={12} /></div>
              </a>
            );
          })}
        </div>
      </div>
    </main>
  );
};

const LanguageRedirect = () => {
  const userLang = navigator.language.toLowerCase();
  const defaultLang = userLang.startsWith('th') ? 'th' : 'en';
  return <Navigate to={`/${defaultLang}`} replace />;
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen w-full bg-[#0a0a0a] text-white selection:bg-white/30 font-sans overflow-x-hidden">
        <MatrixBackground />
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-5%] left-[-5%] w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-white/[0.07] rounded-full blur-[150px]" />
        </div>

        <Routes>
          <Route path="/" element={<LanguageRedirect />} />
          <Route path="/:lang" element={<><Navbar /><HomePage /></>} />
          <Route path="/:lang/about" element={<><Navbar /><AboutPage /></>} />
          <Route path="/:lang/docs" element={<><Navbar /><DocsPage /></>} />
          <Route path="*" element={<Navigate to="/en" replace />} />
        </Routes>

        <footer className="sticky bottom-0 z-10 py-6 border-t border-white/[0.06] bg-[#0a0a0a]/60 backdrop-blur-xl backdrop-saturate-150 text-center">
          <p className="text-[9px] text-white/20 font-bold uppercase tracking-[0.5em]">LICENSED UNDER MIT LICENSE - Phattaraphan</p>
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;