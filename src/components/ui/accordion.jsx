import React, { createContext, useContext, useState } from "react";
import { ChevronDown } from "lucide-react";

const AccordionContext = createContext();

export function Accordion({
  children,
  type = "single",
  collapsible = true,
}) {
  const [openItem, setOpenItem] = useState(null);

  return (
    <AccordionContext.Provider
      value={{
        openItem,
        setOpenItem,
        collapsible,
      }}
    >
      <div>{children}</div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({
  value,
  children,
  className = "",
}) {
  return (
    <div
      className={`border mt-2 border-slate-200 rounded-2xl bg-white overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}

export function AccordionTrigger({
  children,
  value,
  className = "",
}) {
  const { openItem, setOpenItem, collapsible } =
    useContext(AccordionContext);

  const isOpen = openItem === value;

  const toggle = () => {
    if (isOpen && collapsible) {
      setOpenItem(null);
    } else {
      setOpenItem(value);
    }
  };

  return (
    <button
      onClick={toggle}
      className={`w-full flex justify-between items-center px-6 py-5 text-left font-semibold transition ${className}`}
    >
      <span>{children}</span>

      <ChevronDown
        className={`transition-transform duration-300 ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </button>
  );
}

export function AccordionContent({
  children,
  value,
  className = "",
}) {
  const { openItem } = useContext(AccordionContext);

  if (openItem !== value) return null;

  return (
    <div
      className={`px-6 pb-5 pt-2 border-t text-slate-600 ${className}`}
    >
      {children}
    </div>
  );
}