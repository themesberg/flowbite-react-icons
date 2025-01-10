import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgSchoolLock = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="currentColor" ref={ref} {...props}>
    <path
      fillRule="evenodd"
      d="M11.445 3.168a1 1 0 0 1 1.11 0l6 4a1 1 0 0 1-1.11 1.664L16 7.87V9.53a4 4 0 0 0-2.667 1.526A1 1 0 0 0 13 11h-2a1 1 0 1 0 0 2h1.53q-.03.245-.03.5v.337a3.5 3.5 0 0 0-2 3.163v2c0 .744.232 1.433.627 2H8V7.869l-1.445.963a1 1 0 0 1-1.11-1.664zM10 9a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1"
      clipRule="evenodd"
    />
    <path
      fillRule="evenodd"
      d="M16.5 11a2.5 2.5 0 0 1 1.59.57c.556.46.91 1.153.91 1.93V15a2 2 0 0 1 2 2v2a2 2 0 0 1-1.991 2H14a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2v-1.5a2.5 2.5 0 0 1 1.996-2.45H16q.243-.05.5-.05m0 2a.5.5 0 0 0-.5.5V15h1v-1.5a.5.5 0 0 0-.5-.5"
      clipRule="evenodd"
    />
    <path d="M3.73 11.162 6 10.524V21H4a1 1 0 0 1-1-1v-7.875a1 1 0 0 1 .73-.963" />
  </BaseIcon>
));
export default SvgSchoolLock;
