import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgFlowbite = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="currentColor" ref={ref} {...props}>
    <path d="M15.907 11.998 10.332 9.23a1 1 0 0 1-.16-.037l-.018-.007v6.554c0 .017.008.034.01.051l2.388-2.974z" />
    <path d="m11.463 4.054 5.579 3.323A4 4 0 0 1 18.525 9c.332.668.47 1.414.398 2.155a3.07 3.07 0 0 1-.745 1.65 3.1 3.1 0 0 1-1.55.951c-.022.007-.045.005-.07.01q-.093.045-.191.08l-2.72.667-1.992 2.48c-.18.227-.41.409-.67.534.047.034.085.077.137.107a2.05 2.05 0 0 0 1.995.035c.592-.33 2.15-1.201 4.636-2.892l.28-.19c1.328-.895 3.616-2.442 3.967-4.215a9.94 9.94 0 0 0-1.713-4.154 10 10 0 0 0-3.375-2.989 10.1 10.1 0 0 0-8.802-.418c1.162.287 2.287.704 3.354 1.243Z" />
    <path d="M5.382 17.082v-6.457a3.7 3.7 0 0 1 .45-1.761 3.73 3.73 0 0 1 1.238-1.34 3.92 3.92 0 0 1 3.433-.245q.265.045.508.161l5.753 2.856q.123.075.236.165a2.13 2.13 0 0 0-.953-1.455l-5.51-3.284c-1.74-.857-3.906-1.523-5.244-1.097a10 10 0 0 0-2.5 3.496 9.9 9.9 0 0 0 .283 8.368 10 10 0 0 0 2.73 3.322 17 17 0 0 1-.424-2.729" />
    <path d="m19.102 16.163-.272.183c-2.557 1.74-4.169 2.64-4.698 2.935a4.1 4.1 0 0 1-2 .53 3.95 3.95 0 0 1-1.983-.535 3.8 3.8 0 0 1-1.36-1.361 3.75 3.75 0 0 1-.51-1.85 2 2 0 0 1-.043-.26V9.143c0-.024.009-.046.01-.07q-.084.03-.162.07a1.8 1.8 0 0 0-.787 1.516v6.377a10.7 10.7 0 0 0 1.113 4.27 10.11 10.11 0 0 0 8.505-.53 10 10 0 0 0 3.282-2.858 9.9 9.9 0 0 0 1.75-3.97 19.6 19.6 0 0 1-2.845 2.216Z" />
  </BaseIcon>
));
export default SvgFlowbite;