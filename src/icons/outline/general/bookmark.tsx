import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgBookmark = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m17 21-5-4-5 4V3.889a.92.92 0 0 1 .244-.629.8.8 0 0 1 .59-.26h8.333a.8.8 0 0 1 .589.26.92.92 0 0 1 .244.63z"
    />
  </BaseIcon>
));
export default SvgBookmark;
