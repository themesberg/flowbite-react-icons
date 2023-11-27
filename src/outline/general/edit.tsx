import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const Edit = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 20 18"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 13v2.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h6.616m5.521-.156 2.852 2.852m1.253-4.105a2.017 2.017 0 0 1 0 2.852l-7.844 7.844L7 13l.713-3.565 7.844-7.844a2.016 2.016 0 0 1 2.852 0Z"
    />
  </svg>
);

const ForwardRef = forwardRef(Edit);
export default ForwardRef;
