import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgFileZip = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      d="M10 3v4c0 .6-.4 1-1 1H5m14-4v16c0 .6-.4 1-1 1H6a1 1 0 0 1-1-1V8c0-.4.1-.6.3-.8l4-4 .6-.2H18c.6 0 1 .4 1 1Zm-4 1h0v0h0zm-2 2h0v0h0zm2 2h0v0h0zm-2 2h0v0h0zm2 2h0v0h0zm-2 2h0v0h0zm2 2h0v0h0zm-2 2h0v0h0z"
    />
  </BaseIcon>
));
export default SvgFileZip;
