import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgSchoolExclamation = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="currentColor" ref={ref} {...props}>
    <path d="m6 10.524-2.27.638a1 1 0 0 0-.73.963V20a1 1 0 0 0 1 1h2z" />
    <path
      fillRule="evenodd"
      d="M12.555 3.168a1 1 0 0 0-1.11 0l-6 4a1 1 0 0 0 1.11 1.664L8 7.869V21h8V7.869l1.445.963A1 1 0 0 0 18 9a.999.999 0 0 0 .555-1.832zM10 12a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1m1-4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm8 12a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H20a1 1 0 0 1-1-1m1-8a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1"
      clipRule="evenodd"
    />
  </BaseIcon>
));
export default SvgSchoolExclamation;
