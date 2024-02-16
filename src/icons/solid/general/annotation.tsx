import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgAnnotation = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="currentColor" ref={ref} {...props}>
    <path
      fillRule="evenodd"
      d="M3.559 4.544c.355-.35.834-.544 1.33-.544H19.11c.496 0 .975.194 1.33.544s.559.829.559 1.331v9.25c0 .502-.203.981-.559 1.331-.355.35-.834.544-1.33.544H15.5l-2.7 3.6a1 1 0 0 1-1.6 0L8.5 17H4.889c-.496 0-.975-.194-1.33-.544A1.87 1.87 0 0 1 3 15.125v-9.25c0-.502.203-.981.559-1.331M7.556 7.5a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2zm0 3.5a1 1 0 1 0 0 2H12a1 1 0 1 0 0-2z"
      clipRule="evenodd"
    />
  </BaseIcon>
));
export default SvgAnnotation;
