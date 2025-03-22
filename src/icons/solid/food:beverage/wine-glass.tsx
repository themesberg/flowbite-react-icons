import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgWineGlass = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8.5 2a1 1 0 0 0-.947.677l-.128.373c-.196.562-.494 1.42-.762 2.303C6.338 6.422 6 7.699 6 8.57q0 .152.008.304a1 1 0 0 0 .035.415c.311 2.632 2.291 5.11 4.957 5.616V20H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-2v-5.094c2.908-.552 5-3.451 5-6.335 0-.863-.328-2.127-.65-3.195a56 56 0 0 0-.907-2.71l-.002-.003A1 1 0 0 0 15.5 2zm-.443 6h7.887c-.088-.542-.273-1.266-.509-2.047A47 47 0 0 0 14.794 4H9.212c-.185.536-.42 1.223-.636 1.935-.24.788-.429 1.519-.519 2.065"
      clipRule="evenodd"
    />
  </BaseIcon>
));
export default SvgWineGlass;
