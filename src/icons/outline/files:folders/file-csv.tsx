import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgFileCsv = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 10V8c0-.4.1-.6.3-.8l4-4 .6-.2H18c.6 0 1 .4 1 1v6M5 19v1c0 .6.4 1 1 1h12c.6 0 1-.4 1-1v-1M10 3v4c0 .6-.4 1-1 1H5m2.7 9h-1A1.6 1.6 0 0 1 5 15.4v-1.8A1.6 1.6 0 0 1 6.6 12h1m8.4 0 1.4 4.8L19 12m-6-.2h-1a1.3 1.3 0 0 0-1.4 1.2 1.3 1.3 0 0 0 1.2 1.5h.5a1.3 1.3 0 0 1 1.3 1.7c-.2.6-.7.8-1.4.8h-1"
    />
  </BaseIcon>
));
export default SvgFileCsv;
