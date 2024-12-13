import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgFontFamily = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m10.579 19 4.297-10.93a.11.11 0 0 1 .205 0L19.378 19m-8.8 0h-1.1m1.1 0h1.65m7.15 0h-1.65m1.65 0h1.1m-7.7-3.985h4.4M3 16l1.567-3.985m0 0 2.73-6.945a.11.11 0 0 1 .205 0l2.504 6.945z"
    />
  </BaseIcon>
));
export default SvgFontFamily;
