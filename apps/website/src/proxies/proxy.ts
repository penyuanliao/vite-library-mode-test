import { ProxyOptions } from 'vite';

const proxy: Record<string, ProxyOptions> = {
    '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/\/api/, '')
    }
};

export default proxy;

export { proxy };
