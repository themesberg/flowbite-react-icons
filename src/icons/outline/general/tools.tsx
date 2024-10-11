import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgTools = forwardRef<SVGSVGElement, PropsWithoutRef<FlowbiteIconProps>>(
  (props, ref) => (
    <BaseIcon fill="none" ref={ref} {...props}>
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        d="m7.582 8.96 2.232 2.232-1.618 1.618a3.523 3.523 0 0 0-3.697 5.12 1 1 0 0 0 .936.53 1 1 0 0 0 .53.936 3.522 3.522 0 0 0 5.12-3.697l4.81-4.811a3.523 3.523 0 0 0 3.697-5.12 1 1 0 0 0-.935-.53 1 1 0 0 0-.531-.936 3.523 3.523 0 0 0-5.12 3.697l-1.778 1.778-2.232-2.231zm1.31-3.14a1 1 0 0 0-.536-.761L6.374 4.046a1 1 0 0 0-1.162.183l-.863.863a1 1 0 0 0-.183 1.162l1.013 1.982a1 1 0 0 0 .762.537l1.112.144a1 1 0 0 0 .836-.285l.863-.863a1 1 0 0 0 .285-.835zm10.553 10.585-3.119-3.119a2 2 0 0 0-2.828 0l-.172.173a2 2 0 0 0 0 2.828l3.118 3.119a2 2 0 0 0 2.829 0l.172-.172a2 2 0 0 0 0-2.829Z"
      />
    </BaseIcon>
  ),
);
export default SvgTools;
