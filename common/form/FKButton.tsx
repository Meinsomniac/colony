"use client";

import clsx from "clsx";
import { ButtonHTMLAttributes, forwardRef } from "react";

type FKButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: any;
  className?: string;
  variant?: "contained" | "filled" | "border";
};

const FKButton = forwardRef(
  (
    { children, className = "", ...rest }: FKButtonProps,
    ref: React.Ref<HTMLButtonElement>
  ) => {
    return (
      <div className="w-full">
        <button
          {...rest}
          ref={ref}
          className={clsx(
            "w-full text-white hover:brightness-95 cursor-pointer rounded-sm p-2 shadow-sm",
            "bg-blue-600",
            className
          )}
        >
          {children}
        </button>
      </div>
    );
  }
);

export default FKButton;
