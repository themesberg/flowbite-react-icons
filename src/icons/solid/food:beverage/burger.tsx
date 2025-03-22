import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgBurger = forwardRef<SVGSVGElement, PropsWithoutRef<FlowbiteIconProps>>(
  (props, ref) => (
    <BaseIcon fill="none" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="M15 3H9a5 5 0 0 0-5 5v1a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V8a5 5 0 0 0-5-5"
      />
      <path
        fill="currentColor"
        d="m4.351 12.936 2.316-.868 2.315.868a1 1 0 0 0 .702 0L12 12.068l2.316.868a1 1 0 0 0 .702 0l2.315-.868 2.316.868a1 1 0 0 0 .702-1.872l-2.667-1a1 1 0 0 0-.702 0l-2.315.868-2.316-.868a1 1 0 0 0-.702 0l-2.316.868-2.315-.868a1 1 0 0 0-.702 0l-2.667 1a1 1 0 1 0 .702 1.872"
      />
      <path
        fill="currentColor"
        d="M21 15.5c0 .818-.393 1.544-1 2v.5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-.5A2.5 2.5 0 0 1 5.5 13h13a2.5 2.5 0 0 1 2.5 2.5"
      />
    </BaseIcon>
  ),
);
export default SvgBurger;
