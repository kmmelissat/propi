"use client";

interface CustomFormItemProps {
  label: React.ReactNode;
  htmlFor?: string;
  error?: string;
  errorId?: string;
  children: React.ReactNode;
  className?: string;
  inline?: boolean;
}

export default function CustomFormItem({
  label,
  htmlFor,
  error,
  errorId,
  children,
  className = "",
  inline = false,
}: CustomFormItemProps) {
  const labelEl = (
    <label
      htmlFor={htmlFor}
      className={
        inline
          ? "cursor-pointer font-nunito text-xs text-grey-900 md:text-base"
          : "mb-1 block font-nunito text-xs font-medium text-grey-900 md:text-base"
      }
    >
      {label}
    </label>
  );

  return (
    <div className={className}>
      {inline ? (
        <div className="flex items-center gap-3">
          {children}
          {labelEl}
        </div>
      ) : (
        <>
          {labelEl}
          {children}
        </>
      )}
      {error && (
        <p
          id={errorId}
          className="mt-1 font-nunito text-xs text-red-500 sm:text-sm"
        >
          {error}
        </p>
      )}
    </div>
  );
}
