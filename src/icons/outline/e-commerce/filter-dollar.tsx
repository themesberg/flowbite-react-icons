import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgFilterDollar = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m11 18-.854-.854a.5.5 0 0 1-.146-.353v-4.417a1 1 0 0 0-.247-.659L4.45 5.66C3.886 5.012 4.345 4 5.204 4h13.55c.866 0 1.323 1.025.744 1.669L16.5 9M14 18.375c.335.362.782.614 1.279.72.477.158 1 .14 1.464-.05s.834-.54 1.036-.977c.246-.829-.637-1.734-1.774-1.995s-2.016-1.16-1.773-1.995a1.95 1.95 0 0 1 1.035-.977c.464-.19.987-.208 1.464-.05.491.105.935.352 1.27.707m-1.94 5.41V20m0-8v.977"
    />
  </BaseIcon>
));
export default SvgFilterDollar;
