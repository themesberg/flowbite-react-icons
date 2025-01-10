import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgMissedCall = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="currentColor" ref={ref} {...props}>
    <path
      fillRule="evenodd"
      d="M14.167 10.687a1 1 0 0 1 0-1.414l1.387-1.387-1.346-1.203a1 1 0 1 1 1.333-1.491l1.472 1.316 1.494-1.32a1 1 0 1 1 1.324 1.5l-1.36 1.2 1.404 1.4a1 1 0 1 1-1.412 1.416l-1.452-1.446-1.43 1.429a1 1 0 0 1-1.414 0"
      clipRule="evenodd"
    />
    <path d="M7.978 5a2.55 2.55 0 0 0-1.926.877C4.233 7.7 3.699 9.751 4.153 11.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.69 2.69 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.69 2.69 0 0 0 0-3.803l-1.21-1.211A2.56 2.56 0 0 0 7.978 5" />
  </BaseIcon>
));
export default SvgMissedCall;
