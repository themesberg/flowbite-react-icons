import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgSchoolXmarkAlt = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="currentColor" ref={ref} {...props}>
    <path d="M6.651 11.63 12 5.048l5.349 6.584a1 1 0 0 0 .776.369H21v1.065a2.5 2.5 0 0 0-2.47.632 2.5 2.5 0 0 0-3.64.109 3 3 0 1 0-.563 1.088c-.19.813.032 1.704.667 2.338A2.5 2.5 0 0 0 14.47 20H4a1 1 0 0 1-1-1v-7h2.875a1 1 0 0 0 .776-.37" />
    <path d="M17.469 14.757a1 1 0 0 0-1.415 1.414l1.061 1.061-1.06 1.06a1 1 0 0 0 1.413 1.415l1.061-1.06 1.06 1.06a.997.997 0 0 0 1.415 0 1 1 0 0 0 0-1.414l-1.06-1.061L21 16.175l.004-.004a1 1 0 0 0 0-1.414L21 14.753a1 1 0 0 0-1.41.004l-1.06 1.06zM12 12a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-9.5-2 2.7-3.6A1 1 0 0 1 6 6h2.649l-3.25 4zm12.851-4 3.25 4H21.5l-2.7-3.6A1 1 0 0 0 18 6z" />
  </BaseIcon>
));
export default SvgSchoolXmarkAlt;
