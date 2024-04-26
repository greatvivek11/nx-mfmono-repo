import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'todos',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
