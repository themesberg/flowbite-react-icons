import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgTrashBin = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="currentColor" ref={ref} {...props}>
    <path
      fillRule="evenodd"
      d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414M10 6h4V4h-4zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0z"
      clipRule="evenodd"
    />
  </BaseIcon>
));
export default SvgTrashBin;
