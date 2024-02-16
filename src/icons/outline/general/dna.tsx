import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgDna = forwardRef<SVGSVGElement, PropsWithoutRef<FlowbiteIconProps>>(
  (props, ref) => (
    <BaseIcon fill="none" ref={ref} {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 13.9a5 5 0 0 1 2 4V21M7 3v3.2A5 5 0 0 0 8.9 10M17 3v3.2a5 5 0 0 1-2.4 4.3l-5.2 3A5 5 0 0 0 7 17.8V21M7 5h10M7.4 8h9.3M8 16h8.7M7 19h10"
      />
    </BaseIcon>
  ),
);
export default SvgDna;
