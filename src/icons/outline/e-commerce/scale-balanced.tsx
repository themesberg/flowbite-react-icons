import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgScaleBalanced = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5.5 21h13M12 21V7m0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4m2-1.8c3 .7 2.5 2.8 5 2.8M5 8c3.4 0 2.2-2.1 5-2.8M7 9.6V7.8m0 1.8-2 4.3a.8.8 0 0 0 .4 1l.4.1h2.4a.8.8 0 0 0 .8-.7V14zm10 0V7.3m0 2.3-2 4.3a.8.8 0 0 0 .4 1l.4.1h2.4a.8.8 0 0 0 .8-.7V14l-2-4.3Z"
    />
  </BaseIcon>
));
export default SvgScaleBalanced;
