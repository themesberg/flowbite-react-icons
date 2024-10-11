import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgApiKey = forwardRef<SVGSVGElement, PropsWithoutRef<FlowbiteIconProps>>(
  (props, ref) => (
    <BaseIcon fill="none" ref={ref} {...props}>
      <path
        fill="currentColor"
        d="M6.943 11h-.852l.96-2.91h1.08L9.09 11h-.852l-.637-2.108H7.58zm-.159-1.148h1.602v.591H6.784zM9.371 11V8.09h1.256a1.2 1.2 0 0 1 .567.129.93.93 0 0 1 .377.36q.135.23.135.54 0 .314-.139.542a.9.9 0 0 1-.388.352 1.3 1.3 0 0 1-.58.123h-.75v-.613h.59a.5.5 0 0 0 .237-.049.35.35 0 0 0 .152-.14.4.4 0 0 0 .054-.215.4.4 0 0 0-.054-.213.34.34 0 0 0-.152-.136.5.5 0 0 0-.237-.048h-.278V11zm3.415-2.91V11h-.79V8.09z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        d="M8.318 2a1 1 0 0 0-1 1v.729l-.18.073-.553-.538a1 1 0 0 0-1.396 0L3.31 5.096a1 1 0 0 0 0 1.432l.529.515q-.03.067-.058.137H3a1 1 0 0 0-1 1v2.59a1 1 0 0 0 1 1h.78l.058.136-.529.515a1 1 0 0 0 0 1.433l1.88 1.83a1 1 0 0 0 1.396 0l.552-.537q.09.038.181.073v.73a1 1 0 0 0 1 1h2.66a1 1 0 0 0 1-1v-.73q.196-.076.388-.165l.543.261v.434a1 1 0 0 0 1 1H14v.063a1 1 0 0 0 1 1h.09v.062a1 1 0 0 0 1 1h.685l.495.482a3 3 0 0 0 4.187 0l.24-.234a1 1 0 0 0-.016-1.449l-6.216-5.784.05-.12h.78a1 1 0 0 0 1-1V8.18a1 1 0 0 0-1-1h-.78l-.057-.137.528-.515a1 1 0 0 0 0-1.432l-1.88-1.832a1 1 0 0 0-1.396 0l-.552.538q-.09-.038-.18-.073V3a1 1 0 0 0-1-1z"
      />
    </BaseIcon>
  ),
);
export default SvgApiKey;
