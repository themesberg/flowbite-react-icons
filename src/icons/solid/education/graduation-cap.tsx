import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgGraduationCap = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="currentColor" ref={ref} {...props}>
    <path d="M12.447 4.106a1 1 0 0 0-.894 0L2.77 8.497l9.22 4.39L21 8.382z" />
    <path d="M5 17.222v-5.448l6.57 3.129a1 1 0 0 0 .877-.009L19 11.618v5.604c0 .286-.123.558-.336.748l-.003.003-.004.003-.01.01-.012.01-.018.014-.097.078q-.12.096-.34.244a8.6 8.6 0 0 1-1.274.693C15.791 19.52 14.153 20 12 20s-3.79-.48-4.906-.975a8.6 8.6 0 0 1-1.274-.693 6 6 0 0 1-.467-.347l-.01-.009-.004-.004-.002-.001.01-.012v-.001l-.011.012A1 1 0 0 1 5 17.222m-3-6.876 2 .952V17a1 1 0 1 1-2 0z" />
  </BaseIcon>
));
export default SvgGraduationCap;
