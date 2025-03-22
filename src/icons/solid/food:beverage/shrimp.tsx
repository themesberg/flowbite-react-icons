import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgShrimp = forwardRef<SVGSVGElement, PropsWithoutRef<FlowbiteIconProps>>(
  (props, ref) => (
    <BaseIcon fill="none" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="M6 5a1 1 0 0 0-.001 2H9v7.494l-.392.3a1 1 0 0 1-1.402-1.403A4 4 0 0 1 4 9.471V8.235A3 3 0 0 1 6 3h4a1 1 0 1 1 0 2zm5 8.47h.979l2.992-7.03c-.88-.34-1.69-.512-2.496-.465-.52.03-1.004.15-1.475.337zm5.974-6.628L14.352 13h6.972c.548-3.073-1.48-5.643-4.35-6.158M20.9 15h-6.138a1.3 1.3 0 0 1-.109.306l2.388 5.493c1.89-.497 3.576-1.902 3.786-4.092.05-.515.074-1.075.073-1.707m-5.952 6-2.174-5H11a3 3 0 0 0-3 3v2z"
      />
    </BaseIcon>
  ),
);
export default SvgShrimp;
