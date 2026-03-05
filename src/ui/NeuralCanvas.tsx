export default function NeuralCanvas() {
  return (
    <div className="flex-1 w-full bg-[#161B22] rounded-2xl border border-gray-800 relative overflow-hidden group shadow-2xl">
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'linear-gradient(#F1F4F8 1px, transparent 1px), linear-gradient(90px, #F1F4F8 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="w-24 h-24 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin mb-4" />
        <p className="text-[#F1F4F8] font-mono text-sm tracking-widest opacity-50">COMPUTING NODES...</p>
      </div>
      
      <div className="absolute top-4 right-4 flex gap-2">
        <span className="px-2 py-1 bg-green-500/10 text-green-400 text-[10px] font-bold rounded border border-green-500/20 uppercase">Live Activity</span>
      </div>
    </div>
  );
}