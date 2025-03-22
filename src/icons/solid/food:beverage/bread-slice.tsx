import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgBreadSlice = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      fill="currentColor"
      d="M11.993 3.011c-1.922.014-3.852.37-6.256 1.024l-.053.016c-.913.305-1.603.79-2.06 1.43C3.169 6.12 3 6.831 3 7.501c0 .636.154 1.457.59 2.154.314.503.782.943 1.41 1.174V19a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8.171a2.8 2.8 0 0 0 1.41-1.174c.436-.697.59-1.518.59-2.155 0-.668-.169-1.381-.624-2.019-.457-.64-1.147-1.125-2.06-1.43l-.053-.016c-2.404-.654-4.334-1.01-6.255-1.024z"
    />
  </BaseIcon>
));
export default SvgBreadSlice;
