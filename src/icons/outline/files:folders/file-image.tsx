import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgFileImage = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      fill="currentColor"
      d="M16 18H8l2.5-6 2 4 1.5-2zm-1-8.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10 3v4a1 1 0 0 1-1 1H5m14-4v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1M8 18h8l-2-4-1.5 2-2-4zm7-8.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"
    />
  </BaseIcon>
));
export default SvgFileImage;
