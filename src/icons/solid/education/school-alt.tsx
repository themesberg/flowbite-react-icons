import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgSchoolAlt = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="currentColor" ref={ref} {...props}>
    <path d="M12 12a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
    <path
      fillRule="evenodd"
      d="M6.651 11.63 12 5.048l5.349 6.584a1 1 0 0 0 .776.369H21v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-7h2.875a1 1 0 0 0 .776-.37M9 13a3 3 0 1 1 6 0 3 3 0 0 1-6 0"
      clipRule="evenodd"
    />
    <path d="m2.5 10 2.7-3.6A1 1 0 0 1 6 6h2.649l-3.25 4zm12.851-4 3.25 4H21.5l-2.7-3.6A1 1 0 0 0 18 6z" />
  </BaseIcon>
));
export default SvgSchoolAlt;
