import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgFileZip = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 20"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="m15 2-1-.033V2zm0 16h-1v.033zm-.933 1v1h.037zM1.933 19l-.037 1h.037v-1M1 18l1 .033V18zM1 5.828H0h1m.586-1.414.707.707-.707-.707m2.828-2.828.707.707-.707-.707M5.828 1V0zm8.239 0 .037-1a1 1 0 0 0-.037 0zM7 1a1 1 0 0 0-2 0zM1 5a1 1 0 0 0 0 2zm7.5-2.5v-1h-1v1zm1 0h1v-1h-1zm0 1v1h1v-1zm-1 0h-1v1h1zm2 1v-1h-1v1zm1 0h1v-1h-1zm0 1v1h1v-1zm-1 0h-1v1h1zm-2 1v-1h-1v1zm1 0h1v-1h-1zm0 1v1h1v-1zm-1 0h-1v1h1zm2 1v-1h-1v1zm1 0h1v-1h-1zm0 1v1h1v-1zm-1 0h-1v1h1zm-2 1v-1h-1v1zm1 0h1v-1h-1zm0 1v1h1v-1zm-1 0h-1v1h1zm2 1v-1h-1v1zm1 0h1v-1h-1zm0 1v1h1v-1zm-1 0h-1v1h1zm-2 1v-1h-1v1zm1 0h1v-1h-1zm0 1v1h1v-1zm-1 0h-1v1h1zm2 1v-1h-1v1zm1 0h1v-1h-1zm0 1v1h1v-1zm-1 0h-1v1h1zM14 2v16h2V2zm0 16.033a.03.03 0 0 1 .009-.023l1.462 1.365c.356-.381.546-.887.528-1.408l-1.998.066Zm.009-.023a.03.03 0 0 1 .021-.01l.074 2a1.969 1.969 0 0 0 1.367-.625L14.01 18.01Zm.058-.01H1.933v2h12.134zM1.97 18a.038.038 0 0 1 .021.01L.53 19.375c.355.38.847.605 1.367.624l.074-1.998Zm.021.01a.031.031 0 0 1 .008.023l-1.998-.066a1.97 1.97 0 0 0 .528 1.408L1.99 18.01ZM2 18V5.828H0V18zM2 5.828a1 1 0 0 1 .293-.707L.879 3.707A3 3 0 0 0 0 5.827zm.293-.707 2.828-2.828L3.707.88.879 3.707 2.293 5.12Zm2.828-2.828A1 1 0 0 1 5.828 2V0a3 3 0 0 0-2.121.879L5.12 2.293ZM5.828 2h8.239V0H5.828v2Zm8.202 0a.031.031 0 0 1-.021-.01L15.47.625a1.969 1.969 0 0 0-1.367-.624l-.074 1.998Zm-.021-.01A.03.03 0 0 1 14 1.967l1.998.066A1.969 1.969 0 0 0 15.47.625L14.01 1.99ZM5 1v4h2V1zm0 4 1.414 1.414A2 2 0 0 0 7 5zm0 0v2a2 2 0 0 0 1.414-.586zm0 0H1v2h4zm3.5-1.5h1v-2h-1zm0-1v1h2v-1zm1 0h-1v2h1zm0 1v-1h-2v1zm1 2h1v-2h-1zm0-1v1h2v-1zm1 0h-1v2h1zm0 1v-1h-2v1zm-3 2h1v-2h-1zm0-1v1h2v-1zm1 0h-1v2h1zm0 1v-1h-2v1zm1 2h1v-2h-1zm0-1v1h2v-1zm1 0h-1v2h1zm0 1v-1h-2v1zm-3 2h1v-2h-1zm0-1v1h2v-1zm1 0h-1v2h1zm0 1v-1h-2v1zm1 2h1v-2h-1zm0-1v1h2v-1zm1 0h-1v2h1zm0 1v-1h-2v1zm-3 2h1v-2h-1zm0-1v1h2v-1zm1 0h-1v2h1zm0 1v-1h-2v1zm1 2h1v-2h-1zm0-1v1h2v-1zm1 0h-1v2h1zm0 1v-1h-2v1z"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgFileZip);
export default ForwardRef;
