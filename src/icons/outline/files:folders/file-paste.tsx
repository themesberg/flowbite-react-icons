import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgFilePaste = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 20H5a1 1 0 0 1-1-1V6c0-.6.4-1 1-1h2.4M7 8h3M8 8V4h4v2m4 0V5h-4m3 4v3c0 .6-.4 1-1 1h-3m9-3v9c0 .6-.4 1-1 1h-7a1 1 0 0 1-1-1v-6.4c0-.3.1-.5.3-.7l2.4-2.6c.2-.2.5-.3.7-.3H19c.6 0 1 .4 1 1"
    />
  </BaseIcon>
));
export default SvgFilePaste;
