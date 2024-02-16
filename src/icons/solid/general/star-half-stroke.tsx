import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgStarHalfStroke = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="currentColor" ref={ref} {...props}>
    <path d="m13.001 19.927 2.896 1.773c1.52.93 3.405-.442 2.992-2.179l-1.06-4.452 3.468-2.978c1.353-1.162.633-3.382-1.142-3.525L15.603 8.2l-1.754-4.226A1.97 1.97 0 0 0 13 3zM10.999 3c-.36.205-.663.53-.848.974L8.397 8.2l-4.552.366c-1.775.143-2.495 2.363-1.142 3.525l3.468 2.978-1.06 4.452c-.413 1.737 1.472 3.11 2.992 2.178l2.896-1.773z" />
  </BaseIcon>
));
export default SvgStarHalfStroke;
