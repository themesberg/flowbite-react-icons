import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgIncomingCall = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.023 4 14 8.981m0 0h3.03m-3.03 0V6m4.233 8.515L17.09 13.37c-1.143-1.144-1.976-.37-2.839.457a1.684 1.684 0 0 1-2.382 0l-1.871-1.873c-.656-.656-.925-1.46 0-2.384.849-.868 1.684-1.612.493-2.804L9.3 5.575c-.905-.905-1.992-.383-2.619.237-3.132 3.111-1.72 6.77 1.41 9.901s6.788 4.547 9.906 1.426c.174-.147.55-.565.647-.772a1.56 1.56 0 0 0-.411-1.852"
    />
  </BaseIcon>
));
export default SvgIncomingCall;
