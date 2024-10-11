import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgCellAttributes = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 15v3a1 1 0 0 0 1 1h8v-8m-9 4v-4m0 4h9m-9-4V6a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4M3 11h11m6.25 5A2.25 2.25 0 0 1 18 18.25M20.25 16A2.25 2.25 0 0 0 18 13.75M20.25 16H21m-3 2.25A2.25 2.25 0 0 1 15.75 16M18 18.25V19m-2.25-3A2.25 2.25 0 0 1 18 13.75M15.75 16H15m3-2.25V13m-1.591 1.409-.53-.53m4.242 4.242-.53-.53m-3.182 0-.53.53m4.242-4.242-.53.53"
    />
  </BaseIcon>
));
export default SvgCellAttributes;
