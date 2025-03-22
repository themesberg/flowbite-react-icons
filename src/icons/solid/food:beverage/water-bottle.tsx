import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgWaterBottle = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      fill="currentColor"
      d="M9 3a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1zm-.127 5c-.792.573-1.762 1.556-1.864 3H17.99c-.102-1.444-1.072-2.427-1.864-3zm8.882 5H7.245c.151.455.353.78.544 1.04l.129.175.047.064c-.037.059-.083.118-.157.215l-.103.134c-.226.297-.544.74-.66 1.372h10.91c-.116-.631-.434-1.075-.66-1.372l-.103-.134a3 3 0 0 1-.157-.215l.047-.064.129-.175c.191-.26.393-.585.544-1.04M18 18H7v1c0 1.611 1.577 3 3.5 3 .87 0 1.529-.247 2-.555.471.308 1.13.555 2 .555 1.923 0 3.5-1.389 3.5-3z"
    />
  </BaseIcon>
));
export default SvgWaterBottle;
