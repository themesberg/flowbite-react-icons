import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgParagraph = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 5v7m0 7v-7m4-7v14m3-14H8.5A3.5 3.5 0 0 0 5 8.5v0A3.5 3.5 0 0 0 8.5 12H12"
    />
  </BaseIcon>
));
export default SvgParagraph;
