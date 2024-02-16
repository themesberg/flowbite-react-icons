import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgBellRing = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="currentColor" ref={ref} {...props}>
    <path d="M17.133 12.632v-1.8a5.406 5.406 0 0 0-4.154-5.262A1 1 0 0 0 13 5.464V3.1a1 1 0 0 0-2 0v2.364a1 1 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C6.867 15.018 5 15.614 5 16.807 5 17.4 5 18 5.538 18h12.924C19 18 19 17.4 19 16.807c0-1.193-1.867-1.789-1.867-4.175M6 6a1 1 0 0 1-.707-.293l-1-1a1 1 0 0 1 1.414-1.414l1 1A1 1 0 0 1 6 6m-2 4H3a1 1 0 0 1 0-2h1a1 1 0 1 1 0 2m14-4a1 1 0 0 1-.707-1.707l1-1a1 1 0 1 1 1.414 1.414l-1 1A1 1 0 0 1 18 6m3 4h-1a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2M8.823 19a3.453 3.453 0 0 0 6.354 0z" />
  </BaseIcon>
));
export default SvgBellRing;
