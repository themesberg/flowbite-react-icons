import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgTracking = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      d="M5 19h4m6 0h4m-6.963-4.384V8.634L17 5.94m-4.93 2.662L7.042 5.94M12 2.997l5.033 2.906v5.812L12 14.62l-5.033-2.906V5.903zM14 19a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
    />
  </BaseIcon>
));
export default SvgTracking;
