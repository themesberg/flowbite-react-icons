import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgApple = forwardRef<SVGSVGElement, PropsWithoutRef<FlowbiteIconProps>>(
  (props, ref) => (
    <BaseIcon fill="currentColor" ref={ref} {...props}>
      <path d="M17.537 12.625a4.42 4.42 0 0 0 2.684 4.047 11 11 0 0 1-1.384 2.845c-.834 1.218-1.7 2.432-3.062 2.457-1.339.025-1.769-.794-3.3-.794s-2.009.769-3.275.82c-1.316.049-2.317-1.318-3.158-2.532-1.719-2.484-3.032-7.017-1.27-10.077a4.9 4.9 0 0 1 4.139-2.507c1.292-.025 2.511.869 3.3.869s2.271-1.075 3.828-.917A4.67 4.67 0 0 1 19.7 8.82a4.52 4.52 0 0 0-2.161 3.805M15.02 5.193A4.4 4.4 0 0 0 16.06 2a4.48 4.48 0 0 0-2.946 1.516 4.18 4.18 0 0 0-1.061 3.093 3.7 3.7 0 0 0 2.967-1.416" />
    </BaseIcon>
  ),
);
export default SvgApple;
