import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgKeyboard = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="currentColor" ref={ref} {...props}>
    <path
      fillRule="evenodd"
      d="M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm5.01 1H5v2.01h2.01zm3 0H8v2.01h2.01zm3 0H11v2.01h2.01zm3 0H14v2.01h2.01zm3 0H17v2.01h2.01zm-12 3H5v2.01h2.01zm3 0H8v2.01h2.01zm3 0H11v2.01h2.01zm3 0H14v2.01h2.01zm3 0H17v2.01h2.01zm-12 3H5v2.01h2.01zM8 14l-.001 2 8.011.01V14zm11.01 0H17v2.01h2.01z"
      clipRule="evenodd"
    />
  </BaseIcon>
));
export default SvgKeyboard;
