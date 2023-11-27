import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgLifeBuoy = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 21 21"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="m5.4 2.736 3.429 3.429A5.047 5.047 0 0 1 10.134 6c.356.01.71.06 1.056.147l3.41-3.412a2.32 2.32 0 0 1 .451-.344A9.889 9.889 0 0 0 10.268 1a10.02 10.02 0 0 0-5.322 1.392 2.3 2.3 0 0 1 .454.344Zm11.451 1.54-.127-.127a.5.5 0 0 0-.706 0l-2.932 2.932c.029.023.049.054.078.077.236.194.454.41.651.645.033.038.077.067.109.107l2.927-2.927a.5.5 0 0 0 0-.707Zm-2.932 9.81c-.024.03-.057.052-.081.082a4.963 4.963 0 0 1-.633.639c-.041.036-.072.083-.115.117l2.927 2.927a.5.5 0 0 0 .707 0l.127-.127a.5.5 0 0 0 0-.707l-2.932-2.931Zm-1.442-4.763a3.036 3.036 0 0 0-1.383-1.1l-.012-.007a2.955 2.955 0 0 0-1-.213H10a2.964 2.964 0 0 0-2.122.893c-.285.29-.509.634-.657 1.013l-.009.016a2.96 2.96 0 0 0-.211 1 2.99 2.99 0 0 0 .489 1.716c.009.014.022.026.032.04a3.04 3.04 0 0 0 1.384 1.1l.012.007c.318.129.657.2 1 .213.392.015.784-.05 1.15-.192.012-.005.021-.013.033-.018a3.01 3.01 0 0 0 1.676-1.7v-.007a2.89 2.89 0 0 0 0-2.207 2.868 2.868 0 0 0-.27-.515c-.007-.012-.02-.025-.03-.039Zm6.137-3.373a2.53 2.53 0 0 1-.349.447l-3.426 3.426c.112.428.166.869.161 1.311a4.87 4.87 0 0 1-.148 1.054l3.413 3.412c.132.134.249.283.347.444A9.88 9.88 0 0 0 20 11.269a9.912 9.912 0 0 0-1.386-5.319ZM14.6 19.264l-3.421-3.421c-.385.1-.781.152-1.179.157h-.135c-.356-.01-.71-.06-1.056-.147L5.4 19.265a2.503 2.503 0 0 1-.444.347A9.884 9.884 0 0 0 9.732 21H10a9.9 9.9 0 0 0 5.044-1.388 2.515 2.515 0 0 1-.444-.348ZM1.735 15.6l3.426-3.426a4.608 4.608 0 0 1-.013-2.367L1.735 6.4a2.508 2.508 0 0 1-.349-.447 9.889 9.889 0 0 0 0 10.1c.099-.164.216-.316.349-.453Zm5.101-.758a4.959 4.959 0 0 1-.651-.645c-.033-.038-.077-.067-.109-.107l-2.927 2.927a.5.5 0 0 0 0 .707l.127.127a.5.5 0 0 0 .706 0l2.932-2.933c-.029-.018-.049-.053-.078-.076m-.755-6.928c.029-.037.069-.063.1-.1a5.03 5.03 0 0 1 .6-.609c.046-.04.081-.092.128-.13L3.983 4.149a.5.5 0 0 0-.707 0l-.127.127a.5.5 0 0 0 0 .707l2.932 2.931Z"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgLifeBuoy);
export default ForwardRef;
