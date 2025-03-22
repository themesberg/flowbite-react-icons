import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgGlassWater = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6 2a1 1 0 0 0-.998 1.067L6.078 19.2A3 3 0 0 0 9.07 22h5.858a3 3 0 0 0 2.993-2.8l1.076-16.133A1 1 0 0 0 18 2zm1.212 4.153L7.07 4h9.862l-.165 2.477-.018.016c-.133.121-.323.281-.547.44-.486.342-.983.567-1.375.567-.247 0-.339-.064-.691-.437l-.028-.029C13.747 6.652 13.131 6 11.99 6s-1.757.652-2.118 1.034l-.027.029c-.352.373-.444.437-.692.437s-.34-.064-.692-.437l-.027-.029c-.252-.267-.628-.665-1.22-.881"
      clipRule="evenodd"
    />
  </BaseIcon>
));
export default SvgGlassWater;
