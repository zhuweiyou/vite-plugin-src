# vite-plugin-src

set vite root directory to src and fix other directory

## Usage

```bash
npm install vite-plugin-src -D
```

```js
// vite.config.js
import { defineConfig } from 'vite'
import { ViteSrcPlugin } from 'vite-plugin-src'

export default defineConfig({
  plugins: [ViteSrcPlugin()],
})
```
