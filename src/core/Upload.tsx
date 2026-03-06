// Zentinium/src/core/Upload.tsx
import { useState, useRef, ChangeEvent } from 'react';
import { Upload } from 'lucide-react';

export default function UploadComponent() {
  const [progress, setProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    setProgress(0);

    // Simulate upload progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  return (
    <>
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileChange} 
        className="hidden" 
      />
      
      <button 
        onClick={() => fileInputRef.current?.click()}
        className="w-full flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-white hover:bg-gray-800/40 rounded-lg transition-colors border border-dashed border-white/10"
      >
        <Upload size={16} />
        <span className="text-[11px] font-bold tracking-widest">UPLOAD</span>
      </button>

      {isUploading && (
        <div className="px-3 mt-2">
          <div className="w-full bg-gray-800 rounded-full h-1.5">
            <div 
              className="bg-blue-500 h-1.5 rounded-full transition-all duration-300" 
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}
    </>
  );
}