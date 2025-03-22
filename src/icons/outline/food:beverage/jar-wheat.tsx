import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgJarWheat = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16 6H8m8 0s3 2.5 3 5v8.002A3 3 0 0 1 16 22H8c-1.657 0-3-1.341-3-2.998V11c0-2.5 3-5 3-5m8 0V3H8v3m4 3v10M6 6h12m-4.834 9.745c-.324.257-.965 1.172-.926 1.228s1.045-.429 1.4-.638c.356-.21.928-1.195.9-1.23-.027-.036-1.076.404-1.374.64m0-3.972c-.324.257-.965 1.172-.926 1.228s1.045-.429 1.4-.638c.356-.21.928-1.195.9-1.23-.027-.036-1.076.404-1.374.64m-2.332 3.972c.324.257.965 1.172.926 1.228s-1.045-.429-1.4-.638c-.356-.21-.928-1.195-.9-1.23.027-.036 1.076.404 1.374.64m0-3.972c.324.257.965 1.172.926 1.228s-1.045-.429-1.4-.638c-.356-.21-.928-1.195-.9-1.23.027-.036 1.076.404 1.374.64"
    />
  </BaseIcon>
));
export default SvgJarWheat;
