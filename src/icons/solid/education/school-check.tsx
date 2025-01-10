import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgSchoolCheck = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="currentColor" ref={ref} {...props}>
    <path
      fillRule="evenodd"
      d="M11.445 3.168a1 1 0 0 1 1.11 0l6 4a1 1 0 0 1-1.11 1.664L16 7.87v8.596l-.232-.233a2.5 2.5 0 0 0-3.536 3.536L13.465 21H8V7.869l-1.445.963a1 1 0 0 1-1.11-1.664zM11 11a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm-1-2a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1"
      clipRule="evenodd"
    />
    <path d="M21 13.708v-1.583a1 1 0 0 0-.73-.963L18 10.524v3.94l.232-.232A2.5 2.5 0 0 1 21 13.708M6 10.524l-2.27.638a1 1 0 0 0-.73.963V20a1 1 0 0 0 1 1h2z" />
    <path
      fillRule="evenodd"
      d="M20.707 15.293a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L16 18.586l3.293-3.293a1 1 0 0 1 1.414 0"
      clipRule="evenodd"
    />
  </BaseIcon>
));
export default SvgSchoolCheck;
