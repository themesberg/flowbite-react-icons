import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgOutgoingCall = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="currentColor" ref={ref} {...props}>
    <path d="M6.978 4a2.55 2.55 0 0 0-1.926.877C3.233 6.7 2.699 8.751 3.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.69 2.69 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.69 2.69 0 0 0 0-3.804l-1.21-1.21A2.56 2.56 0 0 0 6.978 4" />
    <path
      fillRule="evenodd"
      d="M14.993 4a1 1 0 0 1 1-1h3.03a1 1 0 0 1 1 1v2.981a1 1 0 0 1-2 0v-.58l-3.319 3.29a1 1 0 0 1-1.408-1.42L16.594 5h-.602a1 1 0 0 1-1-1"
      clipRule="evenodd"
    />
  </BaseIcon>
));
export default SvgOutgoingCall;
