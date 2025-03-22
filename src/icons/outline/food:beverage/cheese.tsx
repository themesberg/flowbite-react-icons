import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgCheese = forwardRef<SVGSVGElement, PropsWithoutRef<FlowbiteIconProps>>(
  (props, ref) => (
    <BaseIcon fill="none" ref={ref} {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4 12 6.427-4.66a2.006 2.006 0 0 0 2.789.473c.896-.638 1.349-1.692.468-2.801C13.637 4.953 14.91 4 15 4c.09 0 5 1 5 8M4 12h16M4 12v8h16v-8M8 15h.01M12 17h.01M16 15h.01"
      />
    </BaseIcon>
  ),
);
export default SvgCheese;
