import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgStroopwafel = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9h-5m-4 9a9 9 0 0 1-9-9m9 9v-5m-9-4a9 9 0 0 1 9-9m-9 9h5m4-9v5M8 3.936V8m0 0v4m0-4H3.936M8 8h4m-4 4v4m0-4h4m-4 4v4.065M8 16H3.936M8 16h4m0-8v4m0-4h4m-4 4v4m0-4h4m-4 4h4m0-12.064V8m0 0v4m0-4h4.065M16 12v4m0 0v4.065M16 16h4.065"
    />
  </BaseIcon>
));
export default SvgStroopwafel;
