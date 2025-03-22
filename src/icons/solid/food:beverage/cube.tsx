import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgCube = forwardRef<SVGSVGElement, PropsWithoutRef<FlowbiteIconProps>>(
  (props, ref) => (
    <BaseIcon fill="none" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="M9.982 4.506a4.28 4.28 0 0 1 4.036 0l3.964 2.142c.363.196.686.44.961.722l-6.929 3.602-6.807-3.747c.24-.221.512-.416.811-.577zM4.167 8.844A3.6 3.6 0 0 0 4 9.918v4.283c0 1.35.77 2.597 2.018 3.271l3.964 2.142c.32.173.66.302 1.009.386v-7.4zM13.009 20a4.2 4.2 0 0 0 1.01-.386l3.963-2.142C19.23 16.798 20 15.551 20 14.202V9.917q-.001-.451-.11-.88l-6.881 3.578z"
      />
    </BaseIcon>
  ),
);
export default SvgCube;
