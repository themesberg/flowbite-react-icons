import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgCreditCardPlus = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="currentColor" ref={ref} {...props}>
    <path
      fillRule="evenodd"
      d="M11 16.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0m4.5 2.5v-1.5H14v-2h1.5V14h2v1.5H19v2h-1.5V19z"
      clipRule="evenodd"
    />
    <path d="M3.987 4A2 2 0 0 0 2 6v9a2 2 0 0 0 2 2h5v-2H4v-5h16V6a2 2 0 0 0-2-2z" />
    <path
      fillRule="evenodd"
      d="M5 12a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1"
      clipRule="evenodd"
    />
  </BaseIcon>
));
export default SvgCreditCardPlus;
