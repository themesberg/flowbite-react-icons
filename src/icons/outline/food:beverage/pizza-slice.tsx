import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgPizzaSlice = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <g clipPath="url(#pizza-slice_BaseIcon__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.415 10.762v.011m3.087 3.077v.01M8.917 15.35v.01m-.828-8.445-3.69 13 12.952-3.738m-.827-8.435a12.14 12.14 0 0 1 3.517 7.517c.067.741-.462 1.375-1.187 1.53-1.014.215-1.96-.582-2.092-1.616-.241-1.9-.944-3.572-2.52-5.148-1.578-1.578-3.318-2.346-5.253-2.62-1.022-.144-1.796-1.11-1.539-2.103.172-.667.768-1.142 1.458-1.085a12.14 12.14 0 0 1 7.616 3.525"
      />
    </g>
    <defs>
      <clipPath id="pizza-slice_BaseIcon__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </BaseIcon>
));
export default SvgPizzaSlice;
