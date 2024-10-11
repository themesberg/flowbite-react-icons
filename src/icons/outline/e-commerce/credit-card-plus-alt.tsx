import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgCreditCardPlusAlt = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 14h2m3 0h4m2 2h2m0 0h2m-2 0v2m0-2v-2m-5 4H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4M3 10h18"
    />
  </BaseIcon>
));
export default SvgCreditCardPlusAlt;
