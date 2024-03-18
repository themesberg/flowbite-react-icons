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
      d="M5.5 21h13M12 21V7m0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4m2-1.8c3.073.661 2.467 2.8 5 2.8M5 8c3.359 0 2.192-2.115 5.012-2.793M7 9.556V7.75m0 1.806-1.95 4.393a.773.773 0 0 0 .37.962.8.8 0 0 0 .362.089h2.436a.79.79 0 0 0 .643-.335.78.78 0 0 0 .09-.716zm10 0V7.313m0 2.243-1.95 4.393a.773.773 0 0 0 .37.962.8.8 0 0 0 .362.089h2.436a.79.79 0 0 0 .643-.335.78.78 0 0 0 .09-.716z"
    />
  </BaseIcon>
));
export default SvgScaleBalanced;
