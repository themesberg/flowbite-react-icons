import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgSeedling = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.839 12.454s1.25-3.088-.216-5.29-5.036-3.055-5.225-2.92c-.189.134-1.118 3.325.348 5.527s5.093 2.683 5.093 2.683m0 0C10.339 13.454 12 15 12 18v2c0-2-.43-3.419 2.07-5.919m0 0s-.49-2.789 1.12-4.358 4.49-1.547 4.67-1.284.432 2.844-1.08 4.318c-1.61 1.569-4.71 1.324-4.71 1.324"
    />
  </BaseIcon>
));
export default SvgSeedling;
