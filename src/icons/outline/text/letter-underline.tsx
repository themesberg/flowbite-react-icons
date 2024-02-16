import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgLetterUnderline = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      d="M6 19h12M8 5v9a4 4 0 0 0 8 0V5M6 5h4m4 0h4"
    />
  </BaseIcon>
));
export default SvgLetterUnderline;
