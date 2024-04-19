import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgMicrophoneSlash = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="currentColor" ref={ref} {...props}>
    <path d="m15.57 14.156.999.998a4 4 0 0 0 1.481-3.105V9.05a1 1 0 0 1 2 0v3.001a6 6 0 0 1-2.062 4.523l1.77 1.769a1 1 0 0 1-1.415 1.414l-14-14a1 1 0 0 1 1.414-1.414L7.07 5.655a4 4 0 0 1 3.98-3.605h2a4 4 0 0 1 4 4v5a4 4 0 0 1-1.48 3.106M4.05 10.05a1 1 0 1 1 2 0v2a4.006 4.006 0 0 0 4 4h2a1 1 0 0 1 1 1v3h2a1 1 0 1 1 0 2h-6a1 1 0 1 1 0-2h2v-2h-1.001a6.006 6.006 0 0 1-5.999-5.999z" />
  </BaseIcon>
));
export default SvgMicrophoneSlash;
