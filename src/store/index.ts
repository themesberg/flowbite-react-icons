import type { FlowbiteIconProps } from "../types";

interface Store {
  data: FlowbiteIconProps;
}

const store: Store = {
  data: {
    size: 24,
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
