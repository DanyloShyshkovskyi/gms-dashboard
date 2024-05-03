import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig, loadEnv } from 'vite'

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  return defineConfig({
    plugins: [react()],
    build: {
      rollupOptions: {
        onwarn(warning, warn) {
          if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
            return
          }
          warn(warning)
        },
      },
    },
    server: {
      port: 9999,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        shared: path.resolve(__dirname, './src/shared'),
        pages: path.resolve(__dirname, './src/pages'),
        widgets: path.resolve(__dirname, './src/widgets'),
        entities: path.resolve(__dirname, './src/entities'),
        layout: path.resolve(__dirname, './src/layout'),
        'tailwind-config': './tailwind.config.js',
      },
    },
    base: process.env.VITE_APP_BASE_URL || '/',
  })
}
