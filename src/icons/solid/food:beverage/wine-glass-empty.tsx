import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgWineGlassEmpty = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      fill="currentColor"
      d="M8.5 2a1 1 0 0 0-.947.677l-.128.373c-.196.562-.494 1.42-.762 2.303C6.338 6.422 6 7.699 6 8.57c0 2.884 2.092 5.783 5 6.335V20H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-2v-5.094c2.908-.552 5-3.451 5-6.335 0-.863-.328-2.127-.65-3.195a56 56 0 0 0-.907-2.71l-.002-.003A1 1 0 0 0 15.5 2z"
    />
  </BaseIcon>
));
export default SvgWineGlassEmpty;
