import React from "react";

type Props = {
  children: React.ReactNode;
};

export function FloatActionRoot({ children }: Props) {
  return (
    <div className="flex flex-row justify-center items-center space-x-6 fixed bottom-0 bg-highlight/20 backdrop-blur-3xl w-full z-20 p-4">
      {children}
    </div>
  );
}
