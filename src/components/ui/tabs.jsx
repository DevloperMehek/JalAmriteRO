import React, { createContext, useContext, useState } from "react";

const TabsContext = createContext();

export function Tabs({ defaultValue, children }) {
  const [value, setValue] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ value, setValue }}>
      {children}
    </TabsContext.Provider>
  );
}

export function TabsList({ children, className = "" }) {
  return (
    <div
      className={`flex w-full bg-[#EEF4FB] p-2 rounded-2xl gap-2 ${className}`}
    >
      {children}
    </div>
  );
}

export function TabsTrigger({
  value,
  children,
  className = "",
}) {
  const { value: activeValue, setValue } = useContext(TabsContext);

  const active = activeValue === value;

  return (
    <button
      onClick={() => setValue(value)}
      className={`
        flex-1
        flex
        items-center
        justify-center
        gap-2
        rounded-xl
        px-6
        py-4
        text-[17px]
        font-semibold
        transition-all
        duration-300
        ${
          active
            ? "bg-[#123E63] text-white shadow-lg border-2 border-[#00AEEF]"
            : "bg-transparent text-[#5B6F86] hover:bg-white"
        }
        ${className}
      `}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, children }) {
  const { value: activeValue } = useContext(TabsContext);

  if (activeValue !== value) return null;

  return <div className="mt-8">{children}</div>;
}