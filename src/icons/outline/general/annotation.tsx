import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgAnnotation = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7.556 8.5h8m-8 3.5H12m7.111-7H4.89a.9.9 0 0 0-.629.256.87.87 0 0 0-.26.619v9.25c0 .232.094.455.26.619A.9.9 0 0 0 4.89 16H9l3 4 3-4h4.111a.9.9 0 0 0 .629-.256.87.87 0 0 0 .26-.619v-9.25a.87.87 0 0 0-.26-.619.9.9 0 0 0-.63-.256Z"
    />
  </BaseIcon>
));
export default SvgAnnotation;
