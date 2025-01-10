import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgPersonChalkboard = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.571 5h7v9h-7m-6-4-3 4.5m3-4.5v5m0-5h3m0 0h5m-5 0v5m-3 0h3m-3 0v5m3-5v5m6-6 2.5 6m-3-6-2.5 6m-3-14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
    />
  </BaseIcon>
));
export default SvgPersonChalkboard;
