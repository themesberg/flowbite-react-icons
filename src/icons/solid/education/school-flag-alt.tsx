import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgSchoolFlagAlt = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="currentColor" ref={ref} {...props}>
    <path d="M12 12a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
    <path
      fillRule="evenodd"
      d="M17 4a1 1 0 0 0-1 1v4.97l-4-4.923-5.349 6.584a1 1 0 0 1-.776.369H3v7a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-7h-2.875a1 1 0 0 1-.125-.008V9h3a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-8 9a3 3 0 1 1 6 0 3 3 0 0 1-6 0"
      clipRule="evenodd"
    />
    <path d="M5.2 6.4 2.5 10h2.899l3.25-4H6a1 1 0 0 0-.8.4" />
  </BaseIcon>
));
export default SvgSchoolFlagAlt;
