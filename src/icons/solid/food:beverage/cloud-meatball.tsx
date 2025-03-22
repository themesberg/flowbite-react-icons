import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgCloudMeatball = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      fill="currentColor"
      d="M6 17a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2zm12 0a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 13a1 1 0 0 1 1 1v.586l.414-.414a1 1 0 0 1 1.414 1.414l-.414.414H15a1 1 0 1 1 0 2h-.586l.414.414a1 1 0 0 1-1.414 1.415L13 19.414V20a1 1 0 0 1-2 0v-.586l-.414.414a1 1 0 1 1-1.414-1.414L9.586 18H9a1 1 0 0 1 0-2h.586l-.414-.414a1 1 0 1 1 1.414-1.414l.414.414V14a1 1 0 0 1 1-1"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M9.219 3.962a5.89 5.89 0 0 1 9.098 4.492A3.67 3.67 0 0 1 21 11.986c0 .945-.368 1.957-1.074 2.664-.642.641-1.456.928-2.251.99a3 3 0 0 0-.554-.761 3 3 0 0 0-.878-2.122 3 3 0 0 0-2.122-.878A3 3 0 0 0 12 11a3 3 0 0 0-2.121.879 3 3 0 0 0-2.122.879 3 3 0 0 0-.878 2.12 3 3 0 0 0-.48.626A4.556 4.556 0 0 1 3 11.097c0-1.158.385-2.343 1.272-3.23.742-.742 1.746-1.182 2.759-1.296a5.9 5.9 0 0 1 2.188-2.609"
    />
  </BaseIcon>
));
export default SvgCloudMeatball;
