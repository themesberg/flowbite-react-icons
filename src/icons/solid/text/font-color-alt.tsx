import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgFontColorAlt = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      fill="currentColor"
      d="M20 18.066C20 19.686 18.657 21 17 21s-3-1.314-3-2.934S17 12 17 12s3 4.446 3 6.066"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m10.482 7.525-1.36 3.457h2.719zm3.75 4.07-2.717-6.909c-.37-.94-1.697-.94-2.066 0l-2.686 6.831a1 1 0 0 0-.08.202L5.4 14.982h-.418a1 1 0 1 0 0 2h2.75a1 1 0 1 0 0-2h-.183l.787-2h4.292l.367.935a1 1 0 1 0 1.861-.732l-.608-1.548z"
      clipRule="evenodd"
    />
  </BaseIcon>
));
export default SvgFontColorAlt;
