import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgVolumeUp = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15.5 8.4a5 5 0 0 1 0 7.1m2.9 2.9a9 9 0 0 0 0-12.8m-6.4.5V18a1 1 0 0 1-1.6.7L6 15H4a1 1 0 0 1-1-1v-4c0-.6.4-1 1-1h2l4.4-3.6A1 1 0 0 1 12 6Z"
    />
  </BaseIcon>
));
export default SvgVolumeUp;
