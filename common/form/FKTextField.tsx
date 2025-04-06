"use client";

import clsx from "clsx";
import { useField } from "formik";
import React, { forwardRef, HTMLAttributes, useRef } from "react";

type FKTextFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  type?: string;
  customClassName?: string;
  className?: string;
  label?: string;
  containerProps?: HTMLAttributes<HTMLDivElement>;
};

export const FKTextField = forwardRef(
  (
    {
      type = "text",
      customClassName = "",
      className = "",
      containerProps,
      label,
      ...rest
    }: FKTextFieldProps,
    ref: React.Ref<HTMLInputElement>
  ) => {
    //states
    const isPlaceholderUsed = !!rest.placeholder?.trim();

    const [field, meta] = useField(rest?.name);
    const hasError = meta.error && meta.touched;

    //render
    return (
      <div
        {...containerProps}
        className={clsx("relative", containerProps?.className)}
      >
        <div className="relative w-full">
          <input
            {...rest}
            {...field}
            value={field.value ?? ""}
            type={type}
            className={clsx(
              customClassName
                ? customClassName
                : `w-full focus:outline-none focus:ring-0 border-[1px] p-2 rounded-sm border-gray-700 peer
              placeholder:text-sm placeholder:text-gray-400`.concat(className),
              hasError ? "border-red-500" : "focus:border-blue-500"
            )}
            id={rest.id}
            placeholder={rest?.placeholder || " "}
            ref={ref}
          />
          <label
            htmlFor={rest.id}
            className={clsx(
              `text-sm bg-white px-[2px] ml-2 
            absolute left-0 top-[50%] transform origin-[0] -translate-y-[50%] duration-300
            peer-focus:top-0
            peer-focus:-translate-y-[50%]
            peer-focus:scale-80
            peer-[&:not(:placeholder-shown)]:top-0 
            peer-[&:not(:placeholder-shown)]:-translate-y-[50%] 
            peer-[&:not(:placeholder-shown)]:scale-80`,
              isPlaceholderUsed
                ? `peer-placeholder-shown:top-0
            peer-placeholder-shown:-translate-y-[50%] 
            peer-placeholder-shown:scale-80`
                : `peer-placeholder-shown:top-[50%]
            peer-placeholder-shown:translate-y-[-50%] 
            peer-placeholder-shown:scale-100
            text-gray-400`,
              rest.defaultValue && "text-black",
              hasError ? "text-red-500" : "peer-focus:text-blue-600"
            )}
          >
            {label}
          </label>
        </div>
        {hasError && (
          <p className={clsx("text-xs mt-0.5 pl-1 text-red-500 absolute")}>
            {meta.error}
          </p>
        )}
      </div>
    );
  }
);

export default FKTextField;
