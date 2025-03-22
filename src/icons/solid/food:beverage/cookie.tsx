import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgCookie = forwardRef<SVGSVGElement, PropsWithoutRef<FlowbiteIconProps>>(
  (props, ref) => (
    <BaseIcon fill="none" ref={ref} {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.021 2.375a1 1 0 0 1 .072 1.015c-.083.167-.129.496-.087.818a1.254 1.254 0 0 0 1.765.976 1 1 0 0 1 1.401.732 1 1 0 0 1-.39 1 1.633 1.633 0 1 0 2.388 2.116 1 1 0 0 1 1.768.933 1.2 1.2 0 0 0 .226 1.383c.265.265.622.38.97.346q.072-.008.143-.005c.111.005.525-.007.754-.016a1 1 0 0 1 1.034 1.085 9.96 9.96 0 0 1-2.892 6.211c-3.905 3.905-10.237 3.905-14.142 0-3.906-3.905-3.906-10.237 0-14.142a9.96 9.96 0 0 1 6.067-2.879 1 1 0 0 1 .923.427m-3.364 6.04a1 1 0 1 0 0 2h.01a1 1 0 0 0 0-2zM7.271 12a1 1 0 0 0 0 2h.01a1 1 0 1 0 0-2zm7.688 1.916a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2zM11 16a1 1 0 0 0 0 2h.01a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </BaseIcon>
  ),
);
export default SvgCookie;
