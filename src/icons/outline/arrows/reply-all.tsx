import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgReplyAll = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m8.8 6-5.6 5a1 1 0 0 0 0 1.5l5.7 5m5.7-3.1V16a1 1 0 0 1-1.5.8l-5.2-4.2a1.1 1.1 0 0 1 0-1.7l5.2-4.2a1 1 0 0 1 1.5.8v1.7c3.3 0 6 3 6 6.7v1.3a.7.7 0 0 1-1.4.4 5.2 5.2 0 0 0-4.6-3.2"
    />
  </BaseIcon>
));
export default SvgReplyAll;
