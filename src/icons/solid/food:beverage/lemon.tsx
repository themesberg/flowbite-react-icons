import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgLemon = forwardRef<SVGSVGElement, PropsWithoutRef<FlowbiteIconProps>>(
  (props, ref) => (
    <BaseIcon fill="none" ref={ref} {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.236 3.279c1.82-.87 3.9.38 4.064 2.365l.098 1.181q.011.139.064.267l.45 1.105c2.105 5.16-1.176 10.972-6.674 11.708l-1.167.156-.037.01-.101.03a3 3 0 0 0-.197.073l-.105.05-.336.16-.521.252-.017.008c-1.818.863-3.894-.387-4.057-2.368l-.1-1.192a2 2 0 0 0-.047-.21q-.013-.044-.014-.046l-.451-1.105C2.983 10.562 6.264 4.75 11.762 4.014l.066-.009h.067q-.024 0 .007-.002.034-.003.159-.02a13 13 0 0 0 .946-.167 4 4 0 0 0 .221-.056zm-1.563 5.946a1 1 0 1 0-.735-1.86c-1.536.607-2.62 1.481-3.264 2.678-.631 1.173-.767 2.527-.67 3.964A1 1 0 0 0 10 13.872c-.085-1.253.056-2.177.435-2.882.367-.682 1.025-1.285 2.238-1.765"
        clipRule="evenodd"
      />
    </BaseIcon>
  ),
);
export default SvgLemon;
