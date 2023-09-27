import React from "react";

type Props = {
  children: React.ReactNode;
};

export function FloatActionRoot({ children }: Props) {
  return (
    <div className="flex flex-col fixed top-[150px] right-[15%] space-y-6 max-lg:hidden">
      {children}
    </div>
  );
}
