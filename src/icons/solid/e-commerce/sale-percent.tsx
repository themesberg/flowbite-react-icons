import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgSalePercent = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="currentColor" ref={ref} {...props}>
    <path
      fillRule="evenodd"
      d="M20.29 8.567c.133.323.334.613.59.85v.002a3.536 3.536 0 0 1 0 5.166 2.44 2.44 0 0 0-.776 1.868 3.534 3.534 0 0 1-3.651 3.653 2.48 2.48 0 0 0-1.87.776 3.537 3.537 0 0 1-5.164 0 2.44 2.44 0 0 0-1.87-.776 3.533 3.533 0 0 1-3.653-3.654 2.44 2.44 0 0 0-.775-1.868 3.537 3.537 0 0 1 0-5.166 2.44 2.44 0 0 0 .775-1.87 3.55 3.55 0 0 1 1.033-2.62 3.6 3.6 0 0 1 2.62-1.032 2.4 2.4 0 0 0 1.87-.775 3.535 3.535 0 0 1 5.165 0 2.44 2.44 0 0 0 1.869.775 3.53 3.53 0 0 1 3.652 3.652c-.012.35.051.697.184 1.02ZM9.927 7.371a1 1 0 1 0 0 2h.01a1 1 0 0 0 0-2zm5.889 2.226a1 1 0 0 0-1.414-1.415L8.184 14.4a1 1 0 0 0 1.414 1.414zm-2.79 5.028a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2z"
      clipRule="evenodd"
    />
  </BaseIcon>
));
export default SvgSalePercent;
