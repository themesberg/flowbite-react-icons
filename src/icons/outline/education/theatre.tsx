import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgTheatre = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      d="m7.533 11.862.01-.003m5.581 7.143c-.5.515-.92.847-1.06.89-.48.145-5.43-1.28-6.238-3.33-.81-2.051-1.831-5.816-1.89-6.22-.06-.404 1.56-1.724 3.597-2.61m1.989 8.055c-.227.262-.39.56-.556.847M13.5 12c.5.5 1 1.049 2 1.049S17 12.5 17.5 12m-4-4h.01m3.99 0h.01M10.5 5.5c0-.29 2.5-1.5 5-1.5s5 1.136 5 1.5V12c0 1.966-4.291 5-5 5-.743 0-5-3.034-5-5z"
    />
  </BaseIcon>
));
export default SvgTheatre;
