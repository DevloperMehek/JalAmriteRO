import React from "react";

export default function Logo({
  className = "",
  size = 42,
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div
        className="flex items-center justify-center rounded-full bg-sky-600 text-white font-bold"
        style={{
          width: size,
          height: size,
        }}
      >
        💧
      </div>

      <div>
        <h2 className="font-bold text-lg leading-none">
          Jal Amrit
        </h2>
        <p className="text-xs text-gray-500">
          RO Sales & Service
        </p>
      </div>
    </div>
  );
}