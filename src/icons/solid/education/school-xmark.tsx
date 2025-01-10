import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgSchoolXmark = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="currentColor" ref={ref} {...props}>
    <path
      fillRule="evenodd"
      d="M15.308 15.702a1 1 0 0 1 1.414 0l1.06 1.06 1.061-1.06a1 1 0 0 1 1.415 1.414l-1.061 1.06 1.06 1.061a1 1 0 0 1-1.414 1.414l-1.06-1.06-1.061 1.06a1 1 0 0 1-1.414-1.414l1.06-1.06-1.06-1.061a1 1 0 0 1 0-1.414"
      clipRule="evenodd"
    />
    <path
      fillRule="evenodd"
      d="M11.445 3.168a1 1 0 0 1 1.11 0l6 4a1 1 0 0 1-1.11 1.664L16 7.87v6.04A2.5 2.5 0 0 0 13.748 21H8V7.869l-1.445.963a1 1 0 0 1-1.11-1.664zM11 11a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm-1-2a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1"
      clipRule="evenodd"
    />
    <path d="M21 14.371v-2.246a1 1 0 0 0-.73-.963L18 10.524v3.923a2.5 2.5 0 0 1 3-.076m-3 2.174.843-.843a1 1 0 0 1 1.415 1.414l-1.061 1.06 1.06 1.061a1 1 0 0 1-1.414 1.414L18 19.808zm-2-1.136a1 1 0 0 0-.692 1.707l.692.692zm0 3.136v2.4a1 1 0 0 1-.692-1.707zM6 10.524l-2.27.638a1 1 0 0 0-.73.963V20a1 1 0 0 0 1 1h2z" />
  </BaseIcon>
));
export default SvgSchoolXmark;
