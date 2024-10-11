import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgToggleHeaderRow = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 15v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3M3 15V6a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v9M3 15h18M8 15v4m4-4v4m4-4v4m-7-9h1.99M15 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
    />
  </BaseIcon>
));
export default SvgToggleHeaderRow;
