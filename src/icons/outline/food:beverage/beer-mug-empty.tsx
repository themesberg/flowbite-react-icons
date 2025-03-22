import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgBeerMugEmpty = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.125 6H20v3.86a4 4 0 0 1-1.781 3.328l-1.58 1.046M4.189 17h12.625M9 7v7m3-7v7M4.941 4.938l-.875 14A1 1 0 0 0 5.064 20h10.872a1 1 0 0 0 .998-1.062l-.875-14A1 1 0 0 0 15.06 4H5.939a1 1 0 0 0-.998.938"
    />
  </BaseIcon>
));
export default SvgBeerMugEmpty;
