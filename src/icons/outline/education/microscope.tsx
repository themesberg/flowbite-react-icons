import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgMicroscope = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5.643 21h14m-3.35-12a5.42 5.42 0 0 1 1.35 3.591c0 2.987-2.396 5.409-5.352 5.409a5.34 5.34 0 0 1-4.648-2.725m-2-.275h6m.437-4.437L10.643 12m5.809-5.767 2.155-2.155M17.53 3l2.155 2.155M10.643 18v3m4-3v3m.731-15.845-4.31 4.311 2.155 2.155 4.31-4.31z"
    />
  </BaseIcon>
));
export default SvgMicroscope;
