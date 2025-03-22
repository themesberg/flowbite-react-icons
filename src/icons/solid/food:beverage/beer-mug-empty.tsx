import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgBeerMugEmpty = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3.943 4.875A2 2 0 0 1 5.94 3h9.12a2 2 0 0 1 1.997 1.875l.008.125H20a1 1 0 0 1 1 1v3.86a5 5 0 0 1-2.226 4.16l-1.1.733.078 1.247H3.248zm13.587 7.57.134-.09A3 3 0 0 0 19 9.86V7h-1.81zM10 7a1 1 0 0 0-2 0v7a1 1 0 1 0 2 0zm3 0a1 1 0 1 0-2 0v7a1 1 0 1 0 2 0z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="m3.123 18-.055.875A2 2 0 0 0 5.065 21h10.87a2 2 0 0 0 1.997-2.125L17.877 18z"
    />
  </BaseIcon>
));
export default SvgBeerMugEmpty;
