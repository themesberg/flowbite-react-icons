import type { Meta, StoryObj } from "@storybook/react";
import { ComponentProps, useState } from "react";
import * as outline from "~/icons/outline";
import * as solid from "~/icons/solid";
import { FlowbiteIcons } from "~/index";

const meta = {
  title: "Icons",
  args: {
    color: "currentColor",
    size: 24,
    strokeWidth: 2,
  },
  argTypes: {
    color: {
      name: "Color",
      control: {
        type: "color",
      },
    },
    size: {
      name: "Size",
      control: {
        type: "range",
        min: 16,
        max: 48,
      },
    },
    strokeWidth: {
      name: "Stroke width",
      control: {
        type: "range",
        min: 0.5,
        max: 3,
        step: 0.1,
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const OUTLINE = Object.entries(outline).map(([name, icon]) => ({
  name,
  icon,
  style: "outline",
}));
const SOLID = Object.entries(solid).map(([name, icon]) => ({
  name,
  icon,
  style: "solid",
}));
const ICONS = OUTLINE.concat(SOLID).sort((a, b) => {
  const x = a.name.toLowerCase();
  const y = b.name.toLowerCase();
  return x < y ? -1 : x > y ? 1 : 0;
});

export const All: Story = {
  render: (args) => <Icons {...args} />,
};

function Icons(args: object) {
  const [search, setSearch] = useState("");

  const icons = search.trim().length
    ? ICONS.filter(({ name }) =>
        name.toLowerCase().includes(search.trim().toLowerCase()),
      )
    : ICONS;

  return (
    <FlowbiteIcons {...args}>
      <div className="grid gap-8">
        <SearchInput value={search} onChange={setSearch} />
        <Grid>
          {icons.map(({ name, style, icon: Icon }) => (
            <Container key={`${style}-${name}`} title={name}>
              <Card>
                <Icon />
              </Card>
              <Name>{name}</Name>
            </Container>
          ))}
        </Grid>
      </div>
    </FlowbiteIcons>
  );
}

function SearchInput({
  value,
  onChange,
}: {
  value: string;
  onChange(value: string): void;
}) {
  return (
    <div className="relative grid items-center">
      <input
        className="rounded-lg border p-2 pl-10 text-sm dark:border-zinc-700 dark:bg-zinc-800"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={`Search from ${ICONS.length} icons...`}
      />
      <outline.Search
        className="absolute left-3 text-zinc-400"
        size={20}
        strokeWidth={2}
      />
    </div>
  );
}

function Grid(props: ComponentProps<"div">) {
  return (
    <div
      className="grid grid-cols-[repeat(auto-fill,_minmax(100px,_1fr))] gap-6"
      {...props}
    />
  );
}

function Container(props: ComponentProps<"div">) {
  return <div className="flex flex-col gap-2" {...props} />;
}

function Card(props: ComponentProps<"div">) {
  return (
    <div
      className="flex h-24 flex-col items-center justify-center gap-2 rounded-lg border dark:border-zinc-700"
      {...props}
    />
  );
}

function Name(props: ComponentProps<"span">) {
  return (
    <span
      className="break-all text-center text-sm text-zinc-500 dark:text-zinc-400"
      {...props}
    />
  );
}
