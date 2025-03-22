import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgMugSaucer = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5 5a1 1 0 0 0-.995 1.1l.64 6.398A5 5 0 0 0 9.62 17h.76a5 5 0 0 0 4.9-4H17a3 3 0 1 0 0-6h-1.095l.09-.9A1 1 0 0 0 15 5zm12 6h-1.495l.2-2H17a1 1 0 1 1 0 2"
      clipRule="evenodd"
    />
    <path fill="currentColor" d="M5 18a1 1 0 1 0 0 2h11a1 1 0 1 0 0-2z" />
  </BaseIcon>
));
export default SvgMugSaucer;
