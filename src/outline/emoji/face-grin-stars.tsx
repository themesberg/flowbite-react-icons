import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgFaceGrinStars = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    ref={ref}
    {...props}
  >
    <path
      fill="#2F3039"
      d="m4.985 10.995.72-.694a1 1 0 0 0-1.72.694h1Zm10.034 0h1a1 1 0 0 0-1.694-.72l.694.72M7.005 7l.955-.295-.955-3.092-.955 3.092.955.295m.001.004-.955.295.218.705h.737v-1m.004 0 .607.794 2.35-1.794H7.01zm-.003.002L6.4 6.212l-.554.423.205.666zm.001.004-.607.795 2.486 1.9-.923-2.99-.956.295Zm-.003-.002.607-.795-.607-.464-.607.464.607.795m-.003.002-.955-.295-.924 2.99 2.486-1.9-.607-.795Zm.001-.004.955.295.206-.666-.554-.423-.607.794ZM7 7.004v-1H4.044l2.349 1.794zm.004 0v1h.737l.218-.705zM13.005 7l.955-.295-.955-3.092-.955 3.092zm.001.004-.955.295.217.705h.738zm.004 0 .607.794 2.349-1.794H13.01zm-.003.002-.607-.794-.554.423.205.666zm.001.004-.607.795 2.486 1.899-.923-2.99-.956.296Zm-.003-.002.607-.795-.607-.464-.607.464.607.795m-.003.002-.956-.295-.923 2.989 2.486-1.9-.607-.794Zm.001-.004.956.295.206-.666-.555-.423-.607.794ZM13 7.004v-1h-2.956l2.349 1.794zm.004 0v1h.737l.218-.705zM18 10a8 8 0 0 1-8 8v2c5.523 0 10-4.477 10-10zm-8 8a8 8 0 0 1-8-8H0c0 5.523 4.477 10 10 10zm-8-8a8 8 0 0 1 8-8V0C4.477 0 0 4.477 0 10zm8-8a8 8 0 0 1 8 8h2c0-5.523-4.477-10-10-10zm-5.735 9.69c.601.622 1.578.962 2.504 1.16.978.21 2.114.304 3.23.298 1.116-.006 2.25-.112 3.225-.323.925-.2 1.89-.531 2.49-1.11l-1.39-1.44c-.173.168-.66.408-1.523.595-.813.176-1.804.273-2.813.278-1.008.005-1.996-.082-2.8-.254-.857-.183-1.322-.425-1.484-.593zm9.754-.695c0 .368-.283 1.325-1.012 2.207-.692.838-1.692 1.492-3.038 1.492v2c2.08 0 3.604-1.037 4.58-2.218.94-1.14 1.47-2.532 1.47-3.48h-2Zm-4.05 3.699c-1.353 0-2.334-.638-3.003-1.456-.702-.858-.981-1.815-.981-2.243h-2c0 .978.5 2.37 1.433 3.51.967 1.18 2.479 2.189 4.55 2.189v-2Zm-3.92-7.399.002.004 1.91-.59v-.004l-1.911.59Zm.957.709h.004v-2h-.004v2m-.603-1.795-.003.003L7.614 7.8l.003-.003L6.403 6.21ZM6.05 7.301l.002.004 1.91-.59V6.71L6.05 7.3Zm1.564-1.086-.003-.002-1.214 1.59.003.002 1.214-1.59Zm-1.217-.002-.003.002 1.214 1.59.003-.003-1.214-1.589Zm1.56 1.092v-.004l-1.91-.59-.002.004 1.911.59ZM7.61 6.212l-.003-.003L6.393 7.8l.003.002L7.61 6.21ZM7 8.004h.004v-2H7zm.96-.705v-.004l-1.91-.59-.002.003L7.96 7.3Zm4.09-.004V7.3l1.912-.59-.002-.004-1.91.59Zm.956.709h.004v-2h-.004zm-.603-1.795-.003.003L13.614 7.8l.003-.003-1.214-1.589Zm-.352 1.092.002.004 1.91-.59V6.71l-1.912.59Zm1.564-1.086-.003-.002-1.214 1.59.003.002zm-1.217-.002-.003.002 1.214 1.59.003-.003-1.214-1.59Zm1.56 1.092v-.004l-1.91-.59-.002.004 1.911.59Zm-.348-1.093-.003-.003-1.214 1.59.003.002 1.214-1.59ZM13 8.004h.004v-2H13zm.96-.705v-.004l-1.91-.59-.002.003 1.911.591Z"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgFaceGrinStars);
export default ForwardRef;
