import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgGitlab = forwardRef<SVGSVGElement, PropsWithoutRef<FlowbiteIconProps>>(
  (props, ref) => (
    <BaseIcon fill="none" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="m20.701 10.126-.025-.068-2.45-6.64a.637.637 0 0 0-1.22.07l-1.654 5.255H8.653L7 3.488a.642.642 0 0 0-.967-.385.66.66 0 0 0-.252.315l-2.455 6.637-.024.067a4.9 4.9 0 0 0-.124 2.991 4.73 4.73 0 0 0 1.633 2.469l.008.006.023.017 3.732 2.902 1.846 1.451 1.125.882a.74.74 0 0 0 .915 0l1.124-.882 1.847-1.45 3.755-2.92.009-.008a4.73 4.73 0 0 0 1.63-2.466 4.9 4.9 0 0 0-.123-2.988"
      />
    </BaseIcon>
  ),
);
export default SvgGitlab;
