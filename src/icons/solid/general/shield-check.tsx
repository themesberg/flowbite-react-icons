import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgShieldCheck = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="currentColor" ref={ref} {...props}>
    <path
      fillRule="evenodd"
      d="M11.644 3.066a1 1 0 0 1 .712 0l7 2.666A1 1 0 0 1 20 6.68a17.7 17.7 0 0 1-2.023 7.98 17.4 17.4 0 0 1-5.402 6.158 1 1 0 0 1-1.15 0 17.4 17.4 0 0 1-5.403-6.157A17.7 17.7 0 0 1 4 6.68a1 1 0 0 1 .644-.949zm4.014 7.187a1 1 0 0 0-1.316-1.506l-3.296 2.884-.839-.838a1 1 0 0 0-1.414 1.414l1.5 1.5a1 1 0 0 0 1.366.046l4-3.5Z"
      clipRule="evenodd"
    />
  </BaseIcon>
));
export default SvgShieldCheck;
