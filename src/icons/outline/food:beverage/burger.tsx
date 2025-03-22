import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgBurger = forwardRef<SVGSVGElement, PropsWithoutRef<FlowbiteIconProps>>(
  (props, ref) => (
    <BaseIcon fill="none" ref={ref} {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4 12 2.667-1 2.666 1L12 11l2.667 1 2.666-1L20 12m-1 5H5v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2zM5 9h14V8a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4zm13.5 5h-13a1.5 1.5 0 0 0 0 3h13a1.5 1.5 0 1 0 0-3"
      />
    </BaseIcon>
  ),
);
export default SvgBurger;
