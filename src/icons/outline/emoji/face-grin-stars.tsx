import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgFaceGrinStars = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 13c0 2-2.2 4.5-5 4.5S7 15 7 13c0 1.4 10 1.4 10 0"
    />
    <path
      fill="currentColor"
      d="m9 6.8.6 1.3 1.4.2-1 1 .2 1.3L9 10l-1.2.6.2-1.4-1-1 1.4-.1zm6 0 .6 1.3 1.4.2-1 1 .2 1.3L15 10l-1.2.6.2-1.4-1-1 1.4-.1z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m9 6.8.6 1.3 1.4.2-1 1 .2 1.3L9 10l-1.2.6.2-1.4-1-1 1.4-.1zm6 0 .6 1.3 1.4.2-1 1 .2 1.3L15 10l-1.2.6.2-1.4-1-1 1.4-.1z"
    />
  </BaseIcon>
));
export default SvgFaceGrinStars;
