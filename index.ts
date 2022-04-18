import { Plugin } from 'vite'
import { resolve } from 'path'
import { merge } from 'lodash'

const r = (s: string) => resolve(process.cwd(), s)

export function ViteSrcPlugin(): Plugin {
  return {
    name: 'vite-plugin-src',
    config: c =>
      merge(
        {
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
        },
        c
      ),
  }
}
