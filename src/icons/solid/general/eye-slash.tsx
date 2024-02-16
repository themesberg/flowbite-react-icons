import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgEyeSlash = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="currentColor" ref={ref} {...props}>
    <path d="m4 15.6 3.055-3.056A5 5 0 0 1 7 12.012a5.006 5.006 0 0 1 5-5q.268.014.532.054l1.744-1.744A9 9 0 0 0 12 5.012c-5.388 0-10 5.336-10 7A6.5 6.5 0 0 0 4 15.6" />
    <path d="m14.7 10.726 4.995-5.007A.998.998 0 0 0 18.99 4a1 1 0 0 0-.71.305l-4.995 5.007a3 3 0 0 0-.588-.21l-.035-.01a2.98 2.98 0 0 0-3.584 3.583c0 .012.008.022.01.033q.075.307.211.59l-4.995 4.983a1 1 0 1 0 1.414 1.414l4.995-4.983q.284.137.59.211c.011 0 .021.007.033.01a2.982 2.982 0 0 0 3.584-3.584c0-.012-.008-.023-.011-.035a3 3 0 0 0-.21-.588Z" />
    <path d="m19.821 8.605-2.857 2.857a4.952 4.952 0 0 1-5.514 5.514l-1.785 1.785c.767.166 1.55.25 2.335.251 6.453 0 10-5.258 10-7 0-1.166-1.637-2.874-2.179-3.407" />
  </BaseIcon>
));
export default SvgEyeSlash;
