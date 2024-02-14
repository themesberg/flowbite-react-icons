import type { FlowbiteIconProps } from "../../types";
import { StoreInitClient } from "./client";
import { StoreInitServer } from "./server";

export interface StoreInitProps extends FlowbiteIconProps {
  override?: boolean;
}

export function StoreInit(props: StoreInitProps) {
  return (
    <>
      <StoreInitServer {...props} />
      <StoreInitClient {...props} />
    </>
  );
}
