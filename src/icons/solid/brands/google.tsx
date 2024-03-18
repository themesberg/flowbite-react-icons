import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgGoogle = forwardRef<SVGSVGElement, PropsWithoutRef<FlowbiteIconProps>>(
  (props, ref) => (
    <BaseIcon fill="currentColor" ref={ref} {...props}>
      <path
        fillRule="evenodd"
        d="M12.037 21.998a10.31 10.31 0 0 1-7.168-3.049 9.89 9.89 0 0 1-2.868-7.118 9.95 9.95 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.94 9.94 0 0 1 6.614 2.564L16.457 6.88a6.2 6.2 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.62 6.62 0 0 0-2.045 4.657 6.6 6.6 0 0 0 1.882 4.723 6.9 6.9 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678q.113.927.1 1.859c-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z"
        clipRule="evenodd"
      />
    </BaseIcon>
  ),
);
export default SvgGoogle;
