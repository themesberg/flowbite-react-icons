import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgChampagneGlasses = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7 15a3 3 0 0 0 3-3V6H4v6a3 3 0 0 0 3 3m0 0v5m-2 0h4M4 9h6m6.608 4.486a3 3 0 0 0 1.94-3.773L16.712 4 11 5.835l1.835 5.712a3 3 0 0 0 3.773 1.94m0 0 1.53 4.76m-1.905.612 3.808-1.223m-8.124-8.944 5.713-1.835"
    />
  </BaseIcon>
));
export default SvgChampagneGlasses;
