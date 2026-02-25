"use client";

import CustomRadio from "./CustomRadio";

interface CustomCardProps {
  id: string;
  value: string;
  selected: boolean;
  icon: React.ReactNode;
  label: string;
  className?: string;
  registerProps: Omit<
    React.ComponentProps<typeof CustomRadio>,
    "id" | "value" | "checked"
  >;
}

export default function CustomCard({
  id,
  value,
  selected,
  icon,
  label,
  className = "",
  registerProps,
}: CustomCardProps) {
  return (
    <label
      htmlFor={id}
      className={`flex w-full cursor-pointer items-center justify-between gap-2 rounded-lg border px-4 py-3 font-nunito text-xs text-grey-800 transition-colors md:text-base ${
        selected
          ? "border-propi-green bg-propi-green-ultra-light"
          : "border-grey-300 hover:border-grey-400"
      } ${className}`}
    >
      <span className="flex items-center gap-2">
        <span className={selected ? "text-propi-green" : "text-grey-600"}>
          {icon}
        </span>
        {label}
      </span>
      <CustomRadio
        id={id}
        value={value}
        checked={selected}
        {...registerProps}
      />
    </label>
  );
}
