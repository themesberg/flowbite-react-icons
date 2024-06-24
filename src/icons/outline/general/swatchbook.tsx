import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgSwatchbook = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      d="M7.111 20A3.11 3.11 0 0 1 4 16.889v-12C4 4.398 4.398 4 4.889 4h4.444a.89.89 0 0 1 .89.889v12A3.11 3.11 0 0 1 7.11 20Zm0 0h12a.89.89 0 0 0 .889-.889v-4.444a.89.89 0 0 0-.889-.89h-4.389a.9.9 0 0 0-.62.253l-3.767 3.665a1 1 0 0 0-.146.185c-.868 1.433-1.581 1.858-3.078 2.12Zm0-3.556h.009m7.933-10.927 3.143 3.143a.89.89 0 0 1 0 1.257l-7.974 7.974v-8.8l3.574-3.574a.89.89 0 0 1 1.257 0Z"
    />
  </BaseIcon>
));
export default SvgSwatchbook;
