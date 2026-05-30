import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        {
            name: 'force-close',
            closeBundle() {
                setTimeout(() => process.exit(0), 100);
            }
        }
    ],
    build: {
        chunkSizeWarningLimit: 1000,
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['react', 'react-dom', 'react-router-dom'],
                    animation: ['framer-motion', 'gsap'],
                    icons: ['lucide-react'],
                    charts: ['recharts']
                }
            }
        }
    }
})
