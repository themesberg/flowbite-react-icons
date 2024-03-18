import type { StoreInitProps } from ".";
import { setStore } from "..";

export function StoreInitServer({ override, ...theme }: StoreInitProps) {
  setStore(theme, { override });

  return null;
}
