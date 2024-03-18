import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgEnvelopeOpen = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="currentColor" ref={ref} {...props}>
    <path d="m3.62 6.389 8.396 6.724 8.638-6.572-7.69-4.29a1.98 1.98 0 0 0-1.928 0z" />
    <path d="m22 8.053-8.784 6.683a1.98 1.98 0 0 1-2.44-.031L2.02 7.693a1 1 0 0 0-.019.199v11.065C2 20.637 3.343 22 5 22h14c1.657 0 3-1.362 3-3.043z" />
  </BaseIcon>
));
export default SvgEnvelopeOpen;
