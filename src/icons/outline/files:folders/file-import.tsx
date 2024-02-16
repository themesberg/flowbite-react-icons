import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgFileImport = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 12V8c0-.4.1-.6.3-.8l4-4 .6-.2H18c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1H6a1 1 0 0 1-1-1v-4m5-13v4c0 .6-.4 1-1 1H5m0 6h9m0 0-2-2m2 2-2 2"
    />
  </BaseIcon>
));
export default SvgFileImport;
