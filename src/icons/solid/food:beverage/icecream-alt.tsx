import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgIcecreamAlt = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path fill="currentColor" d="M16 12H8l4 9z" />
    <path
      fill="currentColor"
      d="M14 6a1 1 0 1 0 2 0zM9.787 9.333a1 1 0 1 0 1.108-1.666zM15.39 11a1 1 0 1 0 0 2zm-2.212-5.333a1 1 0 0 0 1.107 1.666zM8 12v-1a1 1 0 0 0-.914 1.406zm8 0 .914.406A1 1 0 0 0 16 11zm-4 9-.914.406a1 1 0 0 0 1.828 0zM10 6a2 2 0 0 1 2-2V2a4 4 0 0 0-4 4zm2-2a2 2 0 0 1 2 2h2a4 4 0 0 0-4-4zm-1.105 3.667A2 2 0 0 1 10 6H8c0 1.392.712 2.618 1.787 3.333zM9 11a2 2 0 0 1-2-2H5a4 4 0 0 0 4 4zM7 9a2 2 0 0 1 2-2V5a4 4 0 0 0-4 4zm10.39 0a2 2 0 0 1-2 2v2a4 4 0 0 0 4-4zm-2-2a2 2 0 0 1 2 2h2a4 4 0 0 0-4-4zm-1.106.333C14.6 7.123 14.98 7 15.39 7V5c-.816 0-1.578.246-2.212.667zM8 13h8v-2H8zm7.086-1.406-4 9 1.828.812 4-9zm-2.172 9-4-9-1.828.812 4 9z"
    />
  </BaseIcon>
));
export default SvgIcecreamAlt;
