"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViteSrcPlugin = void 0;
const path_1 = require("path");
const lodash_1 = require("lodash");
const r = (s) => (0, path_1.resolve)(process.cwd(), s);
function ViteSrcPlugin() {
    return {
        name: 'vite-plugin-src',
        config: c => (0, lodash_1.merge)({
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
        }, c),
    };
}
exports.ViteSrcPlugin = ViteSrcPlugin;
