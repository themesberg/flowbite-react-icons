import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgVue = forwardRef<SVGSVGElement, PropsWithoutRef<FlowbiteIconProps>>(
  (props, ref) => (
    <BaseIcon fill="currentColor" ref={ref} {...props}>
      <path d="M14.5 3 12 7.156 9.857 3H2l10 18L22 3zM4.486 4.5h2.4L12 13.8l5.107-9.3h2.4L12 18.021z" />
    </BaseIcon>
  ),
);
export default SvgVue;
