import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgKeyboard = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="square"
      strokeWidth={2}
      d="M8 15h7v0h0zm12-9H4a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h16c.6 0 1-.4 1-1V7c0-.6-.4-1-1-1ZM6 9h0v0h0zm0 3h0v0h0zm0 3h0v0h0zm3-6h0v0h0zm0 3h0v0h0zm3-3h0v0h0zm0 3h0v0h0zm3 0h0v0h0zm3 0h0v0h0zm0 3h0v0h0zm-3-6h0v0h0zm3 0h0v0h0z"
    />
  </BaseIcon>
));
export default SvgKeyboard;
