import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgWineBottle = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      fill="currentColor"
      d="M9 4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v3H9zm0 5v.42c-.878.565-1.412 1.28-1.699 2.139C7 12.465 7 13.482 7 14.41V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h-5a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h4.821a5 5 0 0 0-.122-.441c-.287-.86-.821-1.574-1.699-2.14V9z"
    />
    <path fill="currentColor" d="M17 14h-4v3h4z" />
  </BaseIcon>
));
export default SvgWineBottle;
