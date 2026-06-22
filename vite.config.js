import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    base: '',
    server: {
        fs: {
            strict: false
        }
    },
    resolve: {
        alias: {
            path: 'path-browserify',
            fs: resolve(__dirname, './fs-stub.ts')
        }
    },
    define: {
        __dirname: '""',
        'global': {},
        'process.cwd': '() => "/"',
        'process.env': '{}'
    },
    // @ts-ignore
    slidev: {
        routerMode: 'hash',
    }
})