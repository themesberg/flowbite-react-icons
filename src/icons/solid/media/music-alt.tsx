import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgMusicAlt = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="currentColor" ref={ref} {...props}>
    <path d="M9.5 13a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7" />
    <path
      fillRule="evenodd"
      d="M11 5a1 1 0 0 1 1-1c1.544 0 3.324.754 4.515 2.168 1.235 1.467 1.789 3.584.934 6.148a1 1 0 0 1-1.898-.632c.646-1.936.2-3.319-.566-4.227A4.24 4.24 0 0 0 13 6.158V16.5a1 1 0 1 1-2 0z"
      clipRule="evenodd"
    />
  </BaseIcon>
));
export default SvgMusicAlt;
