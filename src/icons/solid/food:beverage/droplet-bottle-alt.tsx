import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgDropletBottleAlt = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      fill="currentColor"
      d="M12 11c-.23 0-.4.077-.47.112-.083.041-.148.087-.19.118a2 2 0 0 0-.204.184c-.108.11-.221.247-.332.392-.226.294-.492.69-.748 1.128-.255.438-.512.941-.707 1.45C9.159 14.879 9 15.449 9 16a3 3 0 1 0 6 0c0-.551-.159-1.12-.349-1.616a10 10 0 0 0-.707-1.45 11 11 0 0 0-.748-1.128 5 5 0 0 0-.332-.392 2 2 0 0 0-.205-.184 1.2 1.2 0 0 0-.19-.118A1.06 1.06 0 0 0 12 11"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M9 2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1v1.094l-.21.129a14 14 0 0 0-.868.555C7.105 9.357 6 10.368 6 12v7.07c-.002.416-.006 1.206.448 1.855C6.993 21.703 7.942 22 9.143 22h5.714c1.201 0 2.15-.297 2.694-1.075.454-.65.451-1.439.45-1.854L18 19v-7c0-1.633-1.105-2.643-1.922-3.222-.302-.214-.627-.41-.867-.555L15 8.094V7a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm2 6.5V7h2v1.5c0 .537.37.866.465.95.15.133.33.25.474.34l.303.185c.223.134.442.266.68.435.683.483 1.078.973 1.078 1.59v7c0 .248-.002.417-.023.565a.5.5 0 0 1-.065.214c-.007.01-.038.055-.17.105-.152.058-.424.116-.885.116H9.143c-.461 0-.733-.058-.884-.116-.133-.05-.165-.096-.172-.106a.5.5 0 0 1-.064-.213A4 4 0 0 1 8 19v-7c0-.617.395-1.107 1.078-1.59.238-.169.457-.301.68-.435q.15-.09.303-.186a3.6 3.6 0 0 0 .474-.34c.095-.083.465-.412.465-.949"
      clipRule="evenodd"
    />
  </BaseIcon>
));
export default SvgDropletBottleAlt;
