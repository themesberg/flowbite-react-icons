import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgCashRegister = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path fill="currentColor" d="M4 19v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-2z" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M9 3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2v1h2a1 1 0 0 1 .994.89l.901 8.11H4.105l.901-8.11A1 1 0 0 1 6 8h6V7h-2a1 1 0 0 1-1-1zm1.01 8H8v2.01h2.01zm.99 0h2.01v2.01H11zm5.01 0H14v2.01h2.01zM8 14h2.01v2.01H8zm5.01 0H11v2.01h2.01zm.99 0h2.01v2.01H14zM11 4h6v1h-6z"
      clipRule="evenodd"
    />
  </BaseIcon>
));
export default SvgCashRegister;
