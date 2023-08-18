import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  label: string;
  size?: "sm" | "md";
}

export const Button = ({ label, size = "sm", ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={`flex items-center justify-center h-11 ${
        size === "md" ? "" : "w-11"
      } p-4 bg-gray-900 text-white leading-4 font-semibold rounded-full cursor-pointer`}
    >
      {label}
    </button>
  );
};
