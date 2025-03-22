import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgAppleFull = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 10.042c-1.39 0-1.393-1.125-4.206-1.037-1.731.054-3.156 2.23-2.712 5.308C5.359 16.238 6.986 21 8.992 21c2.005 0 2.073-.85 3.008-.85s.855.85 3.008.85 3.633-4.762 3.91-6.687c.444-3.078-.981-5.254-2.712-5.308-2.813-.088-2.816 1.037-4.206 1.037m2.36-4.213c-.878.749-1.861.72-2.722.72 0-.626.079-1.94.86-2.77.782-.828 2.128-.766 2.644-.766 0 .595.096 2.068-.782 2.816"
    />
  </BaseIcon>
));
export default SvgAppleFull;
