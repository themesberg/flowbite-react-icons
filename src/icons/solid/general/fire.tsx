import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgFire = forwardRef<SVGSVGElement, PropsWithoutRef<FlowbiteIconProps>>(
  (props, ref) => (
    <BaseIcon fill="currentColor" ref={ref} {...props}>
      <path d="M8.597 3.2A1 1 0 0 0 7.04 4.289a3.5 3.5 0 0 1 .057 1.795 3.45 3.45 0 0 1-.84 1.575 1 1 0 0 0-.077.094c-.596.817-3.96 5.6-.941 10.762l.03.049a7.73 7.73 0 0 0 2.917 2.602 7.6 7.6 0 0 0 3.772.829 8.06 8.06 0 0 0 3.986-.975 8.2 8.2 0 0 0 3.04-2.864c1.301-2.2 1.184-4.556.588-6.441-.583-1.848-1.68-3.414-2.607-4.102a1 1 0 0 0-1.594.757c-.067 1.431-.363 2.551-.794 3.431-.222-2.407-1.127-4.196-2.224-5.524-1.147-1.39-2.564-2.3-3.323-2.788a9 9 0 0 1-.432-.287Z" />
    </BaseIcon>
  ),
);
export default SvgFire;
