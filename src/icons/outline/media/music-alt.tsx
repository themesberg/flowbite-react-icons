import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgMusicAlt = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 16.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m0 0V5c2.5 0 6 2.5 4.5 7"
    />
  </BaseIcon>
));
export default SvgMusicAlt;
