import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const ListOrdored = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 21 18"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M9.5 4h9.563a1 1 0 1 0 0-2H9.5a1 1 0 0 0 0 2m9.563 4H9.5a1 1 0 0 0 0 2h9.563a1 1 0 1 0 0-2m0 6H9.5a1 1 0 0 0 0 2h9.563a1 1 0 0 0 0-2M6.5 16H4.49l.871-.657a1.03 1.03 0 0 0 .121-.09A3 3 0 1 0 .5 13a1 1 0 1 0 2 0 1 1 0 1 1 1.7.713L.9 16.2a1 1 0 0 0 .6 1.8h5a1 1 0 0 0 0-2m-5-10a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2h-1V1c0-.011-.006-.02-.006-.03a.961.961 0 0 0-.04-.2A1 1 0 0 0 4.4.582c0-.01 0-.02-.008-.03a1.064 1.064 0 0 0-.087-.111.985.985 0 0 0-.135-.172 1 1 0 0 0-.153-.1 1.016 1.016 0 0 0-.17-.1.943.943 0 0 0-.205-.041A.908.908 0 0 0 3.5 0c-.011 0-.02 0-.031.006a1.06 1.06 0 0 0-.191.038 1.047 1.047 0 0 0-.2.053c-.009 0-.02 0-.029.008l-2 1a1 1 0 1 0 .894 1.789l.557-.276V6z"
    />
  </svg>
);

const ForwardRef = forwardRef(ListOrdored);
export default ForwardRef;
