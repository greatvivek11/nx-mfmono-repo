# Setup

## Structure
```
├── README.md
├── apps
│   ├── core
│   ├── core-e2e
│   ├── todos
│   └── todos-e2e
├── biome.jsonc
├── dist
│   ├── apps
│   ├── core
│   └── todos
├── docs
│   └── Setup.md
├── jest.config.ts
├── jest.preset.js
├── nx-cloud.env
├── nx.json
├── package.json
├── packages
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
└── tsconfig.base.json

12 directories, 11 files
```

### Pnpm
- `npm install -g pnpm`
- `pnpm i` - use `pnpm i -f` if required.

### Clean dir structure
- See [Vscode settings](./../.vscode/settings.json) for hide/show files/folders in current dir.
- Run `ls -la` to see all files/folders (incl. hidden)

### Apps
- All apps go under `apps`
- `Cmd + Shift + P` --> `nx generate` --> create app -> choose `apps/{your-app}`

### Packages
- all lib and shared modules go under packages.

### Docs
- all Docs go under `docs`