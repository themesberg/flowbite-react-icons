import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgPepperHot = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="currentColor" ref={ref} {...props}>
    <path d="M15.108 3.027c.732-.919 2.119-1.426 3.315-.636 1.03.68 1.664 2.159.844 3.43l-1.135 1.925c.49.538.818 1.217 1.017 2.04l.003.011.002.01c.158.722.087 1.458-.15 2.193H14.5v-2a1 1 0 0 0-1-1h-2.56q.834-1.258 1.77-1.919c.984-.695 2.03-.885 3.031-.636q.362.089.71.214l1.104-1.872.027-.043a.34.34 0 0 0 .037-.298.72.72 0 0 0-.298-.386.34.34 0 0 0-.298-.037.72.72 0 0 0-.386.298 1 1 0 0 1-.334.315l-.081.047a1 1 0 0 1-1.114-1.656M9.837 11c-1.333 2.577-2.513 3.966-3.953 5.276l-.004.004c-.348.306-.736.646-1.16 1.119-.955.913-1.147 2.388-.334 3.492.763 1.037 2.146 1.443 3.292.96l.012-.006c1.55-.679 3.941-1.824 5.254-2.818l.008-.006.008-.006c2.08-1.642 3.735-3.23 4.817-4.72q.106-.146.208-.295H13.5a1 1 0 0 1-1-1v-2z" />
  </BaseIcon>
));
export default SvgPepperHot;
