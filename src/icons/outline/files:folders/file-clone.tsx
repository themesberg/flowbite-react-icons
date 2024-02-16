import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgFileClone = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 4v3c0 .6-.4 1-1 1h-3m2 10v1c0 .6-.4 1-1 1H5a1 1 0 0 1-1-1v-7.1c0-.3 0-.5.2-.7l2.5-2.9c.2-.2.5-.3.8-.3H9m-1 4H4m16-7v10c0 .6-.4 1-1 1h-7a1 1 0 0 1-1-1V7.9c0-.3 0-.5.2-.7l2.5-2.9c.2-.2.5-.3.8-.3H19c.6 0 1 .4 1 1Z"
    />
  </BaseIcon>
));
export default SvgFileClone;
