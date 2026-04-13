import { useState } from "react";

export default function AccountSection({
  title,
  description,
  value,
  type,
  button,
  field,
  onUpdate,
}) {
  const [inputValue, setInputValue] = useState(value);

  return (
    <div className="bg-[#0b0f16] rounded-2xl p-10 flex justify-between items-center">
      <div>
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-400 mt-2">{description}</p>
      </div>

      <div className="w-105">
        <label className="block mb-2">{title}</label>
        <input
          type={type}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full bg-transparent border border-white/30 rounded-lg px-4 py-3 mb-4 text-white focus:outline-none focus:border-cyan-400"
        />

        <div className="flex justify-end">
          <button
            onClick={() => onUpdate(field, inputValue)} // ✅ calls handleUpdate
            className="px-6 py-2 border border-white/40 rounded-md hover:bg-white hover:text-black transition"
          >
            {button}
          </button>
        </div>
      </div>
    </div>
  );
}