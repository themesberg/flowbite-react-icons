import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgBug = forwardRef<SVGSVGElement, PropsWithoutRef<FlowbiteIconProps>>(
  (props, ref) => (
    <BaseIcon fill="currentColor" ref={ref} {...props}>
      <path d="M18 17h-.09q.087-.496.09-1v-1h1a1 1 0 0 0 0-2h-1.09a6 6 0 0 0-.26-1H17a2 2 0 0 0 2-2V8a1 1 0 1 0-2 0v2h-.54a6 6 0 0 0-.46-.46V8a3.96 3.96 0 0 0-.986-2.6l.693-.693A1 1 0 0 0 16 4V3a1 1 0 1 0-2 0v.586l-.661.661a3.75 3.75 0 0 0-2.678 0L10 3.586V3a1 1 0 1 0-2 0v1a1 1 0 0 0 .293.707l.693.693A3.96 3.96 0 0 0 8 8v1.54a6 6 0 0 0-.46.46H7V8a1 1 0 0 0-2 0v2a2 2 0 0 0 2 2h-.65a6 6 0 0 0-.26 1H5a1 1 0 0 0 0 2h1v1a6 6 0 0 0 .09 1H6a2 2 0 0 0-2 2v2a1 1 0 1 0 2 0v-2h.812A6.01 6.01 0 0 0 11 21.907V12a1 1 0 0 1 2 0v9.907A6.01 6.01 0 0 0 17.188 19H18v2a1 1 0 0 0 2 0v-2a2 2 0 0 0-2-2m-4-8.65a6 6 0 0 0-.941-.251l-.111-.017a5.5 5.5 0 0 0-1.9 0l-.111.017A6 6 0 0 0 10 8.35V8a2 2 0 1 1 4 0z" />
    </BaseIcon>
  ),
);
export default SvgBug;
