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
      d="M8 15h7.01v.01H15z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="square"
      strokeWidth={2}
      d="M20 6H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="square"
      strokeWidth={2}
      d="M6 9h.01v.01H6zm0 3h.01v.01H6zm0 3h.01v.01H6zm3-6h.01v.01H9zm0 3h.01v.01H9zm3-3h.01v.01H12zm0 3h.01v.01H12zm3 0h.01v.01H15zm3 0h.01v.01H18zm0 3h.01v.01H18zm-3-6h.01v.01H15zm3 0h.01v.01H18z"
    />
  </BaseIcon>
));
export default SvgKeyboard;
