import clsx from "clsx";
import { forwardRef, HTMLAttributes } from "react";

const HFlex = forwardRef(
  (
    {
      children,
      ...rest
    }: { children?: React.ReactNode } & HTMLAttributes<HTMLDivElement>,
    ref: React.Ref<HTMLDivElement>
  ) => {
    return (
      <div ref={ref} className={clsx("flex w-full", rest.className)}>
        {children}
      </div>
    );
  }
);

export default HFlex;
