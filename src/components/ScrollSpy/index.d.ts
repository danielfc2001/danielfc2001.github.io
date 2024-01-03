import { ForwardedRef } from "react";

export type ScrollSpyType = {
    className?: string;
    offsetTop?: number;
    offsetLeft?: number;
    duration?: number;
    children: ReactElement | Array<ReactElement>;
  };

export type LinkWithScrollSpyTypes = {
    target: string;
    to: string;
    children: ReactNode;
    ref: ForwardedRef<HTMLAnchorElement> | undefined;
  };

export type TicksArguments = {
  x: number,
  y: number,
}