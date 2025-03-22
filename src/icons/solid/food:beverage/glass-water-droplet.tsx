import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgGlassWaterDroplet = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      fill="currentColor"
      d="M12 6c-.268 0-.46.105-.525.143-.086.05-.151.103-.19.137a2 2 0 0 0-.194.2c-.1.12-.21.268-.317.425-.219.32-.479.745-.729 1.199-.249.454-.5.957-.69 1.433C9.178 9.977 9 10.518 9 11a3 3 0 1 0 6 0c0-.482-.178-1.023-.355-1.463-.19-.476-.441-.98-.69-1.433-.25-.454-.51-.879-.729-1.199a5 5 0 0 0-.317-.425 2 2 0 0 0-.194-.2 1.2 1.2 0 0 0-.19-.137A1.05 1.05 0 0 0 12 6"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6 2a1 1 0 0 0-.998 1.067L6.078 19.2A3 3 0 0 0 9.07 22h5.858a3 3 0 0 0 2.993-2.8l1.076-16.133A1 1 0 0 0 18 2zm1.869 14-.8-12h9.862l-.8 12z"
      clipRule="evenodd"
    />
  </BaseIcon>
));
export default SvgGlassWaterDroplet;
