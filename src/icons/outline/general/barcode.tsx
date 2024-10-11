import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgBarcode = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      d="M2.992 4.983v13.934m6.97-13.934v13.934m5.976-13.934v13.934m2.987-13.934v13.934"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      d="M5.48 4.483v14.934M7.47 4.483v14.934M21.413 4.483v14.934M13.446 4.483v14.934"
    />
  </BaseIcon>
));
export default SvgBarcode;
