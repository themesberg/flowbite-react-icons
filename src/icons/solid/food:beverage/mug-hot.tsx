import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgMugHot = forwardRef<SVGSVGElement, PropsWithoutRef<FlowbiteIconProps>>(
  (props, ref) => (
    <BaseIcon fill="none" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="M11 3a1 1 0 1 0-2 0c0 .358-.099.51-.198.616-.149.158-.368.286-.773.502l-.045.024c-.345.183-.848.451-1.245.874C6.276 5.51 6 6.158 6 7a1 1 0 0 0 2 0c0-.358.099-.51.198-.616.149-.158.368-.286.773-.502l.045-.024c.345-.183.848-.451 1.245-.874C10.724 4.49 11 3.842 11 3m5 0a1 1 0 1 0-2 0c0 .358-.099.51-.198.616-.149.158-.368.286-.773.502l-.045.024c-.345.183-.848.451-1.245.874C11.276 5.51 11 6.158 11 7a1 1 0 1 0 2 0c0-.358.099-.51.198-.616.149-.158.368-.286.773-.502l.045-.024c.345-.183.848-.451 1.245-.874C15.724 4.49 16 3.842 16 3"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5 10a1 1 0 0 0-.995 1.1l.64 6.398A5 5 0 0 0 9.62 22h.76a5 5 0 0 0 4.9-4H17a3 3 0 1 0 0-6h-1.095l.09-.9A1 1 0 0 0 15 10zm12 6h-1.495l.2-2H17a1 1 0 1 1 0 2"
        clipRule="evenodd"
      />
    </BaseIcon>
  ),
);
export default SvgMugHot;
