import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgShuffle = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="currentColor" ref={ref} {...props}>
    <path
      fillRule="evenodd"
      d="M16.293 3.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L17.586 8H15.52l-1.218 1.74a1 1 0 1 1-1.638-1.147l1.516-2.166A1 1 0 0 1 15 6h2.586l-1.293-1.293a1 1 0 0 1 0-1.414M3 7a1 1 0 0 1 1-1h4a1 1 0 0 1 .82.427L15.52 16h2.066l-1.293-1.293a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L17.586 18H15a1 1 0 0 1-.82-.427L7.48 8H4a1 1 0 0 1-1-1m7.15 6.928a1 1 0 0 1 .246 1.392L8.82 17.573A1 1 0 0 1 8 18H4a1 1 0 1 1 0-2h3.48l1.278-1.826a1 1 0 0 1 1.392-.246"
      clipRule="evenodd"
    />
  </BaseIcon>
));
export default SvgShuffle;
