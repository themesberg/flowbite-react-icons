import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgUserGraduate = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.614 7.2c.348.49.6 1.154.6 1.8a3 3 0 1 1-5.4-1.8M6.214 6v4m0-4 6-3 6 3-6 2-2.4-.8M6.214 6l3.6 1.2M6.214 19.8V17.65c0-1.683 1.273-3.308 2.951-3.649l3.05 2.935 3-2.945c1.702.32 3 1.96 3 3.659V19.8c0 .631-.538 1.143-1.2 1.143h-9.6c-.663 0-1.2-.512-1.2-1.143"
    />
  </BaseIcon>
));
export default SvgUserGraduate;
