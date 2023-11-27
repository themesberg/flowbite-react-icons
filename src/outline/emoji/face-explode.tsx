import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgFaceExplode = (
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
      fill="currentColor"
      d="M7.5 12.5a1 1 0 1 0 0 2zm.01 2a1 1 0 1 0 0-2zm4.99-2a1 1 0 1 0 0 2zm.01 2a1 1 0 1 0 0-2zM11.815 6a1 1 0 1 0 0 2zM14.5 7l.006-1H14.5zm-1.03-3.707-.984-.18a1 1 0 0 0 1.505 1.034l-.521-.854ZM13.5 3l1 .023v-.019zM10 1.69l-.757.653a1 1 0 0 0 1.514 0zM6.5 3l-1 .004v.02zm.03.293-.521.854a1 1 0 0 0 1.505-1.034l-.984.18ZM5.5 7V6h-.006zm3.388 1a1 1 0 0 0 0-2zm10.084 1.574.998-.066a1 1 0 0 0-1.962-.2zm-1.74 1.326v-1h-.003l.003 1m-1.811-1.326.954-.3a1 1 0 0 0-1.907-.003l.953.303m-3.621 0 .953-.303a1 1 0 0 0-1.918.04l.965.263ZM10.051 10.9l.007-1h-.008zm-1.87-1.326.944-.33a1 1 0 0 0-1.913.082zM6.46 10.9l.007-1h-.006l-.001 1ZM4.555 9.574l.937-.348a1 1 0 0 0-1.89.046l.953.302ZM2.74 10.9l.002-1H2.74zM1 9.574l.964-.265A1 1 0 0 0 0 9.574zM1 10H0zm9 9v-1zm9-9h1c0-.022 0-.044-.002-.066zm-8 6v1h1v-1zm-2 0H8v1h1zm-1.5-1.5h.01v-2H7.5zm5 0h.01v-2h-.01zM11.815 8H14.5V6h-2.685zm2.679 0a3 3 0 0 0 1.339-.306l-.88-1.796a1 1 0 0 1-.447.102zm1.339-.306a3 3 0 0 0 1.062-.871l-1.589-1.215a1 1 0 0 1-.354.29l.881 1.796Zm1.062-.871a3 3 0 0 0 .563-1.254l-1.964-.38a.999.999 0 0 1-.188.419l1.59 1.215Zm.563-1.254a3 3 0 0 0-.055-1.372l-1.927.535a1 1 0 0 1 .018.458l1.964.38Zm-.055-1.372a3 3 0 0 0-.661-1.204L15.255 4.33a1 1 0 0 1 .22.401l1.928-.535Zm-.661-1.204a3 3 0 0 0-1.129-.784l-.734 1.86a1 1 0 0 1 .376.262l1.487-1.338m-1.129-.784a3 3 0 0 0-1.359-.198l.172 1.993a1 1 0 0 1 .453.066l.734-1.86Zm-1.359-.198a3 3 0 0 0-1.305.428l1.042 1.708a1 1 0 0 1 .435-.143l-.172-1.993Zm.2 1.462c.027-.149.042-.299.046-.45l-2-.046a.885.885 0 0 1-.014.136l1.968.36m.046-.469a2.992 2.992 0 0 0-.53-1.712l-1.646 1.136a.992.992 0 0 1 .176.568l2 .008Zm-.53-1.712A2.992 2.992 0 0 0 12.557.189l-.701 1.873c.19.072.353.2.468.366l1.646-1.136ZM12.557.189a2.992 2.992 0 0 0-1.79-.096l.495 1.937a.992.992 0 0 1 .594.032l.7-1.873Zm-1.79-.096a2.992 2.992 0 0 0-1.524.944l1.514 1.306a.992.992 0 0 1 .505-.313L10.767.093Zm-.01.944A2.992 2.992 0 0 0 9.233.093L8.738 2.03c.196.05.372.16.505.313zM9.233.093a2.992 2.992 0 0 0-1.79.096l.701 1.873a.992.992 0 0 1 .594-.032L9.233.093m-1.79.096A3 3 0 0 0 6.03 1.292l1.646 1.136a.992.992 0 0 1 .468-.366L7.444.19ZM6.03 1.292a2.992 2.992 0 0 0-.53 1.712l2-.008c0-.203.06-.401.176-.568zM5.5 3.023c.004.151.02.301.046.45l1.968-.36a.877.877 0 0 1-.014-.136zm1.551-.584a3 3 0 0 0-1.305-.428l-.172 1.993a1 1 0 0 1 .435.143L7.05 2.439Zm-1.305-.428a3 3 0 0 0-1.36.198l.735 1.86a1 1 0 0 1 .453-.065l.172-1.993Zm-1.36.198a3 3 0 0 0-1.128.784L4.745 4.33a1 1 0 0 1 .376-.261l-.734-1.86Zm-1.128.784a3 3 0 0 0-.66 1.204l1.926.535a1 1 0 0 1 .22-.401L3.259 2.993Zm-.66 1.204a3 3 0 0 0-.056 1.372l1.964-.38a1 1 0 0 1 .018-.457l-1.927-.535Zm-.056 1.372a3 3 0 0 0 .563 1.254l1.589-1.215a1 1 0 0 1-.188-.418l-1.964.38Zm.563 1.254a3 3 0 0 0 1.062.87l.88-1.795a1 1 0 0 1-.353-.29l-1.59 1.215Zm1.062.87A3 3 0 0 0 5.507 8l-.013-2a1 1 0 0 1-.446-.102l-.881 1.796ZM5.5 8h3.388V6H5.5zm12.508 1.309a.805.805 0 0 1-.288.426l1.212 1.591a2.804 2.804 0 0 0 1.004-1.487zm-.288.426a.805.805 0 0 1-.488.165v2c.614 0 1.211-.202 1.7-.574l-1.212-1.59Zm-.491.165a.892.892 0 0 1-.53-.172l-1.181 1.613c.498.365 1.1.56 1.717.559l-.006-2Zm-.53-.172a.892.892 0 0 1-.324-.453l-1.908.598a2.892 2.892 0 0 0 1.05 1.468L16.7 9.728Zm-2.23-.457a.9.9 0 0 1-.327.453l1.18 1.615a2.9 2.9 0 0 0 1.052-1.462l-1.906-.606Zm-.327.453a.9.9 0 0 1-.531.174v2a2.9 2.9 0 0 0 1.711-.56l-1.18-1.614Zm-.531.174a.9.9 0 0 1-.532-.174L11.9 11.34a2.9 2.9 0 0 0 1.712.559v-2Zm-.532-.174a.9.9 0 0 1-.326-.453l-1.906.606A2.9 2.9 0 0 0 11.9 11.34l1.18-1.615Zm-2.244-.413a.8.8 0 0 1-.288.427l1.208 1.593a2.8 2.8 0 0 0 1.01-1.494l-1.93-.526m-.288.427a.8.8 0 0 1-.489.162l-.014 2a2.8 2.8 0 0 0 1.711-.569l-1.208-1.593m-.497.162a.98.98 0 0 1-.567-.18l-1.157 1.63a2.98 2.98 0 0 0 1.726.55l-.002-2Zm-.567-.18a.98.98 0 0 1-.358-.476l-1.888.66a2.98 2.98 0 0 0 1.09 1.447l1.156-1.632Zm-2.27-.394a.763.763 0 0 1-.274.415l1.22 1.585c.49-.377.838-.906.99-1.504l-1.937-.496Zm-.274.415a.763.763 0 0 1-.472.159l-.014 2a2.763 2.763 0 0 0 1.706-.574L6.94 9.74ZM6.46 9.9c-.21 0-.417-.065-.59-.186l-1.14 1.642a3.036 3.036 0 0 0 1.73.544l.002-2Zm-.59-.186a1.035 1.035 0 0 1-.379-.488l-1.874.696c.215.58.603 1.08 1.11 1.434zM3.6 9.272a.9.9 0 0 1-.326.455l1.18 1.615a2.9 2.9 0 0 0 1.053-1.466l-1.906-.604Zm-.326.455a.9.9 0 0 1-.533.173l-.004 2a2.9 2.9 0 0 0 1.717-.558l-1.18-1.615ZM2.74 9.9a.805.805 0 0 1-.488-.165L1.04 11.326a2.805 2.805 0 0 0 1.7.574zm-.488-.165a.805.805 0 0 1-.288-.426l-1.928.53a2.805 2.805 0 0 0 1.004 1.487l1.212-1.59ZM0 9.574V10h2v-.426zM0 10a10 10 0 0 0 2.929 7.071l1.414-1.414A8 8 0 0 1 2 10zm2.929 7.071A10 10 0 0 0 10 20v-2a8 8 0 0 1-5.657-2.343L2.93 17.07ZM10 20a10 10 0 0 0 7.071-2.929l-1.414-1.414A8 8 0 0 1 10 18zm7.071-2.929A10 10 0 0 0 20 10h-2a8 8 0 0 1-2.343 5.657zm2.927-7.137-.028-.426-1.996.132.028.426 1.996-.132m-9.183-3.919v3.228h2V6.015h-2ZM7.228 7v2.28h2V7zM10 16a.567.567 0 0 1-.052.25.334.334 0 0 1-.079.106c-.06.053-.057.003.131.003v-2c-1.183 0-2 .756-2 1.641zm0 .36c.16 0 .168.043.122.003a.281.281 0 0 1-.062-.084.482.482 0 0 1-.036-.093A.693.693 0 0 1 10 16h2c0-.864-.834-1.64-2-1.64zM11 15H9v2h2z"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgFaceExplode);
export default ForwardRef;
