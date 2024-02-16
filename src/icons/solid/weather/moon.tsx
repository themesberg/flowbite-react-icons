import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgMoon = forwardRef<SVGSVGElement, PropsWithoutRef<FlowbiteIconProps>>(
  (props, ref) => (
    <BaseIcon fill="currentColor" ref={ref} {...props}>
      <path
        fillRule="evenodd"
        d="M11.675 2.015a1 1 0 0 0-.403.011C6.09 2.4 2 6.722 2 12c0 5.523 4.477 10 10 10 4.356 0 8.058-2.784 9.43-6.667a1 1 0 0 0-1.02-1.33c-.08.006-.105.005-.127.005h-.001l-.028-.002A5 5 0 0 0 20 14a8 8 0 0 1-8-8c0-.952.121-1.752.404-2.558a1 1 0 0 0 .096-.428V3a1 1 0 0 0-.825-.985"
        clipRule="evenodd"
      />
    </BaseIcon>
  ),
);
export default SvgMoon;
