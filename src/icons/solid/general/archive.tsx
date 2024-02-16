import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgArchive = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="currentColor" ref={ref} {...props}>
    <path
      fillRule="evenodd"
      d="M20 10H4v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zM9 13v-1h6v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1"
      clipRule="evenodd"
    />
    <path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2" />
  </BaseIcon>
));
export default SvgArchive;
