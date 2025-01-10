import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgChalkboardUser = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="currentColor" ref={ref} {...props}>
    <path d="M6 2a2 2 0 0 0-2 2v4a1 1 0 0 0 2 0V4h12v7h-2a1 1 0 0 0-1 1v2h-1a1 1 0 1 0 0 2h5a1 1 0 0 0 1-1V3.857C20 2.985 19.367 2 18.268 2z" />
    <path d="M6 11.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0M4 20a4 4 0 0 1 4-4h3a4 4 0 0 1 4 4 2 2 0 0 1-2 2H6a2 2 0 0 1-2-2" />
  </BaseIcon>
));
export default SvgChalkboardUser;
