import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgFixTables = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 15v3a1 1 0 0 0 1 1h4v-4m-5 0v-4m0 4h5m-5-4V6a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v1.99M3 11h5v4m9.47 4.172-.869-1.439-2.816-.235-2.573-4.257 1.487-2.836 1.444 2.389a1.353 1.353 0 1 0 2.316-1.4l-1.444-2.39h3.136l2.61 4.278-1.072 2.585.87 1.438"
    />
  </BaseIcon>
));
export default SvgFixTables;
