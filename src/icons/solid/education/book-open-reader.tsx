import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgBookOpenReader = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="currentColor" ref={ref} {...props}>
    <path d="M9 6a3 3 0 1 1 6 0 3 3 0 0 1-6 0m2 3.63-.372-.131c-1.34-.475-2.493-.884-4.78-.849C4.848 8.666 4 9.464 4 10.5v7.288c0 1.088.92 1.875 1.929 1.862 1.283-.017 2.046.132 2.797.359.292.088.577.186.903.298l.003.001.379.13c.299.102.624.209.989.319zm2-.004v11.13a35 35 0 0 0 1.455-.484c.295-.103.557-.195.784-.265.726-.225 1.466-.374 2.748-.357.502.007.98-.18 1.34-.479.362-.3.673-.78.673-1.383V10.5c0-.581-.292-1.05-.638-1.35a2.04 2.04 0 0 0-1.294-.5c-2.267-.035-3.386.37-4.685.839z" />
  </BaseIcon>
));
export default SvgBookOpenReader;
