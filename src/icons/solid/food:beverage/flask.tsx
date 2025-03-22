import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgFlask = forwardRef<SVGSVGElement, PropsWithoutRef<FlowbiteIconProps>>(
  (props, ref) => (
    <BaseIcon fill="none" ref={ref} {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.05 2a1 1 0 1 0 0 2h1v3.315c-2.699 1.164-5 3.63-5 6.885 0 4.335 3.61 7.8 8 7.8s8-3.465 8-7.8c0-3.254-2.301-5.721-5-6.885V4h1a1 1 0 1 0 0-2zm3 6V4h2v4a1 1 0 0 0 .675.946c2.39.82 4.22 2.744 4.32 5.054H6.056c.1-2.31 1.93-4.233 4.32-5.054A1 1 0 0 0 11.05 8"
        clipRule="evenodd"
      />
    </BaseIcon>
  ),
);
export default SvgFlask;
