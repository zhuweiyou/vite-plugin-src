"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViteSrcPlugin = void 0;
const path_1 = require("path");
const r = (s) => (0, path_1.resolve)(__dirname, s);
function ViteSrcPlugin() {
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
    };
}
exports.ViteSrcPlugin = ViteSrcPlugin;
