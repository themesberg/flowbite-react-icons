import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgGlobe = forwardRef<SVGSVGElement, PropsWithoutRef<FlowbiteIconProps>>(
  (props, ref) => (
    <BaseIcon fill="currentColor" ref={ref} {...props}>
      <path
        fillRule="evenodd"
        d="M8.64 4.737A8 8 0 0 1 12 4a8 8 0 0 1 6.933 4.006h-.738c-.65 0-1.177.25-1.177.9 0 .33 0 2.04-2.026 2.008-1.972 0-1.972-1.732-1.972-2.008 0-1.429-.787-1.65-1.752-1.923-.374-.105-.774-.218-1.166-.411-1.004-.497-1.347-1.183-1.461-1.835ZM6 4a10.1 10.1 0 0 0-2.812 3.27A9.96 9.96 0 0 0 2 12c0 5.289 4.106 9.619 9.304 9.976l.054.004a10 10 0 0 0 1.155.007h.002a10 10 0 0 0 1.5-.19 10 10 0 0 0 2.259-.754 10.04 10.04 0 0 0 4.987-5.263A9.9 9.9 0 0 0 22 12a10 10 0 0 0-.315-2.5A10 10 0 0 0 12 2a9.96 9.96 0 0 0-6 2m13.372 11.113a2.6 2.6 0 0 0-.75-.112h-.217A3.405 3.405 0 0 0 15 18.405v1.014a8.03 8.03 0 0 0 4.372-4.307ZM12.114 20H12A8 8 0 0 1 5.1 7.95c.95.541 1.421 1.537 1.835 2.415.209.441.403.853.637 1.162.54.712 1.063 1.019 1.591 1.328.52.305 1.047.613 1.6 1.316 1.44 1.825 1.419 4.366 1.35 5.828Z"
        clipRule="evenodd"
      />
    </BaseIcon>
  ),
);
export default SvgGlobe;
