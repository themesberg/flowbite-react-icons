import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgBacon = forwardRef<SVGSVGElement, PropsWithoutRef<FlowbiteIconProps>>(
  (props, ref) => (
    <BaseIcon fill="none" ref={ref} {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M7.426 18.244c1.317-2.202 2.533-1.524 3.85-3.726s.1-2.88 1.417-5.083c1.317-2.202 2.534-1.524 3.85-3.727m-5.696 14.444c1.317-2.203 2.534-1.524 3.85-3.727s.1-2.88 1.418-5.083c1.317-2.202 2.533-1.524 3.85-3.726L13.122 3.8c-1.317 2.203-2.533 1.524-3.85 3.727s-.1 2.88-1.417 5.083c-1.317 2.202-2.534 1.524-3.85 3.726z"
      />
    </BaseIcon>
  ),
);
export default SvgBacon;
