import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgFish = forwardRef<SVGSVGElement, PropsWithoutRef<FlowbiteIconProps>>(
  (props, ref) => (
    <BaseIcon fill="none" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="M13.423 7c-2.227.015-4.247.662-5.734 1.539-.752.442-1.396.96-1.864 1.516a5 5 0 0 0-.158.198l-1.96-1.96a1 1 0 0 0-1.414 1.414L4.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414l1.96-1.96q.077.102.158.198c.468.555 1.112 1.073 1.864 1.516 1.486.876 3.504 1.523 5.728 1.539a7 7 0 0 1-.298-.525c-.883-1.526-1.405-2.874-1.408-4.339-.002-1.461.514-2.899 1.403-4.6l.028-.05c.092-.154.187-.32.28-.486"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.656 16.74c1.384-.338 2.565-.963 3.505-1.62 1.391-.976 2.308-2.06 2.65-2.535a1 1 0 0 0 0-1.17c-.342-.475-1.259-1.56-2.65-2.534-.96-.672-2.17-1.309-3.592-1.641-.202.381-.454.843-.696 1.248-.828 1.588-1.163 2.672-1.162 3.645.002.964.337 1.958 1.154 3.365q.017.03.031.059c.165.332.465.778.76 1.182m.33-6.112a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </BaseIcon>
  ),
);
export default SvgFish;
