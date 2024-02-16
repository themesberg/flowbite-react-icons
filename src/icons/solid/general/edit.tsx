import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgEdit = forwardRef<SVGSVGElement, PropsWithoutRef<FlowbiteIconProps>>(
  (props, ref) => (
    <BaseIcon fill="currentColor" ref={ref} {...props}>
      <path
        fillRule="evenodd"
        d="M11.32 6.176H5c-1.105 0-2 .949-2 2.118v10.588C3 20.052 3.895 21 5 21h11c1.105 0 2-.948 2-2.118v-7.75l-3.914 4.144A2.46 2.46 0 0 1 12.81 16l-2.681.568c-1.75.37-3.292-1.263-2.942-3.115l.536-2.839c.097-.512.335-.983.684-1.352z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M19.846 4.318a2.2 2.2 0 0 0-.437-.692 2 2 0 0 0-.654-.463 1.92 1.92 0 0 0-1.544 0 2 2 0 0 0-.654.463l-.546.578 2.852 3.02.546-.579a2.1 2.1 0 0 0 .437-.692 2.24 2.24 0 0 0 0-1.635M17.45 8.721 14.597 5.7 9.82 10.76a.54.54 0 0 0-.137.27l-.536 2.84c-.07.37.239.696.588.622l2.682-.567a.5.5 0 0 0 .255-.145l4.778-5.06Z"
        clipRule="evenodd"
      />
    </BaseIcon>
  ),
);
export default SvgEdit;
