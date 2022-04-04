import { Plugin } from 'vite'
import { resolve } from 'path'

const r = (s: string) => resolve(__dirname, s)

export function ViteSrcPlugin(): Plugin {
  return {
    name: 'vite-plugin-src',
    config: () => ({
      root: 'src',
      resolve: {
        alias: {
          '@': r('src'),
        },
      },
      publicDir: r('public'),
      build: {
        emptyOutDir: true,
        outDir: r('dist'),
      },
    }),
  }
}
