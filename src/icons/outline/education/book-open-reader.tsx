import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgBookOpenReader = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      d="M12.143 11v9m0-9c-2.506-.71-3.191-1.395-6.137-1.35a.864.864 0 0 0-.863.85v7.288c0 .483.414.869.916.862 2.775-.036 3.46.656 6.084 1.35m0-9c2.505-.71 3.107-1.395 6.052-1.35.48.008.948.388.948.85v7.288c0 .483-.499.869-1 .862-2.775-.036-3.376.656-6 1.35m2-14a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
    />
  </BaseIcon>
));
export default SvgBookOpenReader;
