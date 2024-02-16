import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgBlenderPhone = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="currentColor" ref={ref} {...props}>
    <path
      fillRule="evenodd"
      d="M11 4a1 1 0 0 0-1 1v10h10.459l.522-3H16a1 1 0 1 1 0-2h5.33l.174-1H16a1 1 0 1 1 0-2h5.852l.117-.67v-.003A1.983 1.983 0 0 0 20.06 4zM9 18c0-.35.06-.687.17-1h11.66c.11.313.17.65.17 1v1a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1zm-6.991-7a17.8 17.8 0 0 0 .953 6.1c.198.54 1.61.9 2.237.9h1.34c.17 0 .339-.032.495-.095a1.2 1.2 0 0 0 .41-.27c.114-.114.2-.25.254-.396a1 1 0 0 0 .055-.456l-.242-2.185a1.07 1.07 0 0 0-.395-.71 1.3 1.3 0 0 0-.819-.286H5.291Q5.11 12.306 5.146 11c-.024-.87.024-1.74.145-2.602H6.54c.302 0 .594-.102.818-.286a1.07 1.07 0 0 0 .396-.71l.24-2.185a1 1 0 0 0-.054-.456 1.1 1.1 0 0 0-.254-.397 1.2 1.2 0 0 0-.41-.269A1.3 1.3 0 0 0 6.78 4H4.307c-.3-.001-.592.082-.838.238a1.34 1.34 0 0 0-.531.634A17.1 17.1 0 0 0 2.008 11Z"
      clipRule="evenodd"
    />
  </BaseIcon>
));
export default SvgBlenderPhone;
