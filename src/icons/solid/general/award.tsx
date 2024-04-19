import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgAward = forwardRef<SVGSVGElement, PropsWithoutRef<FlowbiteIconProps>>(
  (props, ref) => (
    <BaseIcon fill="currentColor" ref={ref} {...props}>
      <path d="M11 9a1 1 0 1 1 2 0 1 1 0 0 1-2 0" />
      <path
        fillRule="evenodd"
        d="M9.896 3.051a2.68 2.68 0 0 1 4.208 0c.147.186.38.282.615.255a2.68 2.68 0 0 1 2.976 2.975.68.68 0 0 0 .254.615 2.68 2.68 0 0 1 0 4.208.68.68 0 0 0-.254.615 2.68 2.68 0 0 1-2.976 2.976.68.68 0 0 0-.615.254 2.682 2.682 0 0 1-4.208 0 .68.68 0 0 0-.614-.255 2.68 2.68 0 0 1-2.976-2.975.68.68 0 0 0-.255-.615 2.68 2.68 0 0 1 0-4.208.68.68 0 0 0 .255-.615 2.68 2.68 0 0 1 2.976-2.975.68.68 0 0 0 .614-.255M12 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6"
        clipRule="evenodd"
      />
      <path d="M5.395 15.055 4.07 19a1 1 0 0 0 1.264 1.267l1.95-.65 1.144 1.707A1 1 0 0 0 10.2 21.1l1.12-3.18a4.64 4.64 0 0 1-2.515-1.208 4.67 4.67 0 0 1-3.411-1.656Zm7.269 2.867 1.12 3.177a1 1 0 0 0 1.773.224l1.144-1.707 1.95.65A1 1 0 0 0 19.915 19l-1.32-3.93a4.67 4.67 0 0 1-3.4 1.642 4.64 4.64 0 0 1-2.53 1.21Z" />
    </BaseIcon>
  ),
);
export default SvgAward;
