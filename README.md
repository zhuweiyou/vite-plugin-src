# ~~vite-plugin-src~~ [move to vite-plugin-mp](https://github.com/zhuweiyou/vite-plugin-mp)

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
