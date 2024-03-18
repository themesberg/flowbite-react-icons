import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgFileInvoice = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="currentColor" ref={ref} {...props}>
    <path
      fillRule="evenodd"
      d="M9 7V2.221a2 2 0 0 0-.5.365L4.586 6.5a2 2 0 0 0-.365.5zm2 0V2h7a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2m2-2a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2zm0 3a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2zm-6 4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1zm8 1v1h-2v-1zm0 3h-2v1h2zm-4-3v1H9v-1zm0 3H9v1h2z"
      clipRule="evenodd"
    />
  </BaseIcon>
));
export default SvgFileInvoice;
