import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgMastercard = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm5.178 12.137a4.137 4.137 0 1 1 1.036-8.144A6.1 6.1 0 0 0 8.726 12c0 1.531.56 2.931 1.488 4.006a4 4 0 0 1-1.036.131M10.726 12c0-1.183.496-2.252 1.294-3.006A4.13 4.13 0 0 1 13.315 12a4.13 4.13 0 0 1-1.294 3.006A4.13 4.13 0 0 1 10.726 12m4.59 0a6.1 6.1 0 0 1-1.489 4.006 4.137 4.137 0 1 0 0-8.013A6.1 6.1 0 0 1 15.315 12Z"
      clipRule="evenodd"
    />
  </BaseIcon>
));
export default SvgMastercard;
