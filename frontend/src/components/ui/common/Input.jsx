import React from "react";

const Input = ({
  type = "text",
  name,
  onChange,
  label,
  placeholder,
  className,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label
        className="text-sm text-muted font-medium capitalize"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className={`block w-full rounded-lg border border-border bg-card px-4 py-3 text-sm placeholder-slate-400 transition duration-200 ease-in-out focus:border-primary focus:bg-card focus:outline-none focus:ring-2 focus:ring-indigo-500/20`}
      />
    </div>
  );
};

export default Input;
