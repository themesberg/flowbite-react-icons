"use client";

import type { StoreInitProps } from ".";
import { setStore } from "..";

export function StoreInitClient({ override, ...theme }: StoreInitProps) {
  setStore(theme, { override });

  return null;
}
