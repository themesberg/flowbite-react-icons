import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgFileMusic = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 3v4c0 .6-.4 1-1 1H5m8 7.5V8s3 1 3 4m3-8v16c0 .6-.4 1-1 1H6a1 1 0 0 1-1-1V8c0-.4.1-.6.3-.8l4-4 .6-.2H18c.6 0 1 .4 1 1m-6 12c0 1.1-1.1 2-2.5 2S8 17.1 8 16s1.1-2 2.5-2 2.5.9 2.5 2"
    />
  </BaseIcon>
));
export default SvgFileMusic;
