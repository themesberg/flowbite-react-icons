import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgHotdog = forwardRef<SVGSVGElement, PropsWithoutRef<FlowbiteIconProps>>(
  (props, ref) => (
    <BaseIcon fill="none" ref={ref} {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10 2.535A4 4 0 0 1 12 2c.729 0 1.412.195 2 .535v18.93A4 4 0 0 1 12 22a4 4 0 0 1-2-.535zm3.207 5.172a1 1 0 0 0-1.414-1.414l-1 1a1 1 0 0 0 1.414 1.414zm0 4.5a1 1 0 0 0-1.414-1.414l-1 1a1 1 0 0 0 1.414 1.414zm0 4.5a1 1 0 0 0-1.414-1.414l-1 1a1 1 0 0 0 1.414 1.414z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8 3.028A4.5 4.5 0 0 0 4 7.5v9a4.5 4.5 0 0 0 4 4.473zm8 17.945a4.5 4.5 0 0 0 4-4.473v-9a4.5 4.5 0 0 0-4-4.472z"
      />
    </BaseIcon>
  ),
);
export default SvgHotdog;
