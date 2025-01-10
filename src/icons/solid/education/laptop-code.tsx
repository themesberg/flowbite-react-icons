import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgLaptopCode = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="currentColor" ref={ref} {...props}>
    <path
      fillRule="evenodd"
      d="M4 5.786C4 4.809 4.786 4 5.778 4h12.444C19.214 4 20 4.81 20 5.786V15H4zM12 12a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1M8.276 6.31a1 1 0 0 1 1.414-.034l2.625 2.5a1 1 0 0 1 0 1.448l-2.625 2.5a1 1 0 1 1-1.38-1.448L10.175 9.5 8.31 7.724a1 1 0 0 1-.034-1.414"
      clipRule="evenodd"
    />
    <path d="M2 17v1a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-1z" />
  </BaseIcon>
));
export default SvgLaptopCode;
