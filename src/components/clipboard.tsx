"use client";

import { Children, cloneElement, isValidElement } from "react";

type Props = {
  children: React.ReactNode;
  textToBeCopied: string;
};

export function Clipboard(props: Props) {
  function handleCopy() {
    navigator.clipboard.writeText(props.textToBeCopied);
  }

  return Children.map(props.children, (child) => {
    if (!isValidElement(child)) return null;

    return cloneElement(child, { onClick: handleCopy } as {
      onClick: () => void;
    });
  });
}
