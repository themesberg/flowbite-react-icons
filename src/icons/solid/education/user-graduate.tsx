import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgUserGraduate = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="currentColor" ref={ref} {...props}>
    <path d="M12.447 2.106a1 1 0 0 0-.894 0L5.905 4.93l.377.11.034.011L12 6.946l5.68-1.894.393-.133zM5 10V6.748l.7.206 1.3.433V10a1 1 0 1 1-2 0m3-1c0-.424.066-.833.188-1.216l3.496 1.165a1 1 0 0 0 .632 0l3.496-1.165A4 4 0 1 1 8 9" />
    <path d="M14.3 13.277a1 1 0 0 1 .884-.27C17.38 13.42 19 15.489 19 17.65V19.8c0 1.23-1.031 2.143-2.2 2.143H7.2c-1.168 0-2.2-.914-2.2-2.143V17.65c0-2.141 1.59-4.19 3.752-4.629a1 1 0 0 1 .892.26l2.35 2.26z" />
  </BaseIcon>
));
export default SvgUserGraduate;
