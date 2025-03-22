import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgBone = forwardRef<SVGSVGElement, PropsWithoutRef<FlowbiteIconProps>>(
  (props, ref) => (
    <BaseIcon fill="none" ref={ref} {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M16.888 7.112c.179-.775-.12-1.669-.715-2.265-1.014-1.013-2.564-1.013-3.577 0s-1.013 2.563 0 3.576l-4.173 4.173c-1.013-1.013-2.563-1.013-3.576 0s-1.013 2.563 0 3.577c.596.596 1.49.894 2.265.715-.179.775.12 1.669.715 2.265 1.014 1.013 2.564 1.013 3.577 0s1.013-2.563 0-3.576l4.173-4.173c1.013 1.013 2.563 1.013 3.576 0s1.013-2.563 0-3.577c-.596-.596-1.49-.894-2.265-.715"
      />
    </BaseIcon>
  ),
);
export default SvgBone;
