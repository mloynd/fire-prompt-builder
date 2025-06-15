import { defineConfig } from 'vite'

export default defineConfig(async () => {
  const react = await import('@vitejs/plugin-react').then(m => m.default)
  return {
    plugins: [react()]
  }
})
