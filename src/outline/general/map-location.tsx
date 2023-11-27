import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const MapLocation = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 17 21"
    ref={ref}
    {...props}
  >
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M8 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
      <path d="M13.8 12.938h-.01a7 7 0 1 0-11.465.144h-.016l.141.171c.1.127.2.251.3.371L8 20l5.13-6.248c.193-.209.373-.429.54-.659l.13-.155Z" />
    </g>
  </svg>
);

const ForwardRef = forwardRef(MapLocation);
export default ForwardRef;
