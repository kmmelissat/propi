"use client";

// Custom radio para evitar el estilo nativo de iOS.


import { InputHTMLAttributes, forwardRef } from "react";
import { IconCheck } from "@tabler/icons-react";

interface CustomRadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  id: string;
  value: string;
  checked: boolean;
}

const CustomRadio = forwardRef<HTMLInputElement, CustomRadioProps>(
  ({ id, value, checked, ...props }, ref) => {
    return (
      <span className="relative shrink-0">
        <input
          ref={ref}
          id={id}
          type="radio"
          value={value}
          checked={checked}
          className="sr-only"
          {...props}
        />
        <span
          className={`flex h-4 w-4 items-center justify-center rounded-full border-2 transition-colors ${
            checked ? "border-propi-green bg-propi-green" : "border-grey-400"
          }`}
          aria-hidden
        >
          {checked && (
            <IconCheck size={10} className="text-white" strokeWidth={3} />
          )}
        </span>
      </span>
    );
  },
);

CustomRadio.displayName = "CustomRadio";

export default CustomRadio;
