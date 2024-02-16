import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgPrinter = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="currentColor" ref={ref} {...props}>
    <path
      fillRule="evenodd"
      d="M8 3a2 2 0 0 0-2 2v3h12V5a2 2 0 0 0-2-2zm-3 7a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h1v-4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v4h1a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2zm4 11a1 1 0 0 1-1-1v-4h8v4a1 1 0 0 1-1 1z"
      clipRule="evenodd"
    />
  </BaseIcon>
));
export default SvgPrinter;
