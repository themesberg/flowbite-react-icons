import type { Preview } from "@storybook/react";
import "./style.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      darkClass: "dark",
      lightClass: "light",
      stylePreview: true,
    },
  },
};

export default preview;
