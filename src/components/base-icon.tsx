import { forwardRef, useMemo } from "react";
import { getStore } from "../store";
import type { FlowbiteIconProps } from "../types";

export const BaseIcon = forwardRef<SVGSVGElement, FlowbiteIconProps>(
  (props, ref) => {
    const {
      width,
      height,
      // custom
      size,
      // rest
      ...otherProps
    } = props;

    const theme = getStore();

    const mergedProps = useMemo(() => {
      const _props: typeof otherProps = { ...otherProps };

      for (const _key in theme) {
        const key = _key as keyof typeof theme;

        if (key === "size") continue;

        // @ts-expect-error: too complex to represent
        _props[key] = _props[key] ?? theme[key];
      }

      return _props;
    }, [otherProps, theme]);

    return (
      <svg
        ref={ref}
        width={width ?? size ?? theme.width ?? theme.size}
        height={height ?? size ?? theme.height ?? theme.size}
        {...mergedProps}
      />
    );
  },
);
