import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgSchoolCheckAlt = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="currentColor" ref={ref} {...props}>
    <path
      fillRule="evenodd"
      d="M21.707 14.293a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L17 17.586l3.293-3.293a1 1 0 0 1 1.414 0"
      clipRule="evenodd"
    />
    <path d="M6.651 11.63 12 5.048l5.349 6.584a1 1 0 0 0 .776.369h2.866a3 3 0 0 0-2.112.879l-1.882 1.882a3 3 0 0 0-2.17-.756 3 3 0 1 0-2.655 1.99 3 3 0 0 0 .707 3.126l.878.879H4a1 1 0 0 1-1-1v-7h2.875a1 1 0 0 0 .776-.37" />
    <path d="M12 12a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-9.5-2 2.7-3.6A1 1 0 0 1 6 6h2.649l-3.25 4zm12.851-4 3.25 4H21.5l-2.7-3.6A1 1 0 0 0 18 6z" />
  </BaseIcon>
));
export default SvgSchoolCheckAlt;
