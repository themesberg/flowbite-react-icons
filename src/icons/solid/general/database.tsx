import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgDatabase = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="currentColor" ref={ref} {...props}>
    <path d="M12 7.205c4.418 0 8-1.165 8-2.602C20 3.165 16.418 2 12 2S4 3.165 4 4.603c0 1.437 3.582 2.602 8 2.602M12 22c4.963 0 8-1.686 8-2.603v-4.404c-.052.032-.112.06-.165.09a8 8 0 0 1-.745.387q-.29.132-.6.253-.093.037-.189.073a19 19 0 0 1-6.3.998c-2.135.027-4.26-.31-6.3-.998q-.096-.037-.189-.073a10 10 0 0 1-.852-.373 8 8 0 0 1-.493-.267c-.053-.03-.113-.058-.165-.09v4.404C4 20.315 7.037 22 12 22m7.09-13.928a10 10 0 0 1-.6.253q-.093.038-.189.074a19 19 0 0 1-6.3.998c-2.135.027-4.26-.31-6.3-.998q-.096-.037-.189-.074a10 10 0 0 1-.852-.372 8 8 0 0 1-.493-.268c-.055-.03-.115-.058-.167-.09V12c0 .917 3.037 2.603 8 2.603s8-1.686 8-2.603V7.596c-.052.031-.112.059-.165.09a8 8 0 0 1-.745.386" />
  </BaseIcon>
));
export default SvgDatabase;
