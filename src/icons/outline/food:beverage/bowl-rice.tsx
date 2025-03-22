import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgBowlRice = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 10h.01M12 10h.01M7 10h.01M14 8h.01M10 8h.01M6.5 13C5.12 13 4 11.56 4 9.786c0-1.513.45-3.74 2.967-3.453 0-2.593 4.394-3.026 5.169-1.1.5-.644 1.546-1.207 2.54-1.097 1.26.139 2.05 1.034 2.21 2.197 1.768 0 3.335 1.317 3.114 3.453C20 11.56 18.88 13 17.5 13m-8.523 5.616V20h6.046v-1.384c2.657-.933 4.61-3.06 4.977-5.616H4c.367 2.555 2.32 4.683 4.977 5.616"
    />
  </BaseIcon>
));
export default SvgBowlRice;
