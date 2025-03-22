import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgBone = forwardRef<SVGSVGElement, PropsWithoutRef<FlowbiteIconProps>>(
  (props, ref) => (
    <BaseIcon fill="none" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="M4.14 11.889c-1.404 1.404-1.404 3.587 0 4.99.521.522 1.222.892 1.966 1.015A3.67 3.67 0 0 0 7.12 19.86c1.404 1.404 3.587 1.404 4.991 0 1.157-1.157 1.36-2.843.61-4.187l2.953-2.952c1.343.75 3.03.547 4.186-.61 1.404-1.404 1.404-3.587 0-4.99a3.67 3.67 0 0 0-1.966-1.016A3.67 3.67 0 0 0 16.88 4.14c-1.404-1.404-3.587-1.404-4.991 0-1.157 1.157-1.36 2.843-.61 4.187l-2.952 2.952c-1.344-.75-3.03-.547-4.187.61"
      />
    </BaseIcon>
  ),
);
export default SvgBone;
