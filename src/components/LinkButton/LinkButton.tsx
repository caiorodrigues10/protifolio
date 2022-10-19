import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ButtonHTMLAttributes, ReactNode, useState } from "react";

export interface LinkButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
  className?: string;
  active: boolean;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  children,
  asChild,
  className,
  active,
  ...props
}) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={clsx(
        `bg-transparent ${
          active ? "text-white" : "text-gray-500 hover:text-white"
        } text-lg p-0 transition-colors font-semibold h-5`,
        className
      )}
      {...props}
    >
      {children}
      {active && (
        <div className="flex items-center w-full gap-1">
          <div className="w-[7%] bg-white h-1 rounded-lg" />
          <div className="w-[23%] bg-white h-1 rounded-lg" />
          <div className="w-[70%] bg-white h-1 rounded-lg" />
        </div>
      )}
    </Comp>
  );
};

export { LinkButton };
