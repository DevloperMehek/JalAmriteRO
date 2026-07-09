import React from "react";

export function Label({
  children,
  htmlFor,
  className = "",
}) {
  return (
    <label
      htmlFor={htmlFor}
      className={`block mb-2 text-sm font-medium ${className}`}
    >
      {children}
    </label>
  );
}

export default Label;