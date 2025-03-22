import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgIcecream = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7 8v6a1 1 0 0 0 1 1h4M7 8a5 5 0 0 1 10 0v6a1 1 0 0 1-1 1h-4M7 8h2a2 2 0 0 1 2 2v.5a1.5 1.5 0 0 0 3 0A1.5 1.5 0 0 1 15.5 9H17m-5 6v6"
    />
  </BaseIcon>
));
export default SvgIcecream;
