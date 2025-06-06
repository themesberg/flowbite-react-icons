import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgJarWheat = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8 2a1 1 0 0 0-1 1v2H6a1 1 0 0 0-.295 1.956C4.928 7.93 4 9.402 4 11v8.002A4 4 0 0 0 8 23h8c2.208 0 4-1.788 4-3.998V11c0-1.598-.928-3.07-1.705-4.044A1 1 0 0 0 18 5h-1V3a1 1 0 0 0-1-1zm5 7a1 1 0 1 0-2 0v1.703a9 9 0 0 0-.547-.265 8 8 0 0 0-.46-.19 3 3 0 0 0-.205-.07 1.05 1.05 0 0 0-.66.01 1.004 1.004 0 0 0-.625 1.25c.021.07.046.127.06.156.03.068.066.137.1.198a6.4 6.4 0 0 0 .638.94c.117.139.309.35.55.492A12 12 0 0 0 11 13.8v.876a9 9 0 0 0-.547-.266 8 8 0 0 0-.46-.19 3 3 0 0 0-.205-.069 1.056 1.056 0 0 0-.66.01 1.004 1.004 0 0 0-.625 1.25c.021.07.046.127.06.156.03.067.066.137.1.198a6.4 6.4 0 0 0 .638.94c.117.139.309.35.55.492a12 12 0 0 0 1.149.575V19a1 1 0 0 0 2 0v-1.23q.121-.052.245-.11c.313-.147.686-.336.904-.464a2.3 2.3 0 0 0 .55-.492 6.412 6.412 0 0 0 .638-.94c.034-.06.07-.13.1-.198a1.06 1.06 0 0 0 .094-.596 1.006 1.006 0 0 0-1.148-.857c-.077.011-.141.029-.17.037-.07.02-.144.046-.207.07a8 8 0 0 0-.458.19 9 9 0 0 0-.548.265v-.876q.121-.053.245-.111c.313-.147.686-.336.904-.464a2.3 2.3 0 0 0 .55-.492 6.412 6.412 0 0 0 .638-.94c.034-.06.07-.13.1-.198a1.06 1.06 0 0 0 .094-.596 1.005 1.005 0 0 0-1.148-.856c-.077.01-.141.028-.17.037-.07.02-.144.046-.207.069a8 8 0 0 0-.458.19 9 9 0 0 0-.548.265z"
      clipRule="evenodd"
    />
  </BaseIcon>
));
export default SvgJarWheat;
