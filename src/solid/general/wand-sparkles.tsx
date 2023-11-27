import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgWandSparkles = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 22 21"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M12.356 5.435 1.938 16.384a.5.5 0 0 0 .018.707l2.9 2.757a.5.5 0 0 0 .706-.018L15.978 8.882zm7.681-.819a.5.5 0 0 0-.018-.706l-2.9-2.757a.5.5 0 0 0-.707.017l-2.68 2.817 3.622 3.446zm-2.89 12.233-1 .025-.024-1a1 1 0 1 0-2 .05l.025 1-1 .024a1 1 0 0 0 .05 2l1-.025.025 1a1 1 0 0 0 2-.05l-.025-1 1-.024a1 1 0 0 0-.05-2zM2.953 9.2l.025 1a1 1 0 0 0 2-.05l-.025-1 1-.025a1 1 0 1 0-.05-2l-1 .025-.025-1a1 1 0 0 0-2 .049l.025 1-1 .025a1 1 0 0 0 .05 2l1-.024Zm15.07 2.626-2 .05.05 2 2-.05-.05-2M11.752.978l-2 .05.05 2 2-.05-.05-2m-2.95 2.075-2 .05.05 1.999 2-.05-.05-2ZM5.753 1.127l-2 .05.05 2 2-.05-.05-2Zm15.194 7.625-2 .05.05 2 2-.05-.05-2m.125 4.998-2 .05.05 2 2-.05-.05-2"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgWandSparkles);
export default ForwardRef;
