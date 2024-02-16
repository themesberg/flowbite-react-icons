import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgTag = forwardRef<SVGSVGElement, PropsWithoutRef<FlowbiteIconProps>>(
  (props, ref) => (
    <BaseIcon fill="currentColor" ref={ref} {...props}>
      <path d="M18.045 3.007 12.31 3a1.97 1.97 0 0 0-1.4.585l-7.33 7.394a2 2 0 0 0 0 2.805l6.573 6.631a1.96 1.96 0 0 0 1.4.585 1.97 1.97 0 0 0 1.4-.585l7.409-7.477A2 2 0 0 0 21 11.479v-5.5a2.97 2.97 0 0 0-2.955-2.972m-2.452 6.438a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
    </BaseIcon>
  ),
);
export default SvgTag;
