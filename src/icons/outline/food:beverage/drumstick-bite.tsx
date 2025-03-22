import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgDrumstickBite = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12.443 9.885 9.936 7.51c.814-.815.805-2.07-.02-2.895-.827-.827-2.081-.835-2.896-.021-.479.48-.715 1.201-.566 1.83-.628-.15-1.35.086-1.83.566-.814.814-.805 2.069.021 2.895s2.08.835 2.895.02l2.503 2.293m.806-1.38c1.83-1.83 5.124-1.222 7.193.846s2.319 4.623.297 6.645c-1.032 1.032-2.128 1.609-3.23 1.651.588-1.34.225-2.587-.813-3.28-.918-.614-2.18-.781-3.548.178-1.104-2.058-1.303-4.635.101-6.04"
    />
  </BaseIcon>
));
export default SvgDrumstickBite;
