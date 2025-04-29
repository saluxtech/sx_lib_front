import type { Preview } from "@storybook/angular";
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
import { provideHttpClient } from "@angular/common/http";
import { ApplicationConfig } from "@angular/core";
setCompodocJson(docJson);

export const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  }

};

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient()],
};