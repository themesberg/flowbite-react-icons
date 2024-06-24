import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgEyeSlash = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.933 13.909A4.36 4.36 0 0 1 3 12c0-1 4-6 9-6m7.6 3.8A5.07 5.07 0 0 1 21 12c0 1-3 6-9 6q-.471 0-.918-.04M5 19 19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
    />
  </BaseIcon>
));
export default SvgEyeSlash;
