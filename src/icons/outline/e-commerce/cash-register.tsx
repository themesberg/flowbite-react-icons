import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgCashRegister = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 18h14M5 18v3h14v-3M5 18l1-9h12l1 9M16 6v3m-4-3v3m-2-6h8v3h-8zm-1 9h.01v.01H9zm3 0h.01v.01H12zm3 0h.01v.01H15zm-6 3h.01v.01H9zm3 0h.01v.01H12zm3 0h.01v.01H15z"
    />
  </BaseIcon>
));
export default SvgCashRegister;
