import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgAward = forwardRef<SVGSVGElement, PropsWithoutRef<FlowbiteIconProps>>(
  (props, ref) => (
    <BaseIcon fill="none" ref={ref} {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m7.171 12.906-2.153 6.411 2.672-.89 1.568 2.34 1.825-5.183m5.73-2.678 2.154 6.411-2.673-.89-1.568 2.34-1.825-5.183M9.165 4.3c.58.068 1.153-.17 1.515-.628a1.68 1.68 0 0 1 2.64 0 1.68 1.68 0 0 0 1.515.628 1.68 1.68 0 0 1 1.866 1.866c-.068.58.17 1.154.628 1.516a1.68 1.68 0 0 1 0 2.639 1.68 1.68 0 0 0-.628 1.515 1.68 1.68 0 0 1-1.866 1.866 1.68 1.68 0 0 0-1.516.628 1.68 1.68 0 0 1-2.639 0 1.68 1.68 0 0 0-1.515-.628 1.68 1.68 0 0 1-1.867-1.866 1.68 1.68 0 0 0-.627-1.515 1.68 1.68 0 0 1 0-2.64c.458-.361.696-.935.627-1.515A1.68 1.68 0 0 1 9.165 4.3M14 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
      />
    </BaseIcon>
  ),
);
export default SvgAward;
