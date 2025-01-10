import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgSchoolFlag = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="currentColor" ref={ref} {...props}>
    <path
      fillRule="evenodd"
      d="M15 4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-4v13H8V7.869l-1.445.963a1 1 0 0 1-1.11-1.664l6-4a1 1 0 0 1 1.11 0L15 4.798zm-5 8a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1m1-4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z"
      clipRule="evenodd"
    />
    <path d="M18 9h-.016.03zM6 10.524l-2.27.638a1 1 0 0 0-.73.963V20a1 1 0 0 0 1 1h2zm14.27.638L18 10.524V21h2a1 1 0 0 0 1-1v-7.875a1 1 0 0 0-.73-.963" />
  </BaseIcon>
));
export default SvgSchoolFlag;
