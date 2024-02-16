import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgFolderDuplicate = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 11H4m15.5 5c.3 0 .5-.2.5-.5V8c0-.6-.4-1-1-1h-3.8a1 1 0 0 1-.8-.4L13 4.4a1 1 0 0 0-.8-.4H8a1 1 0 0 0-1 1M4 9v10c0 .6.4 1 1 1h11c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1h-3.8a1 1 0 0 1-.8-.4L10 8.4a1 1 0 0 0-.8-.4H5a1 1 0 0 0-1 1"
    />
  </BaseIcon>
));
export default SvgFolderDuplicate;
