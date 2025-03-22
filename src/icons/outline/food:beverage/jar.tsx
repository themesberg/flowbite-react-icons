import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgJar = forwardRef<SVGSVGElement, PropsWithoutRef<FlowbiteIconProps>>(
  (props, ref) => (
    <BaseIcon fill="none" ref={ref} {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 6H8m8 0s3 2.5 3 5m-3-5V3H8v3m0 0s-3 2.5-3 5v8.002A3 3 0 0 0 8 22h8c1.657 0 3-1.341 3-2.998V11m0 0h-8v7h8zM6 6h12"
      />
    </BaseIcon>
  ),
);
export default SvgJar;
