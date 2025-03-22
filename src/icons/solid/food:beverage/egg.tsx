import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgEgg = forwardRef<SVGSVGElement, PropsWithoutRef<FlowbiteIconProps>>(
  (props, ref) => (
    <BaseIcon fill="none" ref={ref} {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.028 4.37C9.848 3.594 10.87 3 12.05 3s2.202.594 3.023 1.37c.825.78 1.533 1.823 2.107 2.926 1.139 2.188 1.87 4.847 1.87 6.704a7 7 0 1 1-14 0c0-1.857.731-4.516 1.87-6.704.575-1.103 1.282-2.146 2.108-2.926m2.802 5.916a1 1 0 1 0-1.66-1.116c-.375.558-.66 1.257-.853 1.912C9.124 11.736 9 12.431 9 13a1 1 0 0 0 2 0c0-.319.077-.816.235-1.353s.372-1.029.595-1.36"
        clipRule="evenodd"
      />
    </BaseIcon>
  ),
);
export default SvgEgg;
