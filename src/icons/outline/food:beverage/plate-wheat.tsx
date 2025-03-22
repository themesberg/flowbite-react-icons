import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgPlateWheat = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 5h1m-1 6h1M3 8h4m8.5 0c-.102.11-1.538-1.157-1.796-1.482-.33-.415-.782-1.43-.698-1.506s1.116.68 1.374 1.006c.258.324 1.222 1.871 1.12 1.982m0 0c-.102-.11-1.538 1.157-1.796 1.482-.33.415-.782 1.43-.698 1.506s1.116-.68 1.374-1.005S15.602 8.11 15.5 8m4 0c-.102.11-1.538-1.157-1.796-1.482-.33-.415-.782-1.43-.698-1.506s1.116.68 1.374 1.006c.258.324 1.222 1.871 1.12 1.982m0 0c-.102-.11-1.538 1.157-1.796 1.482-.33.415-.782 1.43-.698 1.506s1.116-.68 1.374-1.005S19.602 8.11 19.5 8M11 8h10m-9.994 0c-.102.11-1.539-1.157-1.797-1.482-.33-.415-.781-1.43-.697-1.506s1.116.68 1.374 1.005S11.107 7.89 11.006 8m0 0c-.102-.11-1.539 1.157-1.797 1.482-.33.415-.781 1.43-.697 1.506s1.116-.68 1.374-1.005S11.107 8.11 11.006 8M8.599 18.012V19H15.4v-.988C18.39 17.345 20.587 15.825 21 14H3c.413 1.825 2.61 3.345 5.599 4.012"
    />
  </BaseIcon>
));
export default SvgPlateWheat;
