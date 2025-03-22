import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgCheese = forwardRef<SVGSVGElement, PropsWithoutRef<FlowbiteIconProps>>(
  (props, ref) => (
    <BaseIcon fill="none" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="M15 3c-.179 0-.315.049-.348.06l-.002.002c-.053.019-.096.039-.121.051a2 2 0 0 0-.13.072 5 5 0 0 0-.216.141 14 14 0 0 0-.975.743 3 3 0 0 0-.204.188 1.3 1.3 0 0 0-.146.178 1.008 1.008 0 0 0 .042 1.199c.28.351.277.583.244.723-.043.18-.193.417-.508.64a1.006 1.006 0 0 1-1.394-.235 1 1 0 0 0-1.402-.23L3.676 11h17.291c-.213-3.174-1.435-5.16-2.761-6.365a7.2 7.2 0 0 0-1.992-1.288c-.278-.12-.517-.2-.698-.252a4 4 0 0 0-.32-.077A1.4 1.4 0 0 0 15 3"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21 13H3v7a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1zM7 15a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1m8 0a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H16a1 1 0 0 1-1-1m-4 2a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </BaseIcon>
  ),
);
export default SvgCheese;
