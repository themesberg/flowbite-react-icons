import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgThumbtack = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      d="M12 20v-4M7 4h10M9 5v5c0 .552-.47 1.005-.948 1.279-1.435.822-2.602 3.245-2.257 4.365.078.254.354.356.62.356h11.17c.266 0 .542-.102.62-.356.345-1.12-.822-3.543-2.256-4.365-.48-.274-.949-.727-.949-1.279V5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1Z"
    />
  </BaseIcon>
));
export default SvgThumbtack;
