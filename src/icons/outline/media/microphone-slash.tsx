import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgMicrophoneSlash = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      fill="currentColor"
      d="M20.05 9.05a1 1 0 1 0-2 0zm-1 3 1 .001v-.001zm-9 5-.001 1zm-3.534-1.466.707-.707zM5.05 12.05h-1v.001zm4 8a1 1 0 1 0 0 2zm6 2a1 1 0 1 0 0-2zm-8-14a1 1 0 0 0 2 0zm6.667 4.886a1 1 0 1 0 .666 1.886zM6.05 10.05a1 1 0 1 0-2 0zm10 5.462a1 1 0 0 0 1 1.731zm-4 1.538h1a1 1 0 0 0-1-1zM5.757 4.343a1 1 0 0 0-1.414 1.414zm12.586 15.414a1 1 0 0 0 1.414-1.414zM18.05 9.05v3h2v-3zm0 2.999a4 4 0 0 1-1.174 2.828l1.415 1.414a6 6 0 0 0 1.759-4.24zm-8 4.001a4 4 0 0 1-2.828-1.173L5.81 16.29a6 6 0 0 0 4.24 1.759l.002-2Zm-2.828-1.173a4 4 0 0 1-1.173-2.828l-2 .002a6 6 0 0 0 1.759 4.24zM11.05 4.05h2v-2h-2zm2 0a2 2 0 0 1 2 2h2a4 4 0 0 0-4-4zm2 2v5h2v-5zm-6 0a2 2 0 0 1 2-2v-2a4 4 0 0 0-4 4zm0 16h3v-2h-3zm3 0h3v-2h-3zm-3-14v-2h-2v2zm6 3a2 2 0 0 1-1.333 1.886l.666 1.886a4 4 0 0 0 2.667-3.772zm-9 1v-2h-2v2zm10.826 2.827a4 4 0 0 1-.827.635l1.001 1.731c.45-.26.867-.579 1.24-.952zM4.344 5.757l14 14 1.414-1.414-14-14zM12.05 16.05h-2v2h2zm-1 1v4h2v-4z"
    />
  </BaseIcon>
));
export default SvgMicrophoneSlash;
