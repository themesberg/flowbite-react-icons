import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgEuro = forwardRef<SVGSVGElement, PropsWithoutRef<FlowbiteIconProps>>(
  (props, ref) => (
    <BaseIcon fill="none" ref={ref} {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 10h9.2M6 14h9.2M18 5a6 6 0 0 0-3.4-1C11 4 7.8 7.6 7.8 12s3 8 6.8 8a6 6 0 0 0 3.4-1"
      />
    </BaseIcon>
  ),
);
export default SvgEuro;
