"use client";

// Custom select para evitar el estilo nativo de iOS.

import { useState, useRef, useEffect } from "react";
import { IconChevronDown, IconCheck } from "@tabler/icons-react";

export interface SelectOption {
  value: string;
  label: string;
  flag?: string;
}

interface CustomSelectProps {
  id: string;
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  placeholder?: string;
  hasError?: boolean;
  className?: string;
  "aria-invalid"?: boolean;
  "aria-describedby"?: string;
}

export default function CustomSelect({
  id,
  value,
  onChange,
  options,
  placeholder = "Seleccionar",
  hasError = false,
  className = "",
  "aria-invalid": ariaInvalid,
  "aria-describedby": ariaDescribedby,
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);
  const selectedLabel = selectedOption?.label ?? placeholder;
  const selectedFlag = selectedOption?.flag;

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const baseClass =
    "w-full rounded-lg border border-grey-300 px-3 py-2 font-nunito text-xs text-grey-900 placeholder:text-grey-500 outline-none focus:border-propi-green cursor-pointer text-left flex items-center justify-between md:text-base";
  const errorClass = hasError
    ? "border-red-500 focus:border-red-500"
    : "border-grey-300";

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <button
        type="button"
        id={id}
        onClick={() => setIsOpen(!isOpen)}
        className={`${baseClass} ${errorClass}`}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-invalid={ariaInvalid}
        aria-describedby={ariaDescribedby}
        aria-label={selectedLabel}
      >
        <span className="flex items-center gap-2">
          {selectedFlag && (
            <img
              src={selectedFlag}
              alt=""
              className="h-5 w-5 shrink-0 rounded-full object-cover"
              aria-hidden
            />
          )}
          <span className={value ? "text-grey-900" : "text-grey-500"}>
            {selectedLabel}
          </span>
        </span>
        <IconChevronDown
          size={20}
          className={`shrink-0 text-grey-600 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <ul
          role="listbox"
          className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-lg border border-grey-300 bg-white py-1 shadow-lg"
          aria-activedescendant={value ? `option-${value}` : undefined}
        >
          {options.map((opt) => {
            const isSelected = opt.value === value;
            return (
              <li
                key={opt.value}
                id={`option-${opt.value}`}
                role="option"
                aria-selected={isSelected}
                onClick={() => {
                  onChange(opt.value);
                  setIsOpen(false);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onChange(opt.value);
                    setIsOpen(false);
                  }
                }}
                className={`flex cursor-pointer items-center justify-between gap-2 px-3 py-2.5 font-nunito text-sm transition-colors ${
                  isSelected
                    ? "bg-propi-green-light text-propi-green"
                    : "text-grey-900 hover:bg-grey-200"
                }`}
              >
                <span className="flex items-center gap-2">
                  {opt.flag && (
                    <img
                      src={opt.flag}
                      alt=""
                      className="h-5 w-5 shrink-0 rounded-full object-cover"
                      aria-hidden
                    />
                  )}
                  {opt.label}
                </span>
                {isSelected && (
                  <IconCheck size={18} className="text-propi-green" />
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
