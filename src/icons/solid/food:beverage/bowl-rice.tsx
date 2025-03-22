import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgBowlRice = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12.26 3.794a3.3 3.3 0 0 0-.917-.507c-.702-.255-1.499-.305-2.24-.186-1.159.186-2.517.882-2.975 2.228q-.608.06-1.122.31c-.6.29-1.027.738-1.323 1.23C3.114 7.813 3 8.97 3 9.786c0 .891.271 1.65.76 2.214h16.562l.03-.038c.492-.632.641-1.418.648-2.125.123-1.327-.304-2.47-1.097-3.279a4.1 4.1 0 0 0-2.22-1.154c-.43-1.194-1.444-2.102-2.897-2.262-.913-.101-1.819.19-2.525.652M9 8a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H10a1 1 0 0 1-1-1m4 0a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H14a1 1 0 0 1-1-1m-7 2a1 1 0 0 1 1-1h.01a1 1 0 0 1 0 2H7a1 1 0 0 1-1-1m5 0a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1m5 0a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H17a1 1 0 0 1-1-1"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M20.613 14.622c.115-.309-.125-.622-.454-.622H3.841c-.33 0-.569.313-.454.622.769 2.075 2.462 3.742 4.59 4.674V20a1 1 0 0 0 1 1h6.046a1 1 0 0 0 1-1v-.704c2.128-.932 3.821-2.599 4.59-4.674"
    />
  </BaseIcon>
));
export default SvgBowlRice;
