function template(variables, { tpl }) {
  return tpl`
import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const ${variables.componentName} = forwardRef<SVGSVGElement, PropsWithoutRef<FlowbiteIconProps>>((props, ref) => (
  ${variables.jsx}
));

export default ${variables.componentName};
`;
}

module.exports = template;
