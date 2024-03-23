# flowbite-react-icons

Official React package of [Flowbite Icons](https://flowbite.com/icons/).

## Installation

```bash
# npm
npm i flowbite-react-icons

# yarn
yarn add flowbite-react-icons

# pnpm
pnpm add flowbite-react-icons

# bun
bun add flowbite-react-icons
```

## Usage

The icons are separated into `outline` and `solid` endpoints to enable having a one-to-one parity with the svg file naming convention.

### Outline

```tsx
// outline

import { AngleDown } from "flowbite-react-icons/outline";

function Component() {
  return <AngleDown />;
}
```

### Solid

```tsx
// solid

import { AngleDown } from "flowbite-react-icons/solid";

function Component() {
  return <AngleDown />;
}
```

## Provider

`FlowbiteIcons` is the context provider that extends the `FlowbiteIconProps` interface and is used to set a global config for all icons that it wraps.

### Usage

```tsx
import { FlowbiteIcons } from "flowbite-react-icons";
import {
  AngleDown,
  AngleLeft,
  AngleRight,
  AngleUp,
} from "flowbite-react-icons/outline";

function Component() {
  return (
    // all will have 48px `width` and `height`
    <FlowbiteIcons size={48}>
      <AngleDown />
      <AngleLeft />
      <AngleRight />
      <AngleUp />
    </FlowbiteIcons>
  );
}
```

### Nesting

`FlowbiteIcons` context provider can be nested and it inherits values from parent contexts, allowing easy decoupled composability.

```tsx
import { FlowbiteIcons } from "flowbite-react-icons";
import { AngleDown } from "flowbite-react-icons/outline";

function Component() {
  return (
    <FlowbiteIcons size={48}>
      <AngleDown /> {/* [width, height] = 48 */}
      <FlowbiteIcons color="red">
        <AngleDown /> {/* [width, height] = 48; color = red; */}
      </FlowbiteIcons>
    </FlowbiteIcons>
  );
}
```

### Props priority

Inline props take precedence over what is provided by the `FlowbiteIcons` context provider.

```tsx
import { FlowbiteIcons } from "flowbite-react-icons";
import { AngleDown } from "flowbite-react-icons/outline";

function Component() {
  return (
    <FlowbiteIcons size={48}>
      <AngleDown /> {/* [width, height] = 48 */}
      <FlowbiteIcons size={16}>
        <AngleDown /> {/* [width, height] = 16 */}
      </FlowbiteIcons>
    </FlowbiteIcons>
  );
}
```

Note: `width` and `height` also take precedence over `size` prop.

```tsx
import { FlowbiteIcons } from "flowbite-react-icons";
import { AngleDown } from "flowbite-react-icons/outline";

function Component() {
  return (
    <FlowbiteIcons size={48}>
      <AngleDown /> {/* [width, height] = 48 */}
      <FlowbiteIcons height={16}>
        <AngleDown /> {/* width = 48, height = 16 */}
      </FlowbiteIcons>
    </FlowbiteIcons>
  );
}
```

Override with inline icon props:

```tsx
import { FlowbiteIcons } from "flowbite-react-icons";
import { AngleDown } from "flowbite-react-icons/outline";

function Component() {
  return (
    <FlowbiteIcons size={48}>
      <AngleDown /> {/* [width, height] = 48 */}
      <AngleDown size={16} /> {/* [width, height] = 16 */}
    </FlowbiteIcons>
  );
}
```

## SSR (Server-side rendering)

All icons are server-ready including `FlowbiteIcons` context provider. Values set in `FlowbiteIcons` will be both **rendered on the server and on the client** avoiding client-side hydration warning (eg: Next.js issue).

`FlowbiteIcons` is a polymorphic context allowing it to run both on server and client with the same data.

## Bring your icon

Need more custom SVG icons but don't want to lose the `FlowbiteIcons` context provider powers as well as all your global config settings?

=> `BaseIcon` component is also exposed giving access to the `FlowbiteIcons` context provider values.

Create

```tsx
// circle-user-icon.tsx

import { BaseIcon } from "flowbite-react-icons";

export function CircleUserIcon() {
  return (
    <BaseIcon
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="10" r="3" />
      <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
    </BaseIcon>
  );
}
```

Usage

```tsx
// page.tsx

import { FlowbiteIcons } from "flowbite-react-icons";
import { CircleUserIcon } from "./circle-user-icon";

function Component() {
  return (
    <FlowbiteIcons size={48}>
      <CircleUserIcon />
    </FlowbiteIcons>
  );
}
```

## Default values

`BaseIcon` applies the following default values to props:

| name    | value                      |
| ------- | -------------------------- |
| xmlns   | http://www.w3.org/2000/svg |
| viewBox | 0 0 24 24                  |

## Types

```ts
export interface FlowbiteIconProps extends SVGProps<SVGSVGElement> {
  /**
   * Sets both `width` and `height`
   *
   * @default 24
   */
  size?: number;
}
```
