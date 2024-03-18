import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgCash = forwardRef<SVGSVGElement, PropsWithoutRef<FlowbiteIconProps>>(
  (props, ref) => (
    <BaseIcon fill="currentColor" ref={ref} {...props}>
      <path
        fillRule="evenodd"
        d="M7 6a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-2v-4a3 3 0 0 0-3-3H7z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M2 11a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm7.5 1a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5"
        clipRule="evenodd"
      />
      <path d="M10.5 14.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
    </BaseIcon>
  ),
);
export default SvgCash;
