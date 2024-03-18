import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgBrain = forwardRef<SVGSVGElement, PropsWithoutRef<FlowbiteIconProps>>(
  (props, ref) => (
    <BaseIcon fill="currentColor" ref={ref} {...props}>
      <path d="M11 21V2.352A3.45 3.45 0 0 0 9.5 2a3.5 3.5 0 0 0-3.261 2.238A3.5 3.5 0 0 0 4.04 8.015a3.5 3.5 0 0 0-.766 1.128c-.042.1-.064.209-.1.313a3 3 0 0 0-.106.344 3.5 3.5 0 0 0 .02 1.468A4 4 0 0 0 2.3 12.5l-.015.036a4 4 0 0 0-.216.779A4 4 0 0 0 2 14q.005.361.072.716a4 4 0 0 0 .235.832q.01.02.021.041a4 4 0 0 0 .417.727q.158.22.342.415.109.113.225.216.15.137.315.26c.11.081.2.14.308.2q.03.02.059.04v.053a3.506 3.506 0 0 0 3.03 3.469 3.426 3.426 0 0 0 4.154.577A.97.97 0 0 1 11 21m10.934-7.68a4 4 0 0 0-.215-.779l-.017-.038a4 4 0 0 0-.79-1.235 3.4 3.4 0 0 0 .017-1.468 3 3 0 0 0-.1-.333c-.034-.108-.057-.22-.1-.324a3.5 3.5 0 0 0-.766-1.128 3.5 3.5 0 0 0-2.202-3.777A3.5 3.5 0 0 0 14.5 2a3.45 3.45 0 0 0-1.5.352V21a.97.97 0 0 1-.184.546 3.426 3.426 0 0 0 4.154-.577A3.506 3.506 0 0 0 20 17.5v-.049q.03-.02.059-.04.159-.096.308-.2c.149-.104.214-.169.315-.26q.116-.104.225-.216a4 4 0 0 0 .459-.588q.173-.264.3-.554.01-.02.021-.041.131-.32.205-.659.019-.086.035-.173.069-.356.073-.72a4 4 0 0 0-.066-.68" />
    </BaseIcon>
  ),
);
export default SvgBrain;
