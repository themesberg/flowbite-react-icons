import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgUserSettings = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="currentColor" ref={ref} {...props}>
    <path
      fillRule="evenodd"
      d="M17 10v1.126c.367.095.714.24 1.032.428l.796-.797 1.415 1.415-.797.796c.188.318.333.665.428 1.032H21v2h-1.126c-.095.367-.24.714-.428 1.032l.797.796-1.415 1.415-.796-.797a4 4 0 0 1-1.032.428V20h-2v-1.126a4 4 0 0 1-1.032-.428l-.796.797-1.415-1.415.797-.796A4 4 0 0 1 12.126 16H11v-2h1.126c.095-.367.24-.714.428-1.032l-.797-.796 1.415-1.415.796.797A4 4 0 0 1 15 11.126V10zm.406 3.578.016.016c.354.358.574.85.578 1.392v.028a2 2 0 0 1-3.409 1.406l-.01-.012a2 2 0 0 1 2.826-2.83ZM5 8a4 4 0 1 1 7.938.703 7.03 7.03 0 0 0-3.235 3.235A4 4 0 0 1 5 8m4.29 5H7a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h6.101A6.98 6.98 0 0 1 9 15c0-.695.101-1.366.29-2"
      clipRule="evenodd"
    />
  </BaseIcon>
));
export default SvgUserSettings;
