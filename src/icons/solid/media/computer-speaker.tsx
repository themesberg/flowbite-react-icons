import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgComputerSpeaker = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="currentColor" ref={ref} {...props}>
    <path
      fillRule="evenodd"
      d="M12 8a1 1 0 0 0-1 1v10H9a1 1 0 1 0 0 2h11a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zm4 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4"
      clipRule="evenodd"
    />
    <path
      fillRule="evenodd"
      d="M5 3a2 2 0 0 0-2 2v6h6V9a3 3 0 0 1 3-3h8c.35 0 .687.06 1 .17V5a2 2 0 0 0-2-2zm4 10H3v2a2 2 0 0 0 2 2h4z"
      clipRule="evenodd"
    />
  </BaseIcon>
));
export default SvgComputerSpeaker;
