import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgWineGlassEmpty = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 14c2.761 0 5-2.668 5-5.43 0-1.385-1.12-4.507-1.5-5.57h-7C8.152 4.021 7 7.172 7 8.57 7 11.333 9.239 14 12 14m0 0v7m-3 0h6"
    />
  </BaseIcon>
));
export default SvgWineGlassEmpty;
