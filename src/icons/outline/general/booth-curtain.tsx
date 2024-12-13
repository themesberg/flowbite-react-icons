import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgBoothCurtain = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      d="M5 5v14m14 0V8h2M3 8h6m0-2v8.586c0 .89 1.077 1.337 1.707.707l.586-.586a1 1 0 0 1 1.414 0l.586.586a1 1 0 0 0 1.414 0l.586-.586a1 1 0 0 1 1.414 0l.586.586c.63.63 1.707.184 1.707-.707V6a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1Z"
    />
  </BaseIcon>
));
export default SvgBoothCurtain;
