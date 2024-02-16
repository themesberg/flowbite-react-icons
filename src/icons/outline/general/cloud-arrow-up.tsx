import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgCloudArrowUp = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 17h3a3 3 0 0 0 0-6s0 0 0 0v-.5A5.5 5.5 0 0 0 7.2 9H7a4 4 0 1 0 0 8h2.2m2.8 2v-9m0 0-2 2m2-2 2 2"
    />
  </BaseIcon>
));
export default SvgCloudArrowUp;
