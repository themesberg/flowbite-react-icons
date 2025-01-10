import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgOutgoingCall = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m17.09 13.371 1.143 1.144a1.56 1.56 0 0 1 .41 1.852c-.095.207-.472.625-.646.771-3.118 3.122-6.774 1.706-9.905-1.425s-4.543-6.79-1.41-9.901c.626-.62 1.713-1.142 2.618-.237l1.19 1.192c1.192 1.192.357 1.936-.492 2.804-.925.925-.656 1.728 0 2.384l1.871 1.873a1.684 1.684 0 0 0 2.382 0c.863-.827 1.696-1.6 2.839-.457M14 8.981 19.023 4m0 0h-3.03m3.03 0v2.981"
    />
  </BaseIcon>
));
export default SvgOutgoingCall;
