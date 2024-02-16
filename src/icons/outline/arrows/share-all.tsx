import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgShareAll = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m15.1 6 5.6 5a1 1 0 0 1 0 1.5l-5.7 5m-6-3V16a1 1 0 0 0 1.5.8l5.1-4.2a1.1 1.1 0 0 0 0-1.7l-5-4.2a1 1 0 0 0-1.6.8v1.7c-3.3 0-6 3-6 6.7v1.3a.7.7 0 0 0 1.3.4A5.2 5.2 0 0 1 9 14.4h0Z"
    />
  </BaseIcon>
));
export default SvgShareAll;