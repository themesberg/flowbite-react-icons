import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgPenNib = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 21 20"
    ref={ref}
    {...props}
  >
    <g fill="currentColor">
      <path d="M20.168 6.136 14.325.293a1 1 0 0 0-1.414 0l-1.445 1.444a1 1 0 0 0 0 1.414l5.844 5.843a1 1 0 0 0 1.414 0l1.444-1.444a1 1 0 0 0 0-1.414m-4.205 2.927L11.4 4.5a1 1 0 0 0-1-.25L4.944 5.9a1 1 0 0 0-.652.624L.518 17.206a1 1 0 0 0 .236 1.04l.023.023 6.606-6.606a2.616 2.616 0 1 1 3.65 1.304 2.613 2.613 0 0 1-2.233.108l-6.609 6.609.023.023a1 1 0 0 0 1.04.236l10.682-3.773a1.001 1.001 0 0 0 .624-.653l1.653-5.457a1 1 0 0 0-.25-.997Z" />
      <path d="M10.233 11.1a.614.614 0 1 0-.867-.868.614.614 0 0 0 .867.868" />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgPenNib);
export default ForwardRef;
