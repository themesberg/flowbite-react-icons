import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgChartMixedDollar = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="currentColor" ref={ref} {...props}>
    <path
      fillRule="evenodd"
      d="M9 15a6 6 0 1 1 12 0 6 6 0 0 1-12 0m3.845-1.855a2.4 2.4 0 0 1 1.2-1.226 1 1 0 0 1 1.992-.026c.426.15.809.408 1.111.749a1 1 0 1 1-1.496 1.327.7.7 0 0 0-.36-.213 1 1 0 0 1-.113-.032.4.4 0 0 0-.394.074.93.93 0 0 0 .455.254 2.9 2.9 0 0 1 1.504.9c.373.433.669 1.092.464 1.823a1 1 0 0 1-.046.129c-.226.519-.627.94-1.132 1.192a1 1 0 0 1-1.956.093 2.7 2.7 0 0 1-1.227-.798 1 1 0 1 1 1.506-1.315.7.7 0 0 0 .363.216q.057.014.111.032a.4.4 0 0 0 .395-.074.93.93 0 0 0-.455-.254 2.9 2.9 0 0 1-1.503-.9c-.375-.433-.666-1.089-.466-1.817a1 1 0 0 1 .047-.134m1.884.573.003.008q-.004-.008-.003-.008m.55 2.613s-.002-.002-.003-.007zM4 14a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1m3-2a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1m6.5-8a1 1 0 0 1 1-1H18a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-.796l-2.341 2.049a1 1 0 0 1-1.24.06l-2.894-2.066L6.614 9.29a1 1 0 1 1-1.228-1.578l4.5-3.5a1 1 0 0 1 1.195-.025l2.856 2.04L15.34 5h-.84a1 1 0 0 1-1-1"
      clipRule="evenodd"
    />
  </BaseIcon>
));
export default SvgChartMixedDollar;
