import React from "react";

export function Select({ value, onValueChange, children }) {
  return React.Children.map(children, (child) =>
    React.cloneElement(child, { value, onValueChange })
  );
}

export function SelectTrigger({ children, className = "" }) {
  return (
    <div className={`border rounded-md px-3 py-2 ${className}`}>
      {children}
    </div>
  );
}

export function SelectValue({ placeholder }) {
  return <span className="text-gray-500">{placeholder}</span>;
}

export function SelectContent({ children, value, onValueChange }) {
  return (
    <select
      className="w-full border rounded-md p-2 mt-2"
      value={value}
      onChange={(e) => onValueChange?.(e.target.value)}
    >
      {React.Children.map(children, (child) =>
        React.cloneElement(child)
      )}
    </select>
  );
}

export function SelectItem({ value, children }) {
  return <option value={value}>{children}</option>;
}