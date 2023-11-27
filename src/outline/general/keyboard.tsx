import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const Keyboard = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 20 14"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M6.5 9.5v-1a1 1 0 0 0-1 1zm7 0h1a1 1 0 0 0-1-1zm0 1v1a1 1 0 0 0 1-1zm-7 0h-1a1 1 0 0 0 1 1zM4 4V3H3v1zm0 .01H3v1h1zm.01 0v1h1v-1zm0-.01h1V3h-1zM4 7V6H3v1zm0 .01H3v1h1zm.01 0v1h1v-1zm0-.01h1V6h-1zM4 10V9H3v1zm0 .01H3v1h1zm.01 0v1h1v-1zm0-.01h1V9h-1zM7 4V3H6v1zm0 .01H6v1h1zm.01 0v1h1v-1zm0-.01h1V3h-1zM7 7V6H6v1zm0 .01H6v1h1zm.01 0v1h1v-1zm0-.01h1V6h-1zM10 4V3H9v1zm0 .01H9v1h1zm.01 0v1h1v-1zm0-.01h1V3h-1zM10 7V6H9v1zm0 .01H9v1h1zm.01 0v1h1v-1zm0-.01h1V6h-1zM13 4V3h-1v1zm0 .01h-1v1h1zm.01 0v1h1v-1zm0-.01h1V3h-1zM13 7V6h-1v1zm0 .01h-1v1h1zm.01 0v1h1v-1zm0-.01h1V6h-1zM16 7V6h-1v1zm0 .01h-1v1h1zm.01 0v1h1v-1zm0-.01h1V6h-1zM16 10V9h-1v1zm0 .01h-1v1h1zm.01 0v1h1v-1zm0-.01h1V9h-1zM16 4V3h-1v1zm0 .01h-1v1h1zm.01 0v1h1v-1zm0-.01h1V3h-1zM2 2h16V0H2zm16 0h2a2 2 0 0 0-2-2zm0 0v10h2V2zm0 10v2a2 2 0 0 0 2-2zm0 0H2v2h16zM2 12H0a2 2 0 0 0 2 2zm0 0V2H0v10zM2 2V0a2 2 0 0 0-2 2zm4.5 8.5h7v-2h-7zm6-1v1h2v-1zm1 0h-7v2h7zm-6 1v-1h-2v1zM3 4v.01h2V4zm1 1.01h.01v-2H4zm1.01-1V4h-2v.01zM4.01 3H4v2h.01zM3 7v.01h2V7zm1 1.01h.01v-2H4zm1.01-1V7h-2v.01zM4.01 6H4v2h.01zM3 10v.01h2V10zm1 1.01h.01v-2H4zm1.01-1V10h-2v.01zM4.01 9H4v2h.01zM6 4v.01h2V4zm1 1.01h.01v-2H7zm1.01-1V4h-2v.01zM7.01 3H7v2h.01zM6 7v.01h2V7zm1 1.01h.01v-2H7zm1.01-1V7h-2v.01zM7.01 6H7v2h.01zM9 4v.01h2V4zm1 1.01h.01v-2H10zm1.01-1V4h-2v.01zm-1-1.01H10v2h.01zM9 7v.01h2V7zm1 1.01h.01v-2H10zm1.01-1V7h-2v.01zm-1-1.01H10v2h.01zM12 4v.01h2V4zm1 1.01h.01v-2H13zm1.01-1V4h-2v.01zm-1-1.01H13v2h.01zM12 7v.01h2V7zm1 1.01h.01v-2H13zm1.01-1V7h-2v.01zm-1-1.01H13v2h.01zM15 7v.01h2V7zm1 1.01h.01v-2H16zm1.01-1V7h-2v.01zm-1-1.01H16v2h.01zM15 10v.01h2V10zm1 1.01h.01v-2H16zm1.01-1V10h-2v.01zm-1-1.01H16v2h.01zM15 4v.01h2V4zm1 1.01h.01v-2H16zm1.01-1V4h-2v.01zm-1-1.01H16v2h.01z"
    />
  </svg>
);

const ForwardRef = forwardRef(Keyboard);
export default ForwardRef;
