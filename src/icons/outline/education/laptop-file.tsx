import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgLaptopFile = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.286 7V5.786A.78.78 0 0 0 18.508 5H6.063a.78.78 0 0 0-.777.786V16m0 0h-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h5m-4-3h4m7-6v3a1 1 0 0 1-1 1h-3m8-3v8a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-5.397a1 1 0 0 1 .27-.683l2.433-2.603a1 1 0 0 1 .73-.317h3.567a1 1 0 0 1 1 1"
    />
  </BaseIcon>
));
export default SvgLaptopFile;
