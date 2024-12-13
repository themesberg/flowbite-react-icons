import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgMongoDb = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7.294 11.804c0-3.966 2.14-6.417 3.533-8.014C11.501 3.02 12 2.447 12 2c0 .447.5 1.019 1.172 1.79 1.394 1.597 3.534 4.048 3.534 8.014 0 4.326-2.75 6.95-4.077 7.765L12.37 22h-.707l-.29-2.43c-1.326-.813-4.079-3.437-4.079-7.766m4.064 6.7L12 9.06l.649 9.446-.65.75z"
      clipRule="evenodd"
    />
  </BaseIcon>
));
export default SvgMongoDb;
