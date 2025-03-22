import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgWhiskeyGlass = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6 6a1 1 0 0 0-.997 1.083l.848 10.166A3 3 0 0 0 8.84 20h6.319a3 3 0 0 0 2.99-2.75l.847-10.167A1 1 0 0 0 18 6zm1.503 7-.416-5h9.826l-.417 5z"
      clipRule="evenodd"
    />
  </BaseIcon>
));
export default SvgWhiskeyGlass;
