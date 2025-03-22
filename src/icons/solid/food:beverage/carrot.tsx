import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgCarrot = forwardRef<SVGSVGElement, PropsWithoutRef<FlowbiteIconProps>>(
  (props, ref) => (
    <BaseIcon fill="none" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="M16 3a1 1 0 0 1 1 1v1.642l1.564-1.512a1 1 0 1 1 1.39 1.437L18.474 7H20a1 1 0 1 1 0 2h-2.105c.263.59.416 1.227.43 1.892.019.937-.238 1.874-.778 2.756L14.7 10.871a1 1 0 0 0-1.397 1.431l2.949 2.878c-.83.762-2.106 1.728-3.513 2.647l-.012-.013-2.885-3.063a1 1 0 0 0-1.456 1.372L11 18.897q-.284.163-.566.319c-1.217.667-2.468 1.242-3.553 1.54-.541.15-1.093.244-1.606.222-.512-.023-1.089-.17-1.532-.613s-.59-1.02-.612-1.532c-.023-.513.072-1.065.22-1.606.299-1.085.874-2.336 1.542-3.553a37 37 0 0 1 2.073-3.318l2.714 2.617a1 1 0 1 0 1.388-1.44L8.172 8.741c.384-.477.743-.886 1.055-1.198 1.223-1.223 2.576-1.846 3.945-1.84A4.5 4.5 0 0 1 15 6.098V4a1 1 0 0 1 1-1"
      />
    </BaseIcon>
  ),
);
export default SvgCarrot;
