import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgDeleteTable = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 15v3a1 1 0 0 0 1 1h10.5M3 15v-4m0 4h11M3 11V6a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v5M3 11h18m0 0v1M8 11v8m4-8v8m4-8v2m1.896 5.953 1.504-1.505m0 0 1.505-1.505M19.4 17.448l1.46 1.46m-1.46-1.46-1.46-1.46"
    />
  </BaseIcon>
));
export default SvgDeleteTable;
