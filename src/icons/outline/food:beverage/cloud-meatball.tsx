import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgCloudMeatball = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.333 14.653c.708 0 1.386-.21 1.886-.71s.781-1.25.781-1.957a2.667 2.667 0 0 0-2.667-2.667h-.022q.02-.221.022-.444A4.889 4.889 0 0 0 7.74 7.56c-.063-.003-.121-.018-.184-.018-.943 0-1.91.366-2.577 1.032-.667.667-.979 1.58-.979 2.523a3.555 3.555 0 0 0 2.667 3.443M12 14v3m0 0v3m0-3-2.121-2.121M12 17l2.121 2.121M12 17H9m3 0h3m-3 0-2.121 2.121M12 17l2.121-2.121M6 18h.01M18 18h.01"
    />
  </BaseIcon>
));
export default SvgCloudMeatball;
