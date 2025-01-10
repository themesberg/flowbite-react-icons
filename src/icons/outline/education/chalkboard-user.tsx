import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgChalkboardUser = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.714 15h4.268c.404 0 .732-.384.732-.857V3.857c0-.473-.328-.857-.732-.857H6.714a1 1 0 0 0-1 1v4m11 7v-3h3v3zm-3 6h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1m-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
    />
  </BaseIcon>
));
export default SvgChalkboardUser;
