// vite.config.js
export default {
    root: './', // Diretório raiz
    build: {
      outDir: 'dist', // Diretório de saída
      rollupOptions: {
        output: {
          entryFileNames: '[name].js', // Gera arquivos JS diretamente em 'dist'
          chunkFileNames: '[name].js', // Gera chunks JS diretamente em 'dist'
          assetFileNames: ({ name }) => {
            if (name && name.endsWith('.css')) {
              return '[name].css'; // Gera arquivos CSS diretamente em 'dist'
            }
            return '[name].[ext]'; // Gera outros assets diretamente em 'dist'
          },
        },
      },
      server: {
        open: true, // Abre automaticamente o navegador ao iniciar o servidor
      },
    },
  };
  