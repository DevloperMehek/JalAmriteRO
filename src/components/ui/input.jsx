import React from "react";

export const Input = React.forwardRef(function Input(props, ref) {
  return (
    <input
      ref={ref}
      className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
      {...props}
    />
  );
});

export default Input;