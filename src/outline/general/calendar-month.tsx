import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const CalendarMonth = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 20 20"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M6 1a1 1 0 0 0-2 0zM4 4a1 1 0 0 0 2 0zm7-3a1 1 0 1 0-2 0zM9 4a1 1 0 0 0 2 0zm7-3a1 1 0 1 0-2 0zm-2 3a1 1 0 1 0 2 0zM1 6a1 1 0 0 0 0 2zm18 2a1 1 0 1 0 0-2zM5 11v-1H4v1zm0 .01H4v1h1zm.01 0v1h1v-1zm0-.01h1v-1h-1zM10 11v-1H9v1zm0 .01H9v1h1zm.01 0v1h1v-1zm0-.01h1v-1h-1zM10 15v-1H9v1zm0 .01H9v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1zM15 15v-1h-1v1zm0 .01h-1v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM15 11v-1h-1v1zm0 .01h-1v1h1zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM5 15v-1H4v1zm0 .01H4v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1zM2 4h16V2H2zm16 0h2a2 2 0 0 0-2-2zm0 0v14h2V4zm0 14v2a2 2 0 0 0 2-2zm0 0H2v2h16zM2 18H0a2 2 0 0 0 2 2zm0 0V4H0v14zM2 4V2a2 2 0 0 0-2 2zm2-3v3h2V1zm5 0v3h2V1zm5 0v3h2V1zM1 8h18V6H1zm3 3v.01h2V11zm1 1.01h.01v-2H5zm1.01-1V11h-2v.01zm-1-1.01H5v2h.01zM9 11v.01h2V11zm1 1.01h.01v-2H10zm1.01-1V11h-2v.01zm-1-1.01H10v2h.01zM9 15v.01h2V15zm1 1.01h.01v-2H10zm1.01-1V15h-2v.01zm-1-1.01H10v2h.01zM14 15v.01h2V15zm1 1.01h.01v-2H15zm1.01-1V15h-2v.01zm-1-1.01H15v2h.01zM14 11v.01h2V11zm1 1.01h.01v-2H15zm1.01-1V11h-2v.01zm-1-1.01H15v2h.01zM4 15v.01h2V15zm1 1.01h.01v-2H5zm1.01-1V15h-2v.01zm-1-1.01H5v2h.01z"
    />
  </svg>
);

const ForwardRef = forwardRef(CalendarMonth);
export default ForwardRef;
