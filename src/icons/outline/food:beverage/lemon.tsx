import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgLemon = forwardRef<SVGSVGElement, PropsWithoutRef<FlowbiteIconProps>>(
  (props, ref) => (
    <BaseIcon fill="none" ref={ref} {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12.306 8.295C9.557 9.382 8.82 11.25 9.002 13.94m5.665-9.759-1.056.505c-.342.133-1.524.32-1.716.32-4.832.646-7.745 5.768-5.881 10.339l.45 1.105c.074.179.128.485.135.562l.098 1.181q0 0 0 0c.107 1.306 1.463 2.102 2.631 1.548l.01-.005c.071-.034.974-.472 1.052-.502.08-.032.357-.138.547-.164l1.168-.156c4.832-.647 7.745-5.769 5.881-10.34l-.45-1.104a1.9 1.9 0 0 1-.135-.563l-.097-1.18c-.108-1.308-1.468-2.105-2.637-1.546"
      />
    </BaseIcon>
  ),
);
export default SvgLemon;
