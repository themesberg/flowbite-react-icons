import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgDropletBottle = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      fill="currentColor"
      d="M12 11a1 1 0 0 0-.638.225c-.062.05-.109.098-.133.124a2 2 0 0 0-.14.168 8 8 0 0 0-.281.397c-.208.31-.467.728-.722 1.18s-.513.954-.712 1.43C9.19 14.96 9 15.508 9 16a3 3 0 1 0 6 0c0-.491-.19-1.04-.374-1.477a14 14 0 0 0-.712-1.428c-.254-.453-.514-.87-.721-1.18a8 8 0 0 0-.281-.398 2 2 0 0 0-.14-.168 1.063 1.063 0 0 0-.298-.231 1 1 0 0 0-.474-.118"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10 2a1 1 0 0 0-1 1v2a1 1 0 0 0 0 2v1.516c-1.961 1.631-3 3.777-3 5.984V19a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-4.5c0-2.207-1.039-4.353-3-5.984V7a1 1 0 1 0 0-2V3a1 1 0 0 0-1-1zm1 7V7h2v2a1 1 0 0 0 .4.8c1.78 1.335 2.6 3.053 2.6 4.7V19a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-4.5c0-1.647.82-3.365 2.6-4.7A1 1 0 0 0 11 9"
      clipRule="evenodd"
    />
  </BaseIcon>
));
export default SvgDropletBottle;
