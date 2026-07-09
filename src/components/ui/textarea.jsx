import React from "react";

export const Textarea = React.forwardRef(function Textarea(props, ref) {
  return (
    <textarea
      ref={ref}
      className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
      {...props}
    />
  );
});

export default Textarea;