import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgBellActiveAlt = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="currentColor" ref={ref} {...props}>
    <path d="M17.133 12.632v-1.8a5.41 5.41 0 0 0-4.154-5.262A1 1 0 0 0 13 5.464V3.1a1 1 0 0 0-2 0v2.364a1 1 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C6.867 15.018 5 15.614 5 16.807 5 17.4 5 18 5.538 18h12.924C19 18 19 17.4 19 16.807c0-1.193-1.867-1.789-1.867-4.175m-13.267-.8a1 1 0 0 1-1-1 9.42 9.42 0 0 1 2.517-6.391A1.001 1.001 0 1 1 6.854 5.8a7.43 7.43 0 0 0-1.988 5.037 1 1 0 0 1-1 .995m16.268 0a1 1 0 0 1-1-1A7.43 7.43 0 0 0 17.146 5.8a1 1 0 0 1 1.471-1.354 9.42 9.42 0 0 1 2.517 6.391 1 1 0 0 1-1 .995M8.823 19a3.453 3.453 0 0 0 6.354 0z" />
  </BaseIcon>
));
export default SvgBellActiveAlt;
