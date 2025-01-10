import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgOpenSidebarAlt = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="currentColor" ref={ref} {...props}>
    <path d="M13 21h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-6z" />
    <path
      fillRule="evenodd"
      d="M11 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6zm-5.707 7.707a1 1 0 0 1 1.414-1.414l2 2a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-1.414-1.414L6.586 12z"
      clipRule="evenodd"
    />
  </BaseIcon>
));
export default SvgOpenSidebarAlt;
