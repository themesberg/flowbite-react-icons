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
      d="M19.97 9.012a1 1 0 1 0-2 0zm-1 2.988 1 .001V12zm-8.962 4.98-.001 1h.001zm-3.52-1.46.708-.708zM5.029 12h-1v.001zm3.984 7.963a1 1 0 1 0 0 2zm5.975 2a1 1 0 0 0 0-2zM7.017 8.017a1 1 0 1 0 2 0zm6.641 4.862a1 1 0 1 0 .667 1.886zm-7.63-2.87a1 1 0 1 0-2 0zm9.953 5.435a1 1 0 1 0 1 1.731zM12 16.979h1a1 1 0 0 0-1-1zM5.736 4.322a1 1 0 0 0-1.414 1.414zm12.528 15.356a1 1 0 0 0 1.414-1.414zM17.97 9.012V12h2V9.012zm0 2.987a3.99 3.99 0 0 1-1.168 2.813l1.415 1.414a5.99 5.99 0 0 0 1.753-4.225zm-7.962 3.98a3.99 3.99 0 0 1-2.813-1.167l-1.414 1.414a5.99 5.99 0 0 0 4.225 1.753zm-2.813-1.167a3.99 3.99 0 0 1-1.167-2.813l-2 .002a5.99 5.99 0 0 0 1.753 4.225zm3.808-10.775h1.992v-2h-1.992zm1.992 0c1.097 0 1.987.89 1.987 1.988h2a3.99 3.99 0 0 0-3.987-3.988zm1.987 1.988v4.98h2v-4.98zm-5.967 0c0-1.098.89-1.988 1.988-1.988v-2a3.99 3.99 0 0 0-3.988 3.988zm-.004 15.938H12v-2H9.012v2Zm2.988 0h2.987v-2H12zM9.016 8.017V6.025h-2v1.992zm5.967 2.987a1.99 1.99 0 0 1-1.325 1.875l.667 1.886a3.99 3.99 0 0 0 2.658-3.76zM6.03 12v-1.992h-2V12zm10.774 2.812a4 4 0 0 1-.823.632l1.002 1.731a6 6 0 0 0 1.236-.949zM4.322 5.736l13.942 13.942 1.414-1.414L5.736 4.322zM12 15.98h-1.992v2H12zm-1 1v3.984h2V16.98z"
    />
  </BaseIcon>
));
export default SvgMicrophoneSlash;
