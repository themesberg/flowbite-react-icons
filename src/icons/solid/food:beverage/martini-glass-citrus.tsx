import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgMartiniGlassCitrus = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4 7h8.028a4.5 4.5 0 1 1 2.076 4.31L11 14.414V19h2a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2h2v-4.586L3.293 8.707A1 1 0 0 1 4 7m12 0h-1.95a2.5 2.5 0 1 1 1.536 2.828l1.121-1.12A1 1 0 0 0 16 7"
      clipRule="evenodd"
    />
  </BaseIcon>
));
export default SvgMartiniGlassCitrus;
