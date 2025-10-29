import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Permet les connexions externes
    port: 3000, // Port par défaut
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      '639234b2897df993c73df95588f18000.serveo.net', // Ajoute le host Serveo
      '.serveo.net', // Permet tous les sous-domaines serveo.net
      '.ngrok.io', // Au cas où vous utiliseriez ngrok plus tard
      '.tunnel.me',
      'reproductive-animals-front-ends.trycloudflare.com' // Autres services de tunnel
    ]
  }
})
