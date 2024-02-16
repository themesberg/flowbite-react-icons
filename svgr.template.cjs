function template(variables, { tpl }) {
  // TODO: replace `<svg>` with `<BaseIcon>`

  // variables.jsx.openingElement.name = "svg";
  // variables.jsx.closingElement.name = "svg";

  // console.log(JSON.stringify(variables.jsx, null, 2));

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
