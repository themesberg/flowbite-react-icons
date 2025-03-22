import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgCubesStacked = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      fill="currentColor"
      d="M11.504 3.132a1 1 0 0 1 .992 0l3.556 2.031L12 7.426 7.948 5.163zM7 6.925v3.352l-3.158 1.805 4.141 2.204L11 12.564V9.158zm-4 6.974v3.815a1 1 0 0 0 .504.869L7 20.58V16.03zm6 6.681 3-1.714 3 1.714V16.01l-3-1.714-3 1.714zm8 0 3.496-1.997a1 1 0 0 0 .504-.869V13.9l-4 2.13zm3.158-8.498L17 10.277V6.925l-4 2.233v3.405l3.017 1.723z"
    />
  </BaseIcon>
));
export default SvgCubesStacked;
