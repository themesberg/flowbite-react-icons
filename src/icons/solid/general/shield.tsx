import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgShield = forwardRef<SVGSVGElement, PropsWithoutRef<FlowbiteIconProps>>(
  (props, ref) => (
    <BaseIcon fill="currentColor" ref={ref} {...props}>
      <path d="M12.356 3.066a1 1 0 0 0-.712 0l-7 2.666A1 1 0 0 0 4 6.68a17.7 17.7 0 0 0 2.022 7.98 17.4 17.4 0 0 0 5.403 6.158 1 1 0 0 0 1.15 0 17.4 17.4 0 0 0 5.402-6.157A17.7 17.7 0 0 0 20 6.68a1 1 0 0 0-.644-.949z" />
    </BaseIcon>
  ),
);
export default SvgShield;
