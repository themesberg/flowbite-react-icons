import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgMergeCells = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10 18v2H4V4h6v2m4 12v2h6V4h-6v2m-6.495 8.495L10 12m0 0L7.505 9.505M10 12H4.052m12.502 2.554L14 12m0 0 2.554-2.554M14 12h5.832"
    />
  </BaseIcon>
));
export default SvgMergeCells;
