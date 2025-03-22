import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgDrumstickBite = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10.622 3.907C9.415 2.7 7.527 2.673 6.313 3.887a3.13 3.13 0 0 0-.841 1.554c-.59.125-1.14.427-1.555.841-1.214 1.215-1.186 3.103.02 4.31.97.968 2.376 1.178 3.522.595l1.479 1.355a6 6 0 0 0-.08 1.063c.014 1.26.392 2.575 1.01 3.726a1 1 0 0 0 1.455.346c.537-.377.998-.497 1.37-.498.377-.001.73.12 1.048.332.591.395.867 1.102.452 2.048a1 1 0 0 0 .954 1.4c1.437-.055 2.759-.803 3.9-1.943 1.183-1.185 1.763-2.598 1.675-4.071-.087-1.453-.813-2.827-1.974-3.988-1.18-1.18-2.717-1.955-4.255-2.168a5.9 5.9 0 0 0-1.741.011l-1.507-1.427c.548-1.135.33-2.513-.623-3.466m.092 5.718-1.466-1.39a1 1 0 0 1-.02-1.432c.415-.415.425-1.036-.02-1.481s-1.066-.435-1.48-.02c-.266.264-.36.641-.301.89a1 1 0 0 1-1.204 1.204c-.25-.059-.626.035-.891.3-.415.415-.425 1.037.02 1.482s1.066.435 1.481.02a1 1 0 0 1 1.383-.03l1.53 1.403q.178-.24.396-.46.272-.271.572-.486"
      clipRule="evenodd"
    />
  </BaseIcon>
));
export default SvgDrumstickBite;
