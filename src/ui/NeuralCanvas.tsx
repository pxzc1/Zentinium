export default function NeuralCanvas() {
  return (
    <div className="h-full w-full bg-[#0D1117] relative overflow-hidden flex items-center justify-center">
      {/* 3D Grid Floor Effect */}
      <div className="absolute inset-0 opacity-10" 
           style={{ backgroundImage: 'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)', backgroundSize: '50px 50px', transform: 'perspective(500px) rotateX(60deg)' }} />
      
      {/* Animated Nodes Simulation */}
      <div className="relative w-64 h-64">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-blue-500/20 border border-blue-400/50 animate-pulse"
            style={{
              width: `${Math.random() * 40 + 20}px`,
              height: `${Math.random() * 40 + 20}px`,
              left: `${Math.random() * 80}%`,
              top: `${Math.random() * 80}%`,
              animationDelay: `${i * 0.5}s`,
              boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)'
            }}
          />
        ))}
        {/* Connection Lines (SVG) */}
        <svg className="absolute inset-0 w-full h-full opacity-30">
          <line x1="10%" y1="10%" x2="90%" y2="90%" stroke="#3b82f6" strokeWidth="1" />
          <line x1="90%" y1="10%" x2="10%" y2="90%" stroke="#3b82f6" strokeWidth="1" />
        </svg>
      </div>

      <div className="absolute bottom-4 left-4 flex items-center gap-2">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
        <span className="text-[10px] text-green-500 font-mono font-bold uppercase">System Active</span>
      </div>
    </div>
  );
}