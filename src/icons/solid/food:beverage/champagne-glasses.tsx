import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgChampagneGlasses = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M17.665 3.694a1 1 0 0 0-1.258-.646l-5.713 1.835a1 1 0 0 0-.335.183A1 1 0 0 0 10 5H4a1 1 0 0 0-1 1v6a4 4 0 0 0 3 3.874V19H5a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H8v-3.126c1.725-.444 3-2.01 3-3.874V9.105l.883 2.748a4 4 0 0 0 4.04 2.771l.956 2.976-.952.306a1 1 0 0 0 .612 1.904l3.808-1.223a1 1 0 1 0-.611-1.904l-.953.306-.955-2.976a4 4 0 0 0 1.671-4.606zM9 7v1H5V7zm7.066-1.742.306.952-3.808 1.223-.306-.952z"
      clipRule="evenodd"
    />
  </BaseIcon>
));
export default SvgChampagneGlasses;
