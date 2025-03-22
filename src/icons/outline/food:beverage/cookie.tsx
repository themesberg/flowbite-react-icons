import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgCookie = forwardRef<SVGSVGElement, PropsWithoutRef<FlowbiteIconProps>>(
  (props, ref) => (
    <BaseIcon fill="none" ref={ref} {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.657 9.415h.01M7.27 13h.01m7.677 1.916h.01M11 17h.01m3.178-10.907a2.254 2.254 0 0 1-3.173-1.755c-.058-.44-.02-.99.183-1.395a9 9 0 1 0 9.87 9.73c-.21.008-.672.022-.832.015a2.196 2.196 0 0 1-2.405-1.902c-.056-.43.015-.872.212-1.267a2.633 2.633 0 1 1-3.852-3.41"
      />
    </BaseIcon>
  ),
);
export default SvgCookie;
