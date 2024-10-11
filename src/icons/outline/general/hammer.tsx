import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgHammer = forwardRef<SVGSVGElement, PropsWithoutRef<FlowbiteIconProps>>(
  (props, ref) => (
    <BaseIcon fill="none" ref={ref} {...props}>
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        d="m20.953 11.763-2.052-2.052-2.052 2.052 2.052 2.053zm-1.368-2.736L15.48 4.922l-3.42 3.42 4.105 4.105zm-4.105 2.736-2.736-2.736-8.21 8.21 2.737 2.736z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        d="m12.93 3.74 1.866 1.867-2.052 2.052-1.555-1.555c-.995-.995-3.234-.497-3.918.187l2.737-2.737c.684-.684 1.99-.746 2.923.187Z"
      />
    </BaseIcon>
  ),
);
export default SvgHammer;
