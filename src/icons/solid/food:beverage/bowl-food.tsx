import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgBowlFood = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M21 11c0-.881-.38-1.673-.984-2.221.503-1.339.218-2.972-.981-3.942a3.41 3.41 0 0 0-3.627-.421 3.3 3.3 0 0 0-1.09-.932c-.823-.439-1.803-.54-2.741-.356a3.77 3.77 0 0 0-2.68 2.074 4 4 0 0 0-.278-.147c-.86-.407-1.891-.462-2.914.053-1.406.708-2.13 2.353-1.844 3.85q-.242.217-.428.499C3.133 9.917 3 10.448 3 11a1 1 0 0 0 .995 1h16.01A1 1 0 0 0 21 11m-6.89-.765a1 1 0 0 0-1.325-.494 1 1 0 0 1-.831-1.82 3 3 0 0 1 3.975 1.483 1 1 0 0 1-1.82.83"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M20.36 15.224c.282-.595-.196-1.224-.854-1.224H4.494c-.658 0-1.136.63-.853 1.224.853 1.795 2.417 3.232 4.336 4.072V20a1 1 0 0 0 1 1h6.046a1 1 0 0 0 1-1v-.704c1.918-.84 3.483-2.277 4.336-4.072"
    />
  </BaseIcon>
));
export default SvgBowlFood;
