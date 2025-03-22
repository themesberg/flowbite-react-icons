import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgMartiniGlassCitrus = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m10 14 6-6H4zm0 0v6m-3 0h6m.035-12a3.5 3.5 0 1 1 1.015 2"
    />
  </BaseIcon>
));
export default SvgMartiniGlassCitrus;
