"use client";

import clsx from "clsx";
import { ButtonHTMLAttributes, forwardRef } from "react";

type FKButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: any;
  customClassName?: string;
  className?: string;
  variant?: "contained" | "filled" | "border";
};

const FKButton = forwardRef(
  (
    { children, customClassName, className = "", ...rest }: FKButtonProps,
    ref: React.Ref<HTMLButtonElement>
  ) => {
    return (
      <div className="w-full">
        <button
          {...rest}
          className={clsx(
            customClassName
              ? customClassName
              : `w-full bg-blue-600 text-white hover:bg-blue-500 cursor-pointer rounded-sm p-2 shadow-sm`.concat(
                  className
                )
          )}
        >
          {children}
        </button>
      </div>
    );
  }
);

export default FKButton;
