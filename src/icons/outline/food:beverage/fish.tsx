import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgFish = forwardRef<SVGSVGElement, PropsWithoutRef<FlowbiteIconProps>>(
  (props, ref) => (
    <BaseIcon fill="none" ref={ref} {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 12c0 1.6 3.358 4 7.5 4s6.923-3.2 7.5-4c-.577-.8-3.358-4-7.5-4S6 10.4 6 12m0 0L3 9m3 3-3 3m12.987-3.372h.01M14 8c-1.726 3.302-1.71 5.056 0 8"
      />
    </BaseIcon>
  ),
);
export default SvgFish;
