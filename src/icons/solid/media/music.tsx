import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgMusic = forwardRef<SVGSVGElement, PropsWithoutRef<FlowbiteIconProps>>(
  (props, ref) => (
    <BaseIcon fill="currentColor" ref={ref} {...props}>
      <path d="M18.622 3.217A1 1 0 0 1 19 4v11.667q0 .06-.007.121.007.105.007.212a3 3 0 1 1-2-2.83V9.26l-8 1.867v6.876a3 3 0 1 1-2-2.832V6.333a1 1 0 0 1 .773-.974l10-2.333a1 1 0 0 1 .842.186z" />
    </BaseIcon>
  ),
);
export default SvgMusic;
