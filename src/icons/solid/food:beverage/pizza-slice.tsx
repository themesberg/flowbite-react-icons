import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgPizzaSlice = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      fill="currentColor"
      d="M8.988 3.219a13.14 13.14 0 0 1 8.242 3.815 13.14 13.14 0 0 1 3.806 8.134c.118 1.306-.817 2.351-1.975 2.597-.378.08-.742.077-1.082.005a43 43 0 0 0-.226-2.724c-.267-2.1-1.058-3.982-2.805-5.73-1.743-1.742-3.687-2.6-5.82-2.902a51 51 0 0 0-2.692-.268 2.55 2.55 0 0 1 .045-1.095c.28-1.083 1.278-1.933 2.507-1.832"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M15.769 15.298c.079.621.148 1.492.197 2.318l-11.29 3.258a1 1 0 0 1-1.24-1.234L6.692 8.172c.89.073 1.79.17 2.156.222 1.737.246 3.273.924 4.686 2.337 1.405 1.405 2.019 2.866 2.235 4.567m-4.355-4.579a1 1 0 1 0-1.998.086v.011a1 1 0 1 0 1.998-.086zm3.087 3.088a1 1 0 1 0-1.998.086v.01a1 1 0 1 0 1.999-.086zm-4.587 1.499a1 1 0 0 0-1.998.086v.01a1 1 0 0 0 1.999-.085z"
      clipRule="evenodd"
    />
  </BaseIcon>
));
export default SvgPizzaSlice;
