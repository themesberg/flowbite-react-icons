import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgSchoolExclamationAlt = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="currentColor" ref={ref} {...props}>
    <path
      fillRule="evenodd"
      d="M19 19a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H20a1 1 0 0 1-1-1m1-7a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1"
      clipRule="evenodd"
    />
    <path d="M11 13a1 1 0 1 1 2 0 1 1 0 0 1-2 0" />
    <path
      fillRule="evenodd"
      d="m12 5.047-5.349 6.584a1 1 0 0 1-.776.369H3v7a1 1 0 0 0 1 1h13.17c-.11-.313-.17-.65-.17-1 0-.546.146-1.059.401-1.5A3 3 0 0 1 17 16v-3c0-.499.122-.97.337-1.383zM12 10a3 3 0 1 0 0 6 3 3 0 0 0 0-6"
      clipRule="evenodd"
    />
    <path d="M20.01 10H18.6l-3.25-4H18a1 1 0 0 1 .8.4l2.7 3.6zm-.016 2A1 1 0 0 0 19 13v3q0 .085.014.166A1 1 0 0 0 20 17h.01a1 1 0 0 0 .99-1v-3a1 1 0 0 0-.994-1zM21 18.858l-.004-.027A1 1 0 0 0 20.01 18H20a1 1 0 0 0 0 2h.006A1 1 0 0 0 21 19zM2.5 10l2.7-3.6A1 1 0 0 1 6 6h2.649l-3.25 4z" />
  </BaseIcon>
));
export default SvgSchoolExclamationAlt;
