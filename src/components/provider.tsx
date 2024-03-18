import { getStore } from "../store";
import { StoreInit } from "../store/init";
import type { FlowbiteIconProps } from "../types";

export function FlowbiteIcons({ children, ...props }: FlowbiteIconProps) {
  const prevTheme = getStore();

  return (
    <>
      <StoreInit {...props} />
      {children}
      <StoreInit {...prevTheme} override />
    </>
  );
}
