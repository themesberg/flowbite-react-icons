import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgReply = forwardRef<SVGSVGElement, PropsWithoutRef<FlowbiteIconProps>>(
  (props, ref) => (
    <BaseIcon fill="currentColor" ref={ref} {...props}>
      <path d="M14.502 7.046h-2.5v-.928a2.12 2.12 0 0 0-1.199-1.954 1.83 1.83 0 0 0-1.984.311L3.71 8.965a2.2 2.2 0 0 0 0 3.24L8.82 16.7a1.83 1.83 0 0 0 1.985.31 2.12 2.12 0 0 0 1.199-1.959v-.928h1a2.025 2.025 0 0 1 1.999 2.047V19a1 1 0 0 0 1.275.961 6.59 6.59 0 0 0 4.662-7.22 6.59 6.59 0 0 0-6.437-5.695Z" />
    </BaseIcon>
  ),
);
export default SvgReply;
