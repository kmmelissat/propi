"use client";

// Custom checkbox para evitar el estilo nativo de iOS.


import { InputHTMLAttributes, forwardRef } from "react";
import { IconCheck } from "@tabler/icons-react";

interface CustomCheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  id: string;
  checked: boolean;
  className?: string;
  hasError?: boolean;
}

const CustomCheckbox = forwardRef<HTMLInputElement, CustomCheckboxProps>(
  ({ id, checked, className = "", hasError = false, ...props }, ref) => {
    return (
      <label
        htmlFor={id}
        className={`relative flex cursor-pointer shrink-0 ${className}`}
      >
        <input
          ref={ref}
          id={id}
          type="checkbox"
          checked={checked}
          className="sr-only"
          {...props}
        />
        <span
          className={`flex h-4 w-4 items-center justify-center rounded border-2 transition-colors ${
            hasError ? "border-red-500" : checked ? "border-propi-green" : "border-grey-400"
          } ${checked ? "bg-propi-green" : ""}`}
          aria-hidden
        >
          {checked && (
            <IconCheck size={10} className="text-white" strokeWidth={3} />
          )}
        </span>
      </label>
    );
  },
);

CustomCheckbox.displayName = "CustomCheckbox";

export default CustomCheckbox;
