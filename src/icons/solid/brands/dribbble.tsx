import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgDribbble = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="currentColor" ref={ref} {...props}>
    <path
      fillRule="evenodd"
      d="M12 2a10 10 0 1 0 10 10A10.01 10.01 0 0 0 12 2m6.613 4.614a8.52 8.52 0 0 1 1.93 5.32 20.1 20.1 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a24 24 0 0 0-.566-1.239 11.4 11.4 0 0 0 4.769-3.366M10 3.707a8.8 8.8 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.6 9.6 0 0 1-4.476 3.087A46 46 0 0 0 10 3.707m-6.358 6.555a8.57 8.57 0 0 1 4.73-5.981 54 54 0 0 1 3.168 4.941 32 32 0 0 1-7.9 1.04zm2.01 7.46a8.5 8.5 0 0 1-2.2-5.707v-.262a31.6 31.6 0 0 0 8.777-1.219c.243.477.477.964.692 1.449q-.172.05-.336.1a13.57 13.57 0 0 0-6.942 5.636zM12 20.556a8.5 8.5 0 0 1-5.243-1.8 11.72 11.72 0 0 1 6.7-5.332l.055-.02a35.7 35.7 0 0 1 1.819 6.476 8.5 8.5 0 0 1-3.331.676m4.772-1.462A37 37 0 0 0 15.113 13a12.5 12.5 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73z"
      clipRule="evenodd"
    />
  </BaseIcon>
));
export default SvgDribbble;
