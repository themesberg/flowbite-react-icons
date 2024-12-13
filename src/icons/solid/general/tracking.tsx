import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgTracking = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="currentColor" ref={ref} {...props}>
    <path
      fillRule="evenodd"
      d="M9.166 19.986A1 1 0 0 1 9 20H5a1 1 0 1 1 0-2h4q.085 0 .166.014a3.001 3.001 0 0 1 5.668 0A1 1 0 0 1 15 18h4a1 1 0 1 1 0 2h-4q-.084 0-.166-.014a3.001 3.001 0 0 1-5.668 0M11 19a1 1 0 1 1 2 0 1 1 0 0 1-2 0"
      clipRule="evenodd"
    />
    <path d="M11.5 2.131a1 1 0 0 1 1 0l4.601 2.657q-.09.028-.179.075L12.08 7.475 6.946 4.76zM5.967 6.505v5.21a1 1 0 0 0 .5.866l4.57 2.638V9.186zm7.07 8.671 4.496-2.595a1 1 0 0 0 .5-.866v-5.2a1 1 0 0 1-.161.108l-4.835 2.608z" />
  </BaseIcon>
));
export default SvgTracking;
