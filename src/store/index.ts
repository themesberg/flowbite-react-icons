import type { FlowbiteIconProps } from "../types";

interface Store {
  data: FlowbiteIconProps;
}

const store: Store = {
  data: {
    size: 24,
    strokeWidth: 2,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
  },
};

export function setStore(
  data: FlowbiteIconProps = {},
  options: { override?: boolean } = {},
) {
  store.data = options.override ? data : { ...store.data, ...data };
}

export function getStore(): FlowbiteIconProps {
  return { ...store.data };
}
