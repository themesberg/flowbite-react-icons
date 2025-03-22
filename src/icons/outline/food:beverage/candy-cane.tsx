import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgCandyCane = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10 8c0-.828.5-2 2-2m-2 2v2.5a1.5 1.5 0 1 1-3 0v-3m3 .5-3-.5M12 6c1.5 0 2 1.172 2 2m-2-2V3M7 7.5C7 5.015 9.515 3 12 3m0 0c2.485 0 5 2.015 5 4.5v12a1.5 1.5 0 1 1-3 0V8m0 0h3m-3 4h3m-3 4h3"
    />
  </BaseIcon>
));
export default SvgCandyCane;
