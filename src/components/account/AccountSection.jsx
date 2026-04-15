import { useState, useEffect } from "react";

export default function AccountSection({ title, description, value, type, button, field, onUpdate }) {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => { setInputValue(value); }, [value]);  // KEY FIX

  const handleBlur = () => {
    if (!inputValue?.trim()) setInputValue(value);
  };

  return (
    <div className="bg-[#0b0f18] border border-white/7 rounded-2xl p-7 flex items-center justify-between gap-8 hover:border-white/13 transition">
      <div className="flex-1">
        <h2 className="font-semibold font-[Syne] text-base mb-1">{title}</h2>
        <p className="text-sm text-white/35">{description}</p>
      </div>
      <div className="w-72 flex flex-col gap-3">
        <input type={type} value={inputValue} onChange={e => setInputValue(e.target.value)} onBlur={handleBlur}
          className="w-full bg-white/4 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400 focus:bg-cyan-400/5 transition" />
        <button onClick={() => onUpdate(field, inputValue)}
          className="self-end px-5 py-2 border border-white/20 rounded-lg text-xs font-bold font-[Syne] tracking-wider text-white/70 hover:bg-cyan-400 hover:border-cyan-400 hover:text-[#05070c] transition">
          {button}
        </button>
      </div>
    </div>
  );
}